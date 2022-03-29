import './App.css';
import PreLogin from './Components/PreLogin'
import Login from './Components/Login'
import HomePage from './Components/Homepage/HomePage'
import ProfilePage from './Components/Profile/ProfilePage'
import ProjectPage from './Components/Project/ProjectPage'
import { Routes, Route } from "react-router-dom"
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar';

function App() {
  const [showNavBar, setShowNavBar] = useState(false)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetch('/me').then(r => {
      if (r.ok) {
        r.json()
        .then(user => setUser(() => user))
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

  return (
    <div>
      {showNavBar ? <Navbar onLogout={handleLogout} /> : null}
      <Routes>
        <Route exact path="/" element={<PreLogin />} />
        <Route exact path="/login" element={<Login onLogin={handleLogin} />} />
        <Route exact path="/homepage" element={<HomePage />} />
        <Route exact path="/profilepage" element={<ProfilePage user={user}/>} />
        <Route exact path="/profilepage/:username" element={<ProfilePage />} />
        <Route exact path="/projectpage/:id" element={<ProjectPage />} />  
     </Routes>
    </div>
  );
}

export default App;