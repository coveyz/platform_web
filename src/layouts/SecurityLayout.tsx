import React, { Component } from 'react'
import { Redirect,withRouter,Link } from 'react-router-dom'
import { Result, Button } from 'antd';
import {connect} from 'react-redux'
import {constantsRouter} from '@/router/constants'

const SecurityLayout = (props:any) => {
  const {location,token,children} = props
  const {pathname} = location
  const back = () => {
    window.history.back()
  }
  const noMatch = (
    <Result
      status={404}
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary" onClick={() => back()}>返回</Button>}
    />
  );

  const curRouterInfo = constantsRouter.filter(router => router.path === pathname)[0]

  if (curRouterInfo && curRouterInfo.title) {
    document.title = curRouterInfo.title
  } else {
    document.title = '干部管理平台'
    return noMatch
  }

  if (!token && window.location.pathname !== '/user/login') {
    return <Redirect to={`/user/login`}/>
  }

  return children
}



const mapStateToProps = (state:any) => {
  return {
    token: state.user.token
  }
}

export default connect(mapStateToProps)(withRouter(SecurityLayout));