import React,{useEffect,useState} from 'react'
import './platform.scss'
import {ButtonGroup,Dialog} from '@/components'
import {buttonState,dropdownButtonState,operationGroupDialogState} from '@/components/type.d'
import configData from '@/pages/platform/config/platform'
import PlatformItem from './components/Item'
import { Spin,Empty,Button } from 'antd';

const Platform = () => {
  const [platformList,setplatformList] = useState([])
  const [loading,setloading] = useState(true)
  const [dialogInfo,setDialogInfo] = useState({
    visible: false,
    title: '',
    type: '',
    operationGroup:[],
    isOption: true
  })

  useEffect(() => {
    getInit()
    return () => {
      console.log('xxx')
    }
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
    const {name} = buttonInfo
    switch (name) {
      case 'Add':
        addOptions()    
        break;
      default:
        break;
    }
  }
  //* 平台项操作
  const platformItemOptions = (item: any,type: string) => {
    console.log('item=>',item,'type=>',type)
  }
  //* 新增操作
  const addOptions = () => {
    setDialogInfo({...dialogInfo,visible: true, title: '新增平台',type: 'add'})
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

      <Dialog dialogInfo={dialogInfo}  >
        {{
          operationGroup: (
            configData.operationGroupOfDialog.map((item:operationGroupDialogState,key:number) => {
             
              if (item.name === 'delete' && dialogInfo.type !== 'edit') {
                return
              } else {
                return (
                  <Button  type={item.type} key={key}>
                    {item.title}
                  </Button>
                )
              }
             
            })
          ),
          content: '1212'
        }}
      </Dialog>
    </div>
  )
}

export default Platform
