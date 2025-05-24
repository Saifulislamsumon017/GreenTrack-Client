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

  // Calculate next watering date
  const getNextWateringDate = plant => {
    const lastDate = parseISO(plant.lastWateredDate);
    const days = getWateringInterval(plant.wateringFrequency);
    return addDays(lastDate, days);
  };

  // Sorting logic
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
    <div className="w-11/12 mx-auto py-[100px]">
      <h1 className="text-center font-Rancho text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
        All the Plants You Love in One Spot
      </h1>

      {/* Sort Dropdown */}
      <div className="py-5 text-right">
        <select
          value={sortOption}
          onChange={e => setSortOption(e.target.value)}
          className="p-2 border border-green-300 rounded-md"
        >
          <option value="">Sort by</option>
          <option value="nextWatering">Next Watering Date</option>
          <option value="careLevel">Care Level</option>
        </select>
      </div>

      {/* Table */}
      <div className="py-5">
        <table className="w-full text-left text-gray-700 dark:text-gray-200 ">
          <thead className="bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-200 uppercase text-xl font-Rancho rounded-2xl">
            <tr>
              <th className="px-6 py-4">🌱 Plant Name</th>
              <th className="px-6 py-4">📂 Category</th>
              <th className="px-6 py-4">💧 Watering</th>
              <th className="px-6 py-4">🗓 Next Watering</th>
              <th className="px-6 py-4 text-right">🔍 Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y text-xl divide-green-100 dark:divide-green-800">
            {sortedPlants.map(plant => (
              <tr
                key={plant._id}
                className="hover:bg-green-50 dark:hover:bg-green-800 transition"
              >
                <td className="px-6 py-4 font-semibold">{plant.PlantName}</td>
                <td className="px-6 py-4 capitalize">{plant.category}</td>
                <td className="px-6 py-4">{plant.wateringFrequency}</td>
                <td className="px-6 py-4">
                  {format(getNextWateringDate(plant), 'dd-MM-yyyy')}
                </td>
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
