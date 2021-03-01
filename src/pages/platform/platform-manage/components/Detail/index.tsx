import React,{useEffect,useState} from 'react'
import './Detail.scss'
import { PageHeader } from 'antd';
import configData from '@/pages/platform/config/platformDetail'
import {Formdata} from '@/components'

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
  

  return (
    <div className="platform-frame">
      <PageHeader className="site-page-header" title={`${isEdit ? '编辑' : '新增'}平台`} />
      <Formdata formDataType="dataformList" configData={configData} optionObj={optionObj}/>
    </div>
  )
}

export default Detail