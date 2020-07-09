const express = require("express");
const app = express();
const db = require("./database");
const cors = require("cors");
const path = require("path");

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// import controller
const controller = require("./Controllers/index");

//Routes
//Routes for Student
app.post("/student", controller.StudentController.add);
app.get("/student", controller.StudentController.get);

//Routes for Subject
app.post("/subject", controller.SubjectController.add);
app.get("/subject", controller.SubjectController.get);

module.exports = app;
