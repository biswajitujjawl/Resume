import { CgWebsite } from "react-icons/cg";
import { CiDatabase } from "react-icons/ci";
import { CiCamera } from "react-icons/ci";
import { RiSeoLine } from "react-icons/ri";
const About = () => {
    return (
        <section className="space-y-6 ">
            <div className="block lg:hidden">
                <h1 className="text-3xl font-semibold">
                    About Me
                </h1>
                <div className="mt-3 h-1 w-12 rounded-full bg-yellow-300" />
            </div>

            {/* <p className="text-gray-300 leading-7">
                I am a passionate Web Developer who enjoys
                building responsive and user-friendly websites.
            </p> */}
            <div className="text-gray-300 leading-7 flex flex-col md:flex-col gap-4 pb-4">
                <p>
                    I'm Biswajit Paul, a passionate Web Developer dedicated to building modern, responsive, and user-friendly websites. I enjoy turning creative ideas into functional digital experiences using clean, maintainable code and modern web technologies.
                </p>
                <p>
                    My expertise lies in front-end web development, particularly React.js and Tailwind CSS. I focus on creating visually appealing interfaces that provide seamless user experiences across different devices. I enjoy learning new technologies, solving real-world problems, and continuously improving my development skills.
                </p>
                <p>
                    My goal is to build websites that are not only functional and easy to use but also attractive, accessible, and engaging. I strive to bring every project to life with creativity, attention to detail, and a commitment to quality.
                </p>
            </div>

            <h2 className="text-[25px] font-[700] py-2">
                What I'm Doing
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/10 bg-[#252526] p-5">
                <div className="flex">
                    <div className="text-[45px] text-[#C7B150]"><CgWebsite /></div>
                    <div className="pl-2">
                        <h3 className="font-medium text-yellow-300">
                            Web Development
                        </h3>
                        <p className="mt-2 text-sm text-gray-400">
                            High-quality development of sites at the professional level.
                        </p>
                    </div>
                </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-[#252526] p-5">
                    <div className="flex">
                    <div className="text-[45px] text-[#C7B150]"><CiDatabase /></div>
                    <div className="pl-2">
                        <h3 className="font-medium text-yellow-300">Data Structure</h3>
                        <p className="mt-2 text-sm text-gray-400">
                            A data structure in Computer Science is a way of organizing and storing data in a computer so that it can be accessed and used efficiently. It refers to the logical or mathematical representation of data, as well as its implementation in a computer program
                        </p>
                    </div>
                </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-[#252526] p-5">
                    <div className="flex">
                    <div className="text-[45px] text-[#C7B150]"><CiCamera /></div>
                    <div className="pl-2">
                        <h3 className="font-medium text-yellow-300">
                            Photography
                        </h3>
                        <p className="mt-2 text-sm text-gray-400">
                            High-quality development of sites at the professional level.
                        </p>
                    </div>
                </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-[#252526] p-5">
                    <div className="flex">
                    <div className="text-[45px] text-[#C7B150]"><RiSeoLine /></div>
                    <div className="pl-2">
                        <h3 className="font-medium text-yellow-300">
                            SEO
                        </h3>
                        <p className="mt-2 text-sm text-gray-400">
                           High-quality development of sites at the professional level.
                        </p>
                    </div>
                </div>
                </div>

                {/* <div className="rounded-xl border border-white/10 bg-[#252526] p-5">
                    <div className="flex">
                    <div className="text-[45px] text-[#C7B150]"><CgWebsite /></div>
                    <div className="pl-2">
                        <h3 className="font-medium text-yellow-300">
                            Web Development
                        </h3>
                        <p className="mt-2 text-sm text-gray-400">
                            High-quality development of sites at the professional level.
                        </p>
                    </div>
                </div>
                </div> */}

            </div>
        </section>
    );
};

export default About;
