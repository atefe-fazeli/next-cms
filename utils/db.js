const mongoose = require("mongoose");
const ConnectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return false;
    }
    await mongoose.connect("mongodb://localhost:27017/next-cms");
  } catch (err) {
    console.log("err in db connection");
  }
};
export default ConnectToDB;
