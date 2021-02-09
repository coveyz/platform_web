import React from 'react'
import './UserLayout.scss'
import Login from '@/pages/user/login'

const UserLayout = (props:any) => {
  return (
    <div className='loginframe'>
      {/* {props.children} */}
      <Login />
    </div>
  )
}

export default UserLayout
