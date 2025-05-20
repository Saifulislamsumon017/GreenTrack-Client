import React from 'react';
import HeroBanner from '../Components/HeroBanner';
import { useLoaderData } from 'react-router';
import AllCardsPlants from '../Components/AllCardsPlants';

const Home = () => {
  const allPlants = useLoaderData();
  console.log(allPlants);

  return (
    <div className="w-11/12 mx-auto">
      <HeroBanner />
      <AllCardsPlants allPlants={allPlants} />
    </div>
  );
};

export default Home;
