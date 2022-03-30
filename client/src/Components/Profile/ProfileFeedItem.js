import React, { useState } from 'react'
import Comment from '../Cards/Comment'
import PostCard from '../Cards/PostCard';
import ProjectCard from '../Cards/ProjectCard';

function ProfileFeedItem({ props }) {
  const [showComments, setShowComments] = useState(false)

//   const commentsMap = props.comments.map(comment => (
//     <Comment 
//       className='comment-box'
//       key={comment.id} 
//       text={comment.text} 
//       user_id={comment.user_id} 
//       name={comment.name}
//     />
//   )
// )

  return (
    <div>
        {props.github ? <ProjectCard props={props}/> : <PostCard props={props}/>}
        <button onClick={() => setShowComments(!showComments)}>Comment</button>
        {showComments ? <input type='text' placeholder='Make a comment!'/> : null}
        {/* {showComments ? commentsMap : null} */}
    </div>
  )
}

export default ProfileFeedItem