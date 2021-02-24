import {connect} from 'react-redux'

type GlobalFooterProps = {
  logout: () => void
}

const GlobalFooter:React.FC<GlobalFooterProps> = (props) => {
  const {logout} = props
  const logoutOperation = () => {
    logout()
    console.log('退出登录')
  }

  return (
    <div className="global-footer">
      <div></div>
      <div>天津市天房科技发展有限公司</div>
      <div
        className="accont-scope"
        onClick={logoutOperation}
      >退出登录</div>
    </div>
  )
}

const mapStateToProps = (state:any) => state

const mapDisPispatch = {
  logout: () => {
    return {type: 'logout'}
  }
}

export default connect(mapStateToProps,mapDisPispatch)(GlobalFooter)
