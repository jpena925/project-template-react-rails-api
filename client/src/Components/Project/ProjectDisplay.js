import React, { useState, useEffect, useContext } from 'react'
import Comments from './Comments'
import { UserContext } from '../../App'
import { useParams } from 'react-router-dom'

function ProjectDisplay() {
  const [project, setProject] = useState({
    title: '',
    "image_url": '',
    github: '',
    description: ''
  })
  const { id } = useParams()
  
  useEffect(() => {
    fetch(`/projects/${id}`)
    .then(res => res.json())
    .then(project => setProject(() => project))
  }, [])

  return (
    <div id='project-display'>
      <div className='horizontal'>
        <span>{project['title']}</span>
        <div id='fork-links'>
            <a href={`${project['github']}`}>
              <img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'></img>
            </a>
            <a href={`${project['github']}/fork`}>
              <img src='https://user-images.githubusercontent.com/17777237/54873012-40fa5b00-4dd6-11e9-98e0-cc436426c720.png'></img>
            </a>
        </div>
      </div>
      <img src={`${project['image_url']}`}></img>
      <p>{project.description}</p>
      <Comments />
    </div>
  )
}

export default ProjectDisplay