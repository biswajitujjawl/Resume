import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState("About");
    return (
        // <div className="md:w-[60%]">
        <div className="container w-full bg-[#1E1E1F] rounded-[20px] ">
            <div className="flex md:flex-row">
                <div className="w-full lg:w-[60%] md:w-[50%] pl-[30px] pt-[40px] text-white">
                    {/* <h1 className="text-3xl font-bold text-yellow-400">{activeMenu}</h1> */}
                    {/* <h1>XXX</h1> */}
                    {activeMenu === "About" && (
                        <div>
                            <h1 className="text-3xl font-bold text-yellow-400">About</h1>
                            <div className="mt-3 h-1 w-12 rounded-full bg-yellow-300" />
                        </div>)
                    }

                    {activeMenu === "My Skills" && (
                        <div>
                            <h1 className="text-3xl font-bold">My Skills</h1>
                            <div className="mt-3 h-1 w-12 rounded-full bg-yellow-300" />
                        </div>)
                    }
                    {activeMenu === "Portfolio" && (
                        <div>
                            <h1 className="text-3xl font-bold">Portfolio</h1>
                            <div className="mt-3 h-1 w-12 rounded-full bg-yellow-300" />
                        </div>)
                    }
                    {activeMenu === "Contact" && (
                        <div>
                            <h1 className="text-3xl font-bold">Contact</h1>
                            <div className="mt-3 h-1 w-12 rounded-full bg-yellow-300" />
                        </div>)
                    }

                </div>
                <div className="lg:w-[40%] lg:w-[50%]">
                    <nav className="bg-[#2B2B2C] shadow-md sticky top-0 z-50 rounded-tr-[20px] rounded-bl-[20px]">
                        <div className="flex items-center h-16 justify-center">
                            <ul className="flex gap-7 px-2">
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
                </div>
            </div>
        </div>
    );
}
export default Header;