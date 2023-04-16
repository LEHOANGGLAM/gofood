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

const StoreDetail = (props) => {
  useEffect(() => {
    document.title = "Store Detail";
  }, []);

  const navigate = useNavigate();
  const { id } = useParams();
  const [store, setStore] = useState({});
  const [value, setValue] = useState('1');

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
                    src={store.image ?? img}
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
                  <Tab label="Item One" value="1" />
                  <Tab label="Item Two" value="2" />
                  <Tab label="Item Three" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">Item One</TabPanel>
              <TabPanel value="2">Item Two</TabPanel>
              <TabPanel value="3">Item Three</TabPanel>
            </TabContext>

            <Banner />
            <LatestStore title={'Other Store'}/>

          </div>
        </div>
      </section>
    </>
  );
};

export default StoreDetail;
