const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const qRoutes = require("./routes/questionRoutes");
const gRoutes = require("./routes/gameRoutes");
const dRoutes = require("./routes/dashboard");
const pRoutes = require("./routes/profileRoutes");

dotenv.config();
connectDB();

const app = express();

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,  // Allow cookies or authorization headers if needed
};
app.use(cors(corsOptions));

// app.get('/', (req, res) => {
//   res.send('Backend is running!');
// }); 

app.use(express.json());

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/questions", qRoutes);
app.use("/api/games", [gRoutes, dRoutes]);
app.use("/api/profile", pRoutes);

// Static file serving for uploads
app.use('/uploads', express.static('uploads'));

module.exports = app;
