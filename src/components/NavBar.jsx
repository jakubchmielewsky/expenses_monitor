import React from "react";
import {FaPowerOff} from "react-icons/fa";

const NavBar = ({user,handleLogout}) => {
  return (
    <div className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between ">
        <h1 className="text-xl font-bold text-gray-800">Expense Monitor</h1>
        {user?<div className="flex flex-column items-center pr-4 gap-4">
          <h4>{user.email}</h4>
          <FaPowerOff onClick={handleLogout}/>
        </div>:null}
      </div>
    </div>
  )
}

export default NavBar;