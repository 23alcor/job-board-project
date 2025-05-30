import React, { useEffect, useState } from "react";
import JobItem from "./JobItem";
import { SearchCheckIcon } from "lucide-react";

function Search({ jobs, setJobFocus, jobFocus }) {
  const [query, setQuery] = useState("");

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(query.toLowerCase()) ||
    job.company.toLowerCase().includes(query.toLowerCase()) ||
    job.location.toLowerCase().includes(query.toLowerCase())
  );



  return (
    <div style={{ background: "rgb(15, 17, 19)", borderColor: "rgb(63, 65, 67)"}} className=" w-[30%] flex flex-col h-200 border-2 mr-2 rounded-2xl">
      <div className=" h-16 flex justify-center items-center">
      <SearchCheckIcon color="white"/>
        <input
          style={{ background: "rgb(53, 61, 65)", borderColor: "rgb(63, 65, 67)"}}
          className=" w-[90%] h-10 rounded-full pl-10"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search jobs..."
          
        />
        
      </div>
      <div style={{ background: "rgb(15, 17, 19)", borderColor: "rgb(63, 65, 67)"}} className="flex-1 overflow-y-auto rounded-2xl">
        {filteredJobs.length === 0 ? (
          <p>No jobs found.</p>
        ) : (
          <ul>
            {filteredJobs.map((job) => (
              <JobItem setJobFocus={setJobFocus} jobFocus={jobFocus}  jobs={jobs} key={job.id} id={job.id} company={job.company} title={job.title} city={job.location}  salary={job.salary} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Search;
