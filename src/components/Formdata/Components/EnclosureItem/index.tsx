import React from 'react'
import { Form,Upload, message, Button } from 'antd';
import {enclosureData} from '@/components/type.d'
import {uploadFile} from '@/api/utils'

export type EnclosureItemProps = {
  enclosureInfo: enclosureData
  enclosureRule: any[]
  setEnclosureItemOperation: (item:enclosureData,data:any) => void
}

const EnclosureItem:React.FC<EnclosureItemProps> = (props) => {
  const {enclosureInfo,enclosureRule,setEnclosureItemOperation} = props

  const upload = (uploadInfo:any) => {
    const {file} = uploadInfo
    const data = {
      files: file
    };

    const fd = new FormData();

    Object.keys(data).forEach((key:string) => {
      fd.append(key,data[key])
    })

    uploadFile(fd).then(res => {
      console.log('upload=>callback=<',res)
      const { data } = res.data;
      setEnclosureItemOperation(enclosureInfo,data)
    })

  }
  
  return (
    <div>

    <Form.Item  
      label={enclosureInfo.title} 
      name={enclosureInfo.name} 
      className= {[
        `new-${enclosureInfo.type}-item`,
        enclosureInfo.tips ? 'tipsStyle' : '', 
        enclosureInfo.level === 'special' ? `new-${enclosureInfo.name}-item` : '',
        enclosureInfo.title.length > 6 ? 'textSoLong' : ''
      ].join(' ')}
      rules={enclosureRule}
      >

      <Upload action="123" customRequest={upload} showUploadList={false}>
        <Button >Click to Upload</Button>
      </Upload>,
    </Form.Item>
    </div>
  )
}

export default EnclosureItem
