import React from 'react';
import { Link } from 'react-router';

const Card = ({ plant }) => {
  console.log(plant);

  const { _id, PlantName, image, category, careLevel, wateringFrequency } =
    plant;
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm text-sm w-full">
      <img
        className="rounded-md max-h-40 w-full object-cover"
        src={image}
        alt="Plant Image"
      />
      <h3 className=" text-3xl font-Rancho ml-2 mt-2">{PlantName}</h3>
      <div className=" ml-2">
        <h3 className="text-xl ">
          Category:{' '}
          <span className="text-xl capitalize font-semibold text-green-900  ">
            {category}
          </span>
        </h3>
        <h3 className="text-xl ">
          CareLevel:{' '}
          <span className=" text-xl capitalize font-semibold text-green-900  ">
            {careLevel}
          </span>
        </h3>
        <p className="mt-2 text-[16px]">
          WateringFrequency: {wateringFrequency}
        </p>
      </div>
      <Link to={`/plants/${_id}`}>
        <button
          type="button"
          className=" mt-4 mb-3 ml-2 px-6 py-2 font-Rancho text-2xl text-green-900 border-2 border-green-900 rounded-full hover:translate-y-[-10px] transition-all duration-500 "
        >
          Learn More
        </button>
      </Link>
    </div>
  );
};

export default Card;
