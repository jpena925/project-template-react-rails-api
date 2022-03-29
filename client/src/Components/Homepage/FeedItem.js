import React, { useEffect, useState } from 'react'
import Comment from './Comment'

function FeedItem({ props }) {
  const [showComments, setShowComments] = useState(false)
  const [comments, setComments] = useState(null)

  

  let renderProject;
  let renderPost;


  if(props.github){
    renderProject = 
      <div className='proj-card' >
        <img src={props.image_url} alt='project' className='project-picture' />
          <div>
            <h2>{props.title}</h2>
            {props.users.map(user => <span className="project-users">{user.name}</span>)}
            <p className='proj-p'>{props.description}</p>
            <a href={props.github}>Github</a>
          </div>
      </div>
  } else {
    console.log('POST')
  }

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
    {renderProject ? renderProject : null}
    <button onClick={() => setShowComments(!showComments)}>Comment</button>
    {showComments ? <input type='text' placeholder='Make a comment!'/> : null}
    {showComments ? commentsMap : null}
    </>
  )
}

export default FeedItem