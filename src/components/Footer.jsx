import { Link } from "react-router-dom";


function Footer () {
    return(
        <>
        <footer className="select-none">
            <div className="min-h-[200px] bg-[#0F0E1C] flex flex-col md:flex-row justify-between items-start md:items-center p-5 gap-8 md:gap-0">
            {/* Adding name */}
            <div className="w-full md:w-auto text-center md:text-left">
                <h2 className="uppercase text-[20px] text-[#BFA3FF] font-semibold -tracking-tighter">raushan raj</h2>
                <p className="text-[17px] text-white font-normal -tracking-wider">Frontend + 3D Web Developer | Building Web Magic</p>
            </div>
            {/* Adding links */}
            <div className="w-full md:w-auto text-center md:text-left">
                <h2 className="uppercase text-[20px] text-[#BFA3FF] font-semibold -tracking-tighter">important links</h2>
                <div className="flex flex-col md:flex-row gap-4 md:gap-10 text-[#eae2b7] mt-2 justify-center md:justify-start">
                    <Link className="hover:text-[#FF6B6B] hover:underline hover:underline-offset-8 decoration-[#eae2b7] transition-all ease-in-out duration-200 font-medium tracking-wider" to=''>Projects</Link>
                    <Link className="hover:text-[#FF6B6B] hover:underline hover:underline-offset-8 decoration-[#eae2b7] transition-all ease-in-out duration-200 font-medium tracking-wider" to=''>Skills</Link>
                    <Link className="hover:text-[#FF6B6B] hover:underline hover:underline-offset-8 decoration-[#eae2b7] transition-all ease-in-out duration-200 font-medium tracking-wider" to=''>Resume</Link>
                    <Link className="hover:text-[#FF6B6B] hover:underline hover:underline-offset-8 decoration-[#eae2b7] transition-all ease-in-out duration-200 font-medium tracking-wider" to=''>Chat</Link>
                </div>
            </div>
            {/* adding social media links */}
            <div className="w-full md:w-auto text-center md:text-left">
                <h2 className="uppercase text-[20px] text-[#BFA3FF] font-semibold -tracking-tighter">Social Media</h2>
                <div className="flex gap-4 mt-2 justify-center md:justify-start">
                    <Link className="hover:text-rose-300 transition-all ease-in-out duration-300" to='https://www.linkedin.com/in/raushan-raj-98609b269'>
                        <i className='bx bxl-linkedin text-2xl text-[#00FFFF] hover:transform-content hover:scale-110 hover:text-[#FF6B6B] transition-all ease-in-out duration-200'></i>
                    </Link>
                    <Link className="hover:text-rose-300 transition-all ease-in-out duration-300" to='https://github.com/khiladi01/Portfolio-Project'>
                        <i className='bx bxl-github text-2xl text-[#00FFFF] hover:transform-content hover:scale-110 hover:text-[#FF6B6B] transition-all ease-in-out duration-200'></i>
                    </Link>
                    <Link className="hover:text-rose-300 transition-all ease-in-out duration-300" to='https://www.instagram.com/iamakshayraj01?igsh=YnNodHZpa2ZncjQx'>
                        <i className='bx bxl-instagram text-2xl text-[#00FFFF] hover:transform-content hover:scale-110 hover:text-[#FF6B6B] transition-all ease-in-out duration-200'></i>
                    </Link>
                </div>
            </div>

            </div>
            {/* adding copyright section */}
            <div className="h-[50px] bg-[#0F0E1C] flex justify-center items-center">
            <p className="mb-2 md:mb-0 text-white text-center px-4">
             &copy; {new Date().getFullYear()} <span className="text-white font-bold">ROSU</span>. All rights reserved.
             </p>
        </div>
        </footer>
        </>
    )
}
export default Footer;
