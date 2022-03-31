import React, { useContext } from 'react'
import { UserContext } from '/App'


function RequireAuth({ children }) {
    const user = useContext(UserContext)
  return (
    user ? children : <Navigate to="/login" replace />
  )
}

export default RequireAuth