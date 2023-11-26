import React, { useContext } from "react";
import { LuCircleDollarSign } from "react-icons/lu";
import data from "../lib/data.json";
import { MapItem } from "../pages/home";

const Details = () => {
  const { setJob } = useContext(MapItem);
  return (
    <>
      <div className="grid grid-cols-3 gap-2">
        {data.map((item, index) => (
          <div
            className="w-72 p-5 bg-white border border-blue-300 rounded-lg shadow"
            key={index}
          >
            <div className="flex">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src={item.logo}
                alt="logo"
              />
              <a href="/" className="flex">
                <span className="text-md font-bold tracking-tight text-gray-900">
                  {item.role}
                  <p className="mb-3 text-[12px] text-gray-700 dark:text-gray-400">
                    {item.company}
                  </p>
                </span>
              </a>
            </div>
            <div className="grid grid-cols-3">
              {item.keywords.map((i, j) => (
                <p
                  key={j}
                  className="m-1 flex justify-center items-center bg-slate-200 tracking-wider text-[10px] rounded-full me-1 p-1"
                >
                  {i}
                </p>
              ))}
            </div>
            <div className="mt-3 flex text-[10px]">
              <LuCircleDollarSign />
              {item.salary}
            </div>
            <button
              className="text-[10px] underline"
              onClick={() => {
                setJob(item);
              }}
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Details;
