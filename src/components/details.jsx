import React from "react";
import { LuCircleDollarSign } from "react-icons/lu";
import data from "../lib/data.json";

const Details = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-2">
        {data.map((item) => (
          <div className="w-72 p-5 bg-white border border-blue-300 rounded-lg shadow">
            <div className="flex">
              <img
                class="w-10 h-10 rounded-full mr-4"
                src={item.logo}
                alt="logo"
              />
              <a href="/" className="flex">
                <p className="text-md font-bold tracking-tight text-gray-900">
                  {item.role}
                  <p className="mb-3 text-[12px] text-gray-700 dark:text-gray-400">
                    {item.company}
                  </p>
                </p>
              </a>
            </div>

            <div className="flex">
              {item.keywords.map((i) => (
                <p className="bg-slate-200 tracking-wider text-[10px] rounded-full me-1 p-1">
                  {i}
                </p>
              ))}
            </div>
            <div className="mt-3 flex text-[10px]">
              <LuCircleDollarSign />
              {item.salary}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Details;
