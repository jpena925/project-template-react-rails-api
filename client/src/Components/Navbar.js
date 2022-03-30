import React from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import { MdNotificationsActive } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs'
import logo from '../Twiddle-Wakka.png'
import Search from './Search.js'

function Navbar({ onLogout }) {
  const navigate = useNavigate();

  function handleLogout() {
    fetch('/logout', {
      method: 'DELETE',
    }).then(() => onLogout())
    navigate('/login')
  }


  function handleSubmitSearch(e){
    e.preventDefault()
    console.log(e.target.lastChild.value)
  }

  return (
    <header>
      <section>
        <img src={logo} alt='logo' id='logo'/>
        <Search />
        <nav>
          <ul className='nav-links'>
            <li className='nav-effect'><NavLink to="/homepage">Home</NavLink></li>
            <li className='nav-effect'><NavLink to="/profilepage">My Profile</NavLink></li>
            <li><MdNotificationsActive className='notification'/></li>
            <li><button onClick={handleLogout} className='logout-button'>Logout</button></li>
          </ul>
        </nav>
      </section>
    </header>
  )
}

export default Navbar