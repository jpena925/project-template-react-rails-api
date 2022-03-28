import React from 'react'

function ProfileFeedItem({ image }) {
  return (
    <div className='proj-card' >
      <img src={image} alt='project-picture' className='project-picture' />
      <div>
        <h2>My Project</h2>
        <p className='proj-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lectus sem, aliquam eu suscipit eu, ultrices sit amet ipsum. Vestibulum at fringilla urna. Sed at ipsum id libero maximus ornare. Donec rutrum dui ipsum, elementum bibendum lectus auctor ullamcorper.</p>
      </div>
    </div>
  )
}

export default ProfileFeedItem