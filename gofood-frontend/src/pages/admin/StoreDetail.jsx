import React, { useRef, useEffect, useState } from "react";
import img from "../../assets/img/default-image.jpg";
import { useNavigate } from "react-router-dom";
import StoreService from '../../services/StoreService';
import queryString from 'query-string';
import ReactPaginate from 'react-paginate';

const StoreDetail = () => {
    useEffect(() => {
        document.title = "Store Detail";
    }, []);

    const typingTimeOutRef = useRef(null);
    const navigate = useNavigate();
    const [stores, setStores] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [storeCount, setStoreCount] = useState(0);
    const [search, setSearch] = useState('');
    const [totalPage, setTotalPage] = useState(1)

    useEffect(() => {
        const params = queryString.stringify({ keyword: search, pageNo: pageNo });
        StoreService.getStoreWithFilter(params).then((res) => {
            setStores(res.data.results);
            setTotalPage(() => {
                if (res.data.count % 12 === 0) return res.data.count / 12;
                else return Math.floor(res.data.count / 12) + 1;
            });
            setStoreCount(res.data.count)
        });
    }, [search, pageNo])

    const handlePageChange = ({ selected }) => {
        setPageNo({ selected });
    }

    return (
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
    );
};

export default StoreDetail;
