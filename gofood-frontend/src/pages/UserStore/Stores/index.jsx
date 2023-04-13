import React, { useEffect, useRef, useState } from 'react'
import StoreService from '../../../services/StoreService';
import { useNavigate } from "react-router-dom";
import StoreCard from '../../../components/StoreCard';
import ReactPaginate from 'react-paginate';
import queryString from 'query-string';
import BreadcrumbComponent from '../../../components/Breadcrumb';


const crumb = [
  {
    pageName: 'Home',
    url: '/',
  },
  {
    pageName: 'Find Store',
    url: '#',
  },
];

const Stores = () => {
  useEffect(() => {
    document.title = "Store";
  }, []);

  const typingTimeOutRef = useRef(null);
  const navigate = useNavigate();
  const [stores, setStores] = useState([]);
  const [pageNo, setPageNo] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [storeCount, setStoreCount] = useState(0);
  const [search, setSearch] = useState('');

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

  const handleSearchChange = (e) => {
    if (typingTimeOutRef.current) {
      clearTimeout(typingTimeOutRef.current);
    }
    typingTimeOutRef.current = setTimeout(() => {
      setSearch(e.target.value);
    }, 500);
  }

  const handleStoreClick = (id) => {
    navigate(`/stores/${id}`);
  }

  const handlePageChange = (newPage) => {
    setPageNo(newPage);
  }

  return (
    <>
    
      <section class="product spad" style={{marginTop: -50}}>
        <div class="container">
        <BreadcrumbComponent props={crumb} />
          <div class="row">
            <div class="col-lg-12 col-md-12">
              <div className="filter__item">
                <div className="row">
                  <div className="col-lg-6 col-md-5">
                    <div className="filter__sort d-flex flex-row">
                      <span className='mx-2 mt-2 text-black'>Search</span>
                      <input type="search" id="form1" class="form-control" placeholder={`store's name or location`} onChange={handleSearchChange} />
                    </div>

                  </div>
                  <div className="col-lg-3 col-md-4">
                    <div className="filter__found mt-2">
                      <h6>
                        <span>{storeCount}</span> Stores found
                      </h6>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3">
                    <div className="filter__option mt-2">
                      <span className="icon_grid-2x2"></span>
                      <span className="icon_ul"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row featured__filter">
                {stores?.map((store) =>
                  <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat" style={{ cursor: 'pointer' }} onClick={() => handleStoreClick(store.id)}>
                    <StoreCard store={store} />
                  </div>
                )}
              </div>
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
        </div>
      </section>
    </>
  );
};

export default Stores;
