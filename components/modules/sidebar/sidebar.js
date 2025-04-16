import Link from "next/link";
import React from "react";
import { IoLogoVue } from "react-icons/io5";

export default function Sidebar() {
  return (
    <div className="flex flex-col w-full gap-3 md:gap-5">
      <div className="flex items-center gap-3">
        <IoLogoVue className="w-10 h-10 text-teal-500"/>
        <h1 className="font-bold text-lg md:text-2xl  dark:text-gray-300 text-gray-700 font-IranSans">سبزلرن </h1>
      </div>
      <div className="flex flex-col gap-4 border-b border-b-gray-400 pb-3">
        <Link href="/">صفحه اصلی</Link>
        <Link href="/contact">تماس با ما</Link>
        <Link href="/about">درباره ی ما</Link>
      </div>
      <Link href="#">خروج</Link>
    </div>
  );
}
