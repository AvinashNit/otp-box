export function Cards(){
    return <div>
        <div className="bg-blue-800 text-white pt-30 ">
            <div className="mx-10">
                    <div className="text-3xl font-semibold">
                        Featured cohorts
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-around">
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                    </div>
            </div>
        </div>
    </div>
}



function Card(){
    return <div>
        <div className="bg-white h-150 rounded-2xl text-blue-950">
            <div>
                <img src="" alt="" />
                <p></p>
                <p></p>
                <div>
                    <p></p>
                    <p></p>
                </div>
                <div>
                    <input type="text" />
                </div>
                <div><button></button></div>
            </div>
        </div>
    </div>
}