const express = require("express");
const cors = require("cors");
const app = express();


const myAuth = require('./utils/auth');
const authRoutes = require('./routes/authRoutes');

//Middlewares
app.use(cors({origin:"http://localhost:5173"}));
app.use(express.json());
app.use(myAuth);
app.use('/api/auth',authRoutes);

//Routes
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Movie Review API is running' });
});

module.exports = app;