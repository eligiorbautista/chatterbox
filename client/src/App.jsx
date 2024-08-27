import { useState } from 'react'
import './App.css'
import Login from './pages/login/Login'
import Register from './pages/registration/Register'
import Home from './pages/home/Home'
import { Routes, Route } from 'react-router-dom'
import EmailForm from './pages/passwordreset/EmailForm'
import NewPassword from './pages/passwordreset/NewPassword'
import { useAuthContext } from './context/AuthContext'
import { Navigate } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  const { authUser, setAuthUser } = useAuthContext();


  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={authUser ? <Navigate to="/" /> : <Register />} />

        <Route path="/account-recovery" element={<EmailForm />} />
        <Route path="/change-password" element={<NewPassword />} />

      </Routes>
    </div>
  )
}

export default App
