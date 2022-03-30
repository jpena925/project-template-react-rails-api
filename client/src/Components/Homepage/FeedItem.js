import React, { useState } from 'react'
import Comment from '../Cards/Comment'
import PostCard from '../Cards/PostCard';
import ProjectCard from '../Cards/ProjectCard';

function FeedItem({ props }) {
  const [showComments, setShowComments] = useState(false)

  const renderComments = props.comments.map(comment => (
      <Comment 
        className='comment-box'
        key={comment.id} 
        text={comment.text} 
        user_id={comment.user_id} 
        name={comment.name}
      />
    )
  )
                  
  return (
    <>
    {props.github ? <ProjectCard props={props}/> : <PostCard props={props}/>}
    <button onClick={() => setShowComments(!showComments)}>Comment</button>
    {showComments ? <input type='text' placeholder='Make a comment!'/> : null}
    {showComments ? renderComments : null}
    </>
  )
}

export default FeedItem