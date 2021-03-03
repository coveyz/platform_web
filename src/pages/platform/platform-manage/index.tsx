import React,{useEffect,useState,useRef} from 'react'
import './platform.scss'
import { Spin,Empty } from 'antd';
import {buttonState,dropdownButtonState,operationGroupDialogState} from '@/components/type.d'
import {getPlatformList} from '@/api/platform'
import config from '@/pages/platform/config/platform'
import {ButtonGroup} from '@/components'
import PlatformItem from './components/Item'


type PlatformProps = {
  history: any
}

const Platform:React.FC<PlatformProps> = (props) => {
  const [configData,setConfigData] = useState(config)
  const [platformList,setplatformList] = useState([])
  const [loading,setloading] = useState(true) 

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
        resolve(records)
      })
    })
  }

  const getInit = () => {
    setloading(true)
    getPlatformListOperation().then((list) => {
      setloading(false)
      setplatformList(list as [])
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
    // console.log('item=>',item,'type=>',type)
    // setDialogInfo({...dialogInfo,visible: true, title: type === 'setting'? '请选择用户': '修改平台',type: type})
  }
  //* 新增操作
  const addOptions = () => {
    console.log('新增')
    // {pathname:`/demo/${this.state.id}/${this.state.name}`}
    props.history.push('/platform/create')
    // setDialogInfo({...dialogInfo,visible: true, title: '新增平台',type: 'add'})
  }

  const deleteOption = () => {
    // setDialogInfo({...dialogInfo,visible: false})
  }

  const cancelOption = () => {
    childRef['current']['reset']()
    // setDialogInfo({...dialogInfo,visible: false})
  }

  //* 确定操作
  const confirmOption = () => {
    childRef['current']['verification']().then((res:any) => {
      console.log('confirmOption-callback',res)
      // setDialogInfo({...dialogInfo,visible: false})
    })

  }

  // const clearItemArr = () => {
  //   configData['mainData'] = configData['mainData'].map((item:any) => {
  //     item.value = Array.isArray(item.value) ? [] : ''
  //     return item
  //   })
  //   setConfigData(configData)
  // }

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
    </div>
  )
}

export default Platform
