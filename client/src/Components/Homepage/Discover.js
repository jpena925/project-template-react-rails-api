import React, { useEffect, useState, useContext } from 'react'
import FeedItem from './FeedItem'
import { v4 as uuidv4 } from 'uuid';
import { UserContext } from '../../App'

function Discover({ profPic }) {
  const [discover, setDiscover] = useState(null)
  const user = useContext(UserContext)

  useEffect(() => {
    if(user){
    fetch(`/users/${user.id}/discover`)
    .then(res => res.json())
    .then(data => setDiscover(data))}
  }, [user])

  return (
    <div>
       {discover ? discover.map(item => <FeedItem key={uuidv4()} id={item.user.id} props={item} profPic={profPic}/>) : null} 
    </div>
  )
}

export default Discover