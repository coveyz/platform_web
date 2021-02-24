import React,{useState} from 'react'
import { Modal, Button } from 'antd';
import {DialogState} from '@/components/type.d'

type DialogProps = {
  dialogInfo: DialogState
}

const Dialog:React.FC<DialogProps> = (props) => {

  const [initOperationGroup] = useState([
    <Button key="back" >
       Return
     </Button>,
     <Button key="submit" type="primary">
       Submit
     </Button>
  ])

  const {dialogInfo} = props
  const {visible} = dialogInfo

 const {operationGroup,content} = props.children as {operationGroup?: Element[],content?: any}

  return (
    <div>
      <Modal
          visible={visible}
          closable={false}
          title={ dialogInfo.title? dialogInfo.title : 'title'}
          footer={

            dialogInfo.isOption ? operationGroup && operationGroup.length ? operationGroup : initOperationGroup
                                : [null]
          }
        >
          {
            dialogInfo.content ? dialogInfo.content : content
          }
        </Modal>
    </div>
  )
}

export default Dialog
