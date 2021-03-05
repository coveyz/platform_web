import React,{useEffect,useState,useRef} from 'react'
import './Detail.scss'
import { PageHeader,Button } from 'antd';
import {Formdata,ButtonGroup,Dialog} from '@/components'
import {buttonState,operationGroupDialogState} from '@/components/type.d'
import config from '@/pages/platform/config/platformDetail'
import {successMessage} from '@/utils/tools'
import {listDict} from '@/api/utils'
import {handlePlatformOperation,getPlatformDetail,deletePlatform} from '@/api/platform'
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
  const [dialogState,setDialogState] = useState({
    visible: false,
    isOption: true,
    title: '提示',
    content: '',
    type: ''
  })


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

  /** 更有ID 查详情 */
  const getCurPlatformDetail = (id: string) => {
    const requestData = {id: id}
    getPlatformDetail(requestData).then(res => {
      const {data} = res.data
      integrateData(data)
    })
  }

  /** 整合数据 */
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


    /** button事件 */
  const handleButtonOptions = (buttonInfo:buttonState) => {
    const {name} = buttonInfo
    console.log('name=>',name)
    switch (name) {
      case 'Add':
        addPlatformOperation()    
        break;
      case 'Back':
        backOperation()
        break
      case 'Delete':
        deleteOpertaion()
        break
      default:
        break;
    }
  }
  
  /** 新增/修改 平台 */
  const addPlatformOperation = () => {
    childRef['current']['verification']().then((res:platformoperationState) => {
      const requestData = Object.assign({id: isEdit ? props.match.params && props.match.params.id : ''},res)
      platformOperation(requestData)
    })
  }
  /** 返回按钮 */
  const backOperation = () => {
    setDialogState({...dialogState,content: '未保存 是否退出?',visible: true, type: 'back'})
  }
  /** 删除按钮 */
  const deleteOpertaion = () => {
    setDialogState({...dialogState,content: '是否确定删除平台?  删除后将不可回复!',visible: true, type: 'delete'})
  }

  /** 新增/更新 接口 */
  const platformOperation = (requestData:platformoperationState) => {
    handlePlatformOperation(requestData).then(res => {
      successMessage(`${isEdit ? '编辑' : '新建'}平台成功`)
      childRef['current']['reset']()
      props.history.push('/platform/index')
    })
  }
  /** Dialog 事件 */
  const handleDialogOperation = (item: operationGroupDialogState) => {
    const {name} = item
    const {type} = dialogState
    switch (name) {
      case 'confirm':
        if (type === 'back') {
          setDialogState({...dialogState,content: '',visible: false,type: ''})
          props.history.push('/platform/index')
        } else if (type === 'delete') {
          deletePlatformOperation()
        }
        break;
      case 'cancel':
        setDialogState({...dialogState,content: '',visible: false,type: ''})
        break
      default:
        break;
    }
  }
  /** 删除操作 */
  const deletePlatformOperation = () => {
    const id = (props.match.params && props.match.params.id) as string
    const requestData = {
      ids: [id]
    }
    deletePlatform(requestData).then(res => {
      successMessage('删除机构 成功')
      setDialogState({...dialogState,content: '',visible: false,type: ''})
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
                isEdit  ? 
                          <div className='buttonGroupAdditional'>
                            <ButtonGroup  configData={additionalOperation} handleButtonOptions={handleButtonOptions}></ButtonGroup>
                          </div>
                        : null
              )
            }
          }
        </ButtonGroup>
      </div>

      <Formdata cRef={childRef} clearItemArr={clearItemArr} formDataType="dataformList" configData={configData} optionObj={optionObj}/>

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
            )
          }
        }
        </Dialog>
    </div>
  )
}

export default Detail