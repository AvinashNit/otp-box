import { useEffect, useRef, useState } from "react"
import  Otp from "./Otp"
import { Sidebar } from "./sidebar"
import { Navbar } from "./Navbar";
export  function App()
{
  const [ open, setOpen ] = useState(false);
  return <div className="flex ">
    <div className={`w-64 bg-red-300 fixed left-0 top-0 -translate-x-full md:translate-x-0 ${open && "translate-x-0"} h-screen`} >Sidebar</div>
    <div className={`flex-1 bg-blue-500 md:ml-64 ${open&&"ml-64"}`}>
      <button className="px-4 outline-2 outline-red-300 rounded-2xl text-center cursor-pointer block md:hidden " onClick={()=> setOpen(!open) }>menu</button>
      <div>content goes here</div>
    </div>
  </div>
  
}