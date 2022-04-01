import React, { useState} from 'react'
import PostCard from '../Cards/PostCard';
import ProjectCard from '../Cards/ProjectCard';

function FeedItem({ props, profPic, id }) {
  const [showComments, setShowComments] = useState(false)

  return (
    <>
    {props.github ? <ProjectCard props={props} id={id} showComments={showComments} setShowComments={setShowComments} myProfPic={profPic} /> : <PostCard id={id} props={props} myProfPic={profPic} showComments={showComments} setShowComments={setShowComments} />}
    </>
  )
}

export default FeedItem