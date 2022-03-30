import React, { useState } from 'react'
import MyProject from './MyProject'
import MyPost from './MyPost'
import PostForm from '../PostForm'

function ProfileFeed({ profPic}) {
  const [projectsOrPosts, setProjectsOrPosts] = useState("projects")


  return (
    <div className='column1'>
      <PostForm profPic={profPic} />
      {/* TODO: change "feed-btns" classname to be more generic (in HomePage too) */}
      <button type="button" className="feed-btns" onClick={() => setProjectsOrPosts("projects")}>My Projects</button>
      <button type="button" className="feed-btns" onClick={() => setProjectsOrPosts("posts")}>My Posts</button>
      {projectsOrPosts == "projects" ? <MyProject /> : <MyPost />}
    </div>
  )
}

export default ProfileFeed