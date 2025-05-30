import React, { useEffect, useState } from 'react'
import Search from './Search'
import Description from './Description'

function Main() {

  const [jobs, setJobs] = useState([]);
  const [jobFocus, setJobFocus] = useState()

  useEffect(() => {
    fetch("https://job-board-api-s7tm.onrender.com/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data)
        const job = data.find((job) => job.id === 55);
        setJobFocus(job)
      })
      .catch((err) => console.error("Error fetching jobs:", err));
  }, []);

  return (
    <div className='rounded-full flex max-w-screen sm:mx-20 md:mx-30 lg:mx-65 min-h-[80vh] mb-20 mt-5'>
      <Search setJobFocus={setJobFocus} jobs={jobs} jobFocus={jobFocus}/>
      <Description jobFocus={jobFocus}/>
    </div>
  )
}

export default Main