
import React, { useState } from 'react'
import Feed from './Feed'
import Discover from './Discover'
import PostForm from '../PostForm.js'
import { AiOutlineConsoleSql } from 'react-icons/ai'

function HomePage({ profPic, setProfPic, newPost, newProject, setNewPost, setNewProject }) {
  const [feedOrDiscover, setFeedOrDiscover] = useState("feed")
  const [feed, setFeed] = useState(null)

  
  return (
    <>
    <PostForm profPic={profPic} setNewPost={setNewPost} setNewProject={setNewProject}/>
    <div class="feed-discover">
      <button type="button" className="feed-btns" onClick={() => setFeedOrDiscover("feed")}>Feed</button>
      <button type="button" className="feed-btns" onClick={() => setFeedOrDiscover("discover")}>Discover</button>
    </div>
    {feedOrDiscover == "feed" ? <Feed profPic={profPic} feed={feed} newPost={newPost} newProject={newProject} setFeed={setFeed}/> : <Discover profPic={profPic} />}
    </>
  )
}

export default HomePage