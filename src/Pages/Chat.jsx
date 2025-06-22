import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Chat () {
   
  Swal.fire("Welcome To My Chat Page");

    return(
        <>
        <div className="h-screen bg-transparent grid place-content-center">
        <div><p className="flex justify-center uppercase text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">chat</p></div>

        {/* adding chat system */}
        <p className="text-center text-cyan-400 italic text-sm sm:text-base mt-6 px-4">
        🚧 <span className="text-start font-semibold text-white">This space is under construction.</span><br />
        The Chat page you're looking at is still evolving — a digital conversation zone is loading in the shadows.<br />
        I'm currently experimenting, learning, and leveling up to bring you a futuristic chat experience that feels alive.<br />
        Stay tuned — the code is brewing, and the bots are warming up. 🤖✨
        </p>

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