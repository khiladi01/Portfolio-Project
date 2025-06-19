import "../style/Edit.css"
import Icon from "../assets/favicon/Icon.png"
import { Link } from "react-router-dom";
import { useState } from "react";

function Nav () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
        <nav id="navigation" className="h-[100px] bg-transparent flex justify-between items-center p-5 select-none relative">
            <div className="flex items-center gap-4">
                <div id="icon" className="rounded-2xl">
                    <img src={Icon} alt="image" className="h-[32px] w-[35px] border-[2px] border-[#212121] rounded-2xl" />
                </div>
                <div id="navname" className="text-[25px] font-semibold uppercase tracking-[0.25em] md:pr-[850px]">
                    <p className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">portfolio</p>
                </div>
            </div>

            {/* Hamburger Menu Button */}
            <button 
                onClick={toggleMenu}
                className="md:hidden text-white p-2 focus:outline-none z-50 relative hover:scale-110 transition-transform duration-200"
                aria-label="Toggle menu"
            >
                <div className="w-6 h-5 flex flex-col justify-between">
                    <span className={`w-full h-0.5 bg-white transform transition-all duration-200 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-full h-0.5 bg-white transition-all duration-200 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-full h-0.5 bg-white transform transition-all duration-200 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex text-md font-semibold tracking-wider bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent uppercase gap-10">
                <Link className="hover:text-[#00FFF0] hover:underline hover:underline-offset-8 decoration-gray-200 transition-all ease-in-out duration-200" to="/project">Projects</Link>
                <Link className="hover:text-[#00FFF0] hover:underline hover:underline-offset-8 decoration-gray-200 transition-all ease-in-out duration-200" to="/skill">Skills</Link>
                <Link className="hover:text-[#00FFF0] hover:underline hover:underline-offset-8 decoration-gray-200 transition-all ease-in-out duration-200" to="/resume">Resume</Link>
                <Link className="hover:text-[#00FFF0] hover:underline hover:underline-offset-8 decoration-gray-200 transition-all ease-in-out duration-200" to="/chat">Chat</Link>
            </div>

            {/* Mobile Menu */}
            <div 
                className={`md:hidden fixed top-[100px] left-0 w-full bg-[#0F0E1C] transition-all duration-200 ease-in-out transform ${
                    isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'
                } z-40 shadow-lg`}
            >
                <div className="flex flex-col items-center py-4 space-y-4">
                    <Link 
                        className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent transition-all ease-in-out duration-200 uppercase font-medium tracking-wider w-full text-center py-2"
                        to="/project"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Projects
                    </Link>
                    <Link 
                        className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent transition-all ease-in-out duration-200 uppercase font-medium tracking-wider w-full text-center py-2"
                        to="/skill"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Skills
                    </Link>
                    <Link 
                        className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent transition-all ease-in-out duration-200 uppercase font-medium tracking-wider w-full text-center py-2"
                        to="/resume"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Resume
                    </Link>
                    <Link 
                        className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent transition-all ease-in-out duration-200 uppercase font-medium tracking-wider w-full text-center py-2"
                        to="/chat"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Chat
                    </Link>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Nav;