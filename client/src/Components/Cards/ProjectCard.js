import React, { useContext } from 'react'
import { UserContext } from '../../App'

function ProjectCard({ props }) {
  const user = useContext(UserContext)
  
  return (
    <div className='proj-card' >
    <img src={props.image_url} alt='project' className='project-picture' />
      <div>
        <h2>{props.title}</h2>
        <span className="project-users">{props.user ? props.user.name : null}</span>
        <p className='proj-p'>{props.description}</p>
        <a href={props.github}>Github</a>
      </div>
    </div>
  )
}

export default ProjectCard