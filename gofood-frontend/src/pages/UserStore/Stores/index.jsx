import { useEffect } from "react";

const Stores = () => {
  useEffect(() => {
    document.title = "Stores";
  }, []);

  return (
    <>
      <section class="product spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-5">
              <div class="sidebar">
                <div class="sidebar__item">
                  <h4>Location</h4>
                  <ul>
                    <li>
                      <a href="#">Fresh Meat</a>
                    </li>
                    <li>
                      <a href="#">Vegetables</a>
                    </li>
                  </ul>
                </div>

                <div class="sidebar__item sidebar__item__color--option">
                  <h4>Tag</h4>
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
                        <span>16</span> Store found
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
                <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="product__item">
                    <div
                      class="product__item__pic set-bg"
                      data-setbg="img/product/product-1.jpg"
                    >
                      <ul class="product__item__pic__hover">
                        <li>
                          <a href="#">
                            <i class="fa fa-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-retweet"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-shopping-cart"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="product__item__text">
                      <h6>
                        <a href="#">Store 1</a>
                      </h6>
                      <h5>$30.00</h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="product__item">
                    <div
                      class="product__item__pic set-bg"
                      data-setbg="img/product/product-2.jpg"
                    >
                      <ul class="product__item__pic__hover">
                        <li>
                          <a href="#">
                            <i class="fa fa-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-retweet"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-shopping-cart"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="product__item__text">
                      <h6>
                        <a href="#">Store 2</a>
                      </h6>
                      <h5>$30.00</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="product__pagination">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">
                  <i class="fa fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stores;
