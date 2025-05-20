import React from 'react';
import Card from './Card';

const AllCardsPlants = ({ allPlants }) => {
  return (
    <div className="my-[50px]">
      <h1 className="text-center text-5xl font-Rancho">
        Track Every Plant with Ease
      </h1>
      <p className="text-center text-2xl w-2/4 mx-auto pt-4">
        View and manage all your plants in one place with real-time care
        updates.
      </p>
      <div className="w-full mt-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
        {allPlants.map(plant => (
          <Card key={plant._id} plant={plant}></Card>
        ))}
      </div>
    </div>
  );
};

export default AllCardsPlants;
