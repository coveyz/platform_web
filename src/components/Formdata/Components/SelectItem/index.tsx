import React from 'react'
import { Select,Form } from 'antd';
import {selectOfFormData} from '@/components/type.d'
const { Option } = Select;



export type SelectItemProps = {
  selectInfo: selectOfFormData,
  optionObj?:any
  selectRule: any[]
}

function onGenderChange(value:any) {
  console.log(`selected ${value}`);
}

const SelectItem:React.FC<SelectItemProps> = (props) => {
  const {selectInfo,optionObj,selectRule} = props
  return (
    <Form.Item name={selectInfo.name} label={selectInfo.title} 
    className= {[
      `new-${selectInfo.type}-item`,
      selectInfo.tips ? 'tipsStyle' : '', 
      selectInfo.level === 'special' ? `new-${selectInfo.name}-item` : '',
      selectInfo.title.length > 6 ? 'textSoLong' : ''
    ].join(' ')}
    rules={selectRule}
    >
      <Select
        placeholder={`请选择`}
        onChange={onGenderChange}
        allowClear
      >
        {
        optionObj[selectInfo.name] && optionObj[selectInfo.name].map((item:any,key:number) => {
            return <Option key={key} value={item.value}>{item.text}</Option>
          })
        }
      </Select>
   </Form.Item>

  )
}


export default SelectItem
