
const GlobalFooter = () => {
  
  const logout = () => {
    console.log('退出登录')
  }

  return (
    <div className="global-footer">
      <div></div>
      <div>天津市天房科技发展有限公司</div>
      <div
        className="accont-scope"
        onClick={logout}
      >退出登录</div>
    </div>
  )
}

export default GlobalFooter
