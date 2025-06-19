import "../style/Edit.css"
import { Link } from "react-router-dom";

function Project () {
    return(
        <>
        <div className="h-screen bg-transparent grid place-content-center gap-[50px] select-none">
            {/* heading */}
        <div className="grid place-content-center"><p className="uppercase text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">project</p></div>
            {/* added projects */}
        <div className="w-[1200px] h-[500px] flex justify-between items-center gap-[20px]">
            <div id="projectlayoutfirst" className="w-[400px] h-full rounded-xl"></div>
            <div id="projectlayoutsecond" className="w-[400px] h-full rounded-xl"></div>
            <div id="projectlayoutthird" className="w-[400px] h-full rounded-xl"></div>
        </div>
        
        </div>
        {/* adding back button */}
        <div className="h-[100px] w-full flex justify-center items-center">
            <div className="w-[200px] h-[50px] border-[2px] border-cyan-500 rounded-full hover:shadow-[0_0_15px_#00FFF0] transition-all ease-in-out duration-200">
            <Link className="w-full h-full flex justify-center items-center uppercase text-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent" to="/">⇚ back</Link>
            </div>
        </div>
        </>
    )
}
export default Project;