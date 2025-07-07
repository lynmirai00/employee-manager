// server/models/Employee.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Employee = sequelize.define('Employee', {
  name: DataTypes.STRING,
  position: DataTypes.STRING,
  department: DataTypes.STRING,
  salary: DataTypes.INTEGER,
  email: DataTypes.STRING,
});

module.exports = Employee;
