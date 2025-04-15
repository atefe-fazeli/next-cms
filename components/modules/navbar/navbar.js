import Image from "next/image";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  function sidebarHandler() {
    setShowSidebar(!showSidebar);
  }
  return (
    <div className="flex justify-between items-center h-10  md:h-12 bg-amber-200 w-full">
      <button className="flex md:hidden" onClick={sidebarHandler}>
        {" "}
        <IoMenu />
      </button>
      <input className="hidden md:flex " placeholder="جست و جو کنید..."></input>
      <Image className="rounded-4xl w-7 h-7" />
    </div>
  );
}
