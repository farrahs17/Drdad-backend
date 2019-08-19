const express = require("express");
const router = express.Router();

const PatientController = require("../controllers/PatientController");

router.post("/add", PatientController.addPatient);
router.post("/update", PatientController.updatePatient);
router.post("/delete", PatientController.deletePatient);
router.get("/get", PatientController.getPatient);
router.post("/search", PatientController.search);

module.exports = router;
