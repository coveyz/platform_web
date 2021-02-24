import React, { useState, useEffect } from 'react'
import {HeaderBar} from '@/components'
import {constantsRouter} from '@/router/constants'
import {constantsProps} from '@/router/type.d'





const System = (props:any) => {
  const getInitRouterMap = () => {
    const systemRouterMap = constantsRouter.filter(item => item.path.includes('/system'))
    return systemRouterMap
  }
  const [systemRouter,setSystemRouter] = useState<constantsProps[]>(getInitRouterMap())
  
  return (
    <div>
      <HeaderBar routerMap={systemRouter}/>
      systemsystemsystemsystemsystem
      {props.children}
    </div>
  )
}

export default System
