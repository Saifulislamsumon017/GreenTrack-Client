import React, { use, useEffect, useState } from 'react';
import logoImg from '../Assests/GreenTrack Logo.png';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const AddPlant = () => {
  const { user } = use(AuthContext);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      setUserEmail(user.email);

      fetch(`https://green-track-server.vercel.app/users?email=${user.email}`)
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

  const handleAddPlant = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const newAddPlant = Object.fromEntries(formData.entries());
    newAddPlant.userEmail = userEmail;
    newAddPlant.userName = userName;

    fetch('https://green-track-server.vercel.app/plants', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newAddPlant),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Plant added successfully!',
            confirmButtonColor: '#3085d6',
          }).then(() => {
            navigate('/');
          });
          form.reset();
        } else {
          Swal.fire({
            icon: 'warning',
            title: 'Submission Failed',
            text: 'Plant submission failed. Try again!',
            confirmButtonColor: '#d33',
          });
        }
      })
      .catch(err => {
        console.error(err);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error adding plant. Please try again later.',
          confirmButtonColor: '#d33',
        });
      });
  };

  if (!user) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-5xl font-Rancho capitalize">
          You must be logged in to add a plant.
        </h2>
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto pt-[50px] pb-[100px] shadow p-20 rounded-3xl bg-white dark:shadow-green-950 dark:bg-green-950 dark:text-white transition">
      <div className="flex items-center justify-center">
        <img src={logoImg} alt="logo" className="w-10 h-10" />
        <h2 className="text-4xl font-Rancho ml-3">Add A New Plant</h2>
      </div>
      <p className="text-center py-5 text-black dark:text-white/70">
        Fill out the form below to add a new plant to your collection
      </p>

      <form
        onSubmit={handleAddPlant}
        className="flex flex-col items-center gap-4"
      >
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
          <div className="w-full">
            <label className="text-black dark:text-white" htmlFor="userName">
              Your Name
            </label>
            <input
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
              type="text"
              name="userName"
              value={userName}
              readOnly
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="w-full">
            <label className="text-black dark:text-white" htmlFor="userEmail">
              Your Email
            </label>
            <input
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
              type="email"
              name="userEmail"
              value={userEmail}
              readOnly
              placeholder="Your Email"
              required
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
          <div className="w-full">
            <label className="text-black dark:text-white" htmlFor="PlantName">
              Plant Name
            </label>
            <input
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
              type="text"
              name="PlantName"
              required
              placeholder="Enter Plant Name"
            />
          </div>
          <div className="w-full">
            <label className="text-black dark:text-white" htmlFor="image">
              Image URL
            </label>
            <input
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
              type="text"
              name="image"
              placeholder="https://example.com/plant.jpg"
              required
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
          <div className="w-full">
            <label className="text-black dark:text-white" htmlFor="category">
              Category
            </label>
            <select
              name="category"
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300 bg-white text-black dark:bg-transparent dark:text-white"
            >
              <option value="succulent">Succulent</option>
              <option value="fern">Fern</option>
              <option value="flowering">Flowering</option>
            </select>
          </div>
          <div className="w-full">
            <label className="text-black dark:text-white" htmlFor="careLevel">
              Care Level
            </label>
            <select
              name="careLevel"
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
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
            <label
              className="text-black dark:text-white"
              htmlFor="wateringFrequency"
            >
              Watering Frequency
            </label>
            <input
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
              type="text"
              name="wateringFrequency"
              placeholder="e.g., Every 7 days"
              required
            />
          </div>
          <div className="w-full">
            <label
              className="text-black dark:text-white"
              htmlFor="HealthStatus"
            >
              Health Status
            </label>
            <select
              name="HealthStatus"
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
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
            <label
              className="text-black dark:text-white"
              htmlFor="lastWateredDate"
            >
              Last Watered Date
            </label>
            <input
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
              name="lastWateredDate"
              type="date"
              required
            />
          </div>
          <div className="w-full">
            <label
              className="text-black dark:text-white"
              htmlFor="nextWateredDate"
            >
              Next Watering Date
            </label>
            <input
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
              name="nextWateredDate"
              type="date"
              required
            />
          </div>
        </div>

        {/* Description */}
        <div className="mt-6 w-[350px] md:w-[700px]">
          <label className="text-black dark:text-white" htmlFor="description">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Write a description about the plant"
            className="w-full p-3 mt-2 border border-gray-500/30 rounded outline-none focus:border-indigo-300"
            rows="3"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="btn w-[350px] md:w-[700px] font-Rancho text-2xl mt-4 bg-green-900 text-white border-none 
          dark:bg-white dark:border dark:border-white 
          dark:text-green-900 transition"
        >
          Add Plant
        </button>
      </form>
    </div>
  );
};

export default AddPlant;
