// backend/app.js

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const judgeRoutes = require("./routes/judge");
// Middleware
app.use(cors());
app.use(express.json());
app.use("/api", judgeRoutes);
// MongoDB Connection (fixed)
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Test Route
app.get('/', (req, res) => {
    res.send('CodeTruth AI Backend is running!');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
