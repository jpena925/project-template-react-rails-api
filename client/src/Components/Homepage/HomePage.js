
import React, { useState } from 'react'
import Feed from './Feed'
import Discover from './Discover'
import PostForm from '../PostForm.js'
import prof from '../../download (1).png'

function HomePage({ profPic, setProfPic }) {
  const [feedOrDiscover, setFeedOrDiscover] = useState("feed")


  return (
    <>
    <div>Welcome USERNAME!</div>
    <PostForm profPic={profPic} />
    <button type="button" className="feed-btns" onClick={() => setFeedOrDiscover("feed")}>Feed</button>
    <button type="button" className="feed-btns" onClick={() => setFeedOrDiscover("discover")}>Discover</button>
    {feedOrDiscover == "feed" ? <Feed /> : <Discover />}
    </>
  )
}

export default HomePage