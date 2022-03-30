import React, { useContext, useEffect, useState } from 'react'
import ProfileFeedItem from './ProfileFeedItem'
import PostForm from '../PostForm'
import { useParams } from 'react-router-dom'
import { UserContext } from '../../App'

function ProfileFeed({ profPic }) {
  const curr_user = useContext(UserContext)
  const params = useParams()
  const [data, setData] = useState(null)

  const userID = Object.keys(params).length === 0 ? curr_user?.id : params.id
  
  useEffect(() => {
    fetch(`/users/${userID}`)
    .then(res => res.json())
    .then(data => setData([data.posts, data.projects]))
  }, [])


  // const data = [
  //   'https://i.pinimg.com/originals/e9/e6/d4/e9e6d42ae3c5168a7562368741539424.jpg',
  //   'https://assets.hongkiat.com/uploads/beautiful-government-websites/01.jpg',
  //   'https://s3.envato.com/files/224287041/screenshotpicts/00_preview.jpg'
  // ]

  const dataMap = data ? data.flat().map(image => (<ProfileFeedItem image={image}/>)) : null
  return (
    <>
    <div className='column1'>
      <PostForm profPic={profPic} />
      {dataMap}
    </div>
    </>
  )
}

export default ProfileFeed