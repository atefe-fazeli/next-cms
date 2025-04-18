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
          <CourseItem key={item.id} title={item.title} />
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
