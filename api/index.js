const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001; // Replace with your actual port

// Configure CORS
app.use(cors({
  origin: 'http://localhost:3000' // Replace with your React app's origin
}));

// Your API routes
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

