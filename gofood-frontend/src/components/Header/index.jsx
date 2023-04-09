import React from "react";
import logo from "../../assets/img/logo.png";
import language from "../../assets/img/language.png";

const Header = () => {
  return (
    <div>
      <div class="humberger__menu__overlay"></div>
      <div class="humberger__menu__wrapper">
        <div class="humberger__menu__logo">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div class="humberger__menu__cart">
          <ul>
            <li>
              <a href="#">
                <i class="fa fa-heart"></i> <span>1</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-shopping-bag"></i> <span>3</span>
              </a>
            </li>
          </ul>
          <div class="header__cart__price">
            item: <span>$150.00</span>
          </div>
        </div>
        <div class="humberger__menu__widget">
          <div class="header__top__right__language">
            <img src={language} alt="lang" />
            <div>English</div>
            <span class="arrow_carrot-down"></span>
            <ul>
              <li>
                <a href="#">Spanis</a>
              </li>
              <li>
                <a href="#">English</a>
              </li>
            </ul>
          </div>
          <div class="header__top__right__auth">
            <a href="#">
              <i class="fa fa-user"></i> Login
            </a>
          </div>
        </div>
        <nav class="humberger__menu__nav mobile-menu">
          <ul>
            <li class="active">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/foods">Food</a>
            </li>
            <li>
              <a href="/stores">Store</a>
            </li>
            <li>
              <a href="/blogs">Blog</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div id="mobile-menu-wrap"></div>
        <div class="header__top__right__social">
          <a href="#">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i class="fa fa-pinterest-p"></i>
          </a>
        </div>
        <div class="humberger__menu__contact">
          <ul>
            <li>
              <i class="fa fa-envelope"></i> 1951012061lam@ou.edu.vn
            </li>
            <li>Free Shipping for all Order of $99</li>
          </ul>
        </div>
      </div>

      {/* <!-- Header Section Begin --> */}
      <header class="header">
        <div class="header__top">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-6">
                <div class="header__top__left">
                  <ul>
                    <li>
                      <i class="fa fa-envelope"></i> 1951012061lam@ou.edu.vn
                    </li>
                    <li>Free Shipping for all Order of $99</li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="header__top__right">
                  <div class="header__top__right__social">
                    <a href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-linkedin"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-pinterest-p"></i>
                    </a>
                  </div>
                  <div class="header__top__right__language">
                    <img src={language} alt="lang" />
                    <div>English</div>
                    <span class="arrow_carrot-down"></span>
                    <ul>
                      <li>
                        <a href="#">Spanis</a>
                      </li>
                      <li>
                        <a href="#">English</a>
                      </li>
                    </ul>
                  </div>
                  <div class="header__top__right__auth">
                    <a href="#">
                      <i class="fa fa-user"></i> Login
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="header__logo">
                <a href="/">
                  <img src={logo} alt="logo" />
                </a>
              </div>
            </div>
            <div class="col-lg-6">
              <nav class="header__menu">
                <ul>
                  <li className={window.location.pathname == "/" ? `active` : ``}>
                    <a href="/">Home</a>
                  </li>
                  <li className={window.location.pathname == "/foods" ? `active` : ``}>
                    <a href="/foods">Food</a>
                  </li>
                  <li className={window.location.pathname == "/stores" ? `active` : ``}>
                    <a href="/stores">Store</a>
                  </li>
                  <li className={window.location.pathname == "/blogs" ? `active` : ``}>
                    <a href="/blogs">Blog</a>
                  </li>
                  <li  className={window.location.pathname == "/contact" ? `active` : ``}>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="col-lg-3">
              <div class="header__cart">
                <ul>
                  <li>
                    <a href="#">
                      <i class="fa fa-heart"></i> <span>1</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-shopping-bag"></i> <span>3</span>
                    </a>
                  </li>
                </ul>
                <div class="header__cart__price">
                  item: <span>$150.00</span>
                </div>
              </div>
            </div>
          </div>
          <div class="humberger__open">
            <i class="fa fa-bars"></i>
          </div>
        </div>
        <nav class="limiter-menu-desktop container"></nav>
      </header>
      {/* <!-- Header Section End --> */}
    </div>
  );
};

export default Header;
