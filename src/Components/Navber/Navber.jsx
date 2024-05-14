
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
      
     
      


    return (
        <nav className=" bg-[#54a0ff] p-7"> 
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? <FaTimes className="text-2xl" /> : <CiMenuBurger className="text-2xl"></CiMenuBurger> 
                }
           
            </div>
     
     <ul className={`ml-3 md:flex rounded-[10px] p-3 duration-1000 absolute 
     ${open ? 'top-16' : '-top-60'}
      bg-[#01a3a4] px-6 shadow-lg `}>
     {
        routes.map( route => <Link key={route.id} route={route}></Link> )
      }
      </ul>    
        </nav>
    );
};

export default Navber;