import React from 'react'
import ProfileFeedItem from './ProfileFeedItem'
import PostForm from '../PostForm'

function ProfileFeed({ profPic }) {

  const data = [
    'https://i.pinimg.com/originals/e9/e6/d4/e9e6d42ae3c5168a7562368741539424.jpg',
    'https://assets.hongkiat.com/uploads/beautiful-government-websites/01.jpg',
    'https://s3.envato.com/files/224287041/screenshotpicts/00_preview.jpg'
  ]
  return (
    <>
    <div className='column1'>
      <PostForm profPic={profPic} />
      {data.map(image => (
        <ProfileFeedItem image={image}/>
      ))}
    </div>
    </>
  )
}

export default ProfileFeed