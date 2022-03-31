import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../App'
import prof from '../../download (1).png'
import { BiCommentDetail } from 'react-icons/bi'
import { AiOutlineLike } from 'react-icons/ai'
import Comment from './Comment'

function PostCard({ props, id, setShowComments, myProfPic, showComments }) {
  const user = useContext(UserContext)
  const [profPic, setProfPic] = useState()

  useEffect(() => {
    if(user) {
    fetch(`/user_images/${id}`)
    .then(res => res.json())
    .then(data => {
      if(data.featured_image === null) {
        setProfPic(prof)
      } else {
        setProfPic(data.featured_image?.url)
      }
    })}
  }, [user])

  console.log(user)
  return (
    <div id="post-card-container">
      <div className='post-card' >
          <div id="card-header">
            <img src={profPic} alt='prof-pic' className="card-pic" />
            {props.user ? <Link to={`/profilepage/${props.user.id}`}>{props.user.name}</Link> : null}
          </div>
          <p>{props.text}</p>
          <div className="footer-container">
            <div className='card-footer'  >
              <BiCommentDetail className='post-card-icon' onClick={() => setShowComments(!showComments)} />
              <AiOutlineLike className='post-card-icon' />
              {showComments ? <Comment props={props} myProfPic={myProfPic} /> : null}
            </div>
          </div>
      </div>
      
    </div>
  )
}
export default PostCard