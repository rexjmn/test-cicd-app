const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Backend is running!',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/data', (req, res) => {
  res.json({
    message: 'Hello from Contabo!',
    environment: process.env.NODE_ENV || 'development'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

Crea `backend/.env`:
```
PORT=5000
NODE_ENV=production
