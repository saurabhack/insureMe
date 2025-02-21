import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../contextAPI/context";
import { useEffect, useState } from "react";
import axios from "axios";



function PolicyDetails() {
  const [policy,setPolicy]=useState([])
  const {id}=useParams()
  const {user}=useAuth()
  const navigate=useNavigate()
  function onClickHandle(){
    if(!user){
      navigate('/login')
    }else{
      navigate('/confirmation')
    }
  }
  if (!policy) {
    return <h2 className="text-center text-xl mt-10">Policy not found</h2>;
  }
  

  useEffect(()=>{
    async function getDataById(id){
      const response=await axios.get(`http://localhost:3000/getPolicyById/${id}`)
      setPolicy(response.data.data)
    }
    getDataById(id)
  },[])
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Insurance Image */}
          <img
            src={policy.image}
            alt={policy.name}
            className="w-full h-auto max-h-[400px] object-cover rounded-lg shadow-md"
          />

          {/* Insurance Details */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{policy.name}</h1>
            <p className="text-gray-600 mt-2">{policy.description}</p>

            <div className="mt-4 p-4 border rounded-lg bg-gray-50">
              <p className="text-lg font-semibold">Coverage:</p>
              <p className="text-gray-700">{policy.coverage}</p>

              <p className="text-lg font-semibold mt-3">Premium Cost:</p>
              <p className="text-gray-700">{policy.premium}</p>

              <p className="text-lg font-semibold mt-3">Terms & Conditions:</p>
              <p className="text-gray-700">{policy.terms}</p>
            </div>
            <button

              onClick={onClickHandle}
              className="mt-6 w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PolicyDetails;
