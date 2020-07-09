const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

const subjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    term: {
      type: String,
      required: true,
    },
    depart: {
      type: String,
      required: true,
    },
  },
  { collection: "subjects" }
);

const Subject = mongoose.model("Subject", subjectSchema);

module.exports = Subject;
