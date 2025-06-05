import React from "react";
import { FiArrowDownRight } from "react-icons/fi";
import { LuArrowDownRight } from "react-icons/lu";
const NavBarBtn = ()=>{
    return(
        
        <button className="px-4 py-2 rounded-full text-xl font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow " >
            Hire Me <FiArrowDownRight />
            <div className="sm:hidden md:block ">
            </div>
        </button>
    )
}
export default NavBarBtn;