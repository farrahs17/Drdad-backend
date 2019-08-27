const Patient = require("../models/Patient");
const SortResults = require("../utils/SortResults")

exports.addPatient = (req, res, next) => {
  const name = req.body.patient.name;
  const age = req.body.patient.age;
  const gender = req.body.patient.gender;
  const history = req.body.patient.history;
  const visits = req.body.patient.visits;

  Patient.create({
    name: name,
    age: age,
    gender: gender,
    history: history,
    visits: visits
  })
    .then(result => {
      res.status(200).json({ result });
    })
    .catch(err => console.log(err));
};

exports.updatePatient = (req, res, next) => {
  const name = req.body.patient.name;
  const age = req.body.patient.age;
  const gender = req.body.patient.gender;
  const history = req.body.patient.history;
  const visits = req.body.patient.visits;
  const _id = req.body.patient._id;

      Patient.update({_id: _id},{
        name: name,
        age: age,
        gender: gender,
        history: history,
        visits: visits
      })
        .then(result => {
          console.log(result);
          res.status(200).json({ msg: "updated" });
        })
        .catch(err => console.log(err));

};

exports.deletePatient = (req, res, next) => {
  const id = req.body._id;

  Patient.deleteOne({ _id: id })
    .then(result => {
      console.log(result);
      res.status(200).json({ msg: "Deleted" });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ msg: "Something went wrong" });
    });
};

exports.getPatient = (req, res, next) => {
  const id = req.body.id;
  Patient.findOne({ _id: id })
    .then(p => {
      res.status(200).json({ patient: p });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ msg: "Something went wrong" });
    });
};

exports.search = (req, res, next) => {
  let searchKey = new RegExp(req.body.searchKey, "i");

  Patient.find({ name: searchKey })
    .then(result => {
      if (!result) {
        return res.status(404).json("No data found");
      }
      res.status(200).json(SortResults.sortResults(searchKey,result));
    })
    .catch(err => {
      console.log(err);
      res.status(400).json("An error occurred");
    });
};