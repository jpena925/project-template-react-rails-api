import React, { useContext } from 'react'
import { useState } from 'react'
import { MdAddLink } from 'react-icons/md'
import { BiImageAdd } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'
import { UserContext } from '../App'

function PostForm({ profPic }) {
  const user = useContext(UserContext)
  const [post, setPost] = useState('')
  const [projectError, setProjectError] = useState(null)
  
  const [postCategories, setPostCategories] = useState({
    link: false,
    image: false,
    gitHub: false
  })
  const [showPostForm, setShowPostForm] = useState(true)
  const [createPost, setCreatePost] = useState('')
  const [createProject, setCreateProject] = useState({
    title: '',
    description: '',
    url: '',
    image_url: '',
    github: ''
  })

  function handleFormChange(e, type){
    setCreateProject({...createProject, [type]: e.target.value})
  }

  const handlePost = (e) => {
    e.preventDefault()
    const newObj = {
      user_id: user.id,
      text: post
    }
    fetch('/posts', {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newObj)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
      setPost('')
  }

  const handleProject = (e) => {
    e.preventDefault()
    const newObj = Object.assign({ user_id: user?.id }, createProject)
    console.log(newObj)
    fetch('/projects', {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newObj)
      })
      .then(res => {
        if(res.ok) {
          res.json().then(data => console.log(data))
          setProjectError(null)
        } else {
          res.json().then(data => setProjectError(data.errors[0]))
        }
      })
      setCreateProject({
        title: '',
        description: '',
        url: '',
        image_url: '',
        github: ''
      })
  }


  return (
    <div className="post-form-container">
      {showPostForm ? 
      <div className="post-container" >
        <div className="post-header">
        <img src={profPic} alt="user-icon" className="user-icon" />
          <h2 className="post-title" id="post-header-title">
            New post!
          </h2>
        </div>
        <form id="post-form" className="post-form" name="form">
          <div className="post-content">
            <label htmlFor="post-content" />
            <textarea name="post" id="post-content" className="post-textarea scroller" placeholder="What's the T?" value={post} onChange={(e) => setPost(e.target.value)}></textarea>
          </div>
            <div className="post-actions__widget">
              <button className="btn post-publish" onClick={handlePost}>publish</button>
              <button type="button" onClick={() => setShowPostForm(false)} className='btn'>Post a Project Instead?</button>
            </div>
        </form>
     </div>
      : <div className="post-container" >
        <div className="post-header">
        <img src={profPic} alt="user-icon" className="user-icon" />
          <h2 className="post-title" id="post-header-title">
            New project!
          </h2>
        </div>
        <form id="post-form" className="post-form" name="form">
          <input className="project-form-input" type="text" placeholder="Project Title" onChange={(e) => handleFormChange(e, 'title')} value={createProject.title}/>
          <div className="post-content">
            <label htmlFor="post-content" />
            <textarea name="post" id="post-content" className="post-textarea scroller" placeholder="Project description..." value={createProject.description} onChange={(e) => handleFormChange(e, 'description')}></textarea>
            {postCategories.link ? <input className="project-form-input" type="text" placeholder="Link to project" onChange={(e) => handleFormChange(e, 'url')} value={createProject.url}/> : null}
            {postCategories.image ? <input className="project-form-input" type="text" placeholder="Image URL" onChange={(e) => handleFormChange(e, 'image_url')} value={createProject.image_url}/> : null}
            {postCategories.gitHub ? <input className="project-form-input" type="text" placeholder="Github URL" onChange={(e) => handleFormChange(e, 'github')} value={createProject.github}/> : null}
          </div>
            <div className="post-actions__widget">
              <button className="btn post-publish" onClick={handleProject}>publish</button>
              <button type="button" onClick={() => setShowPostForm(true)} className='btn'>Post a status or link?</button>
              <button type="button" onClick={() => setPostCategories(() => ({...postCategories, link: !postCategories.link}))} className='btn post-icon'><MdAddLink /></button>
              <button type="button" onClick={() => setPostCategories(() => ({...postCategories, image: !postCategories.image}))} className='btn post-icon'><BiImageAdd /></button>
              <button type="button" onClick={() => setPostCategories(() => ({...postCategories, gitHub: !postCategories.gitHub}))} className='btn post-icon'><BsGithub /></button>
            </div>
        </form>
        <p>{projectError}</p>
      </div>
      }
    </div>
  )
}

export default PostForm