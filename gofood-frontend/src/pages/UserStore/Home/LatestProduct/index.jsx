import React, { useEffect, useState } from 'react'
import FoodService from '../../../../services/FoodService';
import { formatPrice } from '../../../../utils/formatPrice';
import defaultimg from '../../../../assets/img/default-image.jpg';
import { useNavigate } from "react-router-dom";
import FoodCard from '../../../../components/FoodCard';

const LatestProduct = () => {
  const navigate = useNavigate();
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    FoodService.getFoodWithFilter().then((res) => {
      setFoods(res.data.results);
    });
  }, [])

  const handleFoodClick = (id) => {
    navigate(`/stores/${id}}`);
  }

  return (
    <section class="featured spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <h2>Latest Foods</h2>
            </div>
          </div>
        </div>
        <div class="row featured__filter">
          {foods?.map((food, index) => (index <= 8) &&
            <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat"  style={{ cursor: 'pointer'}} onClick={()=>handleFoodClick(food.id)}>
              <FoodCard food={food}/>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestProduct;
