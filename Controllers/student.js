const Student = require("./../Models/Student");

const StudentController = {};

//To insert
StudentController.add = (req, res) => {
  let { body } = req;

  Student.create({
    first_name: body.first_name,
    last_name: body.last_name,
    depart: body.depart,
  })
    .then((data) => {
      res.status(200).send({ status: true, data: data });
    })
    .catch((err) => {
      res.status(400).send({ status: false, err: err });
    });
};

//To retrive
StudentController.get = (req, res) => {
  Student.find({})
    .populate("depart")
    .exec(function (err, data) {
      if (!err) {
        res.status(200).send({ status: true, data: data });
      } else {
        res.status(400).send({ status: true, err: err });
      }
    });
};

module.exports = StudentController;
