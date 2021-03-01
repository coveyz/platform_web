import React from 'react'
import './Detail.scss'
import { PageHeader } from 'antd';

type DetailProps = {
  isEdit: boolean
}

const Detail:React.FC<DetailProps> = (props) => {
  const {isEdit} = props
  return (
    <div className="platform-frame">
       <PageHeader className="site-page-header" title={`${isEdit ? '编辑' : '新增'}平台`} />
    </div>
  )
}

export default Detail