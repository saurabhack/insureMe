import { useState } from 'react'
import LoginPage from './Pages/LoginPage'
import AddPolicyPage from './Pages/AddPolicyPage'
import Navbar from './Components/Navbar'
import Dashboard from './Pages/Dashboard'
import { Outlet } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)
  return (
    <> 
    <div className="flex">
      <Navbar />
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
      <Outlet/>
      </div>
    </div>
    </>
  )
}
export default App