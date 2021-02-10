import React from 'react';
import { BrowserRouter, Switch,Route,Redirect } from 'react-router-dom'
import {routerMap} from '@/router'
import SecurityLayout from '@/layouts/SecurityLayout'

const generateRoute = (router:any) => {
  if (router.children) {
    return ( 
      <Switch  key={`${router.path}${Math.random()}`}>
        <Redirect exact from={router.path} to={router.redirect}/>
        <Route path={router.path} key={`${router.path}${Math.random()}`} >
            <router.component {...router}>
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
        <Route {...router} exact  path={router.path} component={router.component} key={`${router.path}${Math.random()}`} />
    )
  }
}

function App() {
  return (
    <BrowserRouter>
       {/* 生成 基本路由🚚 */}
        {
          routerMap.map((route) => {
             return generateRoute(route)
          })
        }
    </BrowserRouter>
  );
}

export default App;
