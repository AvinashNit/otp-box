import { useEffect, useState } from "react"
import  Otp from "./Otp"
import { Sidebar } from "./sidebar"
export  function App()
{
  const [ dark, setDark ] = useState(false);
  useEffect(()=>{ document.documentElement.classList.toggle("dark")},[ dark ])
  return <div className=" bg-white text-black dark:bg-black dark:text-white" onClick={()=> setDark(!dark)}>
    <button className="px-3 py-1 rounded-xl bg-blue-600 dark:bg-blue-400">Toggle</button>
    <Sidebar/>
      
  </div>
}