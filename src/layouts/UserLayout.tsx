import React from 'react'
import './UserLayout.scss'
import Login from '@/pages/user/login'

const UserLayout = (props:any) => {
  console.log('?')
  return (
    <div className='loginframe'>
      {props.children}
    </div>
  )
}

export default UserLayout
