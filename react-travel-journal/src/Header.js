import React from 'react'
import Logo from './assets/logo.png'

function Header() {
  return (
    <div className="header">
        <img className="logo" src={Logo}></img>
        <span>my travel journal.</span>
    </div>
  )
}

export default Header