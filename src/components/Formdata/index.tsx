import './Formdata.scss'
import React,{useState,useImperativeHandle} from 'react'
import { Form } from 'antd';
import {InputItem,SelectItem,DateItem} from './Components'
import {selectOfFormData,inputOfFormData,dateOfFormdata} from '@/components/type.d'


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

type mainDataItem =  selectOfFormData | inputOfFormData | dateOfFormdata

export type  FormDaraState = {
  mainData:  Array<mainDataItem>
  type: string,
  rule: any
}

export type  FormDataProps  = {
  configData: FormDaraState
  optionObj?: any 
  cRef: any
  clearItemArr?: any
}


const Formdata:React.FC<FormDataProps> = (props) => {
  const {configData,optionObj,clearItemArr} = props
  const [mainDataArr] = useState(configData.mainData)
  const [mainRules] = useState(configData.rule)
  
  //* 初始化 整合 formdata 数据🐥
  const initFormDataModel = () => {
    const data = mainDataArr.reduce((acc,cur:mainDataItem) => {
      acc[cur.name] = cur.value
      return acc
    },{})
    return data
  }

  const [formModel,setFormModel] = useState(initFormDataModel())
  const [form] = Form.useForm();

  useImperativeHandle(props.cRef, () => ({
    // changeVal 就是暴露给父组件的方法
    verification: () => {
      return new Promise((resolve,reject) => {
        form.validateFields()
          .then((value) => {
            resolve(value)
          })
         .catch((err) => err)
      })
    },
    reset: () => {
      clearItemArr()
      setFormModel(initFormDataModel())
      setTimeout(() => {
        form.resetFields()
      }, 0);
    }
  }));

  return (
    <Form {...layout} name="nest-messages" 
      initialValues={formModel}
      form={form}
      className='formdata-frame'
    >
      {
        mainDataArr.map((item:mainDataItem,key:number) => {
          if (item.type === 'input') {
            return <InputItem key={key} inputInfo={item} inputRule={mainRules[item.name] ?mainRules[item.name] : null }/>
          }
          else if (item.type === 'select') {
            return <SelectItem key={key} selectInfo={item} optionObj={optionObj}  selectRule={mainRules[item.name] ?mainRules[item.name] : null }/>
          } 
          else if (item.type === 'date') {
            return <DateItem key={key} dateInfo={item} dateRule={mainRules[item.name] ?mainRules[item.name] : null }/>
          }
          else {
            return
          }
        })
      }
    </Form>
  );
}

export default Formdata

