import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../App'


function RequireAuth({ children }) {
    const user = useContext(UserContext)
    const location = useLocation()

    // useEffect(() => {
    //     fetch('/me').then(r => {
    //       if (r.ok) {
    //         r.json()
    //         .then((user) => setAuth(true))
    //       }
    //     }) 
    //   }, [])

  return (
    user ? children : <Navigate to="/login" replace state={{ path: location.pathname }} />
  )
}

export default RequireAuth