import './App.css';
import PreLogin from './Components/PreLogin'
import Login from './Components/Login'
import HomePage from './Components/Homepage/HomePage'
import ProfilePage from './Components/Profile/ProfilePage'
import ProjectPage from './Components/Project/ProjectPage'
import VisitingPage from './Components/Profile/VisitingPage'
import ErrorPage from './Components/ErrorPage'
import { Routes, Route, useLocation } from "react-router-dom"
import { useNavigate } from 'react-router';
import { useEffect, useState, createContext } from 'react'
import Navbar from './Components/Navbar';
import prof from './download (1).png'

export const UserContext = createContext()


function App() {
  const [showNavBar, setShowNavBar] = useState(false)
  const [user, setUser] = useState(null)
  const [newPost, setNewPost] = useState(null)
  const [newProject, setNewProject] = useState(null) 
  const navigate = useNavigate()
  const [profPic, setProfPic] = useState(null)
  const [pageLoaded, setPageLoaded] = useState(false)
  const state = useLocation()

  useEffect(() => {
    fetch('/me').then(r => {
      if (r.ok) {
        r.json()
        .then(user => setUser(() => user))
        .then(setPageLoaded(true))
      } else {
        r.json()
        .then(setPageLoaded(true))
      }
    }) 
  }, [newPost, newProject])



  useEffect(() => {
    if(user) {
      setShowNavBar(true)
      setPageLoaded(true)
    }
  }, [user])

  function handleLogin(user) {
    setShowNavBar(true)
    setUser(() => user)
    const path = state?.pathname 
    if (path === '/login') {
      navigate('/homepage')
    } 
  }

  function handleLogout() {
    setShowNavBar(false)
    setUser(null)
    navigate('./login')
  }

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
  }, [user])

  if (!pageLoaded) {
    return <h1></h1>
  }

  return (
    <UserContext.Provider value={user}>
      {showNavBar ? <Navbar onLogout={handleLogout} /> : null}
      
        {user ? 
          <Routes>
          <Route 
            exact path="/homepage" 
            element={<HomePage profPic={profPic} setProfPic={setProfPic} newPost={newPost} newProject={newProject} setNewPost={setNewPost} setNewProject={setNewProject} />} 
          />
          <Route 
            exact path="/profilepage" 
            element={<ProfilePage profPic={profPic} setProfPic={setProfPic} setNewPost={setNewPost} setNewProject={setNewProject}/>} 
          />
          <Route 
            exact path="/profilepage/:id" 
            element={<VisitingPage profPic={profPic} setProfPic={setProfPic}/>} 
          />
          <Route 
            exact path="/projectpage/:id" 
            element={<ProjectPage />}
          />
          <Route 
            exact path="/notfound" 
            element={<ErrorPage user={user} />} 
          />
         </Routes> 
         :  
         <Routes>
          <Route exact path="/" element={<PreLogin />} />
          <Route exact path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path='*' element={<Login onLogin={handleLogin} />}/>
         </Routes>}
    </UserContext.Provider>
  );
}

export default App;



