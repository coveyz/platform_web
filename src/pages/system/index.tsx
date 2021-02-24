import React, { useState, useEffect } from 'react'
import {HeaderBar} from '@/components'
import {constantsRouter} from '@/router/constants'





const System = (props:any) => {
  const [systemRouter,setSystemRouter] = useState<any[]>([])
  useEffect(() => {
    getInitRouterMap()
    return () => {
    }
  }, [])

  const getInitRouterMap = () => {
    const systemRouterMap = constantsRouter.filter(item => item.path.includes('/system')) as any[]
    setSystemRouter(systemRouterMap)
  }

  return (
    <div>
      systemsystemsystemsystemsystem
      <HeaderBar routerMap={systemRouter}/>
      {props.children}
    </div>
  )
}

export default System
