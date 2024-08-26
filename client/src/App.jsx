import { useState } from 'react'
import './App.css'
import Login from './pages/login/Login'
import Register from './pages/registration/Register'
import Home from './pages/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Home />
    </div>
  )
}

export default App
