import React from 'react';
import logoImg from '../Assests/GreenTrack Logo.png';

const AddPlant = () => {
  const handleAddPlant = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newAddPlant = Object.fromEntries(formData.entries());
    console.log(newAddPlant);

    fetch('http://localhost:3000/plants', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newAddPlant),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          console.log(data);
        }
        form.reset();
      });
  };

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

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
          <div className="w-full">
            <label className="text-black dark:text-white" htmlFor="category">
              Category
            </label>
            <select
              name="category"
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
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

        {/* Row 3 */}
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

        {/* Row 4 */}
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
            className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-indigo-300"
            required
            placeholder="Description"
          ></textarea>
          <button
            type="submit"
            className="mt-5 text-white h-12 w-full px-4 rounded bg-green-600 py-2 hover:bg-green-700 active:scale-95 transition"
          >
            Add Plant
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPlant;
