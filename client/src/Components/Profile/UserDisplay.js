import React, { useState } from 'react'
import prof from '../../AF2CE28E-F83F-455C-8B20-A680A14F9624_1_105_c.jpeg'

function UserDisplay() {
  const [bio, setBio] = useState('')
  const [isEditBio, setIsEditBio] = useState(false)

  function updateBio() {
    fetch('users' + `/id`, {
      method: 'PATCH',
      body: JSON.stringify({
        bio: bio,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(res => res.json())
      .then(data => console.log(data))
    }



  return (
    <div className='column2'>
      <div className='name-pic'>
        <img src={prof} alt='avatar' id='avatar'/>
        <p id='user-name'>David Sands</p>
      </div>
      <button id='follow-btn'>Follow</button>
      <div id='bio'>
        <p>69 Followers</p>
      </div>
      <div id='bio'>
        <h2>Bio:</h2>
        { isEditBio 
        ? <form>
            <textarea value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
          </form>
        : <p>{bio}</p>
        }
        { isEditBio
        ? <p onClick={() => setIsEditBio(!isEditBio)}>Save</p>
        : <p onClick={() => setIsEditBio(!isEditBio)}>Edit bio</p>
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