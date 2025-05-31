import React from "react";
import { Bookmark } from "lucide-react";

function JobItem({ setJobFocus, jobs, id,  company, title, city, salary, jobFocus }) {

  return (
    <button onClick={() => setJobFocus(jobs.find((job) => job.id === id))}

    //className="mx-auto bg-red-400 h-25 rounded-2xl flex justify-between mt-1 w-[98%]">
    //style={{ background: "rgb(15, 17, 19)", borderColor: "rgb(63, 65, 67)"}}
    style={{ background: "rgb(15, 17, 19)", borderColor: `${jobFocus.id===id ? 'rgb(63, 65, 67)' : 'rgb(0, 0, 0)'}`}}
    className={`mx-auto text-white bg-red-400 h-25 rounded-2xl flex justify-between mt-1 w-[98%] hover:cursor-pointer ${jobFocus.id===id ? ' border-green-500 border-3 hover:cursor-none' : 'border-white border-3'} `}>
      <div className="flex flex-col items-start justify-center pl-4 py-2 w-[80%]">
        <div className="text-xs">{company}</div>
        <div className="text-sm pt-1">{title}</div>
        <div className="text-xs pt-1">{city}</div>
        <div className="text-xs">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0,
    maximumFractionDigits: 0 }).format(salary)}</div>
      </div>
      <div className="h-full pr-3 pt-3">
        <Bookmark className="w-6 h-6" />
      </div>
    </button>
  );
}

export default JobItem;
