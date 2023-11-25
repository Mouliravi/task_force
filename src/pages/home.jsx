import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Searchbar from "../components/searchbar";
import Filter from "../components/filter";
import Details from "../components/details";
import JobDetails from "../components/jobdetails";

const Home = () => {
  return (
    <>
      <Header />
      <div className="gap-3 mt-20 flex justify-between items-center mx-5">
        <div className="w-80 columns-3 grid">
          <Filter />
        </div>
        <div className="columns-6 flex flex-col gap-3">
          <Searchbar />
          <h2>Search Results</h2>
          <Details />
        </div>
        <div className="flex columns-3">
          <JobDetails />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
