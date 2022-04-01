import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProfileFeedItem from './ProfileFeedItem'
import { v4 as uuidv4 } from 'uuid';



function VisitingFeed({profPic}) {
    const userID = useParams().id
    const [visitedUser, setVisitedUser] = useState(null)

    useEffect(() => {
        fetch(`/users/${userID}`)
        .then(res => res.json())
        .then(data => setVisitedUser(data))
    }, [userID])

    const data = visitedUser ? [visitedUser.posts, visitedUser.projects].flat() : null
    
    const dataMap = data ? data.map(postproj => (<ProfileFeedItem key={uuidv4()} props={postproj} profPic={profPic} />)) : null
    
  return (
    <div>
        {dataMap}
    </div>
  )
}

export default VisitingFeed