import React,{useEffect,useState,useRef} from 'react'
import './Detail.scss'
import { PageHeader } from 'antd';
import configData from '@/pages/platform/config/platformDetail'
import {Formdata,ButtonGroup} from '@/components'
import {buttonState} from '@/components/type.d'
import {listDict} from '@/api/utils'
import {handlePlatformOperation} from '@/api/platform'
import {successMessage} from '@/utils/tools'

type DetailProps = {
  isEdit: boolean
  history?: any
}

const Detail:React.FC<DetailProps> = (props) => {
  const {isEdit} = props
  const [optionObj,setOptionsObj] = useState({})
  const childRef = useRef<any>(null)

  useEffect(() => {
    getInit()
    return () => {}
  }, [])
  
  const additionalOperation  = {
      operationGroup: [ {
        type: 'danger', // 类型 样式
        buttonType: 'button', // 类型
        title: '删除', // 文字
        name: 'Delete', // 键 //区别操作
        icon: 'delete', // 图标
        special: true, // 特殊类型 // true 不进行 选中个数的判断
      }]
  }

  /** 初始化操作 */
  const getInit = () => {
    getDictData().then((res:any) => {
      setOptionsObj(res) 
    })
  }


  /** 获取 -> 字典操作 */
  const getDictData = () => {
      return new Promise(resolve => {
        const requestData = ['clientType']
        listDict(requestData).then(res => {
          const {data} = res.data
          resolve(data)
        })
      })
    }
  
  /** button事件 */
  const handleButtonOptions = (buttonInfo:buttonState) => {
    const {name} = buttonInfo
    switch (name) {
      case 'Add':
        addPlatformOperation()    
        break;
      default:
        break;
    }
  }

  /** 新增平台 */
  const addPlatformOperation = () => {
    console.log('add')
    childRef['current']['verification']().then((res:any) => {
      console.log('formdata-success',res)
      const resquestData = {}

      Object.assign(resquestData,{...res,logoUrl: res['logoUrl'][0]['filePath']})

      platformOperation(resquestData)
    })
  }

  const platformOperation = (requestData:any) => {
    handlePlatformOperation(requestData).then(res => {
      successMessage('新建平台成功')
      props.history.push('/platform/index')
    })
  }

  return (
    <div className="platform-frame">
      <PageHeader className="site-page-header" title={`${isEdit ? '编辑' : '新增'}平台`} />
      <div className="platform-operation">
        <ButtonGroup  configData={configData} handleButtonOptions={handleButtonOptions}>
          {
            {
                additional:  (
                <div className='buttonGroupAdditional'>
                  <ButtonGroup  configData={additionalOperation} handleButtonOptions={handleButtonOptions}></ButtonGroup>
                </div>
              )
          }
        }
        </ButtonGroup>
      </div>
      <Formdata cRef={childRef} formDataType="dataformList" configData={configData} optionObj={optionObj}/>
    </div>
  )
}

export default Detail