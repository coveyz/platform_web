import React from 'react'
import { DatePicker, Form } from 'antd';
import moment from 'moment';
import {dateOfFormdata} from '@/components/type.d'

export type DateItemProps = {
  dateInfo: dateOfFormdata
}

function onChange(date:any, dateString:any) {
  console.log(date, dateString);
}

const DateItem:React.FC<DateItemProps> = (props) => {
  const {dateInfo} = props
  return (
    <Form.Item  
      label={dateInfo.title} 
      name={dateInfo.name}  
      className= {[
      `new-${dateInfo.type}-item`,
      dateInfo.tips ? 'tipsStyle' : '', 
      dateInfo.level === 'special' ? `new-${dateInfo.name}-item` : '',
      dateInfo.title.length > 6 ? 'textSoLong' : ''
      ].join(' ')}
    >
      <DatePicker 
        onChange={onChange} 
        picker={dateInfo.dateType ? dateInfo.dateType : 'date'} 
        format={dateInfo.format ? dateInfo.format : 'YYYY/MM/DD'} 
        placeholder={`请选择${dateInfo.title}`}
      />
      </Form.Item>
  )
}

export default DateItem
