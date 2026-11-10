import React from 'react'
import { NavLink } from 'react-router-dom'
import { BuildingComplex, Truck, Users, Package, Headset } from "lucide-react"

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2 border-gray-200'>
      <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>

        <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l" to={"/companies"}>

          <img className='w-5 h-5' src={BuildingComplex} alt="" />

          <p className='hidden md:block'>Companies</p>

        </NavLink>

        <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l" to={"/drivers"}>

          <img className='w-5 h-5' src={Truck} alt="" />

          <p className='hidden md:block'>Drivers</p>

        </NavLink>

        <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l" to={"/workers"}>

          <img className='w-5 h-5' src={Headset} alt="" />

          <p className='hidden md:block'>Workers</p>

        </NavLink>

        <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l" to={"/orders"}>

          <img className='w-5 h-5' src={Package} alt="" />

          <p className='hidden md:block'>Orders</p>

        </NavLink>

        <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l" to={"/customers"}>

          <img className='w-5 h-5' src={Users} alt="" />

          <p className='hidden md:block'>Customers</p>

        </NavLink>

      </div>
    </div>
  )
}

export default Sidebar
