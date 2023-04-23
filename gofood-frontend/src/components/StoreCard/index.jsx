import React from 'react'
import defaultimg from '../../assets/img/default-image.jpg';
import moment from 'moment';

const StoreCard = ({ store }) => {
    return (
        <div class="featured__item">
            <div
                class="featured__item__pic set-bg"
                style={store.image_path ? { backgroundImage: `url(${store.image_path})` } : { backgroundImage: `url(${defaultimg})` }}
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
                    <a href="#">{store.name}</a>
                </h6>
                <h5>{moment(store.open_time, 'HH:mm:ss').format('H:mm')} - {moment(store.close_time, 'HH:mm:ss').format('H:mm')}</h5>
            </div>
        </div>
    );
};

export default StoreCard;
