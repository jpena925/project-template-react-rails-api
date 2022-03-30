import React, { useState, useEffect } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

function Search() {
    const [search, setSearch] = useState('')
    const [users, setUsers] = useState([])
    const navigate = useNavigate();

  
    useEffect(() => {
        fetch('/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])


    //need to error handle if no match and search bar not working anywhere except home page
    function handleSubmitSearch(e){
        e.preventDefault()
        let userMatch = users.filter(user => user.name.toLowerCase() === search.toLowerCase())[0]
        navigate(`/profilepage/${userMatch.id}`)
    }

  
  return (
    <div id="search-container" >
    <form id="search-form" className='input-field' onSubmit={handleSubmitSearch}>
        <label htmlFor="search-bar"></label>
        <i className='icon'><BsSearch /></i>
        <input type="text"  placeholder="Search users..." className='field2' onChange={(e) => setSearch(e.target.value)} value={search}/>
    </form>
    </div>
  )
}

export default Search