import React from 'react'
import prelogin_logo from '../prelogin.gif'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

function PreLogin() {
  return (
    <div >
      <img id="prelogin-logo" src={prelogin_logo} alt="TypewriterLogo"/>
      <Link id="prelogin-link" to="/login"><img src={logo} alt="logo" id="prelogin-logo-img"/></Link>
    </div>
  )
}

export default PreLogin