
import React, { useState } from 'react'
import Feed from './Feed'
import Discover from './Discover'
import PostForm from '../PostForm.js'

function HomePage({ profPic, setProfPic }) {
  const [feedOrDiscover, setFeedOrDiscover] = useState("feed")

  return (
    <>
    <PostForm profPic={profPic} />
    <button type="button" className="feed-btns" onClick={() => setFeedOrDiscover("feed")}>Feed</button>
    <button type="button" className="feed-btns" onClick={() => setFeedOrDiscover("discover")}>Discover</button>
    {feedOrDiscover == "feed" ? <Feed /> : <Discover />}
    </>
  )
}

export default HomePage