
import React, {useContext} from 'react'
import Feed from './Feed'
import PostForm from '../PostForm.js'
import { UserContext } from '../../App'
import prof from '../../download (1).png'

function HomePage({ profPic, setProfPic }) {
  const user = useContext(UserContext)


  return (
    <>
    <PostForm profPic={profPic} />
    <button type="button" className="feed-btns">Following</button>
    <button type="button" className="feed-btns">Discover</button>
    <Feed />
    </>
  )
}

export default HomePage