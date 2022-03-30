import React, { useContext } from 'react'
import ProfileFeedItem from './ProfileFeedItem';
import { v4 as uuidv4 } from 'uuid';
import { UserContext } from '../../App'

function MyProject() {
  const user = useContext(UserContext)


  return (
    <div>
      {user ? user.projects.map(project => <ProfileFeedItem key={uuidv4()} props={project}/>) : null}
    </div>
  )
}

export default MyProject