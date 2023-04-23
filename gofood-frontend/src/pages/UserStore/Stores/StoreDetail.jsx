import React, { useEffect, useState } from "react";
import LatestStore from "../Home/LatestStore";
import Banner from "../Home/Banner";
import StoreService from "../../../services/StoreService";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import img from "../../../assets/img/default-image.jpg";
import moment from 'moment';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import FoodCardv2 from '../../../components/FoodCard/FoodCardv2';

const StoreDetail = (props) => {
  useEffect(() => {
    document.title = "Store Detail";
  }, []);

  const navigate = useNavigate();
  const { id } = useParams();
  const [store, setStore] = useState({});
  const [value, setValue] = useState('1');
  const [foods, setFoods] = useState([]);
  const [menus, setMenus] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getStore = async (id) => {
    await StoreService.getStoreById(id).then((res) => {
      setStore(res.data)
    },
      (err) => {
        if (err.response.status === 404)
          navigate(`/notfound/`);
      }
    )

    await StoreService.getFoodByStoreId(id).then((res) => {
      setFoods(res.data)
    })

    await StoreService.getMenusByStoreId(id).then((res) => {
      setMenus(res.data)
    })
  }

  useEffect(() => {
    getStore(id);
  }, [])

  return (
    <>
      <section class="product-details spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="product__details__pic">
                <div class="product__details__pic__item">
                  <img
                    class="product__details__pic__item--large"
                    src={store.image_path ?? img}
                    alt="store image"
                  />
                </div>
                {/* <div class="product__details__pic__slider owl-carousel">
                  <img
                    data-imgbigurl="img/product/details/product-details-2.jpg"
                    src={img}
                    alt=""
                  />
                  <img
                    data-imgbigurl="img/product/details/product-details-3.jpg"
                    src={img}
                    alt=""
                  />
                </div> */}
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="product__details__text">
                <h3>{store.name}</h3>
                <div class="product__details__rating">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-half-o"></i>
                  <span>(18 reviews)</span>
                </div>
                {/* <div class="product__details__price">test</div> */}
                <p>
                  {store.description ?? 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar aVestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sitamet quam vehicula elementum sed sit amet dui. Proin egettortor risus.'}
                </p>
                <div class="product__details__quantity">
                  <a href="#" class="heart-icon">
                    View More
                  </a>
                </div>
                <a href="#" class="primary-btn">
                  Follow
                  <span class="icon_heart_alt ms-2"></span>
                </a>

                <ul>
                  <li>
                    <b>Availability</b> <span>{moment(store.open_time, 'HH:mm:ss').format('H:mm')} - {moment(store.close_time, 'HH:mm:ss').format('H:mm')}</span>
                  </li>
                  <li>
                    <b>Shipping</b>{" "}
                    <span>
                      20 minutes shipping. <samp>Free pickup today</samp>
                    </span>
                  </li>
                  <li>
                    <b>Share on</b>
                    <div class="share">
                      <a href="#">
                        <i class="fa fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-pinterest"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <TabContext value={value} >
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                  <Tab label="Foods" value="1" />
                  <Tab label={`Review (2)`} value="2" />

                </TabList>
              </Box>
              <TabPanel value="1">
                <div className="row">
                  <div className="col-lg-2 border rounded pt-4" style={{ backgroundColor: '#f1f1f1', maxHeight: 250 }}>
                    {menus?.map((menu) =>
                      <p className="border-bottom" key={menu.id} style={{ cursor: 'pointer' }} onClick={() => { }}>{menu.name}</p>
                    )}
                  </div>
                  <div className="col-lg-6">
                    {foods?.map((food) =>
                      <FoodCardv2 food={food} />
                    )}
                  </div>
                  <div class="col-lg-4" >
      
                      <div class="checkout__order sticky-sm-top rounded" style={{ top: '2rem'}}>
                        <h4>Your Order</h4>
                        <ul>
                          <li>Vegetable’s Package <span>$75.99</span></li>
                          <li>Fresh Vegetable <span>$151.99</span></li>
                          <li>Organic Bananas <span>$53.99</span></li>
                        </ul>
                        <div class="checkout__order__subtotal">Subtotal <span>$750.99</span></div>
                        <div class="checkout__order__total">Total <span>$750.99</span></div>
                        <button type="submit" class="site-btn">PLACE ORDER</button>
                      </div>
                    
                  </div>
                </div>
              </TabPanel>
              <TabPanel value="2">Reivews</TabPanel>

            </TabContext>
      
            <Banner />
            <LatestStore title={'Other Store'} />

          </div>
        </div>
      </section>
    </>
  );
};

export default StoreDetail;
