
import React, { useState } from 'react'
import Feed from './Feed'
import Discover from './Discover'
import PostForm from '../PostForm.js'

function HomePage({ profPic, setProfPic }) {
  const [feedOrDiscover, setFeedOrDiscover] = useState("feed")

  return (
    <>
    <PostForm profPic={profPic} />
    <div class="feed-discover">
      <button type="button" className="feed-btns" onClick={() => setFeedOrDiscover("feed")}>Feed</button>
      <button type="button" className="feed-btns" onClick={() => setFeedOrDiscover("discover")}>Discover</button>
    </div>
    {feedOrDiscover == "feed" ? <Feed profPic={profPic} /> : <Discover profPic={profPic} />}
    </>
  )
}

export default HomePage