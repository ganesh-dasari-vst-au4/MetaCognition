//Importing models
const Student = require("./Student");
const Subject = require("./Subject");

//Exporting models
module.exports = {
  models: {
    Student: Student,
    Subject: Subject,
  },
};
