import React from 'react'
import Detail from './components/Detail'

const edit = (props:any) => {
  return (
    <Detail isEdit={false} {...props}/>
  )
}

export default edit
