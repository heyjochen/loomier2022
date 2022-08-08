const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDB = require('./db/config');
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.listen(port, () => console.log(`We runnin on port ${port}`));
