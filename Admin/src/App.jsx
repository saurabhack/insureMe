import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './Pages/LoginPage'
import AddPolicyPage from './Pages/AddPolicyPage'
import Navbar from './Components/Navbar'
import Dashboard from './Pages/Dashboard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <div className="flex">
      {/* Sidebar */}
      <Navbar />
      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
      {/* <AddPolicyPage/> */}
      <Dashboard/>
      </div>
    </div>
    </>
  )
}

export default App
