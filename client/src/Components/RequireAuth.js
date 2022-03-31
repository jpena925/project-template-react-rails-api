import React, { useState, useEffect, useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../App'

function RequireAuth({ children }) {
    // const [user, setUser] = useState(null)
    // const [auth, setAuth] = useState(false)
    // console.log(user)
    const user = useContext(UserContext)
    const location = useLocation()
    
    // useEffect(() => {
    //     fetch('/me').then(r => {
    //       if (r.ok) {
    //         r.json()
    //         .then((user) => setUser(user))
    //       }
    //     }) 
    //   }, [])

    // if (user) {
    //     setAuth(true)
    // } else {
    //     setAuth(false)
    // }

  return (
    user ? children : <Navigate to="/login" replace state={{ path: location.pathname }} />
  )
}

export default RequireAuth