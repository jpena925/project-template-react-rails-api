import React, { useState, useEffect } from 'react'
import Comment from '../Cards/Comment'
import { useParams } from 'react-router-dom'

function ProjectDisplay() {
  const [project, setProject] = useState({
    title: '',
    "image_url": 'https://www.touchtaiwan.com/images/default.jpg',
    github: '',
    description: '',
    technologies: [],
    comments: []
  })
  const { id } = useParams()
  
  useEffect(() => {
    fetch(`/projects/${id}`)
    .then(res => res.json())
    .then(project => setProject(() => project))
  }, [id])

  return (
    <div id='project-display'>
      <div className='project-header'>
        <span>{project['title']}</span>
        <div id='fork-links'>
            <a href={`${project['github']}`}>
              <img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' alt='Github page'></img>
            </a>
            <a href={`${project['github']}/fork`}>
              <img src='https://user-images.githubusercontent.com/17777237/54873012-40fa5b00-4dd6-11e9-98e0-cc436426c720.png' alt='Fork this Github'></img>
            </a>
        </div>
      </div>
      <img src={`${project['image_url']}`} alt='Project'></img>
      <div id='tech-tags'>{project.technologies.map(tech => <span>#{tech.name}</span>)}</div>
      <p>{project.description}</p>
      <Comment props={project} />
    </div>
  )
}

export default ProjectDisplay