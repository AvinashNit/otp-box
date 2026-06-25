import { Octagon } from "lucide-react";
import { useEffect, useState } from "react"

export function Slides() {
    
const [ index, setIndex ] = useState(1);
useEffect(()=>{
    console.log( index )
},[ index ])
    return (
        <div className="mt-10 mx-15 w-full p-5">
            <div className="relative">

                <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-black border border-dashed border-black px-3 py-2 md:left-50"
                    onClick={() => setIndex(i => (i - 1 + 6) % 6)}
                >
                    {"<<"}
                </button>

                <button
                    className="absolute right-20 top-1/2 -translate-y-1/2 z-50  md:right-60 text-black px-3 py-2 border border-dashed border-black"
                    onClick={() =>{
                        console.log( "button clicked ") 
                        setIndex(i => (i + 1) % 6)
                    }}
                >
                    {">>"}
                </button>

                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-300"
                        style={{
                            transform: `translateX(-${index * 100}%)`,
                        }}
                    >
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="min-w-full my-10">
                                <div className="w-1/3 h-40 rounded-3xl text-center flex flex-col items-center justify-center mx-auto bg-blue-700 p-6">
                                    Slide {i + 1}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}