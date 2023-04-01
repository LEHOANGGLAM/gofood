import { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Loading from "../loading";
import Slider from "./slider";
import Category from "./category";
import FeaturedProduct from "./featuredproduct";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      {/* <Loading /> */}
      <Header />
      <Slider />
      {/* <Category /> */}
      <FeaturedProduct />
      <Footer />
    </>
  );
};

export default Home;
