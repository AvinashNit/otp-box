import { Slides } from "./Slides";
export function Features()
{
    return <div className="flex flex-col justify-center mt-10 bg-gray-300 p-15">
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-bold text-2xl text-center">Why 100XDevs?</h2>
            <p className="text-xl mt-4">Our most comprehensive and impactful learning experiences</p>
        </div>
        
        <Slides></Slides>
    </div>
}