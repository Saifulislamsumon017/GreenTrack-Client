import React from 'react';
import { Link, useLoaderData } from 'react-router';

const AllPlant = () => {
  const allPlants = useLoaderData();

  return (
    <div className="w-11/12 mx-auto py-[100px]">
      <h1 className="text-center font-Rancho text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
        All the Plants You Love in One Spot
      </h1>
      <div className="py-5">
        <table className="w-full text-left text-gray-700 dark:text-gray-200 ">
          <thead className="bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-200 uppercase text-xl font-Rancho rounded-2xl">
            <tr>
              <th className="px-6 py-4">🌱 Plant Name</th>
              <th className="px-6 py-4">📂 Category</th>
              <th className="px-6 py-4">💧 Watering</th>
              <th className="px-6 py-4 text-right">🔍 Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y text-xl divide-green-100 dark:divide-green-800">
            {allPlants.map(plant => (
              <tr
                key={plant._id}
                className="hover:bg-green-50 dark:hover:bg-green-800 transition"
              >
                <td className="px-6 py-4 font-semibold">{plant.PlantName}</td>
                <td className="px-6 py-4 capitalize">{plant.category}</td>
                <td className="px-6 py-4">{plant.wateringFrequency}</td>
                <td className="px-6 py-4 text-right">
                  <Link to={`/plants/${plant._id}`}>
                    <button className="px-4 py-1 bg-green-700 text-white text-sm rounded-full hover:bg-green-800 dark:bg-white dark:text-green-800 dark:hover:bg-gray-100 transition">
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPlant;
