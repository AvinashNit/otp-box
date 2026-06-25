export function Navbar()
{
    return <div className=" border-box border-b-2  sticky h-20 flex flex-col justify-center mx-10 font-mono">
        <div className="mx-0 md:mx-4 flex flex-col justify-center">
                <div className="hidden  justify-between lg:flex">
                    <div>
                        <a href="" className=" w-20 px-2 ml-2 text-center text-2xl ">100Xdevs</a>
                        <a href="" className=" w-20 px-2  ml-2 text-center text-xl">Home</a>
                        <a href="" className=" w-20 px-2  ml-2 text-center text-xl">Courses</a>
                        <a href="" className=" w-20 px-2  ml-2 text-center text-xl">Store</a>
                    </div>
                    
                    <div className="flex">
                        <div className="mx-2 "><input type="text" placeholder="Type to search" className="oultine-2  rounded-lg px-3 py-2  border" />
                        </div>
                        <a href="/login" className=" w-20  text-center text-sm mx-2  ">
                        <button className="border rounded-lg py-2  border-black px-3 bg-blue-600 text-white">Login</button>
                        </a>
                        <a href="/login" className=" w-20 px-2  text-center text-sm border-black mx-2 ">
                        <button className="px-3 border-black border rounded-lg py-2 ">SignUp</button></a>
                    </div>
                </div>
                <div className="lg:hidden flex justify-between ">
                    <div className="w-20 text-center px-2  text-2xl font-mono">100Xdevs</div>
                    <div className="w-20 text-center px-2  text-xl font-mono">Menu</div>
                </div>
        </div>
    </div> 
}