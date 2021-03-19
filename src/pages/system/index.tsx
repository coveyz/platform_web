import './system.scss'
import React, { useState } from 'react'
import {HeaderBar} from '@/components'
import {constantsRouter} from '@/router/constants'
import {constantsProps} from '@/router/type.d'

const System = (props:any) => {
  const getInitRouterMap = () => {
    const systemRouterMap = constantsRouter.filter(item => item.path.includes('/system'))
    return systemRouterMap
  }
  const [systemRouter] = useState<constantsProps[]>(getInitRouterMap())
  
  return (
    <div className="system-wrapper">
      <HeaderBar routerMap={systemRouter}/>
      <div className="system-content-frame ">
       {props.children}
      </div>
    </div>
  )
}

export default System
