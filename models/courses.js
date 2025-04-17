const mongoose = require("mongoose");
const schema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});
const CoursesModel = mongoose.models.course || mongoose.model("course", schema);
export default CoursesModel;
