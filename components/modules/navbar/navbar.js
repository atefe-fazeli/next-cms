import Image from "next/image";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import { LiaSearchSolid } from "react-icons/lia";
import Sidebar from "../sidebar/sidebar";
export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  function sidebarHandler() {
    setShowSidebar(!showSidebar);
  }
  return (
    <>
      <div className="flex justify-between items-center h-10  md:h-12  w-full relative px-6">
        <button className="flex md:hidden z-50" onClick={sidebarHandler}>
          {" "}
          <IoMenu className="rounded-4xl w-8 h-8 text-green-700" />
        </button>
        <div className="hidden md:flex items-center justify-between rounded-md border border-gray-400 px-5 py-1">
          <input className=" text-sm focus:border-none focus:outline-none" placeholder="جست و جو کنید..." />
          <LiaSearchSolid />
        </div>
        <IoPersonCircleOutline className="rounded-4xl w-8 h-8 text-green-700" />
      </div>
      {showSidebar ? (
        <div className="absolute top-0 left-0 w-full h-screen z-40 bg-neutral-400 pt-10 md:pt-12 pr-7">
          <Sidebar />
        </div>
      ) : (
        ""
      )}
    </>
  );
}
