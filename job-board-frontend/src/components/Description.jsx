import { Bookmark, Ellipsis, Zap } from "lucide-react";
import React from "react";

function Description({ jobFocus }) {
  if (!jobFocus) {
    return (
      <div style={{ background: "rgb(15, 17, 19)", borderColor: "rgb(63, 65, 67)" }} className="w-[70%] flex flex-col h-200 justify-center items-center">
        <p className="text-white text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div
      style={{ background: "rgb(15, 17, 19)", borderColor: "rgb(63, 65, 67)" }}
      className="w-[70%] flex flex-col h-200 text-white border-3 rounded-2xl overflow-hidden"
    >
      <div
        style={{
          background: "rgb(15, 17, 19)",
          borderColor: "rgb(63, 65, 67)",
        }}
        className="h-40 flex justify-between items-center pl-[5%] pr-[5%] border-b-2"
      >
        <div className="w-[60%] pt-5">
          <div>
            <h1 className="text-xl">{jobFocus.company}</h1>
          </div>
          <div>
            <h1 className="text-3xl">{jobFocus.title}</h1>
          </div>
          <div className="pb-5 flex justify-between w-[60%]">
            <div>{jobFocus.location}</div>
            <div>
              {/* {jobFocus.salary - 20000} - {jobFocus.salary + 20000} */}
              {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0,
    maximumFractionDigits: 0 }).format(jobFocus.salary - 20000)} - {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0,
      maximumFractionDigits: 0 }).format(jobFocus.salary + 20000)}
            </div>
          </div>
        </div>
        <div className="flex w-[30%] justify-between items-center">
          <button>
            <Ellipsis style={{ background: "rgb(15, 17, 19)", borderColor: "rgb(63, 65, 67)" }} className="w-9 h-9" />
          </button>
          <button>
            <Bookmark style={{ background: "rgb(15, 17, 19)", borderColor: "rgb(63, 65, 67)" }} className="w-9 h-9 bg-blue-400" />
          </button>
          <div style={{ background: "rgb(53, 61, 65)", borderColor: "rgb(63, 65, 67)"}} className="rounded-full p-2 flex pl-4 justify-between">
            <Zap />
            <h3 className="">Easy Apply</h3>
          </div>
        </div>
      </div>
      <div>
        <div className="flex-col pl-[5%] pr-[5%] pt-5 overflow-y-auto h-[40rem] pb-20">
          <div className="pb-5">
            <div className="pr-[5%] pl-[5%] flex justify-between pt-5 items-center">
              <h1 className="text-2xl">Qualifications</h1>
            </div>
            <div className="pr-[5%] pl-[5%]">
              <ul className="grid grid-flow-col grid-rows-2 gap-4">
                {jobFocus.qualifications.map((item, index) => (
                  <li style={{ background: "rgb(53, 61, 65)", borderColor: "rgb(63, 65, 67)"}} key={index} className="p-4 rounded">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="h-60">
            <h1>Overview</h1>
            <p>{jobFocus.description}</p>
          </div>
          <div className="h-20">
            <h1>Compensation</h1>
            <p>
              {/* {jobFocus.compensation} */}
              {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0,
    maximumFractionDigits: 0 }).format(jobFocus.salary)}
            </p>
          </div>
          <div>
            <h1>Benefits</h1>
            <p>
              {jobFocus.benefits.map((item, index) => (
                <li key={index} className="">
                  {item}
                </li>
              ))}
            </p>
          </div>
          <div className="pt-10">
            <h1>Schedule</h1>
            <p>{jobFocus.schedule}</p>
          </div>
          <div className="pt-10">
            <h1>Industry</h1>
            <p>{jobFocus.industry}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
