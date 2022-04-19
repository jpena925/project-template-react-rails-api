import React, { useState, useEffect } from 'react'
import ProjectDisplay from './ProjectDisplay'

function ProjectPage({profPic}) {
  console.log(profPic)
  return (
    <>
    <ProjectDisplay myProfPic={profPic}/>
    </>
  )
}

export default ProjectPage