const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Register Routes
const projectRoutes = require('./routes/projectRoutes');
app.use('/api', projectRoutes);

// MongoDB Atlas Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Atlas Connected Successfully!"))
.catch((err) => console.log("Database connection error: ", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});