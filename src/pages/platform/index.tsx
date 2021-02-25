import React from 'react'

type PlatformProps = {
  children: React.ReactNode
}

const Platform:React.FC<PlatformProps> = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Platform
