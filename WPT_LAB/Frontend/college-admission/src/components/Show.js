import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Show() {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);

  const getStudents = () => {
    axios
      .get("http://localhost:9595/students/all")
      .then((response) => {
        console.log(response.data);
        setStudents(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLocalStorage = (id, Name, Address, Stream, Year) => {
    localStorage.setItem("id", id);
    localStorage.setItem("Name", Name);
    localStorage.setItem("Address", Address);
    localStorage.setItem("Stream", Stream);
    localStorage.setItem("Year", Year);
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:9595/students/delete/${id}`)
      .then((response) => {
        console.log(response.data);
        getStudents();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div className="container mt-3 mb-3">
      <button className="btn btn-info m-2" onClick={handleRegister}>
        Register
      </button>
      <h3>Students List</h3>
      <div className="row mt-3 mb-3">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Stream</th>
              <th scope="col">Year</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {students.map((students) => (
              <tr key={students._id}>
                <td>{students._id}</td>
                <td>{students.Name}</td>
                <td>{students.Address}</td>
                <td>{students.Stream}</td>
                <td>{students.Year}</td>
                <td>
                  <Link to="/update">
                    <button
                      className="btn btn-success"
                      onClick={() =>
                        handleLocalStorage(
                          students._id,
                          students.Name,
                          students.Address,
                          students.Stream,
                          students.Year
                        )
                      }
                    >
                      Update
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(students._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
