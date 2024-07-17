import React from "react";
import { FaRegUser } from "react-icons/fa6";
import { LuBarChart } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";
import { Link, Outlet } from "react-router-dom";

export default function () {
  return (
    <div className="flex justify-center gap-8">
      <div className="w-[20%] h-[600px] border-4 border-gray-400 rounded-xl ">
        <div>
          <Link to='/dashboard/user' className="flex p-3 gap-1">
            <FaRegUser className="text-gray-500 w-6 h-6" />
            <p className="font-bold text-gray-500 text-lg">user</p>
          </Link>
          <Link to='/dashboard/chart' className="flex p-3 gap-1">
            <LuBarChart className="text-gray-500 w-6 h-6" />
            <p className="font-bold text-gray-500 text-lg">chart</p>
          </Link>

          <Link to='/dashboard/email' className="flex p-3 gap-1">
            <MdOutlineEmail className="text-gray-500 w-6 h-6" />
            <p className="font-bold text-gray-500 text-lg">email</p>
          </Link>

          <Link to='/dashboard/document' className="flex p-3 gap-1">
            <TiDocumentText className="text-gray-500 w-6 h-6" />
            <p className="font-bold text-gray-500 text-lg">document</p>
          </Link>
        </div>
      </div>
      <div className="w-[68%] h-[600px] border-4 border-gray-400 rounded-xl ">
        <Outlet/>
      </div>
    </div>
  );
}

{
  /* <Link className="flex p-3 gap-1">
          
          </Link> */
}
