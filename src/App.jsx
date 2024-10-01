import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import RestaurantCarousel from './components/RestaurantCarousel';
import RestaurantChains from './components/RestaurantChains';
import RestaurantListing from './components/RestaurantListing';
import Footer from './components/Footer';
const App = () => {
  return (
    <div>
      <Navbar />
      <hr/>
      <Main/>
      <RestaurantCarousel />
      <hr />
      <RestaurantChains />
      <hr />
      <RestaurantListing />
      <Footer/>
    </div>
  );
};

export default App;
