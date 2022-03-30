import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import prof from '../../download (1).png'
import ProfileFeed from './ProfileFeed'

function VisitingPage() {
    const params = useParams().id
    const [user, setUser] = useState(null)
    const [profPic, setProfPic] = useState(null)

    useEffect(() => {
        fetch(`/users/${params}`)
        .then(res => res.json())
        .then(user => setUser(() => user))
    }, [])

    useEffect(() => {
        if(user) {
        fetch(`/user_images/${params}`)
        .then(res => res.json())
        .then(data => {
          if(data.featured_image === null) {
            setProfPic(prof)
          } else {
            setProfPic(data.featured_image.url)
          }
        })}
      }, [user])

  
    return (
    <div className='split'>
    <ProfileFeed profPic={profPic} />
      <div className='column2'>
        <div className='name-pic'>
          <img src={profPic} alt='avatar' id='avatar'/>
          <p id='user-name'>{user?.name}</p>
        </div>
        <button id='follow-btn'>Follow</button>
        <div id='bio'>
          <p>69 Followers</p>
        </div>
        <div id='bio'>
          <h2>Bio:</h2>
            <p id='bio-text'>{user?.bio}</p>
        </div>
        <div id='links'>
          <h2>My links:</h2>
          <p><a href={user?.linkedin}>Linkedin</a></p>
          <p><a href={user?.github}>Github</a></p>
          <p><a href={user?.blog}>Blog</a></p>
        </div>
      </div>
    </div>
    )
  }

export default VisitingPage