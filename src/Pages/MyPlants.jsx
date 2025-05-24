import React, { use, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthContext';
import { Link } from 'react-router';
import logoImg from '../Assests/GreenTrack Logo.png';

const MyPlants = () => {
  const { user, loading } = use(AuthContext);
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://green-track-server.vercel.app/plants/${user.email}`)
        .then(res => res.json())
        .then(data => setPlants(data))
        .catch(() => {
          Swal.fire({
            icon: 'error',
            title: 'Failed to load',
            text: 'Could not fetch your plants. Try again later.',
            confirmButtonColor: '#d33',
          });
        });
    }
  }, [user, loading]);

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`https://green-track-server.vercel.app/plants/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire({
                icon: 'success',
                title: 'Deleted!',
                text: 'Your plant has been deleted.',
                confirmButtonColor: '#3085d6',
              });
              setPlants(plants.filter(plant => plant._id !== id));
            }
          })
          .catch(() => {
            Swal.fire({
              icon: 'error',
              title: 'Failed',
              text: 'Delete failed. Please try again.',
              confirmButtonColor: '#d33',
            });
          });
      }
    });
  };

  if (!user?.email) {
    return (
      <p className="text-center pt-20">Please login to see your plants.</p>
    );
  }

  return (
    <div className="py-[50px] max-w-7xl mx-auto">
      <div className="flex items-center justify-center mb-5">
        <img src={logoImg} alt="logo" className="w-10 h-10" />
        <h2 className="text-4xl font-Rancho ml-2">My Plants</h2>
      </div>
      {plants.length === 0 ? (
        <p className="text-center">No plants added yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {plants.map(plant => (
            <div
              key={plant._id}
              className="p-4 bg-white dark:bg-green-950 dark:border border-white-1px rounded-lg shadow-sm text-sm w-full dark:text-white transition"
            >
              <img
                src={plant.image}
                alt={plant.PlantName}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h2 className="text-2xl font-bold mt-3">{plant.PlantName}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                {plant.category} | {plant.careLevel}
              </p>
              <p className="text-sm mt-2">{plant.description}</p>
              <div className="flex justify-between mt-auto pt-4">
                <Link
                  to={`/updated-plant/${plant._id}`}
                  className="btn bg-blue-600 text-white hover:bg-blue-700"
                >
                  Update
                </Link>
                <button
                  onClick={() => handleDelete(plant._id)}
                  className="btn bg-red-600 text-white hover:bg-red-700"
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
