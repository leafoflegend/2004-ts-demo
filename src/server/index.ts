import express from 'express';
import path from 'path';

const app = express();

const PORT = process.env.PORT || 3000;
const DIST_PATH = path.join(__dirname, '../../dist');

app.use(express.static(DIST_PATH));

app.get('/health', (req, res) => {
  res.send({
    message: 'I am healthy.',
  });
});

app.listen(PORT, () => {
  console.log(`Application listening on PORT:${PORT}`);
});
