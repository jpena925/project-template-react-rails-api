import React from 'react'
import UserDisplay from './UserDisplay'
import ProfileFeed from './ProfileFeed'
import PostForm from '../PostForm.js'

function ProfilePage({ profPic, setProfPic}) {
  
  return (
    <>
    <div className='split'>
      <ProfileFeed profPic={profPic} />
      <UserDisplay profPic={profPic} setProfPic={setProfPic} />
    </div>
    </>
  )
}

export default ProfilePage