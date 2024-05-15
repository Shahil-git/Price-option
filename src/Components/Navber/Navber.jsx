
import { useState } from "react";
import Link from "../Link/Link";
import { CiMenuBurger } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
const Navber = () => {

const [open , setOpen]  = useState(false)



    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/dashboard", name: "Dashboard" }
      ];
      
     
      <FaTimes className="text-2xl" />


    return (
        <nav className=" bg-[#4b7bec] p-7"> 
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? <button className="hover:bg-[#a5b1c24d] p-3 rounded-[10px]"><FaTimes className="text-2xl" /></button> : <button
                    className="hover:bg-[#a5b1c2] rounded-[10px] p-3" ><CiMenuBurger className="text-2xl"></CiMenuBurger></button> 
                }
           
            </div>
     
     <ul className={`ml-3 md:flex rounded-[10px] p-3 duration-1000 absolute md:static  md:justify-between 
     ${open ? 'top-16' : '-top-60'}
      bg-[#01a3a4] px-6 shadow-2xl `}>
     {
        routes.map( route => <Link key={route.id} route={route}></Link> )
      }
      </ul>    
        </nav>
    );
};

export default Navber;