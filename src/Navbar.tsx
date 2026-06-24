import { HandHelping } from "lucide-react"
import { Link } from "react-router-dom"

export function Navbar({ handleClick })
{
    return <div>
        <Link to={"/home"}> Home </Link>
        <button onClick={ handleClick }> Toogle</button>
    </div>
}