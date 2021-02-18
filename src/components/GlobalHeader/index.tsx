import React ,{useState}from 'react'
import './GlobalHeader.scss'
import logoPage from '@/assets/images/basic/logo.png'
import {Link } from 'react-router-dom'
import Entry from './components/Menu/index'


const GlobalHeader = () => {
  const [entryKey,setEntryKey] = useState(window.location.pathname)

  const goHome = () => {
    setEntryKey('/dashboard')
  }

  const setEntryKeyOptions = (key:string) => {
    setEntryKey(key)
  }

  return (
    <div className="global-header" >
      <Link className="global-header-info" to='/dashboard' onClick={goHome}>
        <img src={logoPage} alt="" />
        <span>干部监督综合管控平台</span>
      </Link>

      <div className="global-header-entry">
        <Entry entryKey={entryKey} setEntryKeyOptions={setEntryKeyOptions}/>
      </div>
    </div>
  )
}

export default GlobalHeader
