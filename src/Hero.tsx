import image from "./assets/hero-img.webp";
export function Hero(){
    return <section className="bg-gray-200 py-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-12 mx-15">
            
            <div className=" flex flex-col justify-center items-start gap-4">
            <p className=" border border-black border-dashed px-3 rounded-lg  "> Join 10000+ students enrolled today</p>
                <div className="text-3xl md:text-5xl font-extrabold text-blue-700"> Master Full Stack Development </div>
                <div className="text-xl font-medium md:text-2xl">Master Full stack Development through hands-on open source projects. Join a community of developers transforming their careers with pratical, real-world programming skills.</div>
                <div className="grid grid-col-1 md:grid-cols-2 gap-4  justify-start  ">
                    <button className="border-2 rounded-lg border-black px-2 py-3 "> Learn More</button>
                    <button className="border-2 rounded-lg border-black px-2 py-3 bg-blue-800 text-white">Explore courses</button>
                </div>
            </div>
            <div className=" flex justify-end items-end">
                <img src={ image } alt="" />
            </div>
        </div>
    </section>
}