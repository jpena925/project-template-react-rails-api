
import React, { useState, useContext, useEffect } from 'react'
import ReactDOM from "react-dom";
import { UserContext } from '../../App'

function UserDisplay() {
  const [bio, setBio] = useState('')
  const [isEditBio, setIsEditBio] = useState(false)
  const [featuredImage, setFeaturedImage] = useState(null)
  const [profPic, setProfPic] = useState(null)
  const [editProfPic, setEditProfPic] = useState(false)
  const user = useContext(UserContext)

  const onImageChange = e => { 
    setFeaturedImage(e.target.files[0]);
  };
  
  useEffect(() => {
    fetch('/user_images/1')
    .then(res => res.json())
    .then(data => setProfPic(data.featured_image.url))
  }, [])

  useEffect(() => {
    fetch('/users/1')
    .then(res => res.json())
    .then(data => setBio(data.bio))
  }, [])

  function updateBio() {
    fetch('/users/1', {
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
      .then(data => console.log(data))
      setIsEditBio(!bio)
    }

   const handleSubmit = e => {
      e.preventDefault();
      const formData = new FormData()
      formData.append("featured_image", featuredImage)
      fetch('/users/1', {
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
        <p id='user-name'>David Sands</p>
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
        <p><a href='https://www.linkedin.com/in/david-max-sands/'>Linkedin</a></p>
        <p><a href='https://github.com/DavidMSands'>Github</a></p>
      </div>
    </div>
  )
}

export default UserDisplay