import React, { useState,useImperativeHandle } from 'react'
import { Transfer } from 'antd';

type TransferProps = {
  targetArr: any[] //* 未选 
  selectedArr :any[] //* 选中
  titles?: string[]
  renderKey?: string
  setSelected?: any // 选中人的方法
  transferRef?:any
}

const TransferItem:React.FC<TransferProps> = (props) => {

  const {targetArr,selectedArr,titles,setSelected} = props

  const [mockData,setMockData] = useState<any[]>(targetArr)
  const [targetKeys, setTargeKeys] = useState<string[]>(selectedArr.map(item=> item.id));
  const [selectedKeys, setSelectedKeys] = useState<any[]>([]);

  const onChange = (nextTargetKeys:any, direction:any, moveKeys:any) => {
    setTargeKeys(nextTargetKeys);   
    setSelected(nextTargetKeys)
  };


  const onSelectChange = (sourceSelectedKeys:any, targetSelectedKeys:any) => {
    // console.log('onSelectChange=>',sourceSelectedKeys)
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
  };

  const chinese = { itemUnit: '项', itemsUnit: '项', searchPlaceholder: '请输入搜索内容' }

  useImperativeHandle(props.transferRef, () => ({
    reset: (arr:any) => {
      setMockData(arr)
      // console.log('reset')
    },
    backFill: () => {
    }
  }));

  return (
   <div>
    <Transfer
      locale={chinese}
      rowKey={record => record.id}
      dataSource={mockData}
      titles={ titles ? titles : ['待选', '已选']}
      showSearch
      render={item => item.personName}
      targetKeys={targetKeys}
      selectedKeys={selectedKeys}
      onChange={onChange}
      onSelectChange={onSelectChange}
    />
   </div>
  )
}

export default TransferItem
