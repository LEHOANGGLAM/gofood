import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styles from './Header.module.scss';


const Header = () => {


  return (
    <header className={styles.header}>
      <div className={styles.header__top}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-5">
              <div className={styles.header__top__left}>
                <ul>
                  <li><i className="fa fa-envelope" />admin@mfe.com</li>
                  <li>Free shipping for all orders over $50</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-7">
              <div className={styles.header__top__right}>
                <div className={styles.header__top__right__social}>
                  <a href="#"><i className="fa fa-facebook" /></a>
                  <a href="#"><i className="fa fa-twitter" /></a>
                  <a href="#"><i className="fa fa-linkedin" /></a>
                  <a href="#"><i className="fa fa-pinterest-p" /></a>
                </div>
                <div className={styles.header__top__right__language}>
                  <img src="/img/language.png" alt="" />
                  <div>English</div>
                  <span className="arrow_carrot-down" />
                  <ul>
                    <li><a href="#">Spanish</a></li>
                    <li><a href="#">English</a></li>
                  </ul>
                </div>
                {/* <SignIn /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className={styles.header__logo}>
              <Link to="/">
                <img src="/img/logo.png" alt="" />
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            {/* <Nav /> */}
          </div>
          <div className="col-lg-3">
            <div className={styles.header__cart}>
              <ul>
                <li>
                  <a href="#"><i className="fa fa-heart" /> <span>1</span></a>
                </li>
                <li>
                 
                </li>
              </ul>
              <div className={styles.header__cart__price}>
               
              </div>
            </div>
          </div>
        </div>
        <div className={styles.hamburger__open}>
          <i className="fa fa-bars" />
        </div>
      </div>
    </header>
  );
};

export default Header;
