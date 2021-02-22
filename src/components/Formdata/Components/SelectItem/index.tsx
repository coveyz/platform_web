import React from 'react'
import { Select,Form } from 'antd';
import {connect} from 'react-redux'
import {selectOfFormData} from '@/components/type.d'
const { Option } = Select;


export type SelectItemProps = {
  selectInfo: selectOfFormData
}

function onGenderChange(value:any) {
  console.log(`selected ${value}`);
}

const SelectItem:React.FC<SelectItemProps> = (props) => {
  const {selectInfo} = props
  return (
    <Form.Item name={selectInfo.name} label={selectInfo.title} >
    <Select
      placeholder={`请选择`}
      onChange={onGenderChange}
      allowClear
    >
      <Option value="male">male</Option>
      <Option value="female">female</Option>
      <Option value="other">other</Option>
    </Select>
   </Form.Item>

  )
}

export default SelectItem
