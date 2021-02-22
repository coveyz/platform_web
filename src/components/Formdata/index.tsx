import './Formdata.scss'
import React,{useState} from 'react'
import { Form, Button } from 'antd';
import {InputItem,SelectItem} from './Components'
import {selectOfFormData,inputOfFormData,dataOfFormdata} from '@/components/type.d'


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

type mainDataItem =  selectOfFormData | inputOfFormData | dataOfFormdata

export type  FormDaraState = {
  mainData:  Array<mainDataItem>
}

export type  FormDataProps  = {
  configData: FormDaraState
}


const Formdata:React.FC<FormDataProps> = (props) => {
  const {configData} = props
  const [mainDataArr] = useState(configData.mainData)

  //* 初始化 整合 formdata 数据🐥
  const initFormDataModel = ():{[name:string]: string | any[] | boolean} => {
    return mainDataArr.reduce((acc,cur:mainDataItem) => {
      acc[cur.name] = cur.value
      return acc
    },{}) as {[name:string]: string | any[] | boolean}
  }
  const [formModel,setFormModel] = useState(initFormDataModel())
  // const [formModel] = Form.useForm();

    const onFinish = (values: any) => {
      console.log(values);
    };
    return (
      <Form {...layout} name="nest-messages" 
      initialValues={formModel}
      onFinish={onFinish}
      >
        {
          mainDataArr.map((item:mainDataItem,key:number) => {
            if (item.type === 'input') {
              return <InputItem key={key} inputInfo={item}/>
            }
            else if (item.type === 'select') {
              return <SelectItem key={key} selectInfo={item}/>
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
        {/* <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
          <InputNumber />
        </Form.Item>
        <Form.Item name={['user', 'website']} label="Website">
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'introduction']} label="Introduction">
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item> */}
      </Form>
    );
}

export default Formdata
