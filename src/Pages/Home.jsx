import { Link } from "react-router-dom";
import "../style/Edit.css"
import Model from "../components/three";

function Home () {
    return (
        <>
        <div className="min-h-screen bg-gradient-to-br from-black to-purple-800 flex justify-center items-center select-none">
        {/* adding my intro */}
        <div id="herointro" className="uppercase text-5xl font-bold text-white tracking-normal">
            <p>raushan</p>
            <p>raj</p>
        </div>
        {/* adding 3d cursor movement robot */}
        <div className="h-[600px] w-[500px]">
           <Model />
        </div>
        {/* adding my professional */}
        <div id="herosummary" className="w-[300px] text-white font-normal text-lg">
            <p>Frontend Dev + 3D Web Enthusiast Building Interfaces with Depth & Detail</p>
        </div>
        </div>
        </>
    )
}

export default Home;