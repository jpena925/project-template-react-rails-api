import React, { useContext } from 'react'
import ProfileFeedItem from './ProfileFeedItem';
import { v4 as uuidv4 } from 'uuid';
import { UserContext } from '../../App'

function MyProject({profPic}) {
  const user = useContext(UserContext)

  const sortedUserProjects = user?.projects.sort((a,b) => b.created_at > a.created_at ? 1: -1)

  return (
    <div>
      {user.projects.map(project => <ProfileFeedItem key={uuidv4()} props={project} profPic={profPic}/>)}
    </div>
  )
}

export default MyProject