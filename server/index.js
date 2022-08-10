const express = require('express');
require('dotenv').config();
const connectDB = require('./db/config');
const cors = require('cors');

const port = process.env.PORT || 5000;
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/api/newsletter', require('./routes/NewsletterRoute'));
app.use('/api/projects', require('./routes/ProjectRoutes'));

app.listen(port, () => {
  console.log(`We are listening on port ${port}`);
});
