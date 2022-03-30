
import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../../App'
import prof from '../../download (1).png'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'
import { SiMedium } from 'react-icons/si'



function UserDisplay({ profPic, setProfPic}) {
  const [bio, setBio] = useState('')
  const [isEditBio, setIsEditBio] = useState(false)
  const [featuredImage, setFeaturedImage] = useState(null)
  // const [profPic, setProfPic] = useState(null)
  const [editProfPic, setEditProfPic] = useState(false)
  const [isEditLinks, setIsEditLinks] = useState(false)
  const user = useContext(UserContext)
  const [links, setLinks] = useState({
      linkedin: '',
      github: '',
      blog: '',
  })

  const onImageChange = e => { 
    setFeaturedImage(e.target.files[0]);
  };
  
  useEffect(() => {
    if(user) {
    fetch(`/user_images/${user.id}`)
    .then(res => res.json())
    .then(data => {
      if(data.featured_image === null) {
        setProfPic(prof)
      } else {
        setProfPic(data.featured_image.url)
      }
    })}
  },[])


  useEffect(() => {
    if(user){
    fetch(`/users/${user.id}`)
    .then(res => res.json())
    .then(data => setBio(data.bio))}
  }, [])

  function updateBio() {
    fetch(`/users/${user.id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        bio: bio,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Accept': 'application/json'
      },
    })
      .then(res => res.json())
      .then(data => setBio(data.bio))
      setIsEditBio(!bio)
    }

    function updateLinks() {
      fetch('/users/' + `${user.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          linkedin: links.linkedin,
          github: links.github,
          blog: links.blog
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Accept': 'application/json'
        },
      })
        .then(res => res.json())
        .then(data => console.log(data))
        setIsEditLinks(!isEditLinks)
      }

   const handleSubmit = e => {
      e.preventDefault();
      const formData = new FormData()
      formData.append("featured_image", featuredImage)
      fetch(`/users/${user.id}`, {
        method: 'PUT',
        body: formData
      })
      .then(res => res.json())
      .then(data => {
        setProfPic(data.featured_image.url)
        console.log(data)
      
      })
      setEditProfPic(false)
    }

  return (
    <div className='column2'>
      <div className='name-pic'>
        <img src={profPic} alt='avatar' id='avatar'/>
        <p id='user-name'>{user?.name}</p>
      </div>
      { editProfPic 
      ? <form onSubmit={handleSubmit} id='upload'>
          <input type="file" accept="image/*" multiple={false} onChange={onImageChange} /><br/>
          <input type="submit" value="Submit"></input>
        </form>
      : null
      } 
      <p onClick={() => setEditProfPic(!editProfPic)} id='edit-prof'>Edit Image</p>
      {/* <button id='follow-btn'>Follow</button> */}
      <div id='bio'>
        <p>69 Followers</p>
      </div>
      <div id='bio'>
        <h2>Bio:</h2>
        { isEditBio 
        ? <form>
            <textarea value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
          </form>
        : <p id='bio-text'>{bio}</p>
        }
        { isEditBio
        ? <div className='bio-btns'>
            <p onClick={updateBio}>Save</p>
            <p onClick={() => setIsEditBio(!isEditBio)}>Cancel</p>
          </div>
        : <p onClick={() => setIsEditBio(!isEditBio)} className='bio-btns'>Edit bio</p>
        }
      </div>
      <div id='links'>
        <h2>My links:</h2>
        { isEditLinks
        ? <form>
            <i><AiFillLinkedin /></i>
            <input type='url' name='linkedin' placeholder='Linkedin'  value={links.linkedin} onChange={(e) => setLinks({...links, linkedin: e.target.value})}/><br/>
            <i><BsGithub /></i>
            <input type='url' name='github' placeholder='Github'  value={links.github} onChange={(e) => setLinks({...links, github: e.target.value})}/><br/>
            <i><SiMedium /></i>
            <input type='url' name='blog' placeholder='Blog'  value={links.blog} onChange={(e) => setLinks({...links, blog: e.target.value})} />
          </form>
        : <ul id='links-ul'>
            {links.linkedin === '' ? null : <li><AiFillLinkedin /> <a href={links.linkedin} target='_blank' >Linkedin</a></li>}
            {links.github === '' ? null : <li><BsGithub /> <a href={links.github} target='_blank' >Github</a></li>}
            {links.blog === '' ? null : <li><SiMedium /> <a href={links.blog} target='_blank' >Blog</a></li>}
          </ul> 
        }
        { isEditLinks 
        ? <div className='bio-btns'>
            <p onClick={updateLinks}>Save</p>
            <p onClick={() => setIsEditLinks(!isEditLinks)}>Cancel</p>
          </div>
        :  <p onClick={() => setIsEditLinks(!isEditLinks)} className='bio-btns'>Edit links</p>
        }
      </div>
    </div>
  )
}

export default UserDisplay