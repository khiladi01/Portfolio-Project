import { Link } from "react-router-dom";
import 'boxicons/css/boxicons.min.css';
import "../style/Edit.css";
import Model from "../components/Model.jsx";
import Userimage from "../assets/home/developer.jpg"
import Swal from 'sweetalert2'
import { useEffect } from "react";

function Home() {

    const handler = () => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: 'This form is currently inactive'
          });
    }

    Swal.fire("Welcome To My Portfolio");

    setTimeout(() => {
        Swal.fire({
            title: "Did you like my work? 💭",
            text: "Your feedback means a lot — whether it's Nice or Need Improvement, I'm always looking to improve and level up.",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes, it's awesome! 🚀",
            cancelButtonText: "Needs improvement 🤔",
          });
    },10000)

    useEffect(() => {
        const paragraphs = document.querySelectorAll("p");

        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-slide', 'glow');
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );

        paragraphs.forEach((p) => observer.observe(p));

        return () => {
            paragraphs.forEach((p) => observer.unobserve(p));
        };
    }, []);

    return (
        <>
        <div className="min-h-screen backdrop-blur-sm bg-transparent flex flex-col lg:flex-row justify-between items-center select-none p-10 md:p-20 relative z-10 gap-10">
            <div id="herointro" className="uppercase text-5xl font-bold text-white tracking-normal">
                <p className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">raushan <br /> <span>raj</span></p>
                <div id="herosummary" className="w-full max-w-sm pt-10 text-white font-normal text-lg">
                    <p>Frontend Dev + 3D Web Enthusiast Building Interfaces with Depth & Detail</p>
                </div>
                <div id="herobutton" className="mt-10 w-[280px] h-[50px] flex justify-center items-center border-[3px] border-[#00FFF0] rounded-full bg-black hover:shadow-[0_0_20px_#00FFF0] transition-all ease-in-out duration-200">
                    <Link to="/project" className="w-full h-full flex justify-center items-center text-lg font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"><i className="p-[10px]" class='bx bx-play-circle'></i> launch</Link>
                </div>
            </div>

            <div className="h-[500px] w-full max-w-md">
                <Model />
            </div>
        </div>

        <div className="min-h-screen py-20 backdrop-blur-sm bg-transparent flex flex-col lg:flex-row justify-center items-center select-none px-5 md:px-20 gap-10 relative z-10">
            
            {/* ABOUT US */}
            <div id="detailsec" className="w-full max-w-md bg-black rounded-xl p-5">
                <div className="w-full h-[50px] grid place-content-center">
                    <p id="abouttitle" className="uppercase text-2xl tracking-wider text-[#00FFF0] font-medium">about us</p>
                </div>
                <div className="w-full flex flex-col items-center gap-5 mt-5">

                    {/* Image */}
                    <div className="w-full flex justify-center">
                        <div id="aboutimg" className="w-full max-w-[130px] aspect-square border-[2px] border-cyan-400 rounded-full overflow-hidden">
                            <img 
                                src={Userimage} 
                                alt="Developer image" 
                                className="w-full h-full object-cover rounded-full"  
                            />
                        </div>
                    </div>

                    {/* Name */}
                    <div className="text-center">
                        <p className="text-[20px] text-white font-medium tracking-normal">Raushan Raj</p>
                    </div>

                    {/* Summary */}
                    <div className="text-center w-full">
                        <p className="text-[#E0E0E0]">
                            Web Developer crafting responsive, modern UIs with HTML, CSS, Tailwind CSS, JavaScript, React.js, and Next.js. I build client-side apps, handle backend logic with Node.js, deploy via GitHub & GitHub Pages, and create immersive 3D experiences using Three.js.
                        </p>
                    </div>
                </div>
            </div>

            {/* CONTACT US */}
            <div id="detailsec" className="w-full max-w-md bg-black rounded-xl p-5">
                <div className="w-full h-[50px] grid place-content-center">
                    <p id="abouttitle" className="uppercase text-2xl tracking-wider text-[#00FFF0] font-medium">contact us</p>
                </div>
                <div className="w-full mt-5">
                    <form action={handler}>
                        <div className="mb-4">
                            <label htmlFor="name" className="text-white pl-2">Name</label>
                            <input type="text" className="mt-1 w-full h-[40px] border-[2px] border-cyan-400 placeholder-cyan-300 outline-none pl-3 rounded-xl" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="text-white pl-2">Email</label>
                            <input type="email" className="mt-1 w-full h-[40px] border-[2px] border-cyan-400 placeholder-cyan-300 outline-none pl-3 rounded-xl" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="text-white pl-2">Message</label>
                            <textarea className="mt-1 w-full h-[70px] border-[2px] border-cyan-400 placeholder-cyan-300 outline-none pl-3 rounded-xl"></textarea>
                        </div>
                        <div>
                            <input type="submit" value="Send" className="w-full h-[40px] border-[2px] border-cyan-400 rounded-xl hover:shadow-[0_0_20px_#00FFF0] transition-all duration-300 cursor-pointer text-white" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;
