import React, { useState, createContext } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Searchbar from "../components/searchbar";
import Filter from "../components/filter";
import Details from "../components/details";
import JobDetails from "../components/jobdetails";
import data from "../lib/data.json";

export const MapItem = createContext();

const Home = () => {
  const [job, setJob] = useState(data[0]);
  return (
    <>
      <Header />
      <div className="gap-3 mt-20 flex flex-col md:flex-row lg:flex-row justify-between items-center mx-5">
        <div className="w-80 columns-0 lg:columns-3 grid">
          <Filter />
        </div>
        <MapItem.Provider value={{ job, setJob }}>
          <div className="columns-6 flex flex-col gap-3">
            <Searchbar />
            <h2>Search Results</h2>
            <Details />
          </div>
          <div className="flex columns-6 lg:columns-3">
            <JobDetails />
          </div>
        </MapItem.Provider>
      </div>
      <Footer />
    </>
  );
};

export default Home;
