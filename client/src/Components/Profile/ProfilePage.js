import React from 'react'
import UserDisplay from './UserDisplay'
import ProfileFeed from './ProfileFeed'
import PostForm from '../PostForm.js'

function ProfilePage() {
  return (
    <>
    <div className='split'>
      <ProfileFeed />
      <UserDisplay />
    </div>
    </>
  )
}

export default ProfilePage