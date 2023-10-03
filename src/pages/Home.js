import React, { useEffect, useState } from "react";
import carsData from "../data/cars.json";
import CarCard from "../components/CarCard";

const ITEMS_PER_PAGE = 6;

function Home() {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [currentPage, setCurrentPage] = useState(1);

  // const handleSearchInputChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  // const filteredCars = carsData.filter((car) =>
  //   car.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  // const totalPages = Math.ceil(filteredCars.length / ITEMS_PER_PAGE);

  // const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  // const endIndex = startIndex + ITEMS_PER_PAGE;

  // const carsToDisplay = filteredCars.slice(startIndex, endIndex);

  // const handlePageChange = (newPage) => {
  //   setCurrentPage(newPage);
  // };

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredCars, setFilteredCars] = useState([]); // Store filtered cars as state
  const [carsToDisplay, setCarsToDisplay] = useState([]); // Store cars to display as state

  const totalPages = Math.ceil(filteredCars.length / ITEMS_PER_PAGE);

  // Function to update searchTerm when the user types into the search input
  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    // Filter cars based on the search term when searchTerm changes
    const filtered = carsData.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCars(filtered);
  }, [searchTerm]); // Trigger this effect when searchTerm changes

  useEffect(() => {
    // Calculate and set carsToDisplay when filteredCars or currentPage changes
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const slicedCars = filteredCars.slice(startIndex, endIndex);
    setCarsToDisplay(slicedCars);
  }, [filteredCars, currentPage]); // Trigger this effect when filteredCars or currentPage changes

  // Function to handle page navigation
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <div>
      <div className="flex items-center justify-start m-4">
        {/* Search Input */}
        <div className="relative mr-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchInputChange}
            className="py-1 pr-20 pl-4 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <i className="fas fa-search text-gray-400"></i>
          </span>
        </div>

        {/* Dropdown for Relevance */}
        <div className="relative mr-4">
          <button className=" text-gray-600 py-2 px-4 ">
            Relevance
            <span className="ml-2">
              <i className="fas fa-chevron-down"></i>
            </span>
          </button>
        </div>

        {/* Dropdown for All Brands */}
        <div className="relative">
          <button className="  py-2 px-4 ">
            All Brands
            <span className="ml-2">
              <i className="fas fa-chevron-down"></i>
            </span>
          </button>
        </div>
      </div>

      <div className="p-3 grid grid-cols-3 gap-6 ">
        {carsToDisplay.map((car) => (
          <div key={car.id} className="">
            <CarCard car={car} />
          </div>
        ))}
      </div>

      <div className="my-4 mx-auto text-center">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            } px-4 py-2 rounded-lg mr-2`}
          >
            {index + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Home;
