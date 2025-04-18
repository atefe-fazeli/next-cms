import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { IoCheckmarkSharp } from "react-icons/io5";
import { LuUpload } from "react-icons/lu";
import { FileUploader } from "react-drag-drop-files";
import ConnectToDB from "@/utils/db";
import axios from "axios";

export default function Modal({ modalHandler }) {
  const fileTypes = ["PDF"];
  const [course, setCourse] = useState({
    name: "",
    price: "",
    teacher: "",
    file: [],
  });

  function inputHandler(e) {
    setCourse({ ...course, [e.target.name]: e.target.value });
  }
  function fileHandler(file) {
    console.log(file, "file");
    setCourse({ ...course, file: file });
  }
  async function submitHandler() {
    console.log(course.name);
    try {
      await axios.post(
        "http://localhost:3000/api/courses",
        {
          title: JSON.stringify(course.name),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error(
        "خطا:",
        error.response ? error.response.data : error.message
      );
    }
    modalHandler();
  }
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden="true"
        onClick={modalHandler}
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white p-3 md:p-5 flex flex-col  items-center gap-2 ">
              <h3
                className="text-base font-semibold text-gray-900"
                id="modal-title"
              >
                اضافه کردن دوره جدید
              </h3>
              <div
                className="
                   flex flex-col gap-2 w-full"
              >
                <input
                  type="text"
                  name="name"
                  value={course.name}
                  onChange={(e) => inputHandler(e)}
                  placeholder="نام دوره"
                  className="mt-1 p-2 w-full rounded-md border 
                dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 bg-white border-gray-300 text-gray-900'
               focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
                <input
                  type="text"
                  name="price"
                  value={course.price}
                  onChange={(e) => inputHandler(e)}
                  placeholder="قیمت "
                  className="mt-1 p-2 w-full rounded-md border 
                dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 bg-white border-gray-300 text-gray-900'
               focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />{" "}
                <input
                  type="text"
                  name="teacher"
                  value={course.teacher}
                  onChange={(e) => inputHandler(e)}
                  placeholder="مدرس دوره"
                  className="mt-1 p-2 w-full rounded-md border 
              dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 bg-white border-gray-300 text-gray-900'
             focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />{" "}
                {course.file.length !== 0 ? (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-1">
                      <div className="w-4 h-4 bg-primaryColor flex items-center justify-center">
                        <IoCheckmarkSharp className="text-white" />
                      </div>
                      <p>فایل با موفقیت بارگذاری شد .</p>
                    </div>
                    <p>{`نام فایل : ${course.file.name}`}</p>
                  </div>
                ) : (
                  <FileUploader
                    handleChange={(file) => fileHandler(file)}
                    name="file"
                    types={fileTypes}
                    // id={data.id}
                    classes="w-[99.8%] border border-dashed border-primaryColor h-32 flex items-center justify-center gap-x-3 cursor-pointer"
                  >
                    <LuUpload className="text-primaryColor w-6 h-6" />
                    <p>
                      "فایل سوالات را بکشید و در این کادر رها کنید و یا کلیک
                      کنید ."
                    </p>
                  </FileUploader>
                )}
                <button
                  type="button"
                  onClick={submitHandler}
                  className="inline-flex w-full justify-center rounded-md bg-teal-400 px-3 py-2 text-sm font-semibold text-white shadow-xs   sm:w-auto"
                >
                  تایید
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
