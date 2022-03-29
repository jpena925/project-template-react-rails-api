import React, { useState, useEffect } from 'react'
import ProjectDisplay from './ProjectDisplay'

function ProjectPage() {
  // const [project, setProject] = useState({})

  // if (project 
  //   && Object.keys(project).length === 0
  //   && Object.getPrototypeOf(project) === Object.prototype) {
  //   const {title, description, github, image_url} = project
  // } 

  // useEffect(() => {
  //   fetch('/projects/1')
  //   .then(res => res.json())
  //   .then(project => setProject(() => project))
  // }, [])

  // console.log(project)
  // console.log(`${github}+/fork`)
  return (
    <>
    {/* <h1>{title}</h1> */}
    {/* <a href={`${github}+/fork`}></a> */}
    <ProjectDisplay />
    </>
  )
}

export default ProjectPage