import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
const ButtomNav = () => {
    const [activeMenu, setActiveMenu] = useState("About");
    return (
        <div className="bg-[#2B2B2C] fixed bottom-0 left-0 right-0">
            <div className="flex md:flex-row ">
                {/* <div className="w-full pl-[30px] pt-[40px] text-white">
                    
                    {activeMenu === "About" && (
                        <div>
                            <h1 className="text-3xl font-bold text-yellow-400">About</h1>
                            
                        </div>)
                    }

                    {activeMenu === "My Skills" && (
                        <div>
                            <h1 className="text-3xl font-bold">My Skills</h1>
                        </div>)
                    }
                    {activeMenu === "Portfolio" && (
                        <div>
                            <h1 className="text-3xl font-bold">Portfolio</h1>
                        </div>)
                    }
                    {activeMenu === "Contact" && (
                        <div>
                            <h1 className="text-3xl font-bold">Contact</h1>
                        </div>)
                    }

                </div>
                <div className="w md:w-[40%]"> */}
                <nav className="w-full shadow-md">
                    <div className="flex items-center  h-16 ">
                        <ul className="flex gap-1 w-full px-5 justify-center gap-5">
                            <li>
                                <NavLink to="/" onClick={() => setActiveMenu("About")} className={({ isActive }) => isActive ? "text-purple-500" : "text-white"}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/my_skills" onClick={() => setActiveMenu("My Skills")} className={({ isActive }) => isActive ? "text-purple-500" : "text-white"}>My Skills</NavLink>
                            </li>
                            <li>
                                <NavLink to="/portfolio" onClick={() => setActiveMenu("Portfolio")} className={({ isActive }) => isActive ? "text-purple-500" : "text-white"}>Portfolio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" onClick={() => setActiveMenu("Contact")} className={({ isActive }) => isActive ? "text-purple-500" : "text-white"}>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/* </div> */}
            </div>
        </div>
    );
}
export default ButtomNav;