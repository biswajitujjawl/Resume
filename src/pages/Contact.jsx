import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SlNote } from "react-icons/sl";
import { MdStickyNote2 } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
const Contact = () => {
    return (
        <>
            <div className="container mx-auto p-[35px]">
                <div className="flex flex-col">
                    {/* <div > */}
                    <div className="w-full mb-[30px]">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14661.829173160108!2d88.13968328783572!3d23.262827977469527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8566c7fe300b1%3A0xfc323aa20ac44aa7!2sSatgachia%2C%20West%20Bengal%20713422!5e0!3m2!1sen!2sin!4v1792946627894!5m2!1sen!2sin" className="w-full h-[300px] rounded rounded-[25px]"></iframe>
                    </div>
                    {/* </div> */}
                    <h2 className="flex text-center text-[40px] font-bold md:w-[70%] w-full mx-auto leading-[37px]">Let's build something significant.</h2>

                    <div className="flex flex-col md:flex-col mx-auto bg-[#2B2B2C] rounded-[15px] p-[20px] w-full md:w-[70%] justify-center mt-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-30 gap-y-7 mx-auto">
                            <div className="flex flex-col gap-1">
                                <span className="text-[12px] text-gray-400">DIRECT EMAIL</span>
                                <a href="mailto:bp171616@gmail.com">bp171616@gmail.com</a>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-[12px] text-gray-400">WHATSAPP</span>
                                <a href="https://wa.me/918373816385" target="_blank">+91-83738 16385</a>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-[12px] text-gray-400">GITHUB</span>
                                <a href="https://github.com/biswajitujjawl" target="blank" className="break-words md:break-normal">https://github.com/biswajitujjawl</a>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-[12px] text-gray-400">LOCATION</span>
                                <span>Kolkata, India</span>
                            </div>
                        </div>
                        <div className="my-5 h-[1px] bg-gray-500/50"></div>
                        <div className="mx-auto w-full min-w-0 overflow-hidden">
                            <form action="#" className="w-full min-w-0">
                                <div className="w-full min-w-0 ">
                                    {/* <div className="flex flex-col md:flex-row relative gap-4"> */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                                        <div className="relative">
                                            <FaUser className="absolute top-[11px] left-3 opacity-50 text-yellow-400" />
                                            <input type="text" placeholder="Enter your name : " className="outline-none bg-red-900 rounded-[5px] pl-8 py-2 w-full" />
                                        </div>
                                        <div className="relative">
                                            <MdEmail className="absolute top-[11px] left-3 opacity-50" />
                                            <input type="email" placeholder="Enter your email : " className="outline-none bg-gray-900 rounded-[5px] pl-8 py-2 w-full" />
                                        </div>
                                    </div>
                                    <div className="relative mt-4 ">
                                        <SlNote className="absolute top-[14px] left-3 opacity-50" />
                                        <input type="text" placeholder="Enter your message..." className="w-full outline-none bg-gray-900 rounded-[5px] pl-9 py-2" />
                                    </div>
                                    <div className="relative mt-4 ">
                                        <MdStickyNote2 className="absolute top-[14px] left-3 opacity-50" />
                                        <textarea name="textArea" id="#" rows={5} placeholder="Enter your message..." className="w-full outline-none bg-gray-900 rounded-[5px] pl-8 py-2"></textarea>
                                    </div>
                                    <div className="flex justify-end mt-2">
                                        <button type="submit" className="flex items-center bg-gray-900 rounded-full px-3 py-2 gap-1 hover:bg-gray-700 transition duration-1000 "><RiSendPlaneFill /> <span>Send Message</span></button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}
export default Contact;