import React,{useState} from 'react'
import {multipleSelectionTree} from '@/components/type.d'
import { Form,TreeSelect } from 'antd';


export type MultipleSelectionTreeProps = {
  multipleSelectionTreeInfo: multipleSelectionTree,
  optionObj?:any
  multipleTreeOperation?: (data: any) => void
}

const MultipleSelectionTree:React.FC<MultipleSelectionTreeProps> = (props) => {
  const {multipleSelectionTreeInfo,optionObj,multipleTreeOperation} = props

  const integrationTreeData = (data:any[]) => {
    const res: any[] = []
    data.forEach(treeData => {
      const tmp = {...treeData}
      if (tmp[multipleSelectionTreeInfo.children ? multipleSelectionTreeInfo.children : 'children']) {
        tmp.children = integrationTreeData(tmp.nextDept)
      }
      tmp.value = tmp.id
      tmp.title = multipleSelectionTreeInfo.label && tmp[multipleSelectionTreeInfo.label] ? tmp[multipleSelectionTreeInfo.label] : 'title'
      res.push(tmp)
    });

    return res 
  }
  const getIntegrationData = () => {
    const data = optionObj[(multipleSelectionTreeInfo.options as string)]
    const treeData = integrationTreeData(data)
    return treeData
  }
  const [treeData,setTreeData] = useState(getIntegrationData)
  
  const onChange = (value:any) => {
    const data = {[multipleSelectionTreeInfo.name]: value}
    multipleTreeOperation && multipleTreeOperation(data)
  }
  return (
       <Form.Item  name={multipleSelectionTreeInfo.name} label={multipleSelectionTreeInfo.title}
         className= {[
          `new-${multipleSelectionTreeInfo.type}-item`,
          multipleSelectionTreeInfo.level === 'special' ? `new-${multipleSelectionTreeInfo.name}-item` : '',
          multipleSelectionTreeInfo.title.length > 6 ? 'textSoLong' : ''
        ].join(' ')}
       >
          <TreeSelect
            placeholder={`请选择`}
            allowClear
            style={{ width: '200px' }}
            dropdownStyle={{ maxHeight: 500 }}
            treeData={treeData}
            treeDefaultExpandAll
            onChange={onChange}
          />
      </Form.Item>
  )
}

export default MultipleSelectionTree
