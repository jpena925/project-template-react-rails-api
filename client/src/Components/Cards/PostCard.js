import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../App'

function PostCard({ props }) {
  const user = useContext(UserContext)

  return (
    <div className='post-card' >
        <h4>{props.text}</h4>
        {props.user ? <Link to={`/profilepage/${props.user.id}`}>{props.user.name}</Link> : <h4 className="self-user-name">{user.name}</h4>}
    </div>
  )
}

export default PostCard