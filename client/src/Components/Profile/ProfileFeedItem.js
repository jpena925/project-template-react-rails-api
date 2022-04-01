import React, { useState } from 'react'
import PostCard from '../Cards/PostCard';
import ProjectCard from '../Cards/ProjectCard';


function ProfileFeedItem({ props, profPic }) {
  const [showComments, setShowComments] = useState(false)

  return (
    <div>
        {props.github ? <ProjectCard props={props} myProfPic={profPic}  profileProfPic={profPic} showComments={showComments} setShowComments={setShowComments} /> : <PostCard props={props} myProfPic={profPic}  profileProfPic={profPic} showComments={showComments} setShowComments={setShowComments} />}
    </div>
  )
}

export default ProfileFeedItem