import { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import axios from "axios";

function UserTable() {
  const [users,setUsers]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/AllUsers").then((res)=>{
      console.log(res)
      setUsers(res.data.allUsers)
    }).catch((error)=>{
      console.error("something went wrong",error.message)
    })
  },[])
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="border-b hover:bg-gray-100">
              <td className="p-3">{user._id}</td>
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3 flex gap-3">
                <button className="text-blue-500 hover:text-blue-700">
                  <FaEye />
                </button>
                <button className="text-green-500 hover:text-green-700">
                  <FaEdit />
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
