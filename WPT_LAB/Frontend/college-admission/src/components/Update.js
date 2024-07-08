import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Update() {
  const [Name, setName] = useState("");
  const [Address, setAddress] = useState("");
  const [Year, setYear] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setName(localStorage.getItem("Name"));
    setAddress(localStorage.getItem("Address"));
    setYear(localStorage.getItem("Year"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:9595/students/update/${localStorage.getItem(
          "id"
        )}`,
        {
          Name,
          Address,
          Year,
        }
      )
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <h2>Student Data Updation</h2>
      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            value={Address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Year</label>
          <input
            type="text"
            className="form-control"
            value={Year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </div>
  );
}
