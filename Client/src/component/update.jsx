import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
const CarsList = () => {
  const [cars, setCars] = useState([]);
  const [update, setUpdate] = useState(null);
  const [change, setChange] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get("http://localhost:3000/backend/update1");
        setCars(response.data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
  }, []);

  const getid = (id) => {
    swal({
      title: "Are you sure?",
      text: "You Want To Edit?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        
        setUpdate(id);
        const carToEdit = cars.find((car) => car._id === id);
        setChange(carToEdit);
      } else {
        swal("Data Not Edited!");
      }
    });
    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChange({ ...change, [name]: value });
  };

  const save = async (id) => {
    try {
      await axios.post(`http://localhost:3000/backend/edit/${id}`, change);
      setUpdate(null);
      const updatedCars = cars.map((car) => (car._id === id ? change : car));
      setCars(updatedCars);
      swal({
        title : "Saved",
        text : "Data Saved Sucessfully",
        icon : "success"
      });
    } catch (error) {
      console.error("Error updating car data:", error);
    }
  };

  const delete1 = async (id) => {
    swal({
      title: "Are you sure?",
      text: "You Want to Delete This Data?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
            try {
              axios.delete(`http://localhost:3000/backend/delete/${id}`);
              const updatedCars = cars.filter((car) => car._id !== id);
              setCars(updatedCars);
              
              if (updatedCars.length === 0) {
                navigate("/add");
              }
            } catch (error) {
              console.error("Error deleting car:", error);
            }
        swal("Your Data Deleted Successfully", {
          icon: "success",
        });
      } else {
        swal("Data Not Deleted!");
      }
    });
    
  };

  return (
    <div className='flex flex-col px-[2rem] py-[3rem] text-center text-[1.2rem] leading-8 '>
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
          {cars.map((car) => (
            <tr key={car._id}  className="border-b-2 border-gray-200">
              <td className="p-2">
                {update === car._id ? (
                  <input
                    type="text"
                    name="name"
                    value={change.name || ""}
                    onChange={handleChange}
                    className="text-center"
                  />
                ) : (
                  car.name
                )}
              </td>
              <td className="p-2">
                {update === car._id ? (
                  <input
                    type="text"
                    name="model"
                    value={change.model || ""}
                    onChange={handleChange}
                    className="text-center"
                  />
                ) : (
                  car.model
                )}
              </td>
              <td className="p-2">
                {update === car._id ? (
                  <input
                    type="date"
                    name="pdate"
                    value={change.pdate || ""}
                    onChange={handleChange}
                    className="text-center"
                  />
                ) : (
                  car.pdate
                )}
              </td>
              <td className="p-2">
                {update === car._id ? (
                  <input
                    type="number"
                    name="prize"
                    value={change.prize || ""}
                    onChange={handleChange}
                    className="text-center"
                  />
                ) : (
                  car.prize
                )}
              </td>
              <td className="p-2">
                {update === car._id ? (
                  <input
                    type="text"
                    name="car_company"
                    value={change.car_company || ""}
                    onChange={handleChange}
                    className="text-center"
                  />
                ) : (
                  car.car_company
                )}
              </td>
              <td className="p-2">
                {update === car._id ? (
                  <button onClick={() => save(car._id)}  className=" bg-blue-200 px-5 rounded-lg">Save</button>
                ) : (
                  <>
                  <button onClick={() => getid(car._id)} className=" bg-blue-200 px-4 rounded-lg mr-6">Edit</button>
                  <button onClick={() => delete1(car._id)} className=" bg-red-400 px-4 rounded-lg">Delete</button>
                  </>
                )}
                
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarsList;
