import React, { useRef, useEffect, useState } from "react";
import img from "../../assets/img/default-image.jpg";
import { useNavigate } from "react-router-dom";
import StoreService from '../../services/StoreService';
import queryString from 'query-string';
import ReactPaginate from 'react-paginate';

const MyFoods = () => {
    useEffect(() => {
        document.title = "Store";
    }, []);

    const typingTimeOutRef = useRef(null);
    const navigate = useNavigate();
    const [foods, setFoods] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [storeCount, setStoreCount] = useState(0);
    const [search, setSearch] = useState('');
    const [totalPage, setTotalPage] = useState(1)

    const getFoods = async () => {
        await FoodService.getFoodByStoreId().then((res) => {

        });
    }

    useEffect(() => {
        getFoods()
    }, [search, pageNo])

    const handlePageChange = ({ selected }) => {
        setPageNo({ selected });
    }

    const handleView = (id) => {
        navigate(`/storeadmin/stores/${id}`);
    }

    return (
        <main>
            <div class="table-data" style={{ minHeight: '600px' }}>
                <div class="order">
                    <div class="head">
                        <h3>Foods </h3>
                        <i class="bi bi-search"></i>
                        <i class="bi bi-filter"></i>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Food Name</th>
                           
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {foods?.map((food) =>
                                <tr>
                                    <td>
                                        <img src={food.image ?? img} />
                                        <p>{food.name}</p>
                                    </td>
                              
                                    <td>
                                        {/* <button type="button" class="btn btn-outline-success btn-sm mx-1"> <i class="bi bi-check-circle-fill mx-1"></i>Approve</button> */}
                                        <button type="button" class="btn btn-outline-primary btn-sm mx-1" onClick={() => handleView(store.id)}> <i class="bi bi-eye-fill me-1"></i>View</button>
                                        <button type="button" class="btn btn-outline-danger btn-sm"> <i class="bi bi-lock-fill"></i>Lock</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <ReactPaginate
                        forcePage={pageNo}
                        previousLabel={<i className="fa fa-long-arrow-left"></i>}
                        nextLabel={<i className="fa fa-long-arrow-right"></i>}
                        pageCount={totalPage}
                        onPageChange={handlePageChange}
                        containerClassName={'d-flex flex-row product__pagination gap-2 d-flex justify-content-end'}
                        previousLinkClassName={'previousBtn'}
                        nextClassName={'nextBtn'}
                        disabledClassName={'paginationDisabled'}
                        activeClassName={'paginationActive'}
                    />
                </div>

            </div>
        </main>
    );
};

export default MyFoods;
