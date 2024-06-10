import React, { useEffect, useState } from "react";
import axios from "axios";

const CarsList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/backend/update1"
        ); // Adjust the endpoint as necessary
        setCars(response.data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
  }, []);

  return (
    <div  className='flex flex-col px-[2rem] py-[3rem] text-center text-[1.2rem] leading-8'>
      <table  className="w-full">
        <thead>
        <tr className="gap-6">
          <th className="p-2">Name</th>
          <th className="p-2">Model</th>
          <th className="p-2">Purchase date</th>
          <th className="p-2">Prize (in lakh)</th>
          <th className="p-2">Company</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td >
            {" "}
            {cars.map((car) => (
              <p key={car._id}   className="border-b-2 border-gray-200"> {car.name}</p>
            ))}
          </td>
          <td >
            {cars.map((car) => (
              <p key={car._id}   className="border-b-2 border-gray-200"> {car.model}</p>
            ))}
          </td>
          <td >
            {cars.map((car) => (
              <p key={car._id}  className="border-b-2 border-gray-200"> {car.pdate}</p>
            ))}
          </td>
          <td >
            {cars.map((car) => (
              <p key={car._id}  className="border-b-2 border-gray-200"> {car.prize}</p>
            ))}
          </td>
          <td >
            {cars.map((car) => (
              <p key={car._id}  className="border-b-2 border-gray-200"> {car.car_company}</p>
            ))}
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CarsList;
