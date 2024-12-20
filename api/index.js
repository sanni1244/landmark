const express = require('express');
const cors = require('cors'); 

const app = express();
const port = 3001; // Example port

app.use(cors()); // Enable CORS

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});