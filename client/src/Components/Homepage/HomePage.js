import React, {useContext} from 'react'
import Feed from './Feed'
import PostForm from '../PostForm.js'

function HomePage() {

  return (
    <>
    <div>Welcome USERNAME!</div>
    <PostForm />
    <button type="button" className="feed-btns">Following</button>
    <button type="button" className="feed-btns">Discover</button>
    <Feed />
    </>
  )
}

export default HomePage