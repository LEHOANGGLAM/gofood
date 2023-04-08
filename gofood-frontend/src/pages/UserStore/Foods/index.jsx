import React, { useEffect, useState } from 'react'
import FoodService from '../../../services/FoodService';
import ReactPaginate from 'react-paginate';
import { useNavigate } from "react-router-dom";
import FoodCard from '../../../components/FoodCard';
import CategoryService from '../../../services/CategoryService';

const Foods = () => {
  useEffect(() => {
    document.title = "Foods";
  }, []);

  const navigate = useNavigate();
  const [foods, setFoods] = useState([]);
  const [categories, setCategories] = useState([]);
  const [pageNo, setPageNo] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  useEffect(() => {
    FoodService.getFoodWithFilter().then((res) => {
      setFoods(res.data.results);
      setTotalPage(() => {
        if (res.data.count % 12 === 0) return res.data.count / 12;
        else return Math.floor(res.data.count / 12) + 1;
      });
    });

    CategoryService.getCategories().then((res) => {
      setCategories(res.data.results);
    })
  }, [])

  const handleFoodClick = (id) => {
    navigate(`/stores/${id}}`);
  }

  const handlePageChange = (newPage) => {
    setPageNo(newPage);
  }

  return (
    <>
      <section class="product spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-5">
              <div class="sidebar">
                <div class="sidebar__item">
                  <h4>Food Category</h4>
                  <ul>
                    {categories.map((category) => {
                      <li>
                        <a href="#">{category.name}</a>
                      </li>
                    })}               
                  </ul>
                </div>
                <div class="sidebar__item">
                  <h4>Price</h4>
                  <div class="price-range-wrap">
                    <div
                      class="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                      data-min="10"
                      data-max="540"
                    >
                      <div class="ui-slider-range ui-corner-all ui-widget-header"></div>
                      <span
                        tabindex="0"
                        class="ui-slider-handle ui-corner-all ui-state-default"
                      ></span>
                      <span
                        tabindex="0"
                        class="ui-slider-handle ui-corner-all ui-state-default"
                      ></span>
                    </div>
                    <div class="range-slider">
                      <div class="price-input">
                        <input type="text" id="minamount" />
                        <input type="text" id="maxamount" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="sidebar__item sidebar__item__color--option">
                  <h4>Colors</h4>
                  <div class="sidebar__item__color sidebar__item__color--white">
                    <label for="white">
                      White
                      <input type="radio" id="white" />
                    </label>
                  </div>
                  <div class="sidebar__item__color sidebar__item__color--gray">
                    <label for="gray">
                      Gray
                      <input type="radio" id="gray" />
                    </label>
                  </div>
                  <div class="sidebar__item__color sidebar__item__color--red">
                    <label for="red">
                      Red
                      <input type="radio" id="red" />
                    </label>
                  </div>
                </div>
                <div class="sidebar__item">
                  <h4>Popular Size</h4>
                  <div class="sidebar__item__size">
                    <label for="large">
                      Large
                      <input type="radio" id="large" />
                    </label>
                  </div>
                  <div class="sidebar__item__size">
                    <label for="medium">
                      Medium
                      <input type="radio" id="medium" />
                    </label>
                  </div>
                  <div class="sidebar__item__size">
                    <label for="small">
                      Small
                      <input type="radio" id="small" />
                    </label>
                  </div>
                  <div class="sidebar__item__size">
                    <label for="tiny">
                      Tiny
                      <input type="radio" id="tiny" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-9 col-md-7">
              <div class="filter__item">
                <div class="row">
                  <div class="col-lg-4 col-md-5">
                    <div class="filter__sort">
                      <span>Sort By</span>
                      <select>
                        <option value="0">Default</option>
                        <option value="0">Default</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4">
                    <div class="filter__found">
                      <h6>
                        <span>16</span> Products found
                      </h6>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-3">
                    <div class="filter__option">
                      <span class="icon_grid-2x2"></span>
                      <span class="icon_ul"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                {foods?.map((food, index) => (index <= 8) &&
                  <div class="col-lg-4 col-md-6 col-sm-6 " style={{ cursor: 'pointer' }} onClick={() => handleFoodClick(food.id)}>
                    <FoodCard food={food} />
                  </div>
                )}
              </div>

              <ReactPaginate
                forcePage={pageNo}
                previousLabel={<i class="fa fa-long-arrow-left"></i>}
                nextLabel={<i class="fa fa-long-arrow-right"></i>}
                pageCount={totalPage}
                onPageChange={handlePageChange}
                containerClassName={'d-flex flex-row product__pagination gap-2'}
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
