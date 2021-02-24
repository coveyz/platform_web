import React from 'react';
import './Menu.scss'
import {connect} from 'react-redux'
import { Menu } from 'antd';
import { Link } from 'react-router-dom'
import {SvgIcons} from '@/components'
import {constantsRouter} from '@/router/constants'

export type MenuProps = {
  setEntryKeyOptions: (key:string) => void;
  entryKey: string
}

const EntryItem:React.FC<MenuProps> = (props) => {
    //* 入口的key 
  const entranceKey = ['平台管理','系统管理']
    //* 入口的内容 -- 差一步⚠️
  const entranceItem = constantsRouter.filter(item => entranceKey.includes(item.title))

  const {entryKey,setEntryKeyOptions} = props

  const handleClick = (e:any) => {
    setEntryKeyOptions(e.key)
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[entryKey]} mode="horizontal" className="qq">
        {
          entranceItem.map((item,key) => {
            return (
              <Menu.Item key={item.path}>
                <Link to={item.path}>
                  <SvgIcons iconClass={item.icon}/>
                  {item.title}
                </Link>
              </Menu.Item>
            )
          })
        }
    </Menu>
  )
}

const mapStateToProps = (state: any) => {
  return {
    permissionTabs: state.user.permissionTabs
  }
}

export default connect(mapStateToProps)(EntryItem)