import biswajit from "../../assets/images/biswajit.jpg";
const ProfileCard = () => {
    return (
        <div className="flex flex-row lg:flex-col items-center lg:items-center lg:justify-center ">
            <div className="shrink-0">
                <img src={biswajit} alt="My Photo" className="h-20 w-20 ml-4 md:h-[140px] md:w-[140px] rounded-xl object-cover md:ml-[35px] lg:ml-0" />
            </div>

            <div className="md:pl-4 pl-4">
                <h2 className="lg:mt-3 text-[24px] font-[400] ">Biswajit Paul</h2>
                <span className="bg-[#2B2B2C] px-2 py-1 mt-3 inline-block rounded rounded-[10px] w-[140px] text-center text-[14px] ">Web Developer</span>
            </div>
            {/* <div className="my-5 h-[1px] w-[70%] origin-center scale-y-50 bg-gray-400/50 hidden lg:block"></div> */}
        </div>

    );
}
export default ProfileCard;