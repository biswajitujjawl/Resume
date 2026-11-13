import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const PortfolioHeader = () => {
    const [showPortfolioMenu, setShowPortfolioMenu] = useState(false);
    const [activeMenu, setActiveMenu] = useState("");

    const handleCategory=(category)=>{
        setActiveMenu(category);
        setShowPortfolioMenu(false);
    }
    return (
        <div className="relative">
            <button onClick={() => setShowPortfolioMenu(!showPortfolioMenu)} className="md:hidden text-white h-10 w-full bg-[#292929] border border-yellow-300/10
            rounded-[15px] flex items-center justify-between px-5">
                <span>
                    {
                    activeMenu===""? "Select Category" : activeMenu==="PortfolioHeaderAll"? "All" : activeMenu==="PortfolioHeaderApplications" ? "Applications" : "Web Development"
                    }
                    </span>
                {showPortfolioMenu ? <FaAngleUp /> : <FaAngleDown />}
            </button>

            <nav className={`${showPortfolioMenu ? "block" : "hidden"} md:block mt-[10px] md:mt-0 absolute z-20 w-full `}>
                {/* <div> */}
                <ul className="flex flex-col gap-3 md:flex md:flex-row md:gap-5 bg-[#292929] border border-yellow-300/10 
                md:bg-transparent md:border-0 rounded-[15px] pl-5 py-3 md:pl-0 md:pt-0 h-auto">
                    <li>
                        {/* <NavLink to="portfolio_all" onClick={() => setActiveMenu("PortfolioHeaderAll")} className={({ isActive }) => isActive ? "text-purple-500" : "text-white"} >All</NavLink> */}
                        <NavLink to="portfolio_all" onClick={() => handleCategory("PortfolioHeaderAll")} className={({ isActive }) => isActive ? "text-purple-500" : "text-white"} >All</NavLink>
                    </li>
                    <li>
                        <NavLink to="portfolio_applications" onClick={() => handleCategory("PortfolioHeaderApplications")} className={({ isActive }) => isActive ? "text-purple-500" : "text-white"} >Applications</NavLink>

                    </li>
                    <li>
                        <NavLink to="web_development" onClick={() => handleCategory("PortfolioHeaderWebDevelopment")} className={({ isActive }) => isActive ? "text-purple-500" : "text-white"} >Web Development</NavLink>
                    </li>
                </ul>
                {/* </div> */}
            </nav>
        </div>
    );
}
export default PortfolioHeader;
