import { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loading from './loading';


const Home = () => {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <>
       {/* <Loading /> */}
      <Header />
      <Footer />
    </>
  );
};

export default Home;