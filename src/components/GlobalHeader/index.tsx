import React ,{useState}from 'react'
import './GlobalHeader.scss'
import {Link } from 'react-router-dom'
import Entry from './components/Menu/index'
import config from '@/config'

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
        <img src='/static/images/basic/logo.png' alt=""/>
        <span> {config.platformTitle} </span>
      </Link>

      <div className="global-header-entry">
        <Entry entryKey={entryKey} setEntryKeyOptions={setEntryKeyOptions}/>
      </div>
    </div>
  )
}

export default GlobalHeader
