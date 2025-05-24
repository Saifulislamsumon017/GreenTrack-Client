import React, { useEffect, useState, use } from 'react';

import { AuthContext } from '../Context/AuthContext';
import logoImg from '../Assests/GreenTrack Logo.png';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router';

const UpdatePlant = () => {
  const { user } = use(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [plantData, setPlantData] = useState(null);

  useEffect(() => {
    if (user?.email) {
      setUserEmail(user.email);

      fetch(`http://localhost:3000/users?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
          if (data.length > 0) {
            setUserName(data[0].name);
          } else {
            setUserName('Unknown User');
          }
        })
        .catch(err => {
          console.error('Error fetching user:', err);
          setUserName('Unknown User');
        });
    }
  }, [user]);

  useEffect(() => {
    fetch(`http://localhost:3000/plants/${id}`)
      .then(res => res.json())
      .then(data => setPlantData(data));
  }, [id]);

  const handleUpdatePlant = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedPlant = Object.fromEntries(formData.entries());

    updatedPlant.userEmail = userEmail;
    updatedPlant.userName = userName;

    fetch(`http://localhost:3000/plants/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedPlant),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0 || data.upsertedCount > 0) {
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Plant updated successfully!',
            confirmButtonColor: '#3085d6',
          });
          navigate('/my-plants'); // Redirect if needed
        } else {
          Swal.fire({
            icon: 'info',
            title: 'No changes made',
            confirmButtonColor: '#3085d6',
          });
        }
      })
      .catch(err => {
        console.error(err);
        Swal.fire({
          icon: 'error',
          title: 'Update Failed',
          text: 'Something went wrong. Please try again.',
          confirmButtonColor: '#d33',
        });
      });
  };

  if (!user) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-5xl font-Rancho capitalize">
          You must be logged in to update a plant.
        </h2>
      </div>
    );
  }

  if (!plantData) {
    return <div className="text-center py-10">Loading plant data...</div>;
  }

  return (
    <div className="w-11/12 mx-auto pt-[50px] pb-[100px] shadow p-20 rounded-3xl bg-white dark:shadow-green-950 dark:bg-green-950 dark:text-white transition">
      <div className="flex items-center justify-center">
        <img src={logoImg} alt="logo" className="w-10 h-10" />
        <h2 className="text-4xl font-Rancho ml-3">Update Your Plant</h2>
      </div>
      <p className="text-center py-5 text-black dark:text-white/70">
        Modify the details of your plant below
      </p>

      <form
        onSubmit={handleUpdatePlant}
        className="flex flex-col items-center gap-4"
      >
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
          <div className="w-full">
            <label className="text-black dark:text-white">Your Name</label>
            <input
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none"
              type="text"
              name="userName"
              value={userName}
              readOnly
              required
            />
          </div>
          <div className="w-full">
            <label className="text-black dark:text-white">Your Email</label>
            <input
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none"
              type="email"
              name="userEmail"
              value={userEmail}
              readOnly
              required
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
          <div className="w-full">
            <label className="text-black dark:text-white">Plant Name</label>
            <input
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none"
              type="text"
              name="PlantName"
              defaultValue={plantData.PlantName}
              required
            />
          </div>
          <div className="w-full">
            <label className="text-black dark:text-white">Image URL</label>
            <input
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none"
              type="text"
              name="image"
              defaultValue={plantData.image}
              required
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
          <div className="w-full">
            <label className="text-black dark:text-white">Category</label>
            <select
              name="category"
              defaultValue={plantData.category}
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none bg-white text-black dark:bg-transparent dark:text-white"
            >
              <option value="succulent">Succulent</option>
              <option value="fern">Fern</option>
              <option value="flowering">Flowering</option>
            </select>
          </div>
          <div className="w-full">
            <label className="text-black dark:text-white">Care Level</label>
            <select
              name="careLevel"
              defaultValue={plantData.careLevel}
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none"
            >
              <option value="easy">Easy</option>
              <option value="moderate">Moderate</option>
              <option value="difficult">Difficult</option>
            </select>
          </div>
        </div>

        {/* Row 4 */}
        <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
          <div className="w-full">
            <label className="text-black dark:text-white">
              Watering Frequency
            </label>
            <input
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none"
              type="text"
              name="wateringFrequency"
              defaultValue={plantData.wateringFrequency}
              required
            />
          </div>
          <div className="w-full">
            <label className="text-black dark:text-white">Health Status</label>
            <select
              name="HealthStatus"
              defaultValue={plantData.HealthStatus}
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none"
            >
              <option value="Needs Attention">Needs Attention</option>
              <option value="Struggling">Struggling</option>
              <option value="Recovering">Recovering</option>
            </select>
          </div>
        </div>

        {/* Row 5 */}
        <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
          <div className="w-full">
            <label className="text-black dark:text-white">
              Last Watered Date
            </label>
            <input
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none"
              type="date"
              name="lastWateredDate"
              defaultValue={plantData.lastWateredDate}
              required
            />
          </div>
          <div className="w-full">
            <label className="text-black dark:text-white">
              Next Watering Date
            </label>
            <input
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none"
              type="date"
              name="nextWateredDate"
              defaultValue={plantData.nextWateredDate}
              required
            />
          </div>
        </div>

        {/* Description */}
        <div className="mt-6 w-[350px] md:w-[700px]">
          <label className="text-black dark:text-white">Description</label>
          <textarea
            name="description"
            defaultValue={plantData.description}
            className="w-full p-3 mt-2 border border-gray-500/30 rounded outline-none"
            rows="3"
            placeholder="Write a description about the plant"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="btn w-[350px] md:w-[700px] font-Rancho text-2xl mt-4 bg-green-900 text-white border-none 
          dark:bg-white dark:border dark:border-white dark:text-green-900 transition"
        >
          Update Plant
        </button>
      </form>
    </div>
  );
};

export default UpdatePlant;
