import React,{useState} from 'react'
import {  Form,Upload,Modal } from 'antd';
import {enclosureOfImagesData} from '@/components/type.d'
import {uploadFile} from '@/api/utils'

export type EnclosureOfImagesProps = {
  enclosureOfImagesInfo: enclosureOfImagesData
  enclosureOfImagesRule: any[]
  setEnclosureItemOperation: (item:enclosureOfImagesData,data: any,operationType?:string ) => void
}

const EnclosureOfImages:React.FC<EnclosureOfImagesProps> = (props) => {
  const {enclosureOfImagesInfo,enclosureOfImagesRule,setEnclosureItemOperation} = props

  const [previewVisible,setPreviewVisible] = useState(false)
  const [previewImage,setPreviewImage] = useState('')
  const [imgList,setImgList] = useState(enclosureOfImagesInfo.fileList)

  const uploadButton = (
    <div>
      <div style={{ marginTop: 8 }}>选择图像</div>
    </div>
  );

  /** 转换成base64 */ 
  const  getBase64 = (file:any) =>{
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  /** change 操作 UI */
  const handleChange = () => {
    let imgList
    if (Array.isArray(enclosureOfImagesInfo.value)) {
      imgList = enclosureOfImagesInfo.value.reduce((acc:any,cur:any) => {
        acc.push({url: cur.filePath})
        return acc
      },[])
    } else {
      imgList = [{url: enclosureOfImagesInfo.value}]
    }
    setImgList(imgList)
  };

  /** 点击预览 */
  const handlePreview = async(file:any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    const fileUrl =  file.url || file.preview
    setPreviewImage(fileUrl)
    setPreviewVisible(true)
  }

  /** 关闭预览 */
  const handleCancel = () => {
    setPreviewVisible(false)
  }

  /** 上传操作 */
  const upload = (uploadInfo:any) => {
    const {file,name} = uploadInfo

    const data = {
      files: file
    };
    
    const fd = new FormData();
    Object.keys(data).forEach((key:string) => {
      fd.append(key,data[key])
    })
    
    /**
     * 需要重新写  
     * 需要判断 当前value 字符串还是数组
     */
    uploadFile(fd).then(res => {
      const { data } = res.data;
      const fileData = Object.assign({},{...data,url: data['filePath'],fileName: data['fileNameList'] && data['fileNameList'].length === 1 ? data['fileNameList'][0] : name})
      console.log('upload-callback=>',fileData);
      setEnclosureItemOperation(enclosureOfImagesInfo,fileData)
      uploadInfo.onSuccess()
    })
  }

  const handleRemove = (info:any) => {
    console.log('info',info)
    const {url} = info
    const {fileList} = enclosureOfImagesInfo
    const newFileData = (fileList as any[]).filter((file:any) => file.url !== url)

    setEnclosureItemOperation(enclosureOfImagesInfo,newFileData,'delete')
  }

  return (
    <>
      <Form.Item  
          label={enclosureOfImagesInfo.title} 
          name={enclosureOfImagesInfo.name}  
          className= {[
            `new-${enclosureOfImagesInfo.type}-item`,
            enclosureOfImagesInfo.tips ? 'tipsStyle' : '', 
            enclosureOfImagesInfo.level === 'special' ? `new-${enclosureOfImagesInfo.name}-item` : '',
            enclosureOfImagesInfo.title.length > 6 ? 'textSoLong' : ''
          ].join(' ')}
          rules={enclosureOfImagesRule}
        >
          <Upload
            action="123"
            listType="picture-card"
            fileList={enclosureOfImagesInfo.fileList}
            onPreview={handlePreview}
            onChange={handleChange}
            customRequest={upload}
            onRemove={handleRemove}
            >
            {enclosureOfImagesInfo.value && enclosureOfImagesInfo.value.length >= 1 ? null : uploadButton}
          </Upload>

      </Form.Item>
      <Modal
        visible={previewVisible}
        title={enclosureOfImagesInfo.title}
        footer={null}
        onCancel={handleCancel}
        >
        <img alt="example" style={{ width: '100%' }} src={previewImage}/>
      </Modal>
    </>
  )
}

export default EnclosureOfImages
