import { useEffect, useState } from 'react';

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('https://job-board-api-s7tm.onrender.com/jobs')
      .then(res => res.json())
      .then(data => setJobs(data))
      .catch(err => console.error('Error fetching jobs:', err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Job Board</h1>
      {jobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        <ul>
          {jobs.map(job => (
            <li key={job.id} style={{ marginBottom: '1rem' }}>
              <strong>{job.title}</strong> at {job.company}
              <br />
              {job.location} - ${job.salary}
              <p>{job.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
