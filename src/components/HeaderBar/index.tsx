import './HeaderBar.scss'
import {constantsProps} from '@/router/type.d'
import { Menu } from 'antd';
import { Link } from 'react-router-dom'
import {SvgIcons} from '@/components'
const { SubMenu } = Menu;




export type HeaderBarProps = {
  routerMap: constantsProps[]
}

const HeaderBar:React.FC<HeaderBarProps> = (props) => {
  const {routerMap} = props
  return (
    <Menu mode="horizontal" className='HeaderBar'>
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
