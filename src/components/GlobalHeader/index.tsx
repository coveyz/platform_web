import './GlobalHeader.scss'
import logoPage from '@/assets/images/basic/logo.png'
import {connect} from 'react-redux'
import {constantsRouter} from '@/router/constants'
import {Link } from 'react-router-dom'
import {SvgIcons} from '@/components'


const GlobalHeader = (props:any) => {
  //* 入口的key 
  const entranceKey = ['平台管理','系统管理']
  //* 入口的内容
  const entranceItem = constantsRouter.filter(item => entranceKey.includes(item.title))
  const {permissionTabs} = props
  return (
    <div className="global-header" >
      <Link className="global-header-info" to='/dashboard'>
        <img src={logoPage} alt="" />
        <span>干部监督综合管控平台</span>
      </Link>
      <div className="global-header-entry">
        {
          entranceItem.map((item,key) => {
            return permissionTabs.includes(item.limit) 
              ?  <Link key={key} to={item.path} className="model-item">
                  <SvgIcons iconClass={item.icon} />
                  {item.title}
                 </Link> 
              : null
          })
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    permissionTabs: state.user.permissionTabs
  }
}

export default connect(mapStateToProps)(GlobalHeader)
