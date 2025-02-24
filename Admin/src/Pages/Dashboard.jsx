import { FaUsers, FaClipboardList, FaPlusCircle } from "react-icons/fa";
import DashboardCard from "../Components/DashboardCard";
import { useEffect, useState } from "react";
import axios from "axios"
function Dashboard() {
  const [totalUsers,setTotalUsers]=useState()
  const [totalActivePolicy,setTotalActivePolicy]=useState()
  async function findUsers(){
    axios.get("http://localhost:3000/AllUsers").then((res)=>{
      const data=res.data.allUsers
      setTotalUsers(data.length)
      console.log("total users",totalUsers)
  }).catch(error=>{
    console.error("something went wrong",error.message)
  })
  }

  async function activePolicies(){
    axios.get("http://localhost:3000/activePolicies").then((res)=>{
      const data=res.data.allBuyers
      console.log(data)
      setTotalActivePolicy(data.length)
    }).catch(error=>{
      console.error("something went wrong",error.message)
    })
  }
  useEffect(()=>{
    findUsers()
    activePolicies()
  },[])
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard
          title="Total Users"
          count={totalUsers}
          icon={<FaUsers className="text-white text-3xl" />}
          color="bg-blue-500"
        />
        <DashboardCard
          title="Active Policies"
          count={totalActivePolicy}
          icon={<FaClipboardList className="text-white text-3xl" />}
          color="bg-green-500"
        />
        <DashboardCard
          title="New Requests"
          count="35"
          icon={<FaPlusCircle className="text-white text-3xl" />}
          color="bg-yellow-500"
        />
      </div>

      {/* Recent Activity */}
      <div className="mt-8 bg-white p-6 rounded shadow-md">
        <h3 className="text-xl font-bold mb-4">Recent User Activity</h3>
        <ul className="space-y-3">
          <li className="border-b pb-2">🚀 John Doe registered a new policy</li>
          <li className="border-b pb-2">✅ Anna Smith's claim was approved</li>
          <li className="border-b pb-2">⚡ Mark Wilson updated his policy details</li>
          <li className="border-b pb-2">📅 New policy added for business clients</li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
