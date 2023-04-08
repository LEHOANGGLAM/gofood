import React, { useEffect, useState } from 'react'
import StoreService from '../../../../services/StoreService';
import defaultimg from '../../../../assets/img/default-image.jpg';
import { useNavigate } from "react-router-dom";
import StoreCard from '../../../../components/StoreCard';

const LatestStore = () => {
  const navigate = useNavigate();
  const [stores, setStores] = useState([]);
  useEffect(() => {
    StoreService.getStoreWithFilter().then((res) => {
      setStores(res.data.results);
    });
  }, [])

  const handleStoreClick = (id) => {
    navigate(`/stores/${id}}`);
  }


  return (
    <section class="featured spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <h2>New Store</h2>
            </div>
          </div>
        </div>
        <div class="row featured__filter">
        {stores?.map((store, index) => (index <= 8) &&
            <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat" style={{cursor: 'pointer'}} onClick={()=>handleStoreClick(store.id)}>
             <StoreCard store={store}/>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestStore;
