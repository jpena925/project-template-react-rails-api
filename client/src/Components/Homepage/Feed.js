import React, { useEffect, useState, useContext } from 'react'
import FeedItem from './FeedItem'
import { v4 as uuidv4 } from 'uuid';
import { UserContext } from '../../App'

function Feed({ profPic, feed, setFeed, newPost, newProject }) {
  const user = useContext(UserContext)

  console.log(newPost)
  useEffect(() => {
    if(user){
    fetch(`/users/${user.id}/feed`)
    .then(res => res.json())
    .then(data => {
      setFeed(data)
      console.log(data) //TODO: fetch isn't fething updated feed data even though newPost is changing and data appears on backend
    })}
  }, [user, newPost, newProject])

  return (
    <div id='feed-container'>
    {feed ? feed.map(item => <FeedItem key={uuidv4()} props={item} id={item.user.id} profPic={profPic} />) : null}
    </div>
  )
}

export default Feed

