const Student = require('../models/Student');

// @desc    Get all students (with optional search)
// @route   GET /api/students
// @access  Private
const getStudents = async (req, res) => {
  try {
    const { search } = req.query;
    let query = {};

    if (search) {
      query = {
        $or: [
          { name: { $regex: search, $options: 'i' } },
          { rollno: { $regex: search, $options: 'i' } },
          { course: { $regex: search, $options: 'i' } },
        ],
      };
    }

    const students = await Student.find(query).sort({ createdAt: -1 });
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get a single student by ID
// @route   GET /api/students/:id
// @access  Private
const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Add a new student
// @route   POST /api/students
// @access  Private
const createStudent = async (req, res) => {
  try {
    const { rollno, name, email, phone, course, address } = req.body;

    if (!rollno || !name) {
      return res.status(400).json({ message: 'Roll number and name are required' });
    }

    const student = await Student.create({ rollno, name, email, phone, course, address });
    res.status(201).json({ message: 'Student added successfully', student });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Update a student
// @route   PUT /api/students/:id
// @access  Private
const updateStudent = async (req, res) => {
  try {
    const { rollno, name, email, phone, course, address } = req.body;

    const student = await Student.findByIdAndUpdate(
      req.params.id,
      { rollno, name, email, phone, course, address },
      { new: true, runValidators: true }
    );

    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json({ message: 'Student updated successfully', student });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Delete a student
// @route   DELETE /api/students/:id
// @access  Private
const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { getStudents, getStudentById, createStudent, updateStudent, deleteStudent };
