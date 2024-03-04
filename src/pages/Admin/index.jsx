import React, { useEffect } from "react";
import "./style.css";

import { Link, useNavigate } from "react-router-dom";

function Admin() {
    const navigate = useNavigate();
    // const userData = useUserData();
    // useEffect(() => {
    //     if(!userData || userData.roleName !== "admin") {
    //         navigate("/");
    //     }
    // }, [])  
    return (
    <div className="admin-page">
      <head>
        <meta charSet="UTF-8" />
        <title>aaaa</title>
        <link rel="stylesheet" href="style.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>
        <div className="sidebar">
          <div className="logo"></div>
          <ul className="menu">
            <li className="active">
              <a href="#">
                <i className="fas fa-tachometer-alt"></i>
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-user"></i>
                <span>Profile</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-chart-bar"></i>
                <span>Statistics</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-question-circle"></i>
                <span>FAQ</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-star"></i>
                <span>Testimonials</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-cog"></i>
                <span>Settings</span>
              </a>
            </li>
            <li className="logout">
              <a href="#">
                <i className="fas fa-sign-out-alt"></i>
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="main--content">
          <div className="header--wrapper">
            <div className="header--title">
              <span>Primary</span>
              <h2>Dashboard</h2>
            </div>
            <div className="user--info">
              <div className="search--box">
                <i className="fa-solid fa-search"></i>
                <input type="text" placeholder="Search" />
              </div>
              <img src="./asset/user--info.jpg" alt="" />
            </div>
          </div>

          <div className="card--container">
            <h3 className="main--title">Today's data</h3>
            <div className="card--wrapper">
              <div className="payment--card light-red">
                <div className="card--header">
                  <div className="amount">
                    <span className="title">Payment amount </span>
                    <span className="amount--value">$500.00 </span>
                  </div>
                  <i className="fas fa-dollar-sign icon"></i>
                </div>
                <span className="card-detail">**** **** **** 3484</span>
              </div>

              <div className="payment--card light-purple">
                <div className="card--header">
                  <div className="amount">
                    <span className="title">Payment order </span>
                    <span className="amount--value">$200.00 </span>
                  </div>
                  <i className="fas fa-list icon dark-purple"></i>
                </div>
                <span className="card-detail">**** **** **** 5542</span>
              </div>

              <div className="payment--card light-green">
                <div className="card--header">
                  <div className="amount">
                    <span className="title">Payment customer </span>
                    <span className="amount--value">$350.00 </span>
                  </div>
                  <i className="fas fa-users icon dark-green"></i>
                </div>
                <span className="card-detail">**** **** **** 8896</span>
              </div>

              <div className="payment--card light-blue">
                <div className="card--header">
                  <div className="amount">
                    <span className="title">Payment proceed </span>
                    <span className="amount--value">$150.00 </span>
                  </div>
                  <i className="fa-solid fa-check icon dark-blue"></i>
                </div>
                <span className="card-detail">**** **** **** 7745</span>
              </div>
            </div>
          </div>

          <div className="tabular--wrapper">
            <h3 className="main--title">Finance data</h3>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Transaction Type</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2023-05-01</td>
                    <td>Expenses</td>
                    <td>Office Supplies</td>
                    <td>$250</td>
                    <td>Office Expenses</td>
                    <td>Pending</td>
                    <td>
                      <button>Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>2023-05-02</td>
                    <td>Income</td>
                    <td>Client Payment</td>
                    <td>$500</td>
                    <td>Sales</td>
                    <td>Completed</td>
                    <td>
                      <button>Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>2023-05-03</td>
                    <td>Expense</td>
                    <td>Travel Expenses</td>
                    <td>$250</td>
                    <td>Travel</td>
                    <td>Pending</td>
                    <td>
                      <button>Edit</button>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="7">Total: $1,0000</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Admin;
