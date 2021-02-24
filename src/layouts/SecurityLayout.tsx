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

  render() {
    const {permisisontTabs}  = this.state
    const {children,token} = this.props
    const back = () => {
      window.history.go(-1)
    }
    const noMatch = (
      <Result
        status={404}
        title="404"
        subTitle="抱歉，您访问的页面不存在"
        extra={
          <Button type="primary" onClick={back}>
           返回
          </Button>
        }
      />
    );

    const invalid = (
      <Result
        status={403}
        title="403"
        subTitle="抱歉，您无权访问此页。"
        extra={
          <Button type="primary" onClick={back}>
          返回
          </Button>
        }
      />
    )

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
        if (curRouterInfo.limit && permisisontTabs.indexOf(curRouterInfo.limit) === -1) {
          console.log('没有权限')
          return invalid
        } else {
          console.log('有权限')
          document.title = '干部监督综合管控平台'
          return children
        }
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