import React,{useEffect,useState,useRef} from 'react'
import './platform.scss'
import { Spin,Empty,Button } from 'antd';
import config from '@/pages/platform/config/platform'
import PlatformItem from './components/Item'
import {ButtonGroup,Dialog,SearchBar} from '@/components'
import {buttonState,operationGroupDialogState} from '@/components/type.d'
import {getPlatformList,getRole,getRoleGroup,getDept} from '@/api/platform'
import {integrationData} from '@/utils/tools'


type PlatformProps = {
  history: any
}

const Platform:React.FC<PlatformProps> = (props) => {
  const childRef = useRef<any>(null)
  const [configData,setConfigData] = useState(config)
  const [platformList,setplatformList] = useState([])
  const [loading,setloading] = useState(true) 
  const [optionObj,setOptionsObj] = useState({})
  const [dialogState,setDialogState] = useState({
    visible: false,
    isOption: true,
    width: '55%',
    title: '请选择用户',
    type: ''
  })

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
        settingOptions()
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
  /** 设置选人 操作 */
  const settingOptions = () => {
    setDialogState({...dialogState,visible: true, type: 'setting'})
  }
  /** Dialog 事件 */
  const handleDialogOperation = (item: operationGroupDialogState) => {
  }

  const searchbarOperation = (type:string,data: any) => {
    childRef['current']['verification']().then((res:any) => {
      console.log('res=>',res)
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
                  <SearchBar searchbarOperation={searchbarOperation} cRef={childRef} configData={configData} optionObj={optionObj}/>
              </>
            )
          }
        }
      </Dialog>
    </div>
  )
}

export default Platform
