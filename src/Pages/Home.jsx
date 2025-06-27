import React from 'react';
import HeroBanner from '../Components/HeroBanner';
import { useLoaderData } from 'react-router';
import AllCardsPlants from '../Components/AllCardsPlants';
import Airtical from '../Components/Airtical';
import Testimonial from '../Components/Testimonial';
import Blog from '../Components/Blog';
import Neawlater from '../Components/Neawlater';

const Home = () => {
  const allPlants = useLoaderData();
  console.log(allPlants);

  return (
    <div className="w-11/12 mx-auto">
      <HeroBanner />
      <AllCardsPlants allPlants={allPlants} />
      <Blog />
      <Testimonial />
      <Neawlater />
    </div>
  );
};

export default Home;
