import React from "react";

const CarCard = ({ car }) => {
  return (
    <div>
      <div
        class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow "
        style={{ backgroundColor: "#ECF0F5" }}
      >
        <a href="#">
          <img
            class="p-2 rounded-t-lg w-full"
            src={car.imageUrl}
            alt="product image"
          />
        </a>
        <div class="px-5 pb-5">
          <div class="flex items-center justify-between mt-2.5 mb-5">
            <h2 style={{ fontSize: "25px" }}> {car.name}</h2>
            <h2
              style={{
                fontSize: "18px",
                borderRadius: "10px",
                padding: "5px 20px 5px 20px",
              }}
              className="border-dashed border-2 border-sky-500"
            >
              {car.year}
            </h2>{" "}
          </div>
        </div>

        <div className="px-5 pb-5 py-1">
          <div className="flex items-center justify-between mt-2.5 mb-5">
            <div className="flex items-center">
              <span className="mr-2">
                <i className="fas fa-users text-blue-500"></i>

                {/* <FontAwesomeIcon icon="fa-solid fa-user-group" /> */}
              </span>
              <span className="text-gray-600">{car.noOfSeats}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">
                <i className="fas fa-gas-pump text-green-500"></i>
              </span>
              <span className="text-gray-600">{car.fuelType}</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="mr-2">
                <i className="fas fa-tachometer-alt text-blue-500"></i>
              </span>
              <span className="text-gray-600">{car.mileage}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">
                <i className="fas fa-cogs text-gray-500"></i>
              </span>
              <span className="text-gray-600">{car.transmission}</span>
            </div>
          </div>

          <div className="flex items-center justify-between bg-gray-100 rounded-lg p-4">
            {/* Left Item */}
            <div className="text-lg font-bold">{car.price}</div>

            {/* Right Items */}
            <div className="flex items-center space-x-2">
              {/* Heart Icon */}
              <div className="bg-blue-200 rounded py-1 px-2 ">
                <i className="fas fa-heart text-blue-500"></i>
              </div>

              {/* Rent Now Button */}
              <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">
                Rent Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
