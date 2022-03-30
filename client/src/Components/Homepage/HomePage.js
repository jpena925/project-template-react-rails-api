
import React, { useContext, useState } from 'react'
import Feed from './Feed'
import Discover from './Discover'
import PostForm from '../PostForm.js'
import { UserContext } from '../../App'
import prof from '../../download (1).png'

function HomePage({ profPic, setProfPic }) {
  const [feedOrDiscover, setFeedOrDiscover] = useState("feed")
  const user = useContext(UserContext)


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