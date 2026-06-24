import { useState } from "react"
import { useSearchParams } from "react-router-dom"

export function App()
{
  const [ open , setOpen ] = useState( false );
  return <div>
    {
        open &&<div className=" fixed inset-0 bg-black/40 z-40" onClick={()=> setOpen( false )}></div>
               
    
    }
    <div className={` fixed -translate-x-full w-64 h-screen md:translate-x-0 ${open ? "translate-x-0": "-translate-x-full"} bg-blue-500 p-4 z-60`}>
      <ul className="list-none">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
      </ul>
    </div>
    <div className="md:ml-64 bg-green-500 h-screen z-0">
      <button className="block md:hidden px-4 rounded-xl outline-2 outline-blue-500" onClick={()=> setOpen(!open)}>menu</button>
      <div>Here goes the content</div>
    </div>
  </div>
}