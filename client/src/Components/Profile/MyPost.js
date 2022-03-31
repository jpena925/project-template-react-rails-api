import React, { useContext } from 'react'
import ProfileFeedItem from './ProfileFeedItem';
import { v4 as uuidv4 } from 'uuid';
import { UserContext } from '../../App'

function MyPost({ profPic }) {
  const user = useContext(UserContext)


  return (
    <div>
        {user ? user.posts.map(post => <ProfileFeedItem key={uuidv4()} profPic={profPic} props={post}/>) : null}
    </div>
  )
}

export default MyPost