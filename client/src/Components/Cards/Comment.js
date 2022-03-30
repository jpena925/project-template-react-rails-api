import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import prof from '../../download (1).png'

function Comment({ text, user_id, name}) {
  const [image, setImage] = useState(prof)

  useEffect(() => {
    fetch(`/user_images/${user_id}`)
    .then(res => res.json())
    .then(data => {
      if(data.featured_image !== null) {
        setImage(data.featured_image.url)
      }
    })
  },[])

  return (
    <div id='comment'>
      <div class="comment-header">
        <img className='user-icon' src={`${image}`} alt='Commenter'></img>
        <Link to={`/profilepage/${user_id}`}>{name}</Link>
      </div>
      <p>{text}</p>
      {user_id === '<%= Session["user_id"] %>' ? <button>Delete Comment</button> : null}
    </div>
  )
}

export default Comment