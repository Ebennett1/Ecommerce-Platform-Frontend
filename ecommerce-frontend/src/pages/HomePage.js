import React, { useEffect, useState } from 'react';
import CarouselComponent from '../components/CarouselComponent';
import CarouselComponent_2 from '../components/CarouselComponent_2';



const HomePage = () => {
  return (
   <div className="carousel-wrapper">
      <h1>Welcome To EliteCart!</h1>
      <CarouselComponent />
      <CarouselComponent_2 />
      <CarouselComponent_2 />
      <CarouselComponent_2 />
      </div>
  );
};

export default HomePage;



// Next steps- 
// Work on carisal for home page
// Tweak flow (smoothness) between pages, (Auth flow,'please sign in', 'Must Be Signed in to view ______')
// New CSS framework;--> icons if possible for cart, profile, etc