import './UserLayout.scss'

const UserLayout = (props:any) => {
  console.log('?')
  return (
    <div className='loginframe'>
      {props.children}
    </div>
  )
}

export default UserLayout
