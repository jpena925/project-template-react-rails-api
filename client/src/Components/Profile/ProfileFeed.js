import React, { useState } from 'react'
import MyProject from './MyProject'
import MyPost from './MyPost'
import PostForm from '../PostForm'

function ProfileFeed({ profPic}) {
  const [projectsOrPosts, setProjectsOrPosts] = useState("projects")

  // const curr_user = useContext(UserContext)
  // const params = useParams()
  // const [data, setData] = useState(null)

  // const userID = Object.keys(params).length === 0 ? curr_user?.id : params.id
  
  // useEffect(() => {
  //   fetch(`/users/${userID}`)
  //   .then(res => res.json())
  //   .then(data => setData([data.posts, data.projects]))
  // }, [])

  // const dataMap = data ? data.flat().map(image => (<ProfileFeedItem image={image}/>)) : null
  return (
    <div className='column1'>
      <PostForm profPic={profPic} />
      {/* TODO: change "feed-btns" classname to be more generic (in HomePage too) */}
      <button type="button" className="feed-btns" onClick={() => setProjectsOrPosts("projects")}>My Projects</button>
      <button type="button" className="feed-btns" onClick={() => setProjectsOrPosts("posts")}>My Posts</button>
      {projectsOrPosts == "projects" ? <MyProject /> : <MyPost />}
    </div>
  )
}

export default ProfileFeed