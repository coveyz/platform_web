import React,{useEffect,useState,useRef} from 'react'
import './platform.scss'
import { Spin,Empty,Button } from 'antd';
import config from '@/pages/platform/config/platform'
import PlatformItem from './components/Item'
import {ButtonGroup,Dialog,SearchBar,Transfer} from '@/components'
import {buttonState,operationGroupDialogState} from '@/components/type.d'
import {getPlatformList,getRole,getRoleGroup,getDept,selectedUser,userToBeSelected,saveUserOfPlatform} from '@/api/platform'
import {selectedUserState,userToBeSelectedState} from '@/api/platform/type.d'
import {integrationData} from '@/utils/tools'


type PlatformProps = {
  history: any
}

const Platform:React.FC<PlatformProps> = (props) => {
  const childRef = useRef<any>(null)
  const transferRef = useRef<any>(null)
  const [configData,setConfigData] = useState(config) //* 配置表
  const [platformList,setplatformList] = useState([]) 
  const [loading,setloading] = useState(true)  //* loading
  const [optionObj,setOptionsObj] = useState({}) //* operation
  const [dialogState,setDialogState] = useState({visible: false,isOption: true,width: '55%',title: '请选择用户',type: '',id: ''}) //* dialog
  const [targetArr,setTargetArr] = useState([]) //* 未选
  const [selectedArr,setSelectedArr] = useState([]) //* 已选

  useEffect(() => {
    getInit() 
    return () => {}
  }, [])

  //* 获取列表操作
  const getPlatformListOperation = () => {
    return new Promise(resolve => {
      const requestData = {
        clientName: '',
        clientId: ''
      }
      getPlatformList(requestData).then(res => {
        const {records} = res.data.data 
        resolve({list: records})
      })
    })
  }
  /** 角色下拉 */
  const getRoleOperation = () => {
    return new Promise(resolve => {
      const requestData = {
        name: ''
      }
      getRole(requestData).then(res => {
        const {data} = res.data
        const roleList = data.map((item:any) => {
          return {...item,text: item.name,value: item.id}
        })
        resolve({role: roleList})
      })
    })
  }
  /** 角色组下拉 */
  const getRoleGroupOperation = () => {
    return new Promise(resolve => {
      const requestData = {
        name: ''
      }
      getRoleGroup(requestData).then(res => {
        const {data} = res.data
        const roleGroupList = data.map((item:any) => {
          return {...item,text: item.name,value: item.id}
        })
        resolve({roleGroup: roleGroupList})
      })
    })
  }
  /** 机构下拉 */
  const getDepOperation = () => {
    return new Promise(resolve => {
      getDept().then(res => {
        const {data} = res.data
        resolve({dep:data})
      })
    })
  }

  const getInit = () => {
    setloading(true)
    return Promise.all([getPlatformListOperation(),getRoleOperation(),getRoleGroupOperation(),getDepOperation()]).then(res => {
      const result = integrationData(res)
      const {list} = result
      setloading(false)
      setplatformList(list)
      setOptionsObj(result) 
    })
  }


  //* ButtonGroup 事件 🐹
  const handleButtonOptions = (buttonInfo:buttonState) => {
    const {name} = buttonInfo
    switch (name) {
      case 'Add':
        addOptions()    
        break;
      default:
        break;
    }
  }
  //* 平台项 编辑/设置 操作
  const platformItemOptions = (item: any,type: string) => {
    const {id} = item
    console.log(item,type)
    switch (type) {
      case 'edit':
        editOptions(id)
        break;
      case 'setting': 
        settingOptions(id)
        break
      default:
        break;
    }
  }
  /** 新增操作 */
  const addOptions = () => {
    props.history.push('/platform/create')
  }
  /** 编辑操作 */
  const editOptions = (id:string) => {
    props.history.push(`/platform/edit/${id}`)
  }
  /** 已选人 - 机构 */
  const selecdtUserOfPlatform = (requestData: selectedUserState) => {
    return new Promise(resolve => {
      selectedUser(requestData).then(res => {
        const {data} = res.data
        console.log('已选人=>',data)
        resolve({selected: data.map((item:any) => ({...item,isCandidate: true}))})
      })
    })
  }
  /** 未选人 - 机构 */
  const notSelectUserOfPlatform = (requestData: userToBeSelectedState) => {
  return new Promise(resolve => {
      userToBeSelected(requestData).then(res => {
        const {data} = res.data
        console.log('未选人',data)
        resolve({target: data.map((item:any) => ({...item,isCandidate: false}))})
      })
  })
  }
  /** 设置选人 操作 */
  const settingOptions = (id:string) => {
    const requestData = {
      selectedUserRequestData: {personName: '',pmId: id},
      notSelectedUserRequestData: {personName: '',groupId: '',deptId: ''}
    }
    
    const {selectedUserRequestData,notSelectedUserRequestData} = requestData
    return Promise.all([selecdtUserOfPlatform(selectedUserRequestData),notSelectUserOfPlatform(notSelectedUserRequestData)]).then(res => {
      const {target,selected} = integrationData(res)
      setSelectedArr(selected)
      setTargetArr(target)      
      setDialogState({...dialogState,visible: true, type: 'setting',id: id })
    })
  }
  /** Dialog 事件 */
  const handleDialogOperation = (item: operationGroupDialogState) => {
    const {name} = item
    switch (name) {
      case 'confirm':
        confirmOpertaion()
        break;
        case 'cancel':
          console.log('cancel')
          closeSelectUserDilog()
          break
          default:
            break;
          }
    }
        
        /** dialog confire 操作 */
  const confirmOpertaion = () => {
    console.log('confirm',selectedArr)
    const requestData = {
      pmId: dialogState['id'],
      userIds: (selectedArr as string[])
    }
    console.log('requ=>',requestData)
    saveUserOfPlatform(requestData).then(res => {
      console.log('sevaeUserOfPlatform=>',res)
      closeSelectUserDilog()
    })
  }

  /** 关闭选人组件 dialog */
  const closeSelectUserDilog = () => {
    setDialogState({...dialogState,visible: false, type: '',id: ''})
  }


  /** searchbar 事件 */
  const searchbarOperation = (type:string,data: any) => {
    childRef['current']['verification']().then((res:any) => {
      const requestData = {}
      Object.keys(res).forEach(key => { 
        requestData[key] = res[key] ? res[key] : ''
      }) 
      notSelectUserOfPlatform(requestData as userToBeSelectedState).then((res:any) => {
        const {target} = res
        setTargetArr(target)      
        transferRef.current.reset(target)
      })
    })
  }

  return (
    <div className='platformManage-frame'>
      <ButtonGroup configData={configData} handleButtonOptions={handleButtonOptions}/>

      <div className="platform-wrapper">
        {
          !loading 
          ?  platformList && platformList.length > 0 ? <PlatformItem platformList={platformList} platformItemOptions={platformItemOptions}/> : <Empty className="emptyStyle"/>
          : <Spin size="large"  className="example"/>
        }
      </div>

      <Dialog dialogInfo={dialogState}>
        {
          {
            operationGroup: (
              configData.operationGroupOfDialog.map((item:operationGroupDialogState,key:number) => {
                  return (
                    <Button  type={item.type} key={key} onClick={()=> handleDialogOperation(item)}>
                      {item.title}
                    </Button>
                  )
              })
            ),
            content: (
              <>  
                  <div className="selectUser-frame">
                    <SearchBar searchbarOperation={searchbarOperation} cRef={childRef} configData={configData} optionObj={optionObj}/>
                  </div>
                  <div className="selectUser-frame">
                    <Transfer transferRef={transferRef} targetArr={targetArr} selectedArr={selectedArr} setSelected={setSelectedArr}/>
                  </div>
              </>
            )
          }
        }
      </Dialog>
    </div>
  )
}

export default Platform
