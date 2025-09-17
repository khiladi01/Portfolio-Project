import { Link } from "react-router-dom";
import "../style/Edit.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Swal from "sweetalert2";

function Chat () {
   
  // Swal.fire("Welcome To My Chat Page");

    return(
        <>
        <div className="h-screen bg-transparent flex justify-center items-center">
             <div id="chatbox" className="w-[1200px] h-[600px] border-0 border-cyan-500 rounded-2xl">
                  <div className="pl-[50px] w-full h-full grid place-content-center">
                       {/* first box */}
                       <div className="h-[50px] w-[300px] bg-slate-800 flex justify-center items-center border-[0px] border-cyan-100 rounded-full">
                        <p><FontAwesomeIcon icon={faWhatsapp} className="text-2xl text-green-500 mr-2" /><a href="wa.me/9142158588" className="text-lg hover:text-slate-400 transition-all ease-in-out duration-200">+91 9142158588</a></p>
                        </div>
                       {/* second box */}
                       <div className="pt-[10px]">
                       <p><FontAwesomeIcon icon={faPhone} className="text-2xl text-green-500 mr-2" /> <span className="text-2xl bg-gradient-to-br from-cyan-400 to-pink-400 bg-clip-text text-transparent">⇛</span> <a href="tel:9142158588" className="text-lg hover:text-slate-400 transition-all ease-in-out duration-200">+91 9142158588</a></p>
                       </div>
                       {/* third box */}
                      <div className="pt-[10px]">
                      <p><FontAwesomeIcon icon={faEnvelope} className="text-2xl text-green-500 mr-2" /> <span className="text-2xl bg-gradient-to-br from-cyan-400 to-pink-400 bg-clip-text text-transparent">⇛</span> <a href="mailto:akshayraj3435@gmail.com" className="text-lg hover:text-slate-400 transition-all ease-in-out duration-200">akshayraj3435@gmail.com</a></p>
                      </div>
                      {/* fourth box */}
                      <div className="pt-[10px]">
                      <p><FontAwesomeIcon icon={faLinkedin} className="text-2xl text-green-500 mr-2" /> <span className="text-2xl bg-gradient-to-br from-cyan-400 to-pink-400 bg-clip-text text-transparent">⇛</span> <a href="https://www.linkedin.com/in/raushan-raj-98609b269" className="text-lg hover:text-slate-400 transition-all ease-in-out duration-200">Raushan-Raj-Linkedin</a></p>
                      </div>
                      {/* fifth box */}
                      <div className="h-[50px] w-[300px] bg-slate-800 flex justify-center items-center border-[0px] border-cyan-100 rounded-full mt-[10px]">
                      <p><FontAwesomeIcon icon={faGithub} className="text-2xl text-green-500 mr-2" /><a href="https://github.com/khiladi01/Portfolio-Project" className="text-lg hover:text-slate-400 transition-all ease-in-out duration-200">Raushan-Raj-Github</a></p>
                      </div>
                  </div>
             </div>
        </div>

        {/* back button */}
        <div className="h-auto w-full flex flex-col sm:flex-row justify-center items-center gap-5 px-4 py-4">
         <div className="w-[200px] h-[50px] border-[2px] border-cyan-500 rounded-full hover:shadow-[0_0_15px_#00FFF0] transition-all ease-in-out duration-200">
           <Link
             className="w-full h-full flex justify-center items-center uppercase text-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
             to="/resume"
           >
             ⇚ back
           </Link>
         </div>
       </div>
        </>
    )
}
export default Chat;