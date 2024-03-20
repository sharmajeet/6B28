const showRecord = (req, res) => {
  res.send("Show Records");
};

const showDetails = (req, res) => {
  res.send(" Student Details");
};

const showStudentRecords = (req, res) => {
  res.json({ name: "jeet sharma", age: 21, address: "vadodara" });
};

module.exports = { showRecord, showDetails, showStudentRecords };
