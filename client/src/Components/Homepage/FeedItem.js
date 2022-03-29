import React, { useEffect, useState } from 'react'
import Comment from './Comment'

function FeedItem({ props }) {
  const [showComments, setShowComments] = useState(false)
  const [comments, setComments] = useState(null)

  useEffect(() => {
    fetch(`/projects/1`)
    .then(res => res.json())
    .then(data => setComments(data.comments))
  }, [props])

  const commentsMap = comments ? 
    comments.map(comment => <Comment 
                            className='comment-box'
                            key={comment.id} 
                            text={comment.text} 
                            user_id={comment.user_id} 
                            name={comment.name} />) 
                            : null

  return (
    <>
    <div className='proj-card' >
      <img src="" alt='project' className='project-picture' />
      <div>
        <h2>My Project</h2>
        <p className='proj-p'>ultrices sit amet ipsum. Vestibulum at fringilla rum dui ipsum, elementum bibendum lectus auctor ullamcorper.</p>
      </div>
    </div>
    <button onClick={() => setShowComments(!showComments)}>Comment</button>
    {showComments ? <input type='text' placeholder='Make a comment!'/> : null}
    {showComments ? commentsMap : null}
    </>
  )
}

export default FeedItem