import React, { useContext } from 'react'
import ProfileFeedItem from './ProfileFeedItem';
import { v4 as uuidv4 } from 'uuid';
import { UserContext } from '../../App'

function MyPost() {
  const user = useContext(UserContext)

  return (
    <div>
        {user ? user.posts.map(post => <ProfileFeedItem key={uuidv4()} props={post}/>) : null}
    </div>
  )
}

export default MyPost