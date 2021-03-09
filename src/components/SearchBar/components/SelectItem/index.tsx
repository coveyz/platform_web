import React from 'react'
import {selectOfSearchBar} from '@/components/type.d'

import { Select,Form } from 'antd';
const { Option } = Select;

export type SelectItemProps = {
  selectInfo: selectOfSearchBar,
  optionObj?:any
  selectOperation?:(data:any)=>void
}

const SelectItem:React.FC<SelectItemProps> = (props) => {
  const {selectInfo,optionObj,selectOperation} = props

  const  onGenderChange = (value:any) =>  {
    // console.log(selectInfo.name,`selected ${value}`);
    const data = {[selectInfo.name]: value}
    selectOperation && selectOperation(data)
  }
  
  return (
    <Form.Item name={selectInfo.name} label={selectInfo.title} 
    >
      <Select
        placeholder={`请选择`}
        onChange={onGenderChange}
        allowClear
        className= {[
          `new-${selectInfo.type}-item`,
          selectInfo.level === 'special' ? `new-${selectInfo.name}-item` : '',
          selectInfo.title.length > 6 ? 'textSoLong' : ''
        ].join(' ')}
      >
        {
          Array.isArray(selectInfo.options) ? selectInfo.options.map((item:any,key: number) => {
                                              return <Option key={key} value={item.value}> {item.text} </Option>
                                             })
                                            : optionObj[selectInfo.options] && optionObj[selectInfo.options].map((item:any,key:number) => {
                                              return <Option key={key} value={item.value}> {item.text} </Option>
                                            })
        }
      </Select>
   </Form.Item>
  )
}

export default SelectItem
