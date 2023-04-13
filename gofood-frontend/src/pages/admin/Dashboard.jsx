import React, { useRef, useEffect, useState } from "react";
import img from "../../assets/img/people.png";

const Dashboard = () => {
 
  return (
    <main>
      <div class="head-title">
        <div class="left">
          <h1>Dashboard</h1>
          <ul class="breadcrumb">
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <i class="bx bx-chevron-right"></i>
            </li>
            <li>
              <a class="active" href="#">
                Home
              </a>
            </li>
          </ul>
        </div>
        <a href="#" class="btn-download">
        <i class="bi bi-cloud-arrow-down-fill"></i>
          <span class="text">Download PDF</span>
        </a>
      </div>

      <ul class="box-info">
        <li>
        <div className="fs-2 text-primary px-4 py-3 rounded" style={{backgroundColor: '#CFE8FF'}}>  <i class="bi bi-calendar-check-fill" ></i></div>
       
          <span class="text">
            <h3>1020</h3>
            <p>New Order</p>
          </span>
        </li>
        <li>
          <div className="fs-2 text-warning px-4 py-3 rounded" style={{backgroundColor: '#FFF2C6'}}> <i class="bi bi-people"></i></div>
          <span class="text">
            <h3>2834</h3>
            <p>Visitors</p>
          </span>
        </li>
        <li>
        <div className="fs-2  px-4 py-3 rounded" style={{color: '#FD7238', backgroundColor: '#FFE0D3'}}> <i class="bi bi-currency-dollar"></i></div>
          <span class="text">
            <h3>$2543</h3>
            <p>Total Sales</p>
          </span>
        </li>
      </ul>

      <div class="table-data">
        <div class="order">
          <div class="head">
            <h3>Recent Orders</h3>
            <i class="bi bi-search"></i>
            <i class="bi bi-filter"></i>
          </div>
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Date Order</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={img} />
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td>
                  <span class="status completed">Completed</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={img} />
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td>
                  <span class="status pending">Pending</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={img} />
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td>
                  <span class="status process">Process</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={img} />
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td>
                  <span class="status pending">Pending</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={img} />
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td>
                  <span class="status completed">Completed</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="todo">
          <div class="head">
            <h3>Todos</h3>
            <i class="bx bx-plus"></i>
            <i class="bx bx-filter"></i>
          </div>
          <ul class="todo-list">
            <li class="completed">
              <p>Todo List</p>
              <i class="bi bi-three-dots-vertical"></i>
            </li>
            <li class="completed">
              <p>Todo List</p>
              <i class="bi bi-three-dots-vertical"></i>
            </li>
            <li class="not-completed">
              <p>Todo List</p>
              <i class="bi bi-three-dots-vertical"></i>
            </li>
            <li class="completed">
              <p>Todo List</p>
              <i class="bi bi-three-dots-vertical"></i>
            </li>
            <li class="not-completed">
              <p>Todo List</p>
              <i class="bi bi-three-dots-vertical"></i>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
