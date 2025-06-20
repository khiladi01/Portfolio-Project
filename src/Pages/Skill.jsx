import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Skill() {
  const barsRef = useRef([]);
  barsRef.current = [];

  const addToRefs = (el) => {
    if (el && !barsRef.current.includes(el)) {
      barsRef.current.push(el);
    }
  };

  useEffect(() => {
    barsRef.current.forEach((bar) => {
      gsap.fromTo(
        bar,
        { x: "-100%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  const skills = [
    ["HTML", 395],
    ["CSS", 395],
    ["TAILWIND", 350],
    ["JAVASCRIPT", 300],
    ["REACT.JS", 250],
    ["NEXT.JS", 250],
    ["VITE", 390],
    ["NODE.JS", 350],
    ["THREE.JS", 250],
    ["SPLINE 3D", 200],
    ["GITHUB", 300],
    ["NETLIFY", 300],
  ];

  return (
    <>
      <div className="min-h-screen bg-transparent px-4 py-6 select-none">
        <div className="w-full h-[100px] flex justify-center items-center">
          <p className="uppercase text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 max-w-6xl mx-auto">
          {skills.map(([label, width], index) => (
            <div
              key={index}
              className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4"
            >
              <p className="uppercase text-lg font-medium text-cyan-400 w-[100px] text-center sm:text-left">
                {label}
              </p>
              <div className="w-full max-w-[400px] h-[10px] rounded-xl bg-rose-50 overflow-hidden">
                <div
                  ref={addToRefs}
                  className="h-full rounded-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
                  style={{ width: `${width}px` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* back-next button */}
      <div className="h-auto w-full flex flex-col sm:flex-row justify-center items-center gap-5 px-4 py-4">
        <div className="w-[200px] h-[50px] border-[2px] border-cyan-500 rounded-full hover:shadow-[0_0_15px_#00FFF0] transition-all ease-in-out duration-200">
          <Link
            className="w-full h-full flex justify-center items-center uppercase text-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            to="/project"
          >
            ⇚ back
          </Link>
        </div>
        <div className="w-[200px] h-[50px] border-[2px] border-cyan-500 rounded-full hover:shadow-[0_0_15px_#00FFF0] transition-all ease-in-out duration-200">
          <Link
            className="w-full h-full flex justify-center items-center uppercase text-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            to="/resume"
          >
            next ⇛
          </Link>
        </div>
      </div>
    </>
  );
}

export default Skill;