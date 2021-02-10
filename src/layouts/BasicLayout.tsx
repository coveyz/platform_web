import React from 'react'

const BasicLayout = (props:any) => {
  console.log('???',props)
  return (
    <div>
      BasicLayoutBasicLayoutBasicLayoutBasicLayoutBasicLayout
      {props.children}
    </div>
  )
}

export default BasicLayout
