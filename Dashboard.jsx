import React from "react";
import { Link, Outlet } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <Link
              to="/dashboard"
              className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 fw-bolder px-5 d-none d-sm-inline">
                Dashboard
              </span>
            </Link>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="w-100">
                <Link
                  to="/dashboard"
                  className="nav-link text-white px-2 align-middle"
                >
                  <i className="fs-4 bi bi-kanban ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                </Link>
              </li>

              <li className="w-100">
                <Link
                  to="/dashboard/employee"
                  className="nav-link px-2 align-middle text-white"
                >
                  <i class=" fs-4 bi bi-person-badge-fill ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">
                    Manage Employees
                  </span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/department"
                  className="nav-link px-2 align-middle text-white"
                >
                  <i className="fs-4 bi-columns ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Department</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/event"
                  className="nav-link px-2 align-middle text-white"
                >
                  <i className="fs-4 bi-stickies ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Event</span>
                </Link>
              </li>
              <li className="w-100" onClick>
                <Link 
                to="/dashboard/payroll"
                className="nav-link px-2 align-middle text-white">
                  <i className="bi bi-credit-card-fill ms-2 "></i>
                  <span className="ms-2 d-none d-sm-inline">Payroll</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col p-0 m-0">
          <div className="p-3 d-flex justify-content-center shadow">
            <h4>Employee Managment System</h4>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
