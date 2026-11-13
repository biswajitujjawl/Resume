import { useState, useEffect } from "react";

const ProgressBar = () => {
    const [load, setLoad] = useState(false);
    useEffect(() => {
        setLoad(true);
    }, []);

    const skills = [
    { name: "Javascript", percent: "70%" },
    { name: "React JSX", percent: "80%" },
    { name: "PHP", percent: "50%" },
    { name: "Data Structure Problem Solving", percent: "70%" },
    { name: "SQL", percent: "90%" },

];

    return (
        <>
            <div className="">
                <div className="text-3xl font-bold mb-6">
                    <h2>My Skills</h2>
                </div>

                <div className="rounded-xl w-full border border-white/10 bg-[#252526] p-5">
                    <div className="mb-5">
                        <div className="flex justify-between mb-2">
                            <span>HTML</span>
                            <span>80%</span>
                        </div>
                        <div className="w-full h-3 bg-gray-200 rounded-full ">
                            <div className="h-3 bg-blue-600 rounded-full transition-all duration-1000" style={{ width: load ? "80%" : "0%" }}></div>
                        </div>
                    </div>

                    <div className="mb-5">
                        <div className="flex justify-between mb-2">
                            <span>JS</span>
                            <span>70%</span>
                        </div>
                        <div className="w-full h-3 bg-gray-200 rounded-full ">
                            <div className="h-3 bg-blue-600 rounded-full transition-all duration-1000" style={{ width: load ? "70%" : "0%" }}></div>
                        </div>
                    </div>
                </div>


            </div>

        </>
    );
}
export default ProgressBar;
