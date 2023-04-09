import React, { useEffect, useRef, useState } from 'react'
import FoodService from '../../../services/FoodService';
import ReactPaginate from 'react-paginate';
import { useNavigate } from "react-router-dom";
import FoodCard from '../../../components/FoodCard';
import CategoryService from '../../../services/CategoryService';
import { formatPrice } from '../../../utils/formatPrice';
import Slider from '@mui/material/Slider';
import queryString from 'query-string';

const Foods = () => {
  useEffect(() => {
    document.title = "Food";
  }, []);

  const typingTimeOutRef = useRef(null);
  const navigate = useNavigate();
  const [foods, setFoods] = useState([]);
  const [categories, setCategories] = useState([]);
  const [price, setPrice] = useState([20000, 55000]);
  const [categoryId, setCategoryId] = useState(undefined);
  const [pageNo, setPageNo] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [search, setSearch] = useState('');
  const [productCount, setProductCount] = useState(0);
  useEffect(() => {
    FoodService.getFoodWithFilter().then((res) => {
      setFoods(res.data.results);
      setTotalPage(() => {
        if (res.data.count % 12 === 0) return res.data.count / 12;
        else return Math.floor(res.data.count / 12) + 1;
      });
      setProductCount(res.data.count)
    });

    CategoryService.getCategories().then((res) => {
      setCategories(res.data);
    })
  }, [])

  useEffect(() => {
    const params = queryString.stringify({ priceFrom: price[0], priceTo: price[1], keyword: search, categoryId: categoryId, pageNo: pageNo });
    //console.log(params);
    FoodService.getFoodWithFilter(params).then((res) => {
      setFoods(res.data.results);
      setTotalPage(() => {
        if (res.data.count % 12 === 0) return res.data.count / 12;
        else return Math.floor(res.data.count / 12) + 1;
      });
      setProductCount(res.data.count)
    });
  }, [price, search, pageNo, categoryId])

  const handleFoodClick = (id) => {
    navigate(`/stores/${id}`);
  }

  const handlePageChange = (newPage) => {
    setPageNo(newPage);
  }

  const handlePriceChange = (event, newValue) => {
    setPrice(newValue);
  };

  const handleClickCateId = (newValue) => {
    setCategoryId(newValue);
  };

  const handleSearchChange = (e) => {
    if (typingTimeOutRef.current) {
      clearTimeout(typingTimeOutRef.current);
    }
    typingTimeOutRef.current = setTimeout(() => {
      setSearch(e.target.value);
    }, 500);
  }

  return (
    <>
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-5">
              <div className="sidebar">
                <div className="sidebar__item">
                  <h4>Food Category</h4>
                  <ul>
                    <li key={`all`} onClick={() => handleClickCateId(undefined)} style={{ cursor: 'pointer' }}>
                      <p className={categoryId == undefined ? `text-danger fw-bold fs-5` : `text-secondary`}>All</p>
                    </li>
                    {categories?.map((category) =>
                      <li key={category.id} onClick={() => handleClickCateId(category.id)} style={{ cursor: 'pointer' }}>
                        <p className={categoryId == category.id ? `text-danger fw-bold fs-5` : `text-secondary`}>{category.name}</p>
                      </li>
                    )}
                  </ul>
                </div>
                <div className="sidebar__item">
                  <h4>Price</h4>
                  <div className="price-range-wrap">
                    <Slider
                      value={price}
                      onChange={handlePriceChange}
                      valueLabelDisplay="auto"
                      max={500000}
                      step={1000}
                    />
                    <p className='text-danger fw-bold'>{formatPrice(price[0])} - {formatPrice(price[1])}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-7">
              <div className="filter__item">
                <div className="row">
                  <div className="col-lg-6 col-md-5">
                    <div className="filter__sort d-flex flex-row">
                      <span className='mx-2 mt-2 text-black'>Search</span>
                      <input type="search" id="form1" class="form-control" placeholder={`food's name or store's name`} onChange={handleSearchChange} />
                    </div>

                  </div>
                  <div className="col-lg-3 col-md-4">
                    <div className="filter__found mt-2">
                      <h6>
                        <span>{productCount}</span> Products found
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
              <div className="row">
                {foods?.map((food) => 
                  <div className="col-lg-4 col-md-6 col-sm-6 " style={{ cursor: 'pointer' }} onClick={() => handleFoodClick(food.id)} key={food.store_id}>
                    <FoodCard food={food} />
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

export default Foods;
