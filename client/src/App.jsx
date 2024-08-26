import { useState } from 'react'
import './App.css'
import Login from './pages/login/Login'
import Register from './pages/registration/Register'
import Home from './pages/home/Home'
import { Routes, Route } from 'react-router-dom'
import EmailForm from './pages/passwordreset/EmailForm'
import NewPassword from './pages/passwordreset/NewPassword'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/account-recovery" element={<EmailForm />} />
        <Route path="/change-password" element={<NewPassword />} />

      </Routes>
    </div>
  )
}

export default App
