import ConnectToDB from "@/utils/db";
import CoursesModel from "@/models/courses";
async function Handler(req, res) {
  switch (req.method) {
    case "GET":
      const courses = await CoursesModel.find();
      return res.json({ message: "get data", courses });

    case "POST":
      try {
        const { title } = req.body;
        if (!title.trim()) {
          return res.status(422).json({ message: "course is not valid" });
        } else {
          const course = await CoursesModel.create({ title });
          return res
            .status(201)
            .json({ message: "course created succesfully", course });
        }
      } catch (error) {
        return res.status(500).json({ message: "err" });
      }

    case "PUT":
      break;
    case "DELETE":
      break;
    default:
      break;
  }
}

export default Handler;
