// import biswajit from "../../assets/images/biswajit.jpg";
import ProfileCard from "../profileCard/profileCard";
import { MdOutlineEmail } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import { LuFacebook } from "react-icons/lu";
import { CiTwitter } from "react-icons/ci";
import { BsInstagram } from "react-icons/bs";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
const Sidebar = () => {
    const [showContact, setShowContact] = useState(false);
    return (
        <aside className="relative -mx-4 -mt-5 lg:mx-0 lg:mt-0 lg:py-5 ">

            {/* <div className="md:sticky md:top-[45px] my-[45px]"> */}
            {/* <div className="flex items-center justify-center h-fit">
                <img src={biswajit} alt="My Photo" className="md:h-[140px] md:w-[140px]" />
            </div> */}
            {/* <ProfileCard /> */}
            {/* </div> */}

            {/* <div className="relative"> */}
            <div className="pt-5 md:pt-5 lg:pt-0">
                <ProfileCard />
            </div>

            <div className="my-5 h-[1px] lg:w-[70%] md:w-[90%] origin-center scale-y-50 bg-gray-400/50 mx-auto"></div>
            {/* Tablet */}
            <button onClick={() => setShowContact(!showContact)} className="hidden md:flex lg:hidden text-white absolute
            top-0 right-0 z-10 items-center bg-[#292929] w-16 h-7 text-yellow-300 text-sm rounded-bl-[18px] rounded-tr-[20px]
            border-1 border-b border-yellow-300/50 shadow-lg">
                {showContact ? <ImCross size={22} className="mx-auto" /> : <RxHamburgerMenu size={22} className="mx-auto" />}
            </button>

            {/* Mobile */}
            <button onClick={() => setShowContact(!showContact)} className="md:hidden text-white absolute
                top-0 right-0 z-10 flex items-center justify-center bg-[#292929] text-yellow-300 w-16 h-7 border border-yellow-300/50 rounded-bl-[18px] rounded-tr-[20px]">
                {showContact ? <FaAngleUp size={22} /> : <FaAngleDown size={22} />}
            </button>
            {/* </div> */}



            {/* Mobile */}
            {/* <div className="relative"> */}
            {/* <button onClick={() => setShowContact(!showContact)} className="md:hidden text-white absolute
                top-2 right-5 z-10 flex items-center justify-center p-2 bg-[#292929] text-yellow-300 border border-yellow-300/50">
                {showContact ? <FaAngleUp size={22} /> : <FaAngleDown size={22} />}
            </button> */}
            {/* </div> */}

            {/* Contact Information Start */}

            <div className={`${showContact ? "block" : "hidden"}  lg:block `}>

                {/* <ul className="flex flex-col gap-y-5 items-start w-[75%] md:pl-[55px]"> */}
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-y-5 w-full px-[40px] lg:pl-[55px]">
                    <li className="flex items-center gap-7 sidebar">
                        <MdOutlineEmail className="bg-black text-yellow-200 text-3xl p-2 rounded rounded-[9px]" />
                        <div>
                            <p className="text-[12px]">EMAIL</p>
                            <span className="text-[14px]">bp171616@gmail.com</span>
                        </div>
                    </li>

                    <li className="flex items-center gap-7 sidebar">
                        <IoPhonePortraitOutline className="bg-black text-yellow-200 text-3xl p-2 rounded rounded-[9px]" />
                        <div>
                            <p className="text-[12px]">PHONE</p>
                            <span className="text-[14px]">+91-9883499235</span>
                        </div>
                    </li>

                    <li className="flex items-center gap-7 sidebar">
                        <SlCalender className="bg-black text-yellow-200 text-3xl p-2 rounded rounded-[9px]" />
                        <div>
                            <p className="text-[12px]">BIRTHDAY</p>
                            <span className="text-[14px]">Sep 15,1998</span>
                        </div>
                    </li>

                    <li className="flex items-center gap-7 sidebar">
                        <CiLocationOn className="bg-black text-yellow-200 text-3xl p-2 rounded rounded-[9px]" />
                        <div>
                            <p className="text-[12px]">LOCATION</p>
                            <span className="text-[14px]">Kolkata, West Bengal, India</span>
                        </div>
                    </li>

                </ul>


                <div>
                    <div className="my-5 h-[1px] lg:w-[70%] md:w-[90%] origin-center scale-y-50 bg-gray-400/50 lg:hidden mx-auto"></div>
                </div>
                <div className="flex items-center text-center justify-center gap-3 lg:pt-7">

                    <a href="https://www.facebook.com/biswajit.pal.1998/"><LuFacebook /></a>
                    <a href="https://x.com/biswajit_paul5"><CiTwitter /></a>
                    <a href="https://www.instagram.com/biswajitpal745/"><BsInstagram /></a>
                </div>
            </div>

            {/* Contact Information End */}
        </aside>

    );
}
export default Sidebar;