import Modal from "@/components/templates/index/modal";
import Image from "next/image";
import { useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";

export default function Topbar() {
    const [showModal,setShowModal]=useState(false)
    function modalHandler(){
        setShowModal(!showModal)
    }
  return (
    <div className="flex items-center justify-between w-full md:w-10/12">
      <h1 className="font-bold text-lg md:text-2xl text-gray-700 dark:text-gray-300">
        دوره ها
      </h1>
      <button className="px-10 py-2 rounded-md bg-green-400 " onClick={modalHandler}>
        افزودن دوره{" "}
      </button>
      {showModal?<Modal modalHandler={modalHandler} />:""}
    </div>
  );
}
