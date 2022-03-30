import './App.css';
import PreLogin from './Components/PreLogin'
import Login from './Components/Login'
import HomePage from './Components/Homepage/HomePage'
import ProfilePage from './Components/Profile/ProfilePage'
import ProjectPage from './Components/Project/ProjectPage'
import VisitingPage from './Components/Profile/VisitingPage'
import { Routes, Route } from "react-router-dom"
import { useNavigate } from 'react-router';
import { useEffect, useState, createContext } from 'react'
import Navbar from './Components/Navbar';
import prof from './download (1).png'

export const UserContext = createContext()


function App() {
  const [showNavBar, setShowNavBar] = useState(false)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  const [profPic, setProfPic] = useState(null)

  useEffect(() => {
    fetch('/me').then(r => {
      if (r.ok) {
        r.json()
        .then(user => setUser(() => user))
        setShowNavBar(true)
      }
    })
  }, [])
  

  function handleLogin(user) {
    setShowNavBar(true)
    setUser(() => user)
    navigate('./homepage')
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


  return (
    <UserContext.Provider value={user}>
      {showNavBar ? <Navbar onLogout={handleLogout} /> : null}
        <Routes>
          <Route exact path="/" element={<PreLogin />} />
          <Route exact path="/login" element={<Login onLogin={handleLogin} />} />
          <Route exact path="/homepage" element={<HomePage user={user} profPic={profPic} setProfPic={setProfPic} />} />
          <Route exact path="/profilepage" element={<ProfilePage user={user} profPic={profPic} setProfPic={setProfPic} />} />
          <Route exact path="/profilepage/:id" element={<VisitingPage user={user} profPic={profPic} setProfPic={setProfPic}/>} />
          <Route exact path="/projectpage/:id" element={<ProjectPage user={user} />} />  
        </Routes>
    </UserContext.Provider>
  );
}

export default App;