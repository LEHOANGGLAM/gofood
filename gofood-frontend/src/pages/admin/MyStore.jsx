import React, { useRef, useEffect, useState } from "react";
import img from "../../assets/img/default-image.jpg";
import { useNavigate } from "react-router-dom";
import StoreService from '../../services/StoreService';
import queryString from 'query-string';
import ReactPaginate from 'react-paginate';

const MyStore = () => {
    useEffect(() => {
        document.title = "Store";
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
                            {stores?.map((store) =>
                                <tr>
                                    <td>

                                        <img src={store.image ?? img} />
                                        <p>{store.name}</p>
                                    </td>
                                    <td>{store.email ?? 'No data'}</td>
                                    <td>{store.date_created ?? 'No data'}</td>
                                    <td>
                                        <span class={store.isACtive ? `status success` : `status process`}>{store.isACtive ? 'Approved' : 'Non-Active'}</span>
                                    </td>
                                    <td>
                                        {/* <button type="button" class="btn btn-outline-success btn-sm mx-1"> <i class="bi bi-check-circle-fill mx-1"></i>Approve</button> */}
                                        <button type="button" class="btn btn-outline-primary btn-sm mx-1" > <i class="bi bi-eye-fill me-1"></i>View</button>
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

export default MyStore;
