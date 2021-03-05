import React,{useEffect,useState,useRef} from 'react'
import './platform.scss'
import { Spin,Empty } from 'antd';
import {buttonState} from '@/components/type.d'
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
    const {id} = item
    switch (type) {
      case 'edit':
        editOptions(id)
        break;
      default:
        break;
    }
  }
  //* 新增操作
  const addOptions = () => {
    props.history.push('/platform/create')
  }

  //* 编辑操作
  const editOptions = (id:string) => {
    props.history.push(`/platform/edit/${id}`)
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
    </div>
  )
}

export default Platform
