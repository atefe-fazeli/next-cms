import CourseItem from "@/components/templates/index/courseItem";

export default function Home() {
  return (
    <div className="flex flex-col gap-3 md:gap-5">
      <div className="flex items-center justify-between w-full md:w-10/12">
        <h1 className="font-bold text-lg md:text-2xl text-gray-700 dark:text-gray-300">دوره ها</h1>
        <button className="px-10 py-2 rounded-md bg-green-400 ">افزودن دوره </button>
        
      </div>
      <div className="flex flex-col gap-2 md:gap-3"></div>
      <CourseItem/>
    </div>
  );
}
