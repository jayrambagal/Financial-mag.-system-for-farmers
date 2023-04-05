import React from "react";
import trash from "../assets/trash.jpg"
import "../App.css"
const List = () => {
  return (

    <div className="flex flex-col py-6 gap-3">
        <h1 className='py-4 font-bold text-xl'>History</h1>
        
    <div
      className="item flex justify-center bg-gray-50 py-2 rounded-r"
      style={{ borderRight: "#e5e5e5" }}
    >
      <button className="px-3">
        
        <img className="trash_img" src={trash} alt="" />
      </button>
      <span className="block w-full">Sallary</span>
    </div>

    </div>
  );
};

export default List;
