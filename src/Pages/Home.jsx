import { Link } from "react-router-dom";
import 'boxicons/css/boxicons.min.css';
import "../style/Edit.css"
import Model from "../components/Model.jsx";
import developer from "../assets/home/developer.jpg"
import { useEffect, useRef } from "react";

function Home () {
    const imageRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                        // Once animation is triggered, we can stop observing
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.5 // Trigger when 50% of the element is visible
            }
        );

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, []);

    return (
        <>
        <div className="min-h-screen backdrop-blur-sm bg-transparent flex justify-between items-center select-none p-20 relative z-10">
        {/* adding my intro */}
        <div id="herointro" className="uppercase text-5xl font-bold text-white tracking-normal">
            <p>raushan</p>
            <p>raj</p>
            {/* adding summary */}
            <div id="herosummary" className="w-[300px] pt-[50px] text-white font-normal text-lg">
            <p>Frontend Dev + 3D Web Enthusiast Building Interfaces with Depth & Detail</p>
            </div>
            {/* adding button for launch project */}
            <div id="herobutton" className="mt-[50px] w-[280px] h-[50px] flex justify-center items-center border-[3px] border-[#00FFF0] rounded-full bg-black hover:shadow-[0_0_20px_#00FFF0] transition-all ease-in-out duration-200">
                <button className="w-[280px] h-[50px] uppercase text-lg text-gray-100 hover:text-gray-300 transition-all ease-in-out duration-300 cursor-pointer">
                <i class='bx text-lg text-[#00FFF0] mr-[5px] bx-play-circle'></i>
                launch
                </button>
            </div>
        </div>
        {/* adding 3d cursor movement robot */}
        <div className="h-[600px] w-[500px]">
           <Model />
        </div>
        {/* adding my professional */}
        </div>

        {/* adding about us and contact us */}
        <div className="min-h-screen py-20 backdrop-blur-sm bg-transparent flex justify-center items-center select-none p-20 relative z-10 gap-[50px]">
        <div id="detailsec" className="w-[500px] h-[500px] bg-black rounded-xl">
        <div className="w-full h-[50px] grid place-content-center"><p id="abouttitle" className="uppercase text-2xl tracking-wider text-[#00FFF0] font-medium">about us</p></div>
        <div className="w-[500px] h-[450px] grid place-content-center gap-5">
            {/* image */}
            <div className="w-[500px] h-[130px] flex justify-center items-center">
            <div id="aboutimg" ref={imageRef} className="w-[130px] h-[130px] flex justify-center border-[2px] border-cyan-400 rounded-full">
                <img 
                    src={developer} 
                    alt="Developer image" 
                    className="w-full h-full rounded-full object-cover"
                    loading="lazy"
                />
            </div>
            </div>
            {/* Name */}
        <div className="grid place-content-center">
            <p className="text-[20px] text-[#fff] font-medium tracking-normal">Raushan Raj</p>
        </div>
             {/* summary */}
        <div className="w-full flex justify-center">
        <div className="w-[400px]">
            <p className="text-[#E0E0E0]">Web Developer crafting responsive, modern UIs with HTML, CSS, Tailwind CSS, JavaScript, React.js, and Next.js. I build client-side apps, handle backend logic with Node.js, deploy via GitHub & GitHub Pages, and create immersive 3D experiences using Three.js.</p>
        </div>
        </div>
        </div>
        </div>

        <div id="detailsec" className="w-[500px] h-[500px] bg-black rounded-xl">
        <div className="w-full h-[50px] grid place-content-center"><p id="abouttitle" className="uppercase text-2xl tracking-wider text-[#00FFF0] font-medium">contact us</p></div> 
        <div className="w-full flex justify-center">
        <div className="w-[400px] mt-[50px]">
             <form action="">
                <div>
                <label htmlFor="name" className="text-[#fff] pl-[10px]">Name</label>
                </div>
                <div>
                <input type="text" className="mt-[5px] w-[400px] h-[40px] border-[2px] border-cyan-400 focus:ring-cyan-500 placeholder-cyan-300 outline-none pl-[10px] rounded-xl" />
                </div>
                <div className="mt-[20px]">
                <label htmlFor="name" className="text-[#fff] pl-[10px]">Email</label>
                </div>
                <div>
                <input type="text" className="mt-[5px] w-[400px] h-[40px] border-[2px] border-cyan-400 focus:ring-cyan-500 placeholder-cyan-300 outline-none pl-[10px] rounded-xl" />
                </div>
                <div className="mt-[20px]">
                <label htmlFor="name" className="text-[#fff] pl-[10px]">Message</label>
                </div>
                <div>
                <textarea className="mt-[5px] w-[400px] h-[70px] border-[2px] border-cyan-400 focus:ring-cyan-500 placeholder-cyan-300 outline-none pl-[10px] rounded-xl"></textarea>
                </div>
                <div className="mt-[25px]">
                    <input type="submit" value="Send" className="mt-[5px] w-[400px] h-[40px] border-[2px] border-cyan-400 focus:ring-cyan-500 placeholder-cyan-300 outline-none rounded-xl hover:shadow-[0_0_20px_#00FFF0] transition-all ease-in-out duration-300 cursor-pointer" />
                </div>
             </form>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default Home;