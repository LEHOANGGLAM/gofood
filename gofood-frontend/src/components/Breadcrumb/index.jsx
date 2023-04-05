import React, { useState } from "react";
import PropTypes from "prop-types";

Breadcrumb.propTypes = {
  title: PropTypes.any,
};

Breadcrumb.defaultProps = { title: null };

function Breadcrumb(props) {
  const { title } = props;

  return (
    <section class="breadcrumb-section set-bg" data-setbg="img/breadcrumb.jpg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <div class="breadcrumb__text">
              <h2>GoFood</h2>
              <div class="breadcrumb__option">
                <a href="/">Home</a>
                <span>{title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Breadcrumb;
