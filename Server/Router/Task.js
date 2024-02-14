const express = require("express");
const router = express.Router();
const { showRecord, showDetails,showStudentRecords } = require("../Controller/Job");

router.route("/").get(showRecord);
router.route("/details").get(showDetails)
router.route("/student").get(showStudentRecords)

module.exports = router;
