import Image from "next/image";
import { FiEdit, FiTrash } from "react-icons/fi";

export default function CourseItem() {
  return (
    <div className="flex items-center w-full md:w-10/12 shadow-2xl">
      <div className="w-1/6">
        <Image />
      </div>
      <div className="flex justify-between items-center p-3 w-5/6">
        <h1 className="font-bold">دوره pwa</h1>
        <div className="flex items-center gap-2">
          <button className="bg-teal-400 px-5 py-3 rounded-md md:min-w-28">
            <span className="text-white hidden md:flex"> ویرایش</span>
            <FiEdit className="text-white flex md:hidden" />
          </button>
          <button className="bg-rose-800 px-5 py-3 rounded-md md:min-w-28">
            <span className="text-white hidden md:flex"> حذف</span>
            <FiTrash className="text-white flex md:hidden" />
          </button>
        </div>
      </div>
    </div>
  );
}
