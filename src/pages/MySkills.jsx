import { FaBook } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import ProgressBar from "../components/ProgressBar/ProgressBar";
const MySkills = () => {
    return (
        <section className="space-y-6">
            <div className="block lg:hidden">
                <h1 className="text-3xl font-semibold">
                    My Skills
                </h1>
                <div className="mt-3 h-1 w-12 rounded-full bg-yellow-300" />
            </div>

            {/* <p className="text-gray-300">
                My Skills passionate Web Developer who enjoys
                building responsive and user-friendly websites.
            </p>

            <h2 className="text-xl font-semibold">
                What I'm Doing
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/10 bg-[#252526] p-5">
                    <h3 className="font-medium text-yellow-300">
                        Web Development
                    </h3>
                    <p className="mt-2 text-sm text-gray-400">
                        Creating responsive websites with React
                        and Tailwind CSS.
                    </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-[#252526] p-5">
                    <h3 className="font-medium text-yellow-300">
                        UI Development
                    </h3>
                    <p className="mt-2 text-sm text-gray-400">
                        Building clean and intuitive user interfaces.
                    </p>
                </div>
            </div> */}

            <div className="mt-3 ">
                <div className="relative flex gap-4 items-center ">
                    <div>
                        <FaBook className="relative z-10 text-[35px] bg-gray-500 p-2 rounded rounded-[4px] " />
                        <div className="absolute left-4 h-7 w-[1px] bg-yellow-300"></div>
                    </div>

                    <h2>Education</h2>
                </div>

                <ul className="mt-5 pl-2">
                    <li className="relative flex gap-4 pb-5 items-baseline">
                        <div className="before:absolute before:left-2 before:h-full before:w-[1px] before:bg-yellow-500">
                            <div className="h-4 w-4 bg-yellow-300 rounded rounded-full relative z-10 shadow-[0_0_0_4px_#FEF9C3]"></div>
                        </div>

                        <div>
                            <h3>The University of Burdwan</h3>
                            <p>2016-2019</p>
                            <p className="text-gray-400">Degree: Bachelor's Of Computer Science</p>
                        </div>
                    </li>
                    {/* List-2 */}
                    <li className="relative flex gap-4 pb-5 items-baseline">
                        <div className="before:absolute before:left-2 before:h-full before:w-[1px] before:bg-yellow-500">
                            <div className="h-4 w-4 bg-yellow-300 rounded rounded-full relative z-10 shadow-[0_0_0_4px_#FEF9C3]"></div>
                        </div>

                        <div>
                            <h3>Goverment Purbasthali-I Running Under PTP</h3>
                            <p>2021-2022</p>
                            <p className="text-gray-400">Degree: COPA</p>
                        </div>
                    </li>
                    {/* List-3 */}
                    <li className="relative flex gap-4 pb-5 items-baseline">
                        <div>
                            <div className="h-4 w-4 bg-yellow-300 rounded rounded-full relative z-10 shadow-[0_0_0_4px_#FEF9C3]"></div>
                        </div>

                        <div>
                            <p>Paharhati Golapmoni Higher Secondary School</p>
                            <p>2013-2015</p>
                            <p>WBCHSE: In Science</p>
                        </div>
                    </li>
                    {/* List-4 */}
                    {/* <li className="relative flex gap-4 pb-5 items-baseline">
                        <div className="">
                            <div className="h-4 w-4 bg-red-500 rounded rounded-full relative z-10"></div>
                        </div>
                        
                        <div>
                            <p>Swami Vivekananda University</p>
                            <p>2022 — 2025</p>
                            <p>Pursuing : Bachelor's Of Computer Application.</p>
                        </div>
                    </li> */}
                </ul>
            </div>


            <div className="mt-3 ">
                <div className="relative flex gap-4 items-center ">
                    <div>
                        <FaBookOpen className="relative z-10 text-[35px] bg-gray-500 p-2 rounded rounded-[4px] " />
                        <div className="absolute left-4 h-9 w-[1px] bg-yellow-500"></div>
                    </div>

                    <h2>Experiance</h2>
                </div>

                <ul className="mt-[35px] pl-2">
                    <li className="relative flex gap-4 pb-5 items-baseline">
                        <div className="before:absolute before:left-2 before:h-full before:w-[1px] before:bg-yellow-500">
                            <div className="h-4 w-4 bg-yellow-300 rounded rounded-full relative z-10 shadow-[0_0_0_4px_#FEF9C3]"></div>
                        </div>

                        <div>
                            <h3>Travel Agency Website</h3>
                            <p>2026</p>
                            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore optio debitis dolores animi placeat voluptatibus voluptates accusamus sequi sed! Iusto molestias laborum reprehenderit inventore cum! Accusantium velit totam rem fugit!</p>
                        </div>
                    </li>
                    {/* List-2 */}
                    <li className="relative flex gap-4 pb-5 items-baseline">
                        <div className="before:absolute before:left-2 before:h-full before:w-[1px] before:bg-yellow-500">
                            <div className="h-4 w-4 bg-yellow-300 rounded rounded-full relative z-10 shadow-[0_0_0_4px_#FEF9C3]"></div>
                        </div>

                        <div>
                            <h3>To-Do Application</h3>
                            <p>2026</p>
                            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore optio debitis dolores animi placeat voluptatibus voluptates accusamus sequi sed! Iusto molestias laborum reprehenderit inventore cum! Accusantium velit totam rem fugit!</p>
                        </div>
                    </li>
                    {/* List-3 */}
                    <li className="relative flex gap-4 pb-5 items-baseline">
                        <div className="before:absolute before:left-2 before:h-full before:w-[1px] before:bg-yellow-500">
                            <div className="h-4 w-4 bg-yellow-300 rounded rounded-full relative z-10 shadow-[0_0_0_4px_#FEF9C3]"></div>
                        </div>

                        <div>
                            <p>CRUD Website</p>
                            <p>2026</p>
                            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore optio debitis dolores animi placeat voluptatibus voluptates accusamus sequi sed! Iusto molestias laborum reprehenderit inventore cum! Accusantium velit totam rem fugit!</p>
                        </div>
                    </li>
                    {/* List-4 */}
                    <li className="relative flex gap-4 pb-5 items-baseline">
                        <div className="">
                            <div className="h-4 w-4 bg-yellow-300 rounded rounded-full relative z-10 shadow-[0_0_0_4px_#FEF9C3]"></div>
                        </div>
                        
                        <div>
                            <p>Weather Website</p>
                            <p>2026</p>
                            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore optio debitis dolores animi placeat voluptatibus voluptates accusamus sequi sed! Iusto molestias laborum reprehenderit inventore cum! Accusantium velit totam rem fugit!</p>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="mt-3">
                <ProgressBar/>
            </div>
        </section>
    );
};

export default MySkills;
