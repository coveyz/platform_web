import { useState } from "react"
import config from '@/pages/system/config/Role'
import {ButtonGroup,MultifunctionTable} from '@/components'
import {buttonState} from '@/components/type.d'


const Role = () => {
  const [configData, setConfigData] = useState(config)

  const handleButtonOptions = (buttonInfo: buttonState) => {
    console.log('button=>',buttonInfo)
  }

  return (
    <div>
      <ButtonGroup configData={configData} handleButtonOptions={handleButtonOptions}/>
      <div>4324</div>
      <MultifunctionTable configData={configData}/>
    </div>
  )
}

export default Role
