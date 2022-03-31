import React, { useEffect, useState, useContext } from 'react'
import FeedItem from './FeedItem'
import { v4 as uuidv4 } from 'uuid';
import { UserContext } from '../../App'

function Feed({ profPic }) {
  const [feed, setFeed] = useState(null)
  const user = useContext(UserContext)

  useEffect(() => {
    if(user){
    fetch(`/users/${user.id}/feed`)
    .then(res => res.json())
    .then(data => setFeed(data))}
  }, [user])

 
  
  
 
  return (
    <div id='feed-container'>
    {feed ? feed.map(item => <FeedItem key={uuidv4()} props={item} id={item.user.id} profPic={profPic} />) : null}
    </div>
  )
}

export default Feed

