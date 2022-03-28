import React from 'react'
import Feed from './Feed'
import PostForm from '../PostForm.js'

function HomePage() {
  return (
    <>
    <div>Welcome USERNAME!</div>
    <PostForm />
    <button type="button" className="toggle-btn">Following</button>
    <button type="button" className="toggle-btn">Discover</button>
    <Feed />
    </>
  )
}

export default HomePage