import React from 'react'
import { formatPrice } from '../../utils/formatPrice';
import defaultimg from '../../assets/img/default-image.jpg';


const FoodCard = ({ food }) => {

  return (
    <div class="featured__item">
      <div
        class="featured__item__pic set-bg"
        style={food.image_path ? { backgroundImage: `url(${food.image_path})` } : { backgroundImage: `url(${defaultimg})` }}
      >
        <ul class="featured__item__pic__hover">
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
      <div class="featured__item__text">
        <h6>
          <a href="#">{food.name}</a>
        </h6>
        <h5>{formatPrice(food.price)}</h5>
      </div>
    </div>
  );
};

export default FoodCard;
