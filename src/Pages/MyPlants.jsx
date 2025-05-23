import React, { useEffect, useState } from 'react';
import { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';

const MyPlants = () => {
  const { user } = use(AuthContext);
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/plants/${user.email}`)
        .then(res => res.json())
        .then(data => setPlants(data))
        .catch(err => console.error('Failed to load plants:', err));
    }
  }, [user]);

  const handleDelete = id => {
    const confirm = window.confirm(
      'Are you sure you want to delete this plant?'
    );
    if (!confirm) return;

    fetch(`http://localhost:3000/plants/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          toast.success('Plant deleted successfully!');
          setPlants(plants.filter(p => p._id !== id));
        } else {
          toast.error('Failed to delete plant.');
        }
      });
  };

  return (
    <div className="w-11/12 mx-auto py-[50px]">
      <h2 className="text-3xl font-Rancho mb-6 text-center">My Plants</h2>
      {plants.length === 0 ? (
        <p className="text-center">You haven't added any plants yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plants.map(plant => (
            <div
              key={plant._id}
              className="p-4 border rounded-xl shadow bg-white dark:bg-green-950 dark:text-white"
            >
              <img
                src={plant.image}
                alt={plant.PlantName}
                className="h-48 w-full object-cover rounded"
              />
              <h3 className="text-xl mt-2 font-semibold">{plant.PlantName}</h3>
              <p className="text-sm text-gray-600 dark:text-white/70">
                {plant.category}
              </p>
              <p className="text-sm">Watering: {plant.wateringFrequency}</p>
              <p className="text-sm">Health: {plant.HealthStatus}</p>
              <p className="text-sm">Next Watering: {plant.nextWateredDate}</p>

              <div className="mt-3 flex gap-2">
                <button
                  className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
                  onClick={() => alert('Implement update logic here')}
                >
                  Update
                </button>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => handleDelete(plant._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPlants;
