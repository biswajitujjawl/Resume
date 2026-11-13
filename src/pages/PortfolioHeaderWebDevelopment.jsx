import portfolioData from "../components/data/portfolioData";
const PortfolioHeaderWebDevelopment=()=>{

    const webDevelopmentProjects=portfolioData.filter((project)=>project.category === "Web development");

    return(
       <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 w-full ">

        {webDevelopmentProjects.map((project)=>(
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
    );
}
export default PortfolioHeaderWebDevelopment;