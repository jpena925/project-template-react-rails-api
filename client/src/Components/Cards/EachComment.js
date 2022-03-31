import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import prof from '../../download (1).png'
import { UserContext } from '../../App'

function EachComment({ text, user_id, name, id }) {
    const [image, setImage] = useState(prof)
    const user = useContext(UserContext)

    useEffect(() => {
      fetch(`/user_images/${user_id}`)
      .then(res => res.json())
      .then(data => {
        if(data.featured_image !== null) {
          setImage(data.featured_image.url)
        }
      })
    },[])
    

    // function handleDeleteComment(){
    //   console.log(id)
    // }

    return (
    <div id='comment'>
        <img className='comment-user-icon' src={`${image}`} alt='Commenter'></img>
        <div className="comment-body">
          <Link to={`/profilepage/${user_id}`}>{name}</Link>
          <p>{text}</p>
        </div>
        <p>{text}</p>
        {/* {user_id === user.id ? <button onClick={handleDeleteComment}>Delete Comment</button> : null} */}
    </div>
  )
}

export default EachComment