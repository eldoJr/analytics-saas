import express from 'express';
import cors from 'cors';
import pool from './db';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Analytics API Running');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.post('/api/events', async (req, res) => {
    const { event_name, page_url, visitor_id } = req.body;
    try {
      await pool.query(
        'INSERT INTO events (event_name, page_url, visitor_id) VALUES ($1, $2, $3)',
        [event_name, page_url, visitor_id]
      );
      res.status(201).send('Event logged!');
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  });