import React,{useEffect,useState} from 'react'
import './Detail.scss'
import { PageHeader,Button } from 'antd';
import configData from '@/pages/platform/config/platformDetail'
import {Formdata,ButtonGroup} from '@/components'
import {buttonState,dropdownButtonState} from '@/components/type.d'

type DetailProps = {
  isEdit: boolean
}

const Detail:React.FC<DetailProps> = (props) => {
  const {isEdit} = props
  const [optionObj,setOptionsObj] = useState({})


  useEffect(() => {
    getInit()
    return () => {}
  }, [])

  const getInit = () => {
    getDataFromFakeInterfaceOfFormData().then((res) => {
      console.log(res)
      const {operation} = res as {[name:string]: [] | string | {} }
      setOptionsObj(operation)
    })
  }

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

  const handleButtonOptions = (buttonInfo:buttonState) => {
    console.log(buttonInfo)
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
      <Formdata formDataType="dataformList" configData={configData} optionObj={optionObj}/>
    </div>
  )
}

export default Detail