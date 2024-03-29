
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
 
    const [Nav,navhidden] =useState(false)

    const changenav = () =>{
          navhidden(!Nav)
    }

    return ( 
        <div className="max-w-[1240px] h-24 text-white flex justify-between items-center mx-auto">
        <h1 className="w-full font-bold text-[#00df9a]">REACT.</h1>
        <ul className="hidden md:flex" >
            <li className="p-4">Home</li>
            <li className="p-4">Company</li>
            <li className="p-4">Resourcesw</li>
            <li className="p-4">About</li>
            <li className="p-4">Contact</li>
        </ul>
        <div onClick={changenav} className="block md:hidden">
            { !Nav ? <GiHamburgerMenu size={20}/> : <IoMdClose size={20} /> }
        

        </div>
        <div className={Nav ? " md:hidden fixed left-0 top-0 w-[40%] border-r border-r-gray-900 h-[100%] bg-[#000300] ease-in-out duration-500 " : "fixed left-[-100%] ease-in-out duration-0"}>
        <h1 className="w-full font-bold text-[#00df9a] pt-4 m pb-0 ml-3">REACT.</h1>

        <ul className="" >
            <li className="p-4 border-b border-gray-600">Home</li>
            <li className="p-4 border-b border-gray-600">Company</li>
            <li className="p-4 border-b border-gray-600">Resources</li>
            <li className="p-4 border-b border-gray-600">About</li>
            <li className="p-4 border-b border-gray-600">Contact</li>
        </ul>

        </div>
        </div>
     );
}
 
export default Navbar ;