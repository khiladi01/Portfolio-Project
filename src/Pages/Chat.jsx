import { Link } from "react-router-dom";

function Chat () {
    return(
        <>
        <div className="h-screen bg-transparent grid place-content-center">
        <div><p className="uppercase text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">chat</p></div>
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