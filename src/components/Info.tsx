import React from "react";
import globeterra from "../assets/globeterra.png";


const Info: React.FC = () => {
  return (
    <>
      <div className="h-full w-full flex flex-col gap-5">
        <div className="">
            <h1 className="text-2xl text-blue-500 font-bold text-center font-press press-start-2p-regular">Coming soon ... </h1>
        </div>
        <div className="flex flex-col items-center gap-5 w-full">
            <img src={globeterra} alt="Globe Terra" className=" h-96 w-96" />
            <div className="flex flex-row items-center gap-5 text-xl font-bold text-white">
            <h1 className="text-2xl">join our Social networks : </h1>
            <a href="https://x.com/GlobeTerraCoin?t=mI_JkHsDurgOY1QFafb_8w&s=35" className="px-1 py-2 border border-blue-400 rounded-lg text-blue-400 hover:scale-105">Twitter</a>
            <a href="https://t.me/easycash213"className="px-1 py-2 border border-blue-400 rounded-lg text-blue-400 hover:scale-105">Telegram</a>

            
            </div>
        </div>

        
      </div>
    </>
  )
}
export default Info
