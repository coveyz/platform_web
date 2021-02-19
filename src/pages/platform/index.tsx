import React,{useEffect,useState} from 'react'
import './platform.scss'
import {ButtonGroup} from '@/components'
import {buttonState,dropdownButtonState} from '@/components/type.d'
import configData from '@/pages/platform/config/platform'
import PlatformItem from './components/Item'
import { Spin,Empty } from 'antd';

const Platform = () => {
  const [platformList,setplatformList] = useState([])
  const [loading,setloading] = useState(true)

  useEffect(() => {
    getInit()
    return () => {}
  }, [])

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
        resolve(datalist)
      }, 3000);

    })
  }

  const getInit = () => {
    setloading(true)
    getDataFromFakeInrterface().then((res:any) => {
      setloading(false)
      setplatformList(res)
    })
  }
  //* ButtonGroup 事件 🐹
  const handleButtonOptions = (buttonInfo:buttonState | dropdownButtonState) => {
    console.log('parent',buttonInfo)
  }

  return (
    <div className='platformManage-frame'>
      <ButtonGroup configData={configData} handleButtonOptions={handleButtonOptions}/>

      <div className="platform-wrapper">
        {
          !loading 
          ?  platformList && platformList.length > 0 ? <PlatformItem platformList={platformList}/> : <Empty className="emptyStyle"/>
          : <Spin size="large"  className="example"/>
        }
      </div>
    </div>
  )
}

export default Platform
