import React from 'react'
import { useState } from 'react'
import { MdAddLink } from 'react-icons/md'
import { BiImageAdd } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'
import icon from '../placeholdericon.jpeg'

function PostForm() {
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
    github_url: ''
  })

  function handleFormChange(e, type){
    setCreateProject({...createProject, [type]: e.target.value})
  }


  return (
    <div className="post-form-container">
    <img src={icon} alt="user-icon" className="user-icon" />
      {showPostForm ? 
      <form className="post-form">
        <input className="post-form-input" placeholder="Whats the T?" onChange={(e) => setCreatePost(e.target.value)} value={createPost}/>
        <input type="submit" value="Post" />
        <button type="button" onClick={() => setShowPostForm(false)}>Post a Project Instead?</button>
      </form>
      :
      <form className="project-form">
        <input className="project-form-input" type="text" placeholder="Project Title" onChange={(e) => handleFormChange(e, 'title')} value={createProject.title}/>
        <input className="project-form-input" id="project-form-description" type="text" placeholder="Description" onChange={(e) => handleFormChange(e, 'description')} value={createProject.description} />
        {postCategories.link ? <input className="project-form-input" type="text" placeholder="Link to project" onChange={(e) => handleFormChange(e, 'url')} value={createProject.url}/> : null}
        {postCategories.image ? <input className="project-form-input" type="text" placeholder="Image URL" onChange={(e) => handleFormChange(e, 'image_url')} value={createProject.image_url}/> : null}
        {postCategories.gitHub ? <input className="project-form-input" type="text" placeholder="Github URL" onChange={(e) => handleFormChange(e, 'github_url')} value={createProject.github_url}/> : null}
        <div className= "add-buttons">
        <button className="add-button" type="button" onClick={() => setPostCategories(() => ({...postCategories, link: !postCategories.link}))}><MdAddLink /></button>
        <button className="add-button" type="button" onClick={() => setPostCategories(() => ({...postCategories, image: !postCategories.image}))}><BiImageAdd /></button>
        <button className="add-button" type="button" onClick={() => setPostCategories(() => ({...postCategories, gitHub: !postCategories.gitHub}))}><BsGithub /></button>
        </div>
        <input type="submit" value="Post" />
        <button type="button" onClick={() => setShowPostForm(true)}>Post a status or link?</button>
      </form>
      }
    </div>
  )
}

export default PostForm