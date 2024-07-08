import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="container mt-3 mb-3">
        <h1>College-Admission</h1>
        <div className="row mt-5 mb-t p-3">
          <div className="col-xl-12">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Students</h5>
                <p class="card-text">
                  Please click button to get Student details.
                </p>
                <Link to="show" class="btn btn-primary">
                  Students
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-12">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Register Students</h5>
                <p class="card-text">
                  Please click for registration of new Student.
                </p>
                <Link to="register" class="btn btn-primary">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
