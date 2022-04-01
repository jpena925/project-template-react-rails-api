import React from 'react'
import UserDisplay from './UserDisplay'
import ProfileFeed from './ProfileFeed'

function ProfilePage({ profPic, setProfPic, setNewPost, setNewProject}) {
  return (
    <>
    <div className='split'>
      <ProfileFeed profPic={profPic} setNewPost={setNewPost} setNewProject={setNewProject} />
      <UserDisplay profPic={profPic} setProfPic={setProfPic} />
    </div>
    </>
  )
}

export default ProfilePage