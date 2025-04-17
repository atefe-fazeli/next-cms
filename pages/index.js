import CourseItem from "@/components/templates/index/courseItem";
import Topbar from "@/components/templates/index/topbar";
import CoursesModel from "@/models/courses";
import ConnectToDB from "@/utils/db";

export default function Home({ data }) {
  return (
    <div className="flex flex-col gap-3 md:gap-5">
     <Topbar />
      <div className="flex flex-col gap-2 md:gap-3">
        {data.map((item) => (
          <CourseItem key={item.id} />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    await ConnectToDB();
    const courses = await CoursesModel.find().lean();
    console.log("Courses fetched:", courses);
    return {
      props: {
        data: JSON.parse(JSON.stringify(courses)),
      },
    };
  } catch (error) {
    console.error("Error in getServerSideProps:", error);
    return {
      props: {
        data: [],
      },
    };
  }
}
