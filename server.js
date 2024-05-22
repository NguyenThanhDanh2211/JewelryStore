const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Jewelry Store.' });
});

const PORT = 3000;

app.listen(PORT, () => console.log(`App listen at http://localhost:${PORT}`));
