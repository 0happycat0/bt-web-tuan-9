const express = require("express");
const {
    getAllStudents,
    createStudent,
    getStudentById,
    updateStudent,
    deleteStudent,
    searchStudentByNameOrAddress,
} = require("../controllers/StudentController");

const router = express.Router();

router.route("/").get(getAllStudents).post(createStudent);
router.route("/search").get(searchStudentByNameOrAddress);
router.route("/:id").get(getStudentById).put(updateStudent).delete(deleteStudent);


module.exports = router;