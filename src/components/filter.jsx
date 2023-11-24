import React from "react";

const Filter = () => {
  return (
    <>
      <div className="flex flex-col p-5 bg-white rounded-lg divide-y">
        <div className="font-bold inline-flex justify-between">
          Filters{" "}
          <a href="/" className="text-xs font-thin">
            Reset all
          </a>
        </div>
        <div className="text-md">Sort by</div>
        <div className="text-md">Salary Range</div>
        <div className="text-md">Job Type</div>
        <div className="text-md">Experience</div>
        <div className="text-md">Position</div>
      </div>
    </>
  );
};

export default Filter;
