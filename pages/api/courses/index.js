import ConnectToDB from "@/utils/db";
import CoursesModel from "@/models/courses";
async function Handler(req, res) {
  switch (req.method) {
    case "GET":
      const courses = await CoursesModel.find();
      return res.json({ message: "get data", courses });
      
    case "POST":
      break;
    case "PUT":
      break;
    case "DELETE":
      break;
    default:
      break;
  }
}

export default Handler;
