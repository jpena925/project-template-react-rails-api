import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import prof from '../../download (1).png'
import VisitingFeed from './VisitingFeed'
import ProfileFeed from './ProfileFeed'
import { UserContext } from '../../App'

function VisitingPage() {
    const params = useParams().id
    const [visitedUser, setVisitedUser] = useState(null)
    const [profPic, setProfPic] = useState(null)
    const user = useContext(UserContext)
    const [isFollow, setIsFollow] = useState(false)
    const [relationshipId, setRelationshipId] = useState()
    const [followerCount, setFollowerCount] = useState()

    
    useEffect(() => {
        fetch(`/users/${params}`)
        .then(res => res.json())
        .then(user => setVisitedUser(() => user))
    }, [])


    useEffect(() => {
      fetch(`/relationships_check/${user?.id}, ${visitedUser?.id}`)
      .then(res => res.json())
      .then(data => {
        if(data.length === 0) {
          setIsFollow(false)
        } else {
          setIsFollow(true)
          setRelationshipId(data[0]?.id)
        }
      })
    }, [user, visitedUser, isFollow])

    useEffect(() => {
      if(user) {
        fetch(`/relationships/${visitedUser?.id}`)
        .then(res => res.json())
        .then(data => setFollowerCount(data.length)
        )}
    }, [user, visitedUser, isFollow])

    useEffect(() => {
        if(visitedUser) {
        fetch(`/user_images/${params}`)
        .then(res => res.json())
        .then(data => {
          if(data.featured_image === null) {
            setProfPic(prof)
          } else {
            setProfPic(data.featured_image.url)
          }
        })}
      }, [visitedUser])

    const handleFollow = () => {
      const newObj = {
        follower_id: user.id,
        followee_id: visitedUser.id
      }
      fetch('/relationships', {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newObj)
        })
        .then(res => res.json())
        .then(data => {
        })
        setIsFollow(true)
    }

    const handleUnfollow = () => {
      fetch(`/relationships/${relationshipId}`, {
        method: 'DELETE',
      })
      setIsFollow(false)
    }

    return (
    <div className='split'>
    <VisitingFeed profPic={profPic} />
      <div className='column2'>
        <div className='name-pic'>
          <img src={profPic} alt='avatar' id='avatar'/>
          <p id='user-name'>{visitedUser?.name}</p>
        </div>
        { isFollow 
        ? <button id='follow-btn' onClick={handleUnfollow}>Unfollow</button>
        : <button id='follow-btn' onClick={handleFollow}>Follow</button>
        }
        <div id='bio'>
          <p>{followerCount} Followers</p>
        </div>
        <div id='bio'>
          <h2>Bio:</h2>
            <p id='bio-text'>{visitedUser?.bio}</p>
        </div>
        <div id='links'>
          <h2>My links:</h2>
          <p><a href={visitedUser?.linkedin}>Linkedin</a></p>
          <p><a href={visitedUser?.github}>Github</a></p>
          <p><a href={visitedUser?.blog}>Blog</a></p>
        </div>
      </div>
    </div>
    )
  }

export default VisitingPage