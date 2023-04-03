import React from "react";
import banner1 from "../../../assets/img/banner/banner-1.jpg";
import banner2 from "../../../assets/img/banner/banner-2.jpg";

const Banner = () => {
  return (
    <div class="banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="banner__pic">
              <img src={banner1} alt="" />
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="banner__pic">
              <img src={banner2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
