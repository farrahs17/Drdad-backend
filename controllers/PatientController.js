const Patient = require("../models/Patient");

exports.addPatient = (req, res, next) => {
  const name = req.body.patient.name;
  const age = req.body.patient.age;
  const gender = req.body.patient.gender;
  const history = req.body.patient.history;
  const visits = req.body.patient.visits;

  Patient.create({})
    .then(result => {
      console.log(result);
      res.status(200).json({ patient: result });
    })
    .catch(err => console.log(err));
};
