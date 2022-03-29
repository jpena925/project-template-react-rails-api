import React from 'react'
import { v4 as uuidv4 } from 'uuid';

function ProjectCard({ props }) {
  return (
    <div className='proj-card' >
    <img src={props.image_url} alt='project' className='project-picture' />
      <div>
        <h2>{props.title}</h2>
        {/* TODO: replace with <small>{user.name}</small> */}
        {props.users.map(user => <span key={uuidv4()} className="project-users">{user.name}</span>)}
        <p className='proj-p'>{props.description}</p>
        <a href={props.github}>Github</a>
      </div>
    </div>
  )
}

export default ProjectCard