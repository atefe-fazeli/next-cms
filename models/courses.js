const mongoose = require("mongoose");
const Schema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
const CoursesModel = mongoose.models.course || mongoose.model("course", Schema);
export default CoursesModel;
