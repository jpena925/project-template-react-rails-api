import React, { useContext } from 'react'
import { UserContext } from '../../App'
import { Link } from 'react-router-dom'

function ProjectCard({ props }) {
  const user = useContext(UserContext)

  return (
    <div className='proj-card' >
    <Link to={`/projectpage/${props.id}`}><img src={props.image_url} alt='project' className='project-picture' /></Link>
      <div>
      <Link to={`/projectpage/${props.id}`}><h2>{props.title}</h2></Link>
        <span className="project-users">{props.user ? props.user.name : user?.name}</span>
        <p className='proj-p'>{props.description}</p>
        <a href={props.github}>Github</a>
      </div>
    </div>
  )
}

export default ProjectCard