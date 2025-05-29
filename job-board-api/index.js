require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

// Set up PostgreSQL connection
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false
  }
});


// Test route
app.get('/', (req, res) => {
  res.send('Job Board API is running!');
});

// Get all jobs
app.get('/jobs', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM jobs');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.post('/jobs', async (req, res) => {
  const jobs = Array.isArray(req.body) ? req.body : [req.body];

  try {
    const insertedJobs = [];

    for (const job of jobs) {
      const { title, company, location, salary, description, qualifications, status, hours, benefits, objective, compensation, schedule, industry } = job;
      const result = await pool.query(
        `INSERT INTO jobs (title, company, location, salary, description, qualifications, status, hours, benefits, objective, compensation, schedule, industry)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
         RETURNING *`,
        [title, company, location, salary, description, qualifications, status, hours, benefits, objective, compensation, schedule, industry]
      );
      insertedJobs.push(result.rows[0]);
    }

    res.status(201).json(insertedJobs);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error inserting jobs');
  }
});

app.put('/jobs/:id', async (req, res) => {
  const { id } = req.params;
  const { title, company, location, salary, description } = req.body;

  try {
    const result = await pool.query(
      'UPDATE jobs SET title=$1, company=$2, location=$3, salary=$4, description=$5 WHERE id=$6 RETURNING *',
      [title, company, location, salary, description, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).send('Job not found');
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating job');
  }
});

app.delete('/jobs/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      'DELETE FROM jobs WHERE id = $1 RETURNING *',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).send('Job not found');
    }

    res.send(`Job with ID ${id} deleted successfully.`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting job');
  }
});



// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
