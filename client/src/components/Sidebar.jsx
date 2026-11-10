import React from 'react'
import { NavLink } from 'react-router-dom'
import { Building2, Truck, Users, Package, Headset, UserStar } from "lucide-react"

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2 border-gray-200'>
      <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>

        <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l" to={"/companies"}>

          <Building2 className='w-5 h-5' />

          <p className='hidden md:block'>Companies</p>

        </NavLink>

        <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l" to={"/drivers"}>

          <Truck className='w-5 h-5' />

          <p className='hidden md:block'>Drivers</p>

        </NavLink>

        <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l" to={"/workers"}>

          <Headset className='w-5 h-5' />

          <p className='hidden md:block'>Workers</p>

        </NavLink>

        <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l" to={"/orders"}>

          <Package className='w-5 h-5' />

          <p className='hidden md:block'>Orders</p>

        </NavLink>

        <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l" to={"/customers"}>

          <Users className='w-5 h-5' />

          <p className='hidden md:block'>Customers</p>

        </NavLink>

        <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l" to={"/admin-dashboard"}>

          <UserStar className='w-5 h-5' />

          <p className='hidden md:block'>Admin Dashboard</p>

        </NavLink>

      </div>
    </div>
  )
}

export default Sidebar