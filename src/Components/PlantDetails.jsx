import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PlantDetails = () => {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    fetch(`https://green-track-server.vercel.app/plant/${id}`)
      .then(res => res.json())
      .then(data => setPlant(data))
      .catch(err => console.error('Failed to fetch plant:', err));
  }, [id]);

  if (!plant) {
    return (
      <p className="text-center text-gray-600 dark:text-gray-300 py-20 text-lg">
        Loading plant details...
      </p>
    );
  }

  return (
    <div className="py-14 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row gap-8 items-center bg-white dark:bg-green-950 text-black dark:text-white shadow-xl rounded-2xl p-6 md:p-10 transition-all">
        {/* Image Last (on small), First (on large) */}
        <div className="w-full lg:w-1/2">
          <img
            src={plant.image}
            alt={plant.PlantName}
            className="w-full h-[300px] md:h-[400px] object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Text First (on small), Second (on large) */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold font-Rancho text-green-800 dark:text-green-300 mb-4 text-center lg:text-left">
            {plant.PlantName}
          </h1>

          <div className="space-y-2 text-sm md:text-base">
            <p>
              <span className="font-semibold">🌿 Category:</span>{' '}
              {plant.category}
            </p>
            <p>
              <span className="font-semibold">💧 Watering:</span>{' '}
              {plant.wateringFrequency}
            </p>
            <p>
              <span className="font-semibold">❤️ Care Level:</span>{' '}
              {plant.careLevel}
            </p>
            <p>
              <span className="font-semibold">🩺 Health Status:</span>{' '}
              {plant.HealthStatus}
            </p>
            <p>
              <span className="font-semibold">🕓 Last Watered:</span>{' '}
              {plant.lastWateredDate}
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-bold mb-2">📋 Description</h2>
            <p className="text-justify leading-relaxed">{plant.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
