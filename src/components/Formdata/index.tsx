import './Formdata.scss'
import React,{useState,useEffect} from 'react'
import { Form, Button } from 'antd';
import {InputItem,SelectItem} from './Components'
import {selectOfFormData,inputOfFormData,dateOfFormdata} from '@/components/type.d'
import DateItem from './Components/DateItem';
import { connect } from 'react-redux';


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
}


const Formdata:React.FC<FormDataProps> = (props) => {
  const {configData,optionObj} = props
  const [mainDataArr] = useState(configData.mainData)
  const [mainRules] = useState(configData.rule)
  
  //* 初始化 整合 formdata 数据🐥
  const initFormDataModel = ():{[name:string]: string | any[] | boolean} => {
    return mainDataArr.reduce((acc,cur:mainDataItem) => {
      acc[cur.name] = cur.value
      return acc
    },{}) as {[name:string]: string | any[] | boolean}
  }
  const [formModel,setFormModel] = useState(initFormDataModel())

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Form {...layout} name="nest-messages" 
    initialValues={formModel}
    onFinish={onFinish}
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
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default connect(state=>state)(Formdata)
