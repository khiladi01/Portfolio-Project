import { Link } from "react-router-dom";
import 'boxicons/css/boxicons.min.css';
import "../style/Edit.css"
import Model from "../components/Model.jsx";

function Home () {
    return (
        <>
        <div className="min-h-screen bg-gradient-to-br from-black to-purple-800 flex justify-between items-center select-none p-20">
        {/* adding my intro */}
        <div id="herointro" className="uppercase text-5xl font-bold text-white tracking-normal">
            <p>raushan</p>
            <p>raj</p>
            {/* adding summary */}
            <div id="herosummary" className="w-[300px] pt-[50px] text-white font-normal text-lg">
            <p>Frontend Dev + 3D Web Enthusiast Building Interfaces with Depth & Detail</p>
            </div>
            {/* adding button for launch project */}
            <div id="herobutton" className="mt-[50px] w-[200px] h-[50px] flex justify-center items-center border-[3px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-700 opacity-75 group-hover:opacity-100 transition-opacity">
                <button className="uppercase text-lg gap-2 cursor-pointer">
                <i class='bx text-black  bx-play-circle'></i>
                launch
                </button>
            </div>
        </div>
        {/* adding 3d cursor movement robot */}
        <div className="h-[600px] w-[500px]">
           <Model />
        </div>
        {/* adding my professional */}
        </div>
        </>
    )
}

export default Home;