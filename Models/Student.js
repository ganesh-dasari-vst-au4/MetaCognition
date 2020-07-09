const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

const studentSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    depart: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
    },
  },
  { collection: "students" }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
