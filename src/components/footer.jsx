import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-white rounded-lg shadow m-4">
        <div className="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-black sm:text-center dark:text-black">
            © 2023{" "}
            <a href="/" className="hover:underline">
              PATTATHARI
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-black dark:text-black sm:mt-0">
            <li>
              <a href="/" className="hover:underline me-4 md:me-6">
                HOME
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline me-4 md:me-6">
                PROFILE
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
