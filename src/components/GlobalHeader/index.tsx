import './GlobalHeader.scss'
import logoPage from '@/assets/images/basic/logo.png'
import {connect} from 'react-redux'

const GlobalHeader = (props:any) => {
  //* 回到首页
  const goHome = () => {
    console.log('goHome')
    window.location.href = '/'
  }
  return (
    <div className="global-header" onClick={goHome}>
      <div className="global-header-info" >
        <img src={logoPage} alt="" />
        <span>干部监督综合管控平台</span>
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
