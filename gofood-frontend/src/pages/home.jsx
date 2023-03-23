import { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';


const Home = () => {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default Home;