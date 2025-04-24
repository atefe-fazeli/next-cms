import CourseItem from "@/components/templates/index/courseItem";
import Topbar from "@/components/templates/index/topbar";
import CoursesModel from "@/models/courses";
import ConnectToDB from "@/utils/db";
import axios from "axios";

export default function Home({ data }) {
// create conflict in home page at main
  async function editCourseHandler(id, title) {
    console.log("id and updatedData", id,title);
    try {
      const response = await axios.put(
        `http://localhost:3000/api/courses/${id}`,
        {title:title}
      );
      console.log("منبع با موفقیت به‌روزرسانی شد:", response.data);
    } catch (error) {
      console.error(
        "خطا در به‌روزرسانی منبع:",
        error.response ? error.response.data : error.message
      );
    }
  }

  async function deleteCourseHandler(id) {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/courses/${id}`
      );
      console.log("منبع با موفقیت حذف شد:", response.data);
    } catch (error) {
      console.error(
        "خطا در حذف منبع:",
        error.response ? error.response.data : error.message
      );
    }
  }
  return (
    <div className="flex flex-col gap-3 md:gap-5">
      <Topbar />
      <div className="flex flex-col gap-2 md:gap-3">
        {data.map((item) => (
          <CourseItem
            key={item._id}
            course={item}
            deleteCourseHandler={deleteCourseHandler}
            editCourseHandler={editCourseHandler}
          />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  try {
    await ConnectToDB();
    const courses = await CoursesModel.find();
    return {
      props: {
        data: JSON.parse(JSON.stringify(courses)),
      },
      revalidate: 10 * 60 * 60,
    };
  } catch (error) {
    return {
      props: {
        data: [],
      },
    };
  }
}
