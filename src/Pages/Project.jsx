import "../style/Edit.css";
import Firstprojectimage from "../assets/project/PP IMG (1).png";
import Secondprojectimage from "../assets/project/PP IMG (2).png";
import Thirdprojectimage from "../assets/project/PP IMG (3).png";
import Fourthprojectimage from "../assets/project/PP IMG (4).png";
import Fifthprojectimage from "../assets/project/PP IMG (5).png"
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function Project () {
  
  Swal.fire("Welcome To My Projects Page");

  const projectRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      projectRef.current.querySelectorAll(".animate-project"),
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <>
      <div
        className="min-h-screen bg-transparent flex flex-col items-center gap-[50px] select-none px-2"
        ref={projectRef}
      >
        {/* heading */}
        <div className="grid place-content-center animate-project">
          <p className="uppercase text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            project
          </p>
        </div>

        {/* projects wrapper */}
        <div className="w-full max-w-[1200px] flex flex-wrap justify-center items-center gap-[20px]">
          {[{
            id: "projectlayoutfirst",
            title: "Velomart ➤ E-Commerce Clone",
            image: Firstprojectimage,
            tools: ["Vite", "React", "TailWind"],
            shadow: "shadow-[#00FFF0]",
            link: "https://khiladi01.github.io/Admin-Dashboard/"
          }, {
            id: "projectlayoutsecond",
            title: "PixelProfile ➤ Resume Builder Clone",
            image: Secondprojectimage,
            tools: ["Vite", "React", "TailWind"],
            shadow: "shadow-[#9D00FF]",
            link: "https://khiladi01.github.io/Resume-Builder/"
          }, {
            id: "projectlayoutthird",
            title: "Billionary ➤ 3D Web Landing Page",
            image: Thirdprojectimage,
            tools: ["Vite", "React", "TailWind", "Spline"],
            shadow: "shadow-[#FF00E5]",
            link: "https://khiladi01.github.io/3D-Landing-Page/"
          },
        {
            id: "projectlayoutfourth",
            title: "Diagnosync ➤ Mini Full Stack Project On Medical Care",
            image: Fourthprojectimage,
            tools: ["Vite", "React", "TailWind"],
            shadow: "shadow-[#00FFF0]",
            link: "https://diagnosync-2.onrender.com"
          },
        {
            id: "projectlayoutfifth",
            title: "MedVault ➤ Full Stack Project On Medical Care",
            image: Fifthprojectimage,
            tools: ["Next.js"," TailWind", "Mongo DB", "Express.Js", "Node.Js"],
            shadow: "shadow-[#FF00E5]",
            link: "https://medvault-three.vercel.app"
          }].map(({ id, title, image, tools, shadow, link }) => (
            <div
              key={id}
              id={id}
              className="w-full sm:w-[80%] md:w-[48%] lg:w-[31%] h-[500px] rounded-xl grid place-content-center animate-project"
            >
              <div className="w-[350px] h-[200px]">
                <img src={image} alt={title} className="w-full h-full rounded-xl hover:scale-105 transition-all ease-in-out duration-300" />
              </div>
              <div className="w-[350px] h-[100px] flex justify-start items-center">
                <p className="text-2xl font-semibold">{title}</p>
              </div>
              <div className="w-[350px] h-[100px] flex justify-start items-center gap-2 flex-wrap">
                {tools.map((tool, i) => (
                  <button key={i} className={`w-[100px] h-[40px] font-medium bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent rounded-full shadow-md ${shadow}`}>
                    {tool}
                  </button>
                ))}
              </div>
              <div className="w-[350px] h-[50px] flex justify-center items-center">
                <div className="w-[200px] h-[45px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-cyan-500 transition-all ease-in-out duration-200">
                  <Link className="w-full h-full flex justify-center items-center text-md font-medium" to={link}>Live Site</Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* back + next buttons */}
        <div className="h-auto w-full flex flex-col sm:flex-row justify-center items-center gap-5 px-4 py-4 animate-project">
          <div className="w-[200px] h-[50px] border-[2px] border-cyan-500 rounded-full hover:shadow-[0_0_15px_#00FFF0] transition-all ease-in-out duration-200">
            <Link className="w-full h-full flex justify-center items-center uppercase text-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent" to="/">
              ⇚ back
            </Link>
          </div>
          <div className="w-[200px] h-[50px] border-[2px] border-cyan-500 rounded-full hover:shadow-[0_0_15px_#00FFF0] transition-all ease-in-out duration-200">
            <Link className="w-full h-full flex justify-center items-center uppercase text-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent" to="/skill">
              next ⇛
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
