import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Achievement } from "./Achievement";
import { Slides } from "./Slides";
import { Features } from "./Features";
import { Cards } from "./Cards";
export function App(){
  return <div className="">
      <Navbar></Navbar>
      <Hero></Hero>
      <Achievement></Achievement>
      <Features/>
      <Cards></Cards>
  </div>
}