import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../App'
import { Link } from 'react-router-dom'
import prof from '../../download (1).png'
import { BiCommentDetail } from 'react-icons/bi'
import { AiOutlineLike } from 'react-icons/ai'
import Comment from '../Cards/Comment'

function ProjectCard({ props, id, profileProfPic, showComments, setShowComments, myProfPic }) {
  const user = useContext(UserContext)
  console.log(props)
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

  return (

    <div className="post-card-container">
      <div className='proj-card' >
      <div className="card-header">
            <img src={profPic === undefined ? profileProfPic : profPic} alt='prof-pic' className="card-pic" />
            {props.user ? <Link to={`/profilepage/${props.user.id}`}>{props.user.name}</Link> : null}
        </div>
        <div className='proj-body'>
          <div className="proj-card-header">
            <Link to={`/projectpage/${props.id}`}><h2>{props.title}</h2></Link>
          </div>
          <Link to={`/projectpage/${props.id}`}><img src={props.image_url} alt='project' className='project-picture' /></Link><br/>
          {/* <span className="project-users">{props.user ? props.user.name : user?.name}</span><br/> */}
          <p className='proj-p'>{props.description}</p>
          <a href={props.github}>Github</a>
        </div>
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

export default ProjectCard