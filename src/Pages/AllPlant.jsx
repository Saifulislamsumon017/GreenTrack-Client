import React from 'react';
import { useLoaderData } from 'react-router';

const AllPlant = () => {
  const allPlants = useLoaderData();
  console.log(allPlants);

  return (
    <div className="w-11/12 mx-auto my-[100px]">
      <h1 className="text-center font-Rancho text-5xl ">
        All the Pants You Love in One Spot
      </h1>
      <div></div>
    </div>
  );
};

export default AllPlant;
