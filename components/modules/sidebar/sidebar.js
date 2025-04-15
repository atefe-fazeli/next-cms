import Link from "next/link";
import React from "react";
import { IoLogoVue } from "react-icons/io5";

export default function Sidebar() {
  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex items-center gap-3">
        <IoLogoVue />
        <h1 className="">سبزلرن </h1>
      </div>
      <div className="flex flex-col gap-2 border-b border-b-gray-400 pb-3">
        <Link href="/">صفحه اصلی</Link>
        <Link href="/contact">تماس با ما</Link>
        <Link href="/about">درباره ی ما</Link>
      </div>
      <Link href="#">خروج</Link>
    </div>
  );
}
