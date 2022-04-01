import React from 'react'
import { useState } from 'react'
import logo from '../logo.svg'
import { BsFillPersonFill } from 'react-icons/bs';
import { MdEmail,  } from 'react-icons/md'
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
          r.json().then(data => setErrorMsg(() => data[routeString === '/login' ? 'error' : 'errors']))
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
              {showErrorMsg ? <p style={{'color':'red'}}>{errorMsg}</p> : null}
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
                <p onClick={() => handleChangeForm()}>Don't have an account?</p>
              </div>
          </form> :
          <form id="signup">
              {/* <h1>Join Twiddle Wakka today</h1> */}
              <div className="input-field">
              <i><BsFillPersonFill className='icon' /></i>
              <label htmlFor="name"></label>
                <input
                  type="text"
                  name="name"
                  placeholder='First & last name'
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className='field'
                /><br/>
                <i><MdEmail className='icon' /></i>
                <label htmlFor="email"></label>
                <input
                  type="text"
                  name="email"
                  placeholder='Email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className='field'
                /><br/>
                <i><FaLock className='icon'/></i>
                <label htmlFor="password"></label>
                <input
                  type="password"
                  name="password"
                  placeholder='Password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className='field'
                /><br/>
                <i><FaLock className='icon'/></i>
                <label htmlFor="password_confirmation"></label>
                <input
                  type="password"
                  name="password_confirmation"
                  placeholder='Confirm password'
                  value={passwordConfirmation}
                  onChange={e => setPasswordConfirmation(e.target.value)}
                  className='field'
                /><br/>
                <input onClick={handleSignupSubmit} type="submit" value="Sign up" className="button" />
                <p onClick={() => handleChangeForm()}>Already have an account?</p>
                {showErrorMsg && errorMsg.length > 1 ? <>{errorMsg.map(msg => <p style={{'color':'red'}}>{msg}</p>)}</> : null}
                {showErrorMsg && errorMsg.length === 1 ? <p style={{'color':'red'}}>{errorMsg}</p> : null}
              </div>
          </form>
        }
        </div>
      </div>
    
  </>
    
  )
}

export default Login