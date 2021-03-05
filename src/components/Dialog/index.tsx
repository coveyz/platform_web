import React from 'react'
import { Modal } from 'antd';
import {DialogState} from '@/components/type.d'

type DialogChildState = {
  operationGroup?: JSX.Element[]
  content?:any
}

type DialogProps = {
  dialogInfo: DialogState
  children: DialogChildState
}

const Dialog:React.FC<DialogProps> = (props) => {
  const {dialogInfo} = props
  const {visible} = dialogInfo


  return (
    <div>
      <Modal
          visible={visible}
          closable={false}
          title={ dialogInfo.title? dialogInfo.title : 'title'}
          footer={
            dialogInfo.isOption ? props.children && props.children.operationGroup && props.children.operationGroup.length ? props.children.operationGroup : [null]
                                : [null]
          }
        >
          {
            dialogInfo.content ? dialogInfo.content 
                               : props.children && props.children.content
          }
        </Modal>
    </div>
  )
}

export default Dialog
