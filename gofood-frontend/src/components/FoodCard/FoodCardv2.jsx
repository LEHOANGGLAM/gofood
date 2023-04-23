import React from 'react'
import { formatPrice } from '../../utils/formatPrice';
import defaultimg from '../../assets/img/default-image.jpg';


const FoodCardv2 = ({ food }) => {
    return (
        <div class="row">
            <div class="col-lg-3">
                <div class="product__details__pic">
                    <div class="product__details__pic__item">
                        <img
                            class="product__details__pic__item--large"
                            src={food.image_path ? food.image_path : defaultimg}
                            alt="image"
                        />
                    </div>
                </div>
            </div>
            <div class="col-lg-9 mt-3">
                <h5 className='fw-bold'>
                    {food.name}
                </h5>
                <h5 className='mt-2 d-flex justify-content-between'>{formatPrice(food.price)} <i class="bi bi-plus-square-fill text-danger fs-2" style={{ cursor: 'pointer' }} onClick={() => { }}></i></h5>
                <h6 className='text-secondary'>
                    {food.description ?? 'No description'}
                </h6>
            </div>
        </div>
    );
};

export default FoodCardv2;
