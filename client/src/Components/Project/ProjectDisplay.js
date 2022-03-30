import React, { useState, useEffect } from 'react'
import Comments from './Comments'

function ProjectDisplay() {
  const [project, setProject] = useState({
    title: 'Project Title',
    "image_url": 'https://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif',
    github: 'https://github.com/alexislours/ACNHAPI',
    description: 'Super cool project.'
  })

  useEffect(() => {
    fetch('/projects/1')
    .then(res => res.json())
    .then(project => setProject(() => project))
  }, [])

  console.log(project)


  return (
    <>
    <h1>{project['title']}</h1>
    <a href={`${project['github']}/fork`}>
      <img src='https://user-images.githubusercontent.com/17777237/54873012-40fa5b00-4dd6-11e9-98e0-cc436426c720.png'></img>
    </a>
    <img src={`${project['image_url']}`}></img>
    <p>{project.description}</p>
    <Comments />
    </>
  )
}

export default ProjectDisplay