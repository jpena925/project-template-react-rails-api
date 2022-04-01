import React, { useContext } from 'react'
import ProfileFeedItem from './ProfileFeedItem';
import { v4 as uuidv4 } from 'uuid';
import { UserContext } from '../../App'

function MyPost({ profPic }) {
  const user = useContext(UserContext)

  const sortedUserPosts = user?.posts.sort((a,b) => b.created_at > a.created_at ? 1: -1)

  return (
    <div>
        {sortedUserPosts.map(post => <ProfileFeedItem key={uuidv4()} profPic={profPic} props={post}/>)}
    </div>
  )
}

export default MyPost