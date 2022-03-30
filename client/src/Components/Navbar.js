import React from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import { MdNotificationsActive, MdOutlineLogout } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs'
import logo from '../Twiddle-Wakka.png'

function Navbar({ onLogout }) {
  const navigate = useNavigate();

  function handleLogout() {
    fetch('/logout', {
      method: 'DELETE',
    }).then(() => onLogout())
    navigate('/login')
  }

  return (
    <header>
      <section>
        <img src={logo} alt='logo' id='logo'/>
        <div id="search-container">
            <form id="search-form">
                <label htmlFor="search-bar"></label>
                <BsSearch id='search-icon'/>
                <input type="text" id="search-bar" placeholder="Search posts..." />
            </form>
        </div>
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