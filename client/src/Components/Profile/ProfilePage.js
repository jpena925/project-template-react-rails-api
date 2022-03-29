import React from 'react'
import UserDisplay from './UserDisplay'
import ProfileFeed from './ProfileFeed'
import PostForm from '../PostForm.js'

function ProfilePage({ user }) {

  return (
    <>
    <div></div>
    <PostForm />
    <div className='split'>
      <ProfileFeed />
      <UserDisplay />
    </div>
    </>
  )
}

export default ProfilePage