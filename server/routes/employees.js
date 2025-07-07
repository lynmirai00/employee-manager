// server/routes/employees.js
const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

// Sync DB (tự tạo bảng nếu chưa có)
require('../db').sync();

// Lấy danh sách nhân viên
router.get('/', async (req, res) => {
  const employees = await Employee.findAll();
  res.json(employees);
});

// Thêm nhân viên
router.post('/', async (req, res) => {
  const newEmp = await Employee.create(req.body);
  res.json(newEmp);
});

// Sửa nhân viên
router.put('/:id', async (req, res) => {
  await Employee.update(req.body, { where: { id: req.params.id } });
  res.json({ message: 'Updated' });
});

// Xóa nhân viên
router.delete('/:id', async (req, res) => {
  await Employee.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Deleted' });
});

module.exports = router;
