import {ButtonGroup} from '@/components'
import {buttonState,dropdownButtonState} from '@/components/type.d'
import configData from '@/pages/platform/config/platform'


const Platform = () => {
  const handleButtonOptions = (buttonInfo:buttonState | dropdownButtonState) => {
    console.log('parent',buttonInfo)
  }
  return (
    <div>
      <ButtonGroup configData={configData} handleButtonOptions={handleButtonOptions}/>
    </div>
  )
}

export default Platform
