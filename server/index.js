// server/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const employeeRoutes = require('./routes/employees');

app.use(cors());
app.use(express.json());
app.use('/api/employees', employeeRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
