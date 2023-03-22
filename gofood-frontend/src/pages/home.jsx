import { useEffect } from 'react';


const Home = () => {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <>heyy</>
  );
};

export default Home;