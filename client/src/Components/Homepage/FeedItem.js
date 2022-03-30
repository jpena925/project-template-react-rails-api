import React, { useState} from 'react'
import Comment from '../Cards/Comment'
import PostCard from '../Cards/PostCard';
import ProjectCard from '../Cards/ProjectCard';

function FeedItem({ props }) {
  const [showComments, setShowComments] = useState(false)

  return (
    <>
    {props.github ? <ProjectCard props={props}/> : <PostCard props={props}/>}
    <button onClick={() => setShowComments(!showComments)}>Comment</button>
    {showComments ? <Comment props={props}/> : null}
    </>
  )
}

export default FeedItem