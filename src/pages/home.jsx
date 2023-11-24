import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Searchbar from "../components/searchbar";

const Home = () => {
  return (
    <>
      <Header />
      <div className="gap-3 mt-20 flex justify-between items-center mx-5">
        <div className="columns-3 flex flex-col">
          <div className="p-5 bg-white rounded-lg grid grid-cols-1 divide-y">
            <div>Filters</div>
            <div>Salary Range</div>
            <div>Job Type</div>
            <div>Experience</div>
            <div>Position</div>
          </div>
        </div>
        <div className="columns-6 flex justify-center">
          {" "}
          <Searchbar />
        </div>
        <div className="columns-3">
          <div className="bg-white rounded-lg">hello world</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
