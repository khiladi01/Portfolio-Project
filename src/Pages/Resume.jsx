import "../style/Edit.css";
import Resumeimg from "../assets/Resume/raj.png";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Swal from "sweetalert2";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Resume() {
   
  Swal.fire("Welcome To My Resume Page");

  const resumeRef = useRef(null);
  const buttonRefs = useRef([]);
  buttonRefs.current = [];

  const addToButtonRefs = (el) => {
    if (el && !buttonRefs.current.includes(el)) {
      buttonRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Animate resume content on page load
    gsap.fromTo(
      resumeRef.current.querySelectorAll(".animate-resume"),
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );

    // Scroll-triggered animation for buttons
    buttonRefs.current.forEach((btn) => {
      gsap.fromTo(
        btn,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: btn,
            start: "top 95%",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div
        ref={resumeRef}
        className="min-h-screen bg-transparent grid place-content-center px-2"
      >
        {/* heading */}
        <div className="animate-resume">
          <p className="flex justify-center uppercase text-5xl font-bold -tracking-wider bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            resume
          </p>
        </div>

        {/* resume image */}
        <div className="w-full flex justify-center items-center mt-6 animate-resume">
          <div
            id="resumelayout"
            className="w-full max-w-[650px] rounded-sm flex justify-center items-center"
          >
            <img
              src={Resumeimg}
              alt="Resume Image"
              className="w-full h-auto rounded-md object-contain"
            />
          </div>
        </div>
      </div>

      {/* view resume button */}
      <div className="h-[80px] w-full bg-transparent flex justify-center items-center">
        <div
          ref={addToButtonRefs}
          className="w-[200px] h-[45px] border-[2px] border-cyan-400 rounded-full hover:shadow-[0_0_15px_#00FFF0] transition-all ease-in-out duration-200"
        >
          <Link
            className="uppercase text-md font-medium tracking-wider bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent w-full h-full flex justify-center items-center"
            to="https://github.com/khiladi01/Raushan-Resume"
          >
            view resume
          </Link>
        </div>
      </div>

      {/* back and next buttons */}
      <div className="h-auto w-full flex flex-col sm:flex-row justify-center items-center gap-5 px-4 py-4">
        <div
          ref={addToButtonRefs}
          className="w-[200px] h-[50px] border-[2px] border-cyan-500 rounded-full hover:shadow-[0_0_15px_#00FFF0] transition-all ease-in-out duration-200"
        >
          <Link
            className="w-full h-full flex justify-center items-center uppercase text-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            to="/skill"
          >
            ⇚ back
          </Link>
        </div>
        <div
          ref={addToButtonRefs}
          className="w-[200px] h-[50px] border-[2px] border-cyan-500 rounded-full hover:shadow-[0_0_15px_#00FFF0] transition-all ease-in-out duration-200"
        >
          <Link
            className="w-full h-full flex justify-center items-center uppercase text-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            to="/chat"
          >
            next ⇛
          </Link>
        </div>
      </div>
    </>
  );
}

export default Resume;
