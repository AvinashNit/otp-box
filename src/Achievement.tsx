export function Achievement(){
    return <div>
        <div className="mx-15 mt-15 ">
            <div className="flex flex-col items-center  ">
                <div className="  bg-blue-950 w-full text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-2xl ">
                    <div className="h-40 mx-5 text-center flex flex-col items-center justify-center md:border-r-2 md:border-b-0 border-white border-b ">
                        <p>Icon and 27 students cracked GSOC 2025</p>
                    </div>
                    <div className="h-40 mx-5 text-center flex flex-col items-center justify-center border-b md:border-r-2 border-white md:border-b-0">
                        <p>Icon 150k Highest international package</p>
                    </div>
                    <div className="h-40 mx-5 text-center flex flex-col items-center justify-center">
                        <p>200+ high paying internships offer </p>
                    </div>

                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 gap-4 w-full">
                    <div className="bg-green-500 rounded-xl  p-10 ">
                        <div className="text-2xl">Job ready skill that matter</div>
                        <p className="text-2xl">Master development through real world applications not tutorial</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 mt-5">
                            <div>full stack development</div>
                            <div>Real world projects</div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="bg-blue h-full border border-black flex flex-col items-center justify-center bg-blue-900 text-white rounded-bl-3xl rounded-tr-3xl p-10">
                        <div className="text-3xl font-semibold">Personally mentoring indias next 100 egnineers</div>
                        <p className="font-medium mt-4">Taking you from 1x to 100x through practical projects and real-world open source</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}