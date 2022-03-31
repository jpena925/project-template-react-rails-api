import React, { useState, useContext } from 'react'
import Comment from '../Cards/Comment'
import PostCard from '../Cards/PostCard';
import ProjectCard from '../Cards/ProjectCard';


function ProfileFeedItem({ props, profPic }) {
  const [showComments, setShowComments] = useState(false)

  const renderComments = props.comments?.map(comment => (
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
    <div>
        {props.github ? <ProjectCard props={props} myProfPic={profPic}  profileProfPic={profPic} showComments={showComments} setShowComments={setShowComments} /> : <PostCard props={props} myProfPic={profPic}  profileProfPic={profPic} showComments={showComments} setShowComments={setShowComments} />}
    </div>
  )
}

export default ProfileFeedItem