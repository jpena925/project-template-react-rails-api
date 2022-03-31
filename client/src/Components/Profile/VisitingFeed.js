import React, { useState, useEffect, createContext } from 'react'
import PostForm from '../PostForm'
import { useParams } from 'react-router-dom'
import ProfileFeedItem from './ProfileFeedItem'
import { v4 as uuidv4 } from 'uuid';



function VisitingFeed({profPic}) {
    const [projectsOrPosts, setProjectsOrPosts] = useState("projects")
    const userID = useParams().id
    const [visitedUser, setVisitedUser] = useState(null)

    useEffect(() => {
        fetch(`/users/${userID}`)
        .then(res => res.json())
        .then(data => setVisitedUser(data))
    }, [userID])

    const data = visitedUser ? [visitedUser.posts, visitedUser.projects].flat() : null
    console.log(visitedUser)
    
    const dataMap = data ? data.map(postproj => (<ProfileFeedItem key={uuidv4()} props={postproj} />)) : null

  return (
    <div>
        {dataMap}
    </div>
  )
}

export default VisitingFeed