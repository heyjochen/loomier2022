const path = require('path');
const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 5000;
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./db/config');

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/projects', require('./routes/projectsRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/newsletter', require('./routes/newsletterRoute'));

// Serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'client', 'build', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}

app.use(errorHandler);

app.listen(port, () => console.log(`We runnin on port ${port}`));
