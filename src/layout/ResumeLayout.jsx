import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar.jsx";
import Header from "../components/header/Header.jsx";
import ButtomNav from "../components/buttomNav/ButtomNav.jsx";
// import ProfileCard from "../components/profileCard/profileCard.jsx";
import { useState } from "react";
const ResumeLayout = () => {
    // const [showContact, setShowContact] = useState(false);
    return (
        <div className="text-white">
            <div className="container mx-auto px-4">
                {/* <div className="w-full min-h-screen bg-yellow-200 text-white"> */}


                {/* Mobile & Tablet */}
                <div className="lg:hidden mt-7 rounded-[20px] bg-[#1E1E1F] py-5 px-4 border border-yellow-300/10">
                    {/* <ProfileCard /> */}
                    <Sidebar />
                </div>

                {/* Desktop */}
                <div className="flex flex-col md:flex-row gap-4 md:mt-0 ">
                    {/* Sidebar */}
                    <aside className="hidden lg:sticky lg:top-[45px] lg:self-start h-fit lg:block w-full lg:w-1/4 shrink-0 bg-[#1E1E1F] rounded-[20px] my-[45px] lg:py-5 border border-yellow-300/10 ">
                        <Sidebar />
                    </aside>

                    {/* <main className="w-full lg:w-3/4 shrink-0 bg-yellow-400 my-[45px] rounded-[15px]"> */}
                    <main className="w-full lg:w-3/4 lg:my-[45px] rounded-[15px] mt-4 lg:overflow-y-auto">
                        <div className="bg-[#1E1E1F] rounded-[20px] md:mb-7 lg:mb-0 lg:min-h-[650px] border border-yellow-300/10 overflow-visible lg:overflow-hidden pb-4">
                            {/* Desktop Header */}
                            <div className="hidden lg:block">
                                <Header />
                            </div>

                            {/* Page Content */}
                            <div className="p-5 md:p-7 lg:p-8 mt-5">
                                <Outlet />
                            </div>
                        </div>

                    </main>
                </div>

                {/* Mobile & Tablet Bottom Navigation */}
                <div className="lg:hidden mt-[70px]">
                    <ButtomNav />
                </div>


            </div>
        </div>

    );
}
export default ResumeLayout;