// import toDoList from "../assets/images/toDoList.png";
import portfolioData from "../components/data/portfolioData";
const PortfolioHeader = () => {
    return (
        // <>
        // <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 w-full ">
                {/* <div className="w-full mb-5"> */}
                    {/* <div onClick={()=>setEye(true)} className="bg-blue-400 rounded-[15px] px-[75px] py-4 transition-transform duration-300 hover:ease-in hover:scale-110 cursor-pointer"> */}
                    
                    
                    {/* <div className="group bg-blue-400 rounded-[15px] py-4 cursor-pointer relative">
                        <img src={toDoList} alt="" className="lg:h-35 md:h-40 h-50 mx-auto transition-transform duration-300 ease-in group-hover:scale-110" />
                        <div className="absolute inset-0 rounded-[15px] bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="project pl-3 pt-3">
                        <h3 className="project-title">To-Do List</h3>
                        <p className="project-vategort">Web development</p>
                    </div>
                </div>


                <div className="w-full mb-5">
                    <div className="group bg-blue-400 rounded-[15px] py-4 cursor-pointer relative">
                        <img src={toDoList} alt="" className="h-35 mx-auto transition-transform duration-300 ease-in group-hover:scale-110" />
                        <div className="absolute inset-0 rounded-[15px] bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="project pl-3 pt-3">
                        <h3 className="project-title">Weather App</h3>
                        <p className="project-vategort">Web development</p>
                    </div>
                </div>
                <div> */}


                    {/* <div onClick={()=>setEye(true)} className="bg-blue-400 rounded-[15px] px-[75px] py-4 transition-transform duration-300 hover:ease-in hover:scale-110 cursor-pointer"> */}
                    
                    
                    {/* <div className="group bg-blue-400 rounded-[15px] px-[75px] py-4 cursor-pointer relative">
                        <img src={toDoList} alt="" className="h-35 mx-auto transition-transform duration-300 ease-in group-hover:scale-110" />
                        <div className="absolute inset-0 rounded-[15px] bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="project pl-3 pt-3">
                        <h3 className="project-title">Portfolio</h3>
                        <p className="">Applications</p>
                    </div>
                </div>

                <div> */}
                    {/* <div onClick={()=>setEye(true)} className="bg-blue-400 rounded-[15px] px-[75px] py-4 transition-transform duration-300 hover:ease-in hover:scale-110 cursor-pointer"> */}
                    {/* <div className="group bg-blue-400 rounded-[15px] px-[75px] py-4 cursor-pointer relative">
                        <img src={toDoList} alt="" className="h-35 mx-auto transition-transform duration-300 ease-in group-hover:scale-110" />
                        <div className="absolute inset-0 rounded-[15px] bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="project pl-3 pt-3">
                        <h3 className="project-title">Birthday Card</h3>
                        <p className="project-vategort">Web development</p>
                    </div>
                </div>

                <div> */}
                    {/* <div onClick={()=>setEye(true)} className="bg-blue-400 rounded-[15px] px-[75px] py-4 transition-transform duration-300 hover:ease-in hover:scale-110 cursor-pointer"> */}
                    {/* <div className="group bg-blue-400 rounded-[15px] px-[75px] py-4 cursor-pointer relative">
                        <img src={toDoList} alt="" className="h-35 mx-auto transition-transform duration-300 ease-in group-hover:scale-110" />
                        <div className="absolute inset-0 rounded-[15px] bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="project pl-3 pt-3">
                        <h3 className="project-title">Task Manager</h3>
                        <p className="project-vategort">Applications</p>
                    </div>
                </div>

                <div> */}
                    {/* <div onClick={()=>setEye(true)} className="bg-blue-400 rounded-[15px] px-[75px] py-4 transition-transform duration-300 hover:ease-in hover:scale-110 cursor-pointer"> */}
                    {/* <div className="group bg-blue-400 rounded-[15px] px-[75px] py-4 cursor-pointer relative">
                        <img src={toDoList} alt="" className="h-35 mx-auto transition-transform duration-300 ease-in group-hover:scale-110" />
                        <div className="absolute inset-0 rounded-[15px] bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="project pl-3 pt-3">
                        <h3 className="project-title">To-Do List</h3>
                        <p className="project-vategort">Web development</p>
                    </div>
                </div> */}


                            {portfolioData.map((project)=>(
                                <div key={project.id} className="w-full mb-5">
                                    <div className="group bg-blue-400 rounded-[15px] py-4 relative overflow-hidden">

                                        <img src={project.image} alt={project.title} className="lg:h-35 md:h-40 h-50 mx-auto
                                        transition-transform duration-300 ease-in group-hover:scale-110" />

                                        <div className="absolute inset-0 rounded-[15px] bg-black/50 opacity-0 group-hover:opacity-100
                                        transition-opacity duration-300"></div>
                                    </div>

                                    <div className="pl-3 pt-3">
                                        <h3>{project.title}</h3>
                                        <p>{project.category}</p>
                                    </div>

                                </div>
                            ))}
            </div>
        // </div>
        // </>
    );
}
export default PortfolioHeader;