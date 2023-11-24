import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Searchbar from "../components/searchbar";
import Filter from "../components/filter";

const Home = () => {
  return (
    <>
      <Header />
      <div className="gap-3 mt-20 flex justify-between items-center mx-5">
        <div className="columns-3 grid">
          <Filter />
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
