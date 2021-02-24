import React,{useEffect,useState,useRef} from 'react'
import './platform.scss'
import {ButtonGroup,Dialog,Formdata,Transfer} from '@/components'
import {buttonState,dropdownButtonState,operationGroupDialogState} from '@/components/type.d'
import config from '@/pages/platform/config/platform'
import PlatformItem from './components/Item'
import { Spin,Empty,Button } from 'antd';
import {integrationData} from '@/utils/tools'

const Platform:React.FC = () => {
  const [configData,setConfigData] = useState(config)
  const [platformList,setplatformList] = useState([])
  const [loading,setloading] = useState(true) 
  const [optionObj,setOptionsObj] = useState({})

  const [dialogInfo,setDialogInfo] = useState({
    visible: false,
    title: '',
    type: '',
    isOption: true
  })

  useEffect(() => {
     getInit()
    return () => {}
  }, [])
  //* 假 列表数据
  const getDataFromFakeInrterface = () => {
    return new Promise(resolve => {

      setTimeout(() => {
        const datalist: any =  [
          {
            icon: 'platform',
            title: '干部选拔任用工作纪实系统'
          },
          {
            icon: 'platform',
            title: '干部监督工作联席会议系统'
          },
          {
            icon: 'platform',
            title: '经济责任审计和自然资源审计'
          },
          {
            icon: 'platform',
            title: '选人用人专项检查'
          },
          {
            icon: 'platform',
            title: '工作纪实系统'
          },
          {
            icon: 'platform',
            title: '查询分析'
          },
          {
            icon: 'platform',
            title: '干部选拔任用工作纪实系统'
          },
          {
            icon: 'platform',
            title: '干部选拔任用工作纪实系统'
          },
          {
            icon: 'platform',
            title: '干部选拔任用工作纪实系统'
          },
          {
            icon: 'platform',
            title: '干部选拔任用工作纪实系统'
          },
        ]
        resolve({list: datalist})
      }, 1000);

    })
  }
  //* 假 formdata 下拉数据等
  const getDataFromFakeInterfaceOfFormData = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        const data = [
          {
            value: 'male',
            text: 'male'
          },
          {
            value: 'female',
            text: 'female'
          },
          {
            value: 'other',
            text: 'other'
          }
        ]
        resolve({operation: {xfxs:data}})
      }, 1000);
    })

  }

  const getInit = () => {
    setloading(true)
    return Promise.all([getDataFromFakeInrterface(),getDataFromFakeInterfaceOfFormData()]).then(res => {
      // console.log('getInit',res)
      const {list,operation} = integrationData(res)
      setloading(false)
      setplatformList(list)
      setOptionsObj(operation)
    })
  }

  //* ButtonGroup 事件 🐹
  const handleButtonOptions = (buttonInfo:buttonState | dropdownButtonState) => {
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
    // console.log('item=>',item,'type=>',type)
    setDialogInfo({...dialogInfo,visible: true, title: type === 'setting'? '请选择用户': '修改平台',type: type})
  }
  //* 新增操作
  const addOptions = () => {
    setDialogInfo({...dialogInfo,visible: true, title: '新增平台',type: 'add'})
  }

  //* 平台操作 - 删除/关闭/确定
  const handlePlatformOption = (item: operationGroupDialogState) => {
    console.log('操作',item)
    const {name} = item
    switch (name) {
      case 'delete':
        deleteOption()
        break;
      case 'cancel':
        cancelOption()
        break;   
      case 'confirm':
        confirmOption()
        break;
      default:
        break;
    }
  }

  const deleteOption = () => {
    setDialogInfo({...dialogInfo,visible: false})
  }

  const cancelOption = () => {
    childRef['current']['reset']()
    setDialogInfo({...dialogInfo,visible: false})
  }

  //* 确定操作
  const confirmOption = () => {
    // console.log('confire=>',childRef)
    childRef['current']['verification']().then((res:any) => {
      console.log('confirmOption-callback',res)
      setDialogInfo({...dialogInfo,visible: false})
    })

  }

  const clearItemArr = () => {
    configData['mainData'] = configData['mainData'].map((item:any) => {
      item.value = Array.isArray(item.value) ? [] : ''
      return item
    })
    setConfigData(configData)
  }

  const childRef = useRef<any>(null)

          
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

      <Dialog dialogInfo={dialogInfo}  >
        {{
          operationGroup: (
            configData.operationGroupOfDialog.map((item:operationGroupDialogState,key:number) => {
              if (item.name === 'delete' && dialogInfo.type !== 'edit') {
                return
              } else {
                return (
                  <Button  type={item.type} key={key} onClick={()=> handlePlatformOption(item)}>
                    {item.title}
                  </Button>
                )
              }
             
            })
          ),
         
          content: dialogInfo.type === 'setting' ? <Transfer /> : <Formdata cRef={childRef} clearItemArr={clearItemArr}   configData={configData} optionObj={optionObj} />
        }}
      </Dialog>
    </div>
  )
}

export default Platform
