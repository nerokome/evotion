import Image from "next/image";
import Navbar from "./Componets/Navbar";
import Hero from "./Componets/Hero";
import Goal from "./Componets/Goal";
import Bott from "./Componets/Bott";

export default function Home() {
  return (
    <div className="">
    
      <div>
        <Hero className="mb-30"/>
        <Goal />
        <Bott/>
      </div>
      
    </div>
  );
}
