import React,{useEffect,useState,useRef} from 'react'
import './Detail.scss'
import { PageHeader } from 'antd';
import config from '@/pages/platform/config/platformDetail'
import {Formdata,ButtonGroup} from '@/components'
import {buttonState} from '@/components/type.d'
import {listDict} from '@/api/utils'
import {handlePlatformOperation,getPlatformDetail} from '@/api/platform'
import {successMessage} from '@/utils/tools'
import {platformoperationState} from '@/api/platform/type.d'

type DetailProps = {
  isEdit: boolean
  history?: any
  match?:any
}

const Detail:React.FC<DetailProps> = (props) => {
  const {isEdit} = props
  const [configData,setConfigData] = useState(config)
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
  
  /** 初始化操作 */
  const getInit = () => {
    
    if (isEdit) {
      const id = props.match.params && props.match.params.id
      getCurPlatformDetail(id)
    }
    childRef['current']['reset']()
    getDictData().then((res:any) => {
      setOptionsObj(res) 
    })
  }


  const getCurPlatformDetail = (id: string) => {
    const requestData = {id: id}

    getPlatformDetail(requestData).then(res => {
      const {data} = res.data
      integrateData(data)
    })
  }

  const integrateData = (result:any) => {
    const formdataInfo = configData['mainData'].map(item => {
      item.value = result[item.name]
      if (item.type === 'enclosureOfImages') {
        (item.fileList as any[]) = [{url: result[item.name]}]
      } 
      return item
    })

    setConfigData({...configData,mainData: formdataInfo})
    console.log(formdataInfo)
    childRef['current']['backFill']()
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


  /** 清空configData */
  const clearItemArr = () => {
    configData['mainData'] = configData['mainData'].map((item:any) => {
      if (item.type === 'enclosureOfImages') {
        item.fileList = []
        item.fileNumber = 0
        item.value = ''
      } else if (item.type === 'radio') {
        item.value = '1'
      } else {
        item.value = Array.isArray(item.value) ? [] : ''
      }
      return item
    })
    setConfigData(configData)
  }

  /** 新增/修改 平台 */
  const addPlatformOperation = () => {
    childRef['current']['verification']().then((res:platformoperationState) => {
      const requestData = Object.assign({id: isEdit ? props.match.params && props.match.params.id : ''},res)
      platformOperation(requestData)
    })
  }

  const platformOperation = (requestData:platformoperationState) => {
    handlePlatformOperation(requestData).then(res => {
      successMessage(`${isEdit ? '编辑' : '新建'}平台成功`)
      childRef['current']['reset']()
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
      <Formdata cRef={childRef} clearItemArr={clearItemArr} formDataType="dataformList" configData={configData} optionObj={optionObj}/>
    </div>
  )
}

export default Detail