import React, { useEffect, useState } from "react";
import JobItem from "./JobItem";

function Search() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("https://job-board-api-s7tm.onrender.com/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error("Error fetching jobs:", err));
  }, []);

  return (
    <div className="bg-blue-500 w-[30%]">
      <div className="bg-yellow-500 h-[5%] flex justify-center items-center">
        <input
          className="bg-gray-600 w-[90%] h-full rounded-full pl-10"
          type="text"
        />
      </div>
      <div className="bg-white h-[95%]">
        {jobs.length === 0 ? (
          <p>No jobs found.</p>
        ) : (
          <ul>
            {jobs.map((job) => (
              // <li key={job.id} style={{ marginBottom: "1rem" }}>
              //   <strong>{job.title}</strong> at {job.company}
              //   <br />
              //   {job.location} - ${job.salary}
              //   <p>{job.description}</p>
              // </li>
              <JobItem key={job.id} company={job.company} title={job.title}  />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Search;
