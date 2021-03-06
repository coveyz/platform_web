import React from 'react'
import { Form, Input } from 'antd';
import {inputOfFormData} from '@/components/type.d'


export type InputItemProps = {
  inputInfo: inputOfFormData
  inputRule: any[]
}

const InputItem:React.FC<InputItemProps> = (props) => {
  const {inputInfo,inputRule} = props     
  return (
    <Form.Item  label={inputInfo.title} name={inputInfo.name}
      className= {[
        `new-${inputInfo.type}-item`,
        inputInfo.tips ? 'tipsStyle' : '', 
        inputInfo.level === 'special' ? `new-${inputInfo.name}-item` : '',
        inputInfo.title.length > 6 ? 'textSoLong' : ''
      ].join(' ')}

      rules={inputRule}
      >
    <Input  
      disabled={inputInfo.readonly} 
      placeholder={`请选择${inputInfo.title}`}
      allowClear
    />
  </Form.Item>
  )
}

export default InputItem
