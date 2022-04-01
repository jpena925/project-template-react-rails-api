import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {

  return (
      <div>
        <h1>USER NOT FOUND</h1>
        <Link to='/homepage'>Go Home</Link>
    </div>
  )
}

export default ErrorPage