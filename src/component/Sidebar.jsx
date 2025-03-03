// Sidebar.jsx
import React from 'react';

const Sidebar = ({setSelectedOption}) => {
  return (
    <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[250px] overflow-y-auto text-center bg-neutral-900">
      <div className="text-amber-400 text-xl">
        <div className="p-2.5 mt-1">
          <h1 className="font-bold text-amber-400 text-[15px]">
            <p>G Graphics Studio</p>
          </h1>
        </div>
        <div className="mt-14 bg-gray-600 h-[1px]"></div>
      </div>

      <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-800 text-amber-400" onClick={()=>setSelectedOption("home")}>
        <i className="bi bi-house-door-fill"></i>
        <span className="text-[15px] ml-4 text-amber-400 font-bold">Home</span>
      </div>
      <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-800 text-amber-400" onClick={()=>setSelectedOption("marriage")}>
        <i className="bi bi-heart-fill"></i>
        <span className="text-[15px] ml-4 text-amber-400 font-bold">Marriage</span>
      </div>
      <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-800 text-amber-400" onClick={()=>setSelectedOption("baby")}>
        <i className="bi bi-balloon-fill"></i>
        <span className="text-[15px] ml-4 text-amber-400 font-bold">Baby</span>
      </div>
      <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-800 text-amber-400" onClick={()=>setSelectedOption("family")}>
        <i className="bi bi-people-fill"></i>
        <span className="text-[15px] ml-4 text-amber-400 font-bold">Family</span>
      </div>
      <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-800 text-amber-400" onClick={()=>setSelectedOption("preWedding")}>
        <i className="bi bi-camera-fill"></i>
        <span className="text-[15px] ml-4 text-amber-400 font-bold">Pre Wedding</span>
      </div>
      <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-800 text-amber-400" onClick={()=>setSelectedOption("live")}>
        <i className="bi bi-camera-reels-fill"></i>
        <span className="text-[15px] ml-4 text-amber-400 font-bold">Live</span>
      </div>
      <div className="my-4 bg-gray-600 h-[1px]"></div>

      <div style={{ width: "234px" }} className="fixed bottom-0">
        <h1 className="font-bold text-amber-400 text-[15px]">Contact</h1>
        <div className="flex justify-around my-4">
          <i className="bi bi-geo-alt-fill text-amber-400"></i>
          <i className="bi bi-instagram text-amber-400"></i>
          <i className="bi bi-whatsapp text-amber-400"></i>
          <i className="bi bi-envelope-fill text-amber-400"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;