import React, { useEffect, useContext } from 'react'
import Feed from './Feed'
import PostForm from '../PostForm.js'
import { UserContext } from '../../App'
import prof from '../../download (1).png'

function HomePage({ profPic, setProfPic }) {
  const user = useContext(UserContext)

  // useEffect(() => {
  //   fetch('/user_images/' +`${user.id}`)
  //   .then(res => res.json())
  //   .then(data => {
  //     if(data.featured_image === null) {
  //       setProfPic(prof)
  //     } else {
  //       setProfPic(data.featured_image.url)
  //     }
  //   })
  // },[])

  return (
    <>
    <div>Welcome USERNAME!</div>
    <PostForm profPic={profPic} />
    <button type="button" className="toggle-btn">Following</button>
    <button type="button" className="toggle-btn">Discover</button>
    <Feed />
    </>
  )
}

export default HomePage