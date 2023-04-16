import React, { useRef, useEffect, useState } from "react";
import img from "../../assets/img/default-image.jpg";
import { useNavigate } from "react-router-dom";
import StoreService from '../../services/StoreService';
import queryString from 'query-string';


const AdminStoreDetail = () => {
    useEffect(() => {
        document.title = "Store Detail";
    }, []);



    return (
        <main>
            <div class="table-data" style={{ minHeight: '600px' }}>
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

export default AdminStoreDetail;
