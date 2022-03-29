import React from 'react'
import { Link } from 'react-router-dom'

function Comment({ text, user_id, name}) {
  return (
    <div>
    <p>{text}</p>
    <Link to={`/profilepage/${user_id}`}>{name}</Link>
    {user_id === '<%= Session["user_id"] %>' ? <button></button> : null}
    </div>
  )
}

export default Comment