import React, { useEffect, useState } from 'react'
import FeedItem from './FeedItem'
import { v4 as uuidv4 } from 'uuid';

function Feed() {
  const [feed, setFeed] = useState(null)

  //fetch to projects and posts for all that the user is following
  useEffect(() => {
    fetch('/users/2/feed')
    .then(res => res.json())
    .then(data => setFeed(data.projects_and_posts))
  }, [])

  console.log(feed)
  const feedMap = feed ? feed.map(post => <FeedItem key={uuidv4()} props={post} />) : null
 
  return (
    <>
    {feedMap}
    </>
  )
}

export default Feed

