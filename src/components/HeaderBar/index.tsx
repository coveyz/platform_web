import './HeaderBar.scss'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SvgIcons } from '@/components'
import { constantsProps } from '@/router/type.d'
import { Menu } from 'antd';

export type HeaderBarProps = {
  routerMap: constantsProps[]
}

const HeaderBar:React.FC<HeaderBarProps> = (props) => {

  const {routerMap} = props
  const [entryKey,setEntryKeyOptions] = useState(window.location.pathname)

  //* 点击事件 🚚
  const handleClick = (e:any) => {
    setEntryKeyOptions(e.key)
  }

  return (
    <Menu mode="horizontal" selectedKeys={[entryKey]} className='HeaderBar' onClick={handleClick}>
      {
        routerMap.map((item:constantsProps) => {
          if (!item.hidden) {
            return (
              <Menu.Item key={item.path}>
                <Link to={item.path}>
                  { item.icon && <SvgIcons iconClass={item.icon}/>}
                  {item.title}
                </Link>
              </Menu.Item>
            )
          } else {
            return
          }
        })
      }
    </Menu>
  )
}

export default HeaderBar
