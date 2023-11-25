import React from "react";
import { LuCircleDollarSign } from "react-icons/lu";

const JobDetails = (props) => {
  const { content } = props;
  console.log("The data is " + content?.role);
  return (
    <>
      <div className="flex flex-col w-72 bg-white rounded-lg p-10 divide-y">
        <div className="flex">
          <img className="w-10 h-10 rounded-full mr-4" src="" alt="logo" />
          <a href="/" className="flex">
            <span className="text-md font-bold tracking-tight text-gray-900">
              {content?.role}
              <p className="mb-3 text-[12px] text-gray-700 dark:text-gray-400">
                company name
              </p>
            </span>
          </a>
        </div>
        <div>
          <p className="text-sm mt-2">Job Description</p>
          <p className="text-xs">this shows the Description about the job</p>
        </div>
        <div>
          <p className="text-sm mt-2">Salary Package</p>
          <span className="flex text-sm">
            <LuCircleDollarSign size={18} />
            10,000
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
