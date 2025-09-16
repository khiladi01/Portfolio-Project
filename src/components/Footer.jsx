import { Link } from "react-router-dom";


function Footer () {
    return(
        <>
        <footer className="select-none">
            <div className="min-h-[180px] bg-transparent flex flex-col md:flex-row justify-between p-5 gap-8 md:gap-0">
            {/* Adding name */}
            <div className="w-full md:w-auto text-left">
                <h2 className="uppercase text-[20px] text-[#00FFF0] font-semibold -tracking-tighter">raushan raj</h2>
                <p className="mt-[10px] w-[150px] text-[17px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-normal -tracking-wider">Real-world ideas. Crafted in code. Designed to perform.</p>
            </div>
            {/* Adding links */}
            <div className="w-full md:w-auto text-left">
                <h2 className="uppercase text-[20px] text-[#00FFF0] font-semibold -tracking-tighter">important links</h2>
                <div className="flex flex-col md:flex-row gap-4 md:gap-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mt-2 justify-start">
                    <ul className="float-left">
                        <li><Link className="hover:text-[#00FFF0] decoration-[#eae2b7] transition-all ease-in-out duration-200 font-medium tracking-wider" to='/project'>➠ Projects</Link></li>
                        <li><Link className="hover:text-[#00FFF0] decoration-[#eae2b7] transition-all ease-in-out duration-200 font-medium tracking-wider" to='/skill'>➠ Skills</Link></li>
                        <li><Link className="hover:text-[#00FFF0] decoration-[#eae2b7] transition-all ease-in-out duration-200 font-medium tracking-wider" to='/resume'>➠ Resume</Link></li>
                        <li><Link className="hover:text-[#00FFF0] decoration-[#eae2b7] transition-all ease-in-out duration-200 font-medium tracking-wider" to='/chat'>➠ Chat</Link></li>
                    </ul>
                </div>
            </div>
            {/* adding social media links */}
            <div className="w-full md:w-auto text-left">
                <h2 className="uppercase text-[20px] text-[#00FFF0] font-semibold -tracking-tighter">Social Media</h2>
                <div className="flex gap-4 mt-2 justify-start">
                    <Link to='https://www.linkedin.com/in/raushan-raj-98609b269'>
                        <i className='bx bxl-linkedin text-2xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:transform-content hover:scale-125 transition-all ease-in-out duration-300'></i>
                    </Link>
                    <Link to='https://github.com/khiladi01/'>
                        <i className='bx bxl-github text-2xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:transform-content hover:scale-125 transition-all ease-in-out duration-300'></i>
                    </Link>
                    <Link to='https://www.instagram.com/iamakshayraj01?igsh=YnNodHZpa2ZncjQx'>
                        <i className='bx bxl-instagram text-2xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:transform-content hover:scale-125 transition-all ease-in-out duration-300'></i>
                    </Link>
                </div>
            </div>

            </div>
            {/* adding copyright section */}
            <div className="h-[50px] bg-transparent flex justify-center items-center pl-0 md:pl-0">
            <p className="mb-2 md:mb-0 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent text-left px-0 md:px-4">
             &copy; {new Date().getFullYear()} <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold">akki rosuprint</span>. All rights reserved.
             </p>
        </div>
        </footer>
        </>
    )
}
export default Footer;
