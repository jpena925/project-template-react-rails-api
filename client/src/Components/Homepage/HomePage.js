
import React from 'react'
import Feed from './Feed'
import PostForm from '../PostForm.js'

function HomePage({ profPic, setProfPic }) {


  return (
    <>
    <div>Welcome USERNAME!</div>
    <PostForm profPic={profPic} />
    <button type="button" className="feed-btns">Following</button>
    <button type="button" className="feed-btns">Discover</button>
    <Feed />
    </>
  )
}

export default HomePage