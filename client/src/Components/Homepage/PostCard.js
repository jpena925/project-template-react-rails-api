import React from 'react'
import { Link } from 'react-router-dom'

function PostCard({ props }) {

  return (
    <div className='post-card' >
        <h4>{props.text}</h4>
        <Link to={`/profilepage/${props.user.id}`}>{props.user.name}</Link>
    </div>
  )
}

export default PostCard