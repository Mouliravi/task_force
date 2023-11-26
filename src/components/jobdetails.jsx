import React, { useContext } from "react";
import { LuCircleDollarSign } from "react-icons/lu";
import { MapItem } from "../pages/home";

const JobDetails = () => {
  const { job } = useContext(MapItem);
  return (
    <>
      <div className="-mt-1 flex flex-col w-72 bg-white rounded-lg p-9 divide-y">
        <div className="flex">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src={job.logo}
            alt="logo"
          />
          <a href="/" className="flex">
            <span className="text-md font-bold tracking-tight text-gray-900">
              {job.role}
              <p className="mb-3 text-[12px] text-gray-700 dark:text-gray-400">
                {job.company}
              </p>
            </span>
          </a>
        </div>
        <div>
          <p className="text-sm my-2">Job Description</p>
          <p className="text-xs mb-2">{job.jd}</p>
        </div>
        <div>
          <p className="text-sm my-2">Salary Package</p>
          <span className="flex text-sm">
            <LuCircleDollarSign size={18} />
            {job.salary}
          </span>
        </div>
        <button
          type="button"
          className="m-4 text-white bg-indigo-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mx-2"
        >
          Apply Now
        </button>
      </div>
    </>
  );
};

export default JobDetails;
