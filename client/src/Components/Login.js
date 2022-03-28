import React from 'react'
import { useState } from 'react'
import logo from '../logo.svg'

function Login() {
  const [showLogin, setShowLogin] = useState(true)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  function handleLoginSubmit(e) {
    e.preventDefault() 
    fetch('/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((r) => r.json())
      .then((user) => console.log(`${user.name} is logged in!`)) //change console.log here to do something upon logged on
  }

  function handleSignupSubmit(e) {
    e.preventDefault() 
    fetch('/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, password_confirmation: passwordConfirmation }),
    })
      .then((r) => r.json())
      .then((newUser) => console.log(newUser)) //change console.log here to do something upon logged on
  }

  return (
    <>
    <hr class="blockline"></hr>
    <img src={logo} alt="logo" id="login-logo"/>
    <div class="forms">
    {showLogin ?
    <form id="login">
          <h1>Sign in to Twiddle Wakka</h1>
          <div class="input-field">
            <label for="email">Email</label>
            <input 
              type="email" 
              name="email"  
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <label for="password">Password</label> 
            <input 
              type="password" 
              name="password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <input onClick={handleLoginSubmit} type="submit" value="Login" class="button"/>
            <p>Don't have an account? <button onClick={() => setShowLogin(!showLogin)}>Sign up</button></p>
          </div>
      </form> :
      <form id="signup">
          <h1>Join Twiddle Wakka today</h1>
          <div class="input-field">
          <label for="name">Name</label> 
            <input 
              type="text" 
              name="name"  
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <label for="email">Email</label> 
            <input 
              type="text" 
              name="email"  
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <label for="password">Password</label> 
            <input 
              type="password" 
              name="password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <label for="password_confirmation">Confirm Password</label> 
            <input 
              type="password" 
              name="password_confirmation" 
              value={passwordConfirmation}
              onChange={e => setPasswordConfirmation(e.target.value)}
            />
            <input onClick={handleSignupSubmit} type="submit" value="Sign up" class="button" />
            <p>Already have an account? <button onClick={() => setShowLogin(!showLogin)}>Log in </button></p>
          </div>
      </form>
    }
    </div>
  </>
    
  )
}

export default Login