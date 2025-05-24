import React, { useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router';
import { parseISO, addDays, format } from 'date-fns';

const AllPlant = () => {
  const allPlants = useLoaderData();
  const [sortedPlants, setSortedPlants] = useState(allPlants);
  const [sortOption, setSortOption] = useState('');

  const getWateringInterval = str => {
    const match = str.match(/(\d+)/);
    return match ? parseInt(match[1], 10) : 0;
  };

  const getNextWateringDate = plant => {
    const lastDate = parseISO(plant.lastWateredDate);
    const days = getWateringInterval(plant.wateringFrequency);
    return addDays(lastDate, days);
  };

  useEffect(() => {
    let sorted = [...allPlants];
    if (sortOption === 'nextWatering') {
      sorted.sort((a, b) => getNextWateringDate(a) - getNextWateringDate(b));
    } else if (sortOption === 'careLevel') {
      const levels = { easy: 1, moderate: 2, hard: 3 };
      sorted.sort((a, b) => levels[a.careLevel] - levels[b.careLevel]);
    }
    setSortedPlants(sorted);
  }, [sortOption, allPlants]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-center font-Rancho text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-green-900 dark:text-white">
        All the Plants You Love in One Spot
      </h1>

      {/* Sort Dropdown */}
      <div className="py-5 flex justify-end">
        <select
          value={sortOption}
          onChange={e => setSortOption(e.target.value)}
          className="p-2 border border-green-300 rounded-md bg-green-100 text-green-900 dark:bg-green-800 dark:border-green-600 dark:text-white"
        >
          <option value="">Sort by</option>
          <option value="nextWatering">Next Watering Date</option>
          <option value="careLevel">Care Level</option>
        </select>
      </div>

      {/* Table Wrapper with Horizontal Scroll on Small Screens */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-gray-700 dark:text-gray-200">
          <thead className="bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-200 uppercase text-base sm:text-lg font-Rancho">
            <tr>
              <th className="px-4 py-3 sm:px-6">🌱 Plant Name</th>
              <th className="px-4 py-3 sm:px-6">📂 Category</th>
              <th className="px-4 py-3 sm:px-6">💧 Watering</th>
              <th className="px-4 py-3 sm:px-6">🗓 Next Watering</th>
              <th className="px-4 py-3 sm:px-6 text-right">🔍 Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-green-100 dark:divide-green-800 text-sm sm:text-base">
            {sortedPlants.map(plant => (
              <tr
                key={plant._id}
                className="hover:bg-green-50 dark:hover:bg-green-800 transition"
              >
                <td className="px-4 py-3 sm:px-6 font-semibold">
                  {plant.PlantName}
                </td>
                <td className="px-4 py-3 sm:px-6 capitalize">
                  {plant.category}
                </td>
                <td className="px-4 py-3 sm:px-6">{plant.wateringFrequency}</td>
                <td className="px-4 py-3 sm:px-6">
                  {format(getNextWateringDate(plant), 'yyyy-MM-dd')}
                </td>
                <td className="px-4 py-3 sm:px-6 text-right">
                  <Link to={`/plants/${plant._id}`}>
                    <button className="px-4 py-2 bg-green-700 text-white text-sm rounded-full hover:bg-green-800 dark:bg-white dark:text-green-800 dark:hover:bg-gray-100 transition">
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
