import React, { useRef, useEffect, useState } from "react";
import img from "../../assets/img/people.png";

const MyStore = () => {

    return (
        <main>
            <div class="table-data" style={{ minHeight: '600px' }}>
                <div class="order">
                    <div class="head">
                        <h3>Stores </h3>
                        <i class="bi bi-search"></i>
                        <i class="bi bi-filter"></i>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Store Name</th>
                                <th>Email</th>
                                <th>Date Created</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img src={img} />
                                    <p>John Doe</p>
                                </td>
                                <td>test@gmail.com</td>
                                <td>01-10-2021</td>
                                <td>
                                    <span class="status completed">Completed</span>
                                </td>
                                <td>
                                    {/* <button type="button" class="btn btn-outline-success btn-sm mx-1"> <i class="bi bi-check-circle-fill mx-1"></i>Approve</button> */}
                                    <button type="button" class="btn btn-outline-primary btn-sm mx-1" > <i class="bi bi-eye-fill me-1"></i>View</button>
                                    <button type="button" class="btn btn-outline-danger btn-sm"> <i class="bi bi-trash-fill me-1"></i>Delete</button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>
        </main>
    );
};

export default MyStore;
