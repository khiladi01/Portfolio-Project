import "../style/Edit.css"
import Resumeimage from "../assets/Resume/My Resume.png"
import { Link } from "react-router-dom";

function Resume () {
    return(
        <>
        <div className="h-screen bg-transparent grid place-content-center">
        <div><p className="flex justify-center uppercase text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">resume</p></div>

        {/* adding resume  */}
        <div className="h-[650px] w-full flex justify-center items-center">
             <div id="resumelayout" className="w-[650px] h-[600px] rounded-xl flex justify-center items-center"><img src={Resumeimage} alt="Resume Image" className="w-[640px] h-[590px] rounded-xl"/></div>
        </div>
        </div>

        {/* adding button for view resume */}
        <div className="h-[80px] w-full bg-transparent flex justify-center items-center"><div className="w-[200px] h-[45px] border-[2px] border-cyan-400 rounded-full hover:shadow-[0_0_15px_#00FFF0] transition-all ease-in-out duration-200">
          <Link className="uppercase text-md font-medium tracking-wider bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent  w-full h-full flex justify-center items-center" to="https://github.com/khiladi01/Raushan-Resume">view resume</Link>
          </div>
          </div>

        {/* back button */}
        <div className="h-auto w-full flex flex-col sm:flex-row justify-center items-center gap-5 px-4 py-4">
         <div className="w-[200px] h-[50px] border-[2px] border-cyan-500 rounded-full hover:shadow-[0_0_15px_#00FFF0] transition-all ease-in-out duration-200">
           <Link
             className="w-full h-full flex justify-center items-center uppercase text-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
             to="/skill"
           >
             ⇚ back
           </Link>
         </div>
         <div className="w-[200px] h-[50px] border-[2px] border-cyan-500 rounded-full hover:shadow-[0_0_15px_#00FFF0] transition-all ease-in-out duration-200">
           <Link
             className="w-full h-full flex justify-center items-center uppercase text-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
             to="/chat"
           >
             next ⇛
           </Link>
         </div>
       </div>
        </>
    )
}
export default Resume;