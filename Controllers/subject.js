const Subject = require("./../Models/Subject");

const SubjectController = {};

//To insert
SubjectController.add = (req, res) => {
  let { body } = req;

  Subject.create({ name: body.name, term: body.term, depart: body.depart })
    .then((data) => {
      res.status(200).send({ status: true, data: data });
    })
    .catch((err) => {
      res.status(400).send({ status: false, err: err });
    });
};

//To retrive
SubjectController.get = (req, res) => {
  Subject.find({})
    .then((data) => {
      res.status(200).send({ status: true, data: data });
    })
    .catch((err) => {
      res.status(400).send({ status: false, err: err });
    });
};

module.exports = SubjectController;
