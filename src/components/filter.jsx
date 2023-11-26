import React from "react";

const Filter = () => {
  return (
    <>
      <div className="-mt-64 flex flex-col p-10 bg-white rounded-lg divide-y gap-3">
        <div className="font-bold inline-flex justify-between">
          Filters{" "}
          <a href="/" className="text-xs font-thin">
            Reset all
          </a>
        </div>
        <div className="text-md p-1">
          <p className="text-md font-medium">Sort By</p>
          <ul className="mt-1 grid grid-cols-2 gap-2.5 text-[13px]">
            <li>
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                defaultChecked={true}
                className="me-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-400 focus:ring-2"
              />
              Most recent
            </li>
            <li>
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="me-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
              />
              A-Z
            </li>
            <li>
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="me-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
              />
              Top Salary
            </li>
            <li>
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="me-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
              />
              Trending
            </li>
          </ul>
        </div>
        <div className="text-md p-1">
          <p className="text-md font-medium">Salary range</p>
          <input
            id="default-range"
            type="range"
            className="w-full h-1 bg-blue-500 rounded-lg appearance-none cursor-pointer range-sm"
          />
        </div>
        <div className="text-md p-1">
          <p className="text-md font-medium">Job Type</p>
          <ul className="mt-1 grid grid-cols-2 gap-2.5 text-[13px]">
            <li>
              <input
                id="default-radio-1"
                type="checkbox"
                value=""
                name="default-radio"
                defaultChecked={true}
                className="rounded-md m-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
              />
              Full-time
            </li>
            <li>
              <input
                id="default-radio-1"
                type="checkbox"
                value=""
                name="default-radio"
                className="m-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
              />
              Internship
            </li>
            <li>
              <input
                id="default-radio-1"
                type="checkbox"
                value=""
                name="default-radio"
                className="m-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
              />
              part-time
            </li>
            <li>
              <input
                id="default-radio-1"
                type="checkbox"
                value=""
                name="default-radio"
                className="m-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
              />
              Experience
            </li>
          </ul>
        </div>
        <div className="text-md">
          <p className="text-md font-medium">Experience</p>
          <ul className="mt-1 grid grid-cols-2 gap-2.5 text-[13px]">
            <li>
              <input
                id="default-radio-1"
                type="checkbox"
                value=""
                name="default-radio"
                className="m-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
              />
              Fresher
            </li>
            <li>
              <input
                id="default-radio-1"
                type="checkbox"
                value=""
                name="default-radio"
                className="m-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
              />
              Intermediate
            </li>
            <li>
              <input
                id="default-radio-1"
                type="checkbox"
                value=""
                name="default-radio"
                defaultChecked={true}
                className="m-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
              />
              Expert
            </li>
            <li>
              <input
                id="default-radio-1"
                type="checkbox"
                value=""
                name="default-radio"
                className="m-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
              />
              Beginner
            </li>
          </ul>
        </div>
        <div className="text-md p-1">
          <p className="text-md font-medium">Position</p>
          <ul className="mt-1 grid grid-cols-2 gap-2.5 text-[13px]">
            <li>
              <input
                id="default-radio-1"
                type="checkbox"
                value=""
                name="default-radio"
                defaultChecked={true}
                className="m-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
              />
              On-Site
            </li>
            <li>
              <input
                id="default-radio-1"
                type="checkbox"
                value=""
                name="default-radio"
                className="m-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
              />
              Hybrid
            </li>
            <li>
              <input
                id="default-radio-1"
                type="checkbox"
                value=""
                name="default-radio"
                className="m-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
              />
              Remote
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Filter;
