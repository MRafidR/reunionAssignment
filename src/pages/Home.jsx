import { React, useState } from "react";
import FilterList from "../components/FilterList";
import Navbar from "../components/Navbar";
import ProptertiesContainer from "../components/ProptertiesContainer";
import Footer from "../components/Footer";

const Home = () => {
    const [filters, setFilters] = useState({
        rent: null,
        rooms: null,
        type: null,
        city: null,
    });

    const filterHandler = filterData => {
        setFilters(filterData);
    }
  return (
    <>
      <Navbar />
      <FilterList filterInput={filterHandler}/>
      <ProptertiesContainer filterData={filters}/>
      <Footer />
    </>
  );
};

export default Home;
