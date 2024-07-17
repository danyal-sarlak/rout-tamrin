import React from "react";
import { Link, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

export default function Navebar() {
  return (
    <div>
      <nav>
        <ul className="flex justify-center mt-2">
          <li className="w-[90%] h-14 border-2 border-gray-300 rounded-xl flex items-center justify-around">
            <Link to="/home">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/discript">Discript</Link>

            <Link to="/products">Products</Link>
            <CgProfile className="w-7 h-7 text-gray-300" />
          </li>
        </ul>
      </nav>
      <div className=" mt-8">
        <main >
          <Outlet />
        </main>
      </div>
    </div>
  );
}
