import React, { Component} from 'react'
import { Redirect,withRouter,Link } from 'react-router-dom'
import { Result, Button,Spin } from 'antd';
import {connect} from 'react-redux'
import {constantsRouter} from '@/router/constants'
import {getPageTitle} from '@/utils/tools'
import { getAuthority } from '@/utils/authority'


type permisisonState = {
  permisisontTabs: string[]
}

type SecurityLayoutProps = {
  token: string
}
class SecurityLayout extends Component<SecurityLayoutProps> {
  state:permisisonState = {
    permisisontTabs: []
  }
  componentDidMount() {
    this.getPermission()
  }

  async getPermission(){
    const {token} = this.props
    if (!token && window.location.pathname !== '/user/login') {
      return <Redirect to={`/user/login?`} />;
    } else {
      const permissionTabs = await getAuthority() as string[]
      console.log(permissionTabs)
      this.setState({
        permisisontTabs: permissionTabs
      })
      return
    }
  }

  back() {
    window.history.back()
  }

  render() {
    const {permisisontTabs}  = this.state
    const {children } = this.props
    return permisisontTabs && permisisontTabs.length === 0 ? 
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems:'center'
          }}
        >
          <Spin size="large" />
        </div> 
      )
    : (
       children
    )
  }
}



const mapStateToProps = (state:any) => {
  return {
    token: state.user.token,
  }
}


export default connect(mapStateToProps)(SecurityLayout);
// export default connect(mapStateToProps,mapDispatchToProps)(withRouter(SecurityLayout));