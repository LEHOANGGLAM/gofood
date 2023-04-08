import { useEffect } from "react";
import Loading from "../../Loading";
import Category from "./Category";
import Slider from "./Slider";
import LatestProduct from "./LatestProduct";
import Banner from "./Banner";
import Blog from "./Blog";
import LatestStore from "./LatestStore";
  
const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      {/* <Loading /> */}
      <Slider />
      {/* <Category /> */}
      <LatestProduct />
      <Banner />
      <LatestStore />
      <Blog />
    </>
  );
};

export default Home;
