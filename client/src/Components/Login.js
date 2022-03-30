import React from 'react'
import { useState } from 'react'
import logo from '../logo.svg'
import { BsFillPersonFill } from 'react-icons/bs';
import { FaLock } from 'react-icons/fa';

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true)
  const [showErrorMsg, setShowErrorMsg] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  function handleLoginSubmit(e) {
    e.preventDefault() 
    const userObj = { email, password }
    submitFetch(userObj, '/login')
  }

  function handleSignupSubmit(e) {
    e.preventDefault()
    const userObj = { name, email, password, password_confirmation: passwordConfirmation }
    submitFetch(userObj, '/users')
  }

  function submitFetch(userObj, routeString) { 
    fetch(routeString, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObj),
    })
      .then(r => {
        if (r.ok) {
          r.json().then((user) => onLogin(user)) 
        } else {
          // r.json().then(data => console.log(data))
          r.json().then(data => setErrorMsg(() => data[routeString == '/login' ? 'error' : 'errors']))
          setShowErrorMsg(true)
          setPassword("")
        }
      }) 
  }

  function handleChangeForm() {
    setShowLogin(!showLogin)
    setShowErrorMsg(false)
  }

  return (
    <>
    {/* <hr className="blockline"></hr> */}
      <div id="login-container">
        <img src={logo} alt="logo" id="login-logo"/>
        <div className="forms">
        {showLogin ?
        <form id="login">
              {/* <h1>Sign in to Twiddle Wakka</h1> */}
              {showErrorMsg ? <p style={{'color':'red'}}>Invalid username or password.</p> : null}
              <div className="input-field">
                <label htmlFor="email"></label>
                <i><BsFillPersonFill className='icon' /></i>
                <input
                  type="email"
                  name="email"
                  placeholder='Email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className='field'
                /><br/>
                <label htmlFor="password"></label>
                <i><FaLock className='icon'/></i>
                <input
                  type="password"
                  name="password"
                  placeholder='Password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className='field'
                /><br/>
                <input onClick={handleLoginSubmit} type="submit" value="Login" className="button"/>
                <p onClick={() => setShowLogin(!showLogin)}>Don't have an account?</p>
              </div>
          </form> :
          <form id="signup">
              <h1>Join Twiddle Wakka today</h1>
              {showErrorMsg ? <p style={{'color':'red'}}>Invalid email or password.</p> : null}
              <div className="input-field">
              <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <label htmlFor="password_confirmation">Confirm Password</label>
                <input
                  type="password"
                  name="password_confirmation"
                  value={passwordConfirmation}
                  onChange={e => setPasswordConfirmation(e.target.value)}
                />
                <input onClick={handleSignupSubmit} type="submit" value="Sign up" className="button" />
                <p>Already have an account? <button onClick={() => setShowLogin(!showLogin)}>Log in </button></p>
              </div>
          </form>
        }
        </div>
      </div>
    
  </>
    
  )
}

export default Login