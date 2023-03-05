import express from 'express';

const app = express();

app.get('/api/data', (req, res) => {
  const data = {
    message: 'Hello World!',
  };
  res.json(data);
});

app.listen(3001, () => {
  console.log('Server is listening on port 3001.');
});
