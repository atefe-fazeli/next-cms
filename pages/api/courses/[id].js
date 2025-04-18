import ConnectToDB from "@/utils/db";
import CoursesModel from "@/models/courses";
async function Handler(req, res) {
  try {
    await ConnectToDB();
  } catch (error) {
    console.error("خطا در اتصال به دیتابیس:", error);
    return res
      .status(500)
      .json({ message: "خطای سرور: مشکل در اتصال به دیتابیس" });
  }

  const { id } = req.query;
  const { title } = req.body;
console.log(req.body)
  switch (req.method) {
    case "GET":
      const course = await CoursesModel.find({ _id: id });
      return res.json({ message: "get data", course });
    case "PUT":
        console.log("put method")
        console.log(title,id,"in put method")
      const updatedCourse = await CoursesModel.findOneAndUpdate(
        { _id: id },
        { title }
      );
      if (updatedCourse) {
        return res.json({ message: "course updated sucssesfully :))...." });
      }
      break;
    case "DELETE":
      const deletedCourse = await CoursesModel.findOneAndDelete({ _id: id });
      if (deletedCourse) {
        return res.json({ message: "course deleted sucssesfully" });
      }
      break;
    default:
      break;
  }
}

export default Handler;
