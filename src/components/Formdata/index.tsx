import './Formdata.scss'
import React,{useState,useImperativeHandle} from 'react'
import { Form } from 'antd';
import {InputItem,SelectItem,DateItem,RadioItem,EnclosureItem,EnclosureOfImages} from './Components'
import {selectOfFormData,inputOfFormData,dateOfFormdata,enclosureData,enclosureOfImagesData} from '@/components/type.d'


const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 19 },
};

type mainDataItem =  selectOfFormData | inputOfFormData | dateOfFormdata | enclosureData | enclosureOfImagesData

export type  FormDaraState = {
  mainData:  Array<mainDataItem>
  rule: any
}

export type  FormDataProps  = {
  configData: FormDaraState
  optionObj?: any 
  cRef?: any
  clearItemArr?: any
  formDataType?: string
}


const Formdata:React.FC<FormDataProps> = (props) => {
  const {configData,optionObj,clearItemArr,formDataType} = props
  const [mainDataArr,setMainDataArr] = useState(configData.mainData)
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

  /** 附件上传操作 */
  const setEnclosureItemOperation = (item:enclosureData | enclosureOfImagesData,data:any,operationType?: string) => {
    const {name} = item

    const newMainData = mainDataArr.map((item:any) => {
      if (item.name === name) {
        operationType === 'delete' ? item.value = data : item.value.push(data)
        item.fileNumber = item.value.length;
        //* 如果不加这一步 文件上传change 可能会触发一次 导致value 变成了 antd 给的file
        setTimeout(() => {
          form.setFieldsValue({ [name]: item.value  }); 
        }, 0);
      }
      return item
    })
    setMainDataArr(newMainData)
  }

  console.log('formModel=>',formModel)

  return (
    <Form {...layout} name="nest-messages" 
      initialValues={formModel}
      form={form}
      // className='formdata-frame'
      className={['formdata-fram',formDataType ? formDataType : ''].join(' ')}
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
          else if (item.type === 'radio') {
            return <RadioItem  key={key} radioInfo={item} radioRule={mainRules[item.name] ?mainRules[item.name] : null }/>
          }
          else if (item.type === 'enclosure') {
            return <EnclosureItem key={key} setEnclosureItemOperation={setEnclosureItemOperation} enclosureInfo={item} enclosureRule={mainRules[item.name] ?mainRules[item.name] : null }/>
          }
          else {
            return <EnclosureOfImages key={key} setEnclosureItemOperation={setEnclosureItemOperation} enclosureOfImagesInfo={item} enclosureOfImagesRule={mainRules[item.name] ?mainRules[item.name] : null }/>
          }
        })
      }
    </Form>
  );
}

export default Formdata

