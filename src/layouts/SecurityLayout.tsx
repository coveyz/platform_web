import React, { Component} from 'react'
import { Redirect } from 'react-router-dom'
import { Result, Button,Spin } from 'antd';
import {connect} from 'react-redux'
import {constantsRouter} from '@/router/constants'
// import {getPageTitle} from '@/utils/tools'
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
    console.log('window.location.pathname=>',window.location.pathname)
    if (token && window.location.pathname !== '/user/login') {
      const permissionTabs = await getAuthority()
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
    const {children,token} = this.props
    const back = () => {
      window.history.back()
    }
    const noMatch = (
      <Result
        status={404}
        title="404"
        subTitle="Sorry, you are not authorized to access this page."
        extra={
          <Button type="primary" onClick={back}>
           返回
          </Button>
        }
      />
    );

    if (!token ) {
      console.log('!token')
      return <Redirect to={`/user/login?`} />;
    } else {
      if (!permisisontTabs || permisisontTabs.length === 0 ) {
        return (
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
      } else {
        const {pathname} = window.location
        const curRouterInfo = constantsRouter.filter(router => router.path === pathname)[0]
        if (!curRouterInfo) return noMatch
        document.title = '干部监督综合管控平台'
        return children
      }
    }

  }
}



const mapStateToProps = (state:any) => {
  return {
    token: state.user.token,
  }
}


export default connect(mapStateToProps)(SecurityLayout);