import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { parseISO, addDays } from 'date-fns';
import Card from '../Components/Card';

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
    <div className="w-11/12 mx-auto py-15">
      <h1 className="text-center font-Rancho text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
        All the Plants You Love in One Spot
      </h1>

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

      <div className="w-full mt-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
        {sortedPlants.map(plant => (
          <Card key={plant._id} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default AllPlant;
