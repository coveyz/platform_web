import React, { useState } from 'react'
import { Transfer } from 'antd';

const mockData: any[] | undefined = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
  });
}

const initialTargetKeys = mockData.filter(item => +item.key > 10).map(item => item.key);

const TransferItem = () => {

  const [targetKeys, setTargetKeys] = useState(initialTargetKeys);
  const [selectedKeys, setSelectedKeys] = useState<any>([]);
  const onChange = (nextTargetKeys:any, direction:any, moveKeys:any) => {
    console.log('targetKeys:', nextTargetKeys);
    console.log('direction:', direction);
    console.log('moveKeys:', moveKeys);
    setTargetKeys(nextTargetKeys);
  };

  const onSelectChange = (sourceSelectedKeys:any, targetSelectedKeys:any) => {
    console.log('sourceSelectedKeys:', sourceSelectedKeys);
    console.log('targetSelectedKeys:', targetSelectedKeys);
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
  };

  const filterOption = (inputValue:any, option:any) => option.description.indexOf(inputValue) > -1;

  return (
    <Transfer
    dataSource={mockData}
    titles={['待选', '已选']}
    targetKeys={targetKeys}
    showSearch
    filterOption={filterOption}
    selectedKeys={selectedKeys}
    onChange={onChange}
    onSelectChange={onSelectChange}
    render={item => item.title}
  />
  )
}

export default TransferItem
