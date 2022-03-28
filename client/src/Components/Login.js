import React from 'react'
import { useState } from 'react'
import logo from '../logo.svg'

function Login() {
  const [showLogin, setShowLogin] = useState(true)

  return (
    <>
    <hr className="blockline"></hr>
    <img src={logo} alt="logo" id="login-logo"/>
    <div className="forms">
    {showLogin ?
    <form id="login">
          <h1>Login</h1>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" name="email"  />
            <label htmlFor="password">Password</label> 
            <input type="password" name="password" />
            <input type="submit" value="Login" className="button"/>
            <button onClick={() => setShowLogin(!showLogin)}>Sign up!</button>
          </div>
      </form> :
      <form id="signup">
          <h1>Sign Up</h1>
          <div className="input-field">
            <label htmlFor="email">Email</label> 
            <input type="email" name="email" />
            <label htmlFor="password">Password</label> 
            <input type="password" name="password" />
            <label htmlFor="password">Confirm Password</label> 
            <input type="password" name="password" />
            <input type="submit" value="Sign up" className="button" />
            <p>Already have an account? <button onClick={() => setShowLogin(!showLogin)}>Sign in here</button></p>
          </div>
      </form>
    }
    </div>
  </>
    
  )
}

export default Login