import Image from "next/image";
import { useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";

export default function CourseItem({
  course,
  deleteCourseHandler,
  editCourseHandler,
}) {
  const [updatedData, setUpdatedData] = useState("");
  const [showModal, setShowModal] = useState(false);
  function setUpdatedDataHandler(e) {
    setUpdatedData(e.target.value);
  }
  function modalHandler() {
    setShowModal(!showModal);
  }
  return (
    <>
      {" "}
      <div className="flex items-center w-full md:w-10/12 shadow-2xl">
        <div className="w-1/6">
          <Image />
        </div>
        <div className="flex justify-between items-center p-3 w-5/6">
          <h1 className="font-bold">دوره {course.title}</h1>
          <div className="flex items-center gap-2">
            <button
              className="bg-teal-400 px-5 py-3 rounded-md md:min-w-28"
              onClick={modalHandler}
            >
              <span className="text-white hidden md:flex"> ویرایش</span>
              <FiEdit className="text-white flex md:hidden" />
            </button>
            <button
              className="bg-rose-800 px-5 py-3 rounded-md md:min-w-28"
              onClick={() => deleteCourseHandler(course._id)}
            >
              <span className="text-white hidden md:flex"> حذف</span>
              <FiTrash className="text-white flex md:hidden" />
            </button>
          </div>
        </div>
      </div>
      {showModal ? (
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
                  <div className="flex justify-between items-center w-full">
                    <h3
                      className="text-base font-semibold text-gray-900"
                      id="modal-title"
                    >
                      ویرایش دوره
                    </h3>
                    <button onClick={modalHandler}>
                      <IoIosClose />
                    </button>
                  </div>

                  <div
                    className="
                 flex flex-col gap-2 w-full"
                  >
                    <input
                      type="text"
                      name="name"
                      value={updatedData}
                      onChange={(e) => setUpdatedDataHandler(e)}
                      placeholder="نام دوره"
                      className="mt-1 p-2 w-full rounded-md border 
              dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 bg-white border-gray-300 text-gray-900'
             focus:outline-none focus:ring-2 focus:ring-green-400"
                      required
                    />

                    <button
                      type="button"
                      onClick={() => editCourseHandler(course._id, updatedData)}
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
      ) : (
        ""
      )}
    </>
  );
}
