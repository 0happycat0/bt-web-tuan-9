
const StudentModel = require("../models/Student");

exports.getAllStudents = async() => {
    return await StudentModel.find();
};

exports.createStudent = async(student) => {
    return await StudentModel.create(student);
};

exports.getStudentById = async(id) => {
    return await StudentModel.findById(id);
};

exports.updateStudent = async (id, student) => {
    return await StudentModel.findByIdAndUpdate(id, student);
};

exports.deleteStudent = async (id) => {
    return await StudentModel.findByIdAndDelete(id);
};

exports.searchStudentByName = async (nameSearch) => {
    return await StudentModel.find({
      name: { $regex: nameSearch, $options: "i" },
    });
};

exports.searchStudentByAddress = async (addressSearch) => {
    return await StudentModel.find({
      address: { $regex: addressSearch, $options: "i" },
    });
};