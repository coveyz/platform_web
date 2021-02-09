import React from 'react';
import { BrowserRouter, Switch,Route,Redirect } from 'react-router-dom'
import UserLayout from '@/layouts/UserLayout'
import Loginpage from '@/pages/user/login'
import {constantRoutes} from '@/router'

const generateRoute = (router:any) => {
  console.log('router',router)
  if (router.children) {
    return ( 
      <Switch  key={`${router.path}${Math.random()}`}>
        <Redirect exact from={router.path} to={router.redirect}/>
        <Route path={router.path} key={`${router.path}${Math.random()}`} >
            <router.component>
                {
                  router.children.map((item:any)=>{
                    return generateRoute(item)
                  })
                }
            </router.component>
        </Route>
    </Switch>
   )
  } else {
    return (
        <Route exact path={router.path} component={router.component} key={`${router.path}${Math.random()}`} limit={router.meta.limit} name={router.meta.title}/>
    )
  }
}

function App() {
  return (
    <BrowserRouter>
       {/* 生成 基本路由🚚 */}
        {
          constantRoutes.map((route) => {
             return generateRoute(route)
          })
        }
    </BrowserRouter>
  );
}

export default App;
