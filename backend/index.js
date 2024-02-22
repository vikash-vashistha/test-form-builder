const express = require("express");
const cors = require("cors");
const connect = require("./configs/db");
// Import route files
const formRoutes = require('./routes/form.router');
const questionRoutes = require('./routes/question.router');

const app = express();

app.use(cors());

app.use(express.json());

// Routes
app.use('/api/v1', formRoutes);
app.use('/api/v1', questionRoutes);

const PORT = process.env.PORT || 2345;

app.listen(PORT, async () => {
  try {
    await connect();
    console.log('connected to atlas');
  } catch (err) {
    console.error(err.message);
  }
  console.log('listening on port 2345');
});