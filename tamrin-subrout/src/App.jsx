import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";  // اطمینان از وارد کردن صحیح کامپوننت Home
import Dashboard from "./Components/Dashboard";
import Products from "./Components/Products";
import Discript from "./Components/Discript";
import Navebar from './Components/Navebar'; // مطمئن شوید که Navebar به درستی وارد شده است
import User from './Sidbar/User';
import Chartlin from './Sidbar/Chartlin';
import Email from './Sidbar/Email';
import Document from './Sidbar/Document';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navebar />}>
          <Route path="/home" element={<Home />} />
          <Route path="/discript" element={<Discript />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path='/dashboard/user' element={<User/>}/>
            <Route path='/dashboard/chart' element={<Chartlin/>}/>
            <Route path='/dashboard/email' element={<Email/>}/>
            <Route path='/dashboard/document'  element={<Document/>}/>

          </Route>
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;


{
  /* <div className="flex justify-center mt-3">
        <div className="w-[90%] h-14 border-2 border-gray-300  rounded-xl flex items-center justify-around">
          <div className="w-28 h-4 border rounded-xl bg-gray-300"></div>
          <div className="w-28 h-4 border rounded-xl bg-gray-300"></div>
          <div className="w-28 h-4 border rounded-xl bg-gray-300"></div>
          <div className="w-28 h-4 border rounded-xl bg-gray-300"></div>
          <div className="w-28 h-4 border rounded-xl bg-gray-300"></div>
          <div className="w-28 h-4 border rounded-xl bg-gray-300"></div>
          
        </div>
      </div> */
}
