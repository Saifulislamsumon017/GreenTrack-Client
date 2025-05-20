import React from 'react';
import logoImg from '../Assests/GreenTrack Logo.webp';

const AddPlant = () => {
  return (
    <div className="w-11/12 mx-auto mt-[50px]  mb-[100px] shadow p-20 rounded-3xl ">
      <div className="flex items-center justify-center">
        <img src={logoImg} alt="" className="w-10 h-10" />
        <h2 className="text-4xl font-Rancho">Add A New Plant</h2>
      </div>
      <p className="text-center py-5">
        Fill out the form below to add a new plant to your collection
      </p>
      <form class="flex flex-col items-center gap-4 ">
        <div class="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
          <div class="w-full">
            <label class="text-black/70" for="name">
              Plant Name
            </label>
            <input
              class="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
              type="text"
              name="PlantName"
              required
              placeholder=" Enter Plant Name"
            />
          </div>
          <div class="w-full">
            <label class="text-black/70" for="name">
              Image URL
            </label>
            <input
              class="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
              type="text"
              name="image"
              placeholder="https://example.com/plant.jpg"
              required
            />
          </div>
        </div>
        <div class="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
          <div class="w-full">
            <label class="text-black/70" for="name">
              category
            </label>
            <select
              name="category"
              // value={formData.category}
              // onChange={handleChange}
              class="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
            >
              <option value="succulent">Succulent</option>
              <option value="fern">Fern</option>
              <option value="flowering">Flowering</option>
            </select>
          </div>
          <div class="w-full">
            <label class="text-black/70" for="name">
              careLevel
            </label>
            <select
              name="careLevel"
              // value={formData.careLevel}
              // onChange={handleChange}
              class="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
            >
              <option value="easy">Easy</option>
              <option value="moderate">Moderate</option>
              <option value="difficult">Difficult</option>
            </select>
          </div>
        </div>
        <div class="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
          <div class="w-full">
            <label class="text-black/70" for="name">
              Watering Frequency
            </label>
            <input
              class="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
              type="text"
              name="wateringFrequency"
              placeholder="e.g., Every 7 days"
              required
            />
          </div>
          <div class="w-full">
            <label class="text-black/70" for="name">
              Health Status
            </label>
            <select
              name="HealthStatus"
              // value={formData.careLevel}
              // onChange={handleChange}
              class="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
            >
              <option value="easy">Needs Attention</option>
              <option value="moderate">Struggling</option>
              <option value="difficult">Recovering</option>
            </select>
          </div>
        </div>
        <div class="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
          <div class="w-full">
            <label class="text-black/70" for="name">
              Last Watered Date
            </label>
            <input
              class="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
              name="lastWateredDate"
              type="date"
              required
              placeholder=""
            />
          </div>
          <div class="w-full">
            <label class="text-black/70" for="name">
              Next Watering Date
            </label>
            <input
              class="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
              name="lastWateredDate"
              type="date"
              placeholder="Pick A Day"
              required
            />
          </div>
        </div>

        <div class="mt-6 w-[350px] md:w-[700px]">
          <label class="text-black/70" for="name">
            Description
          </label>
          <textarea
            name="description"
            class="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-indigo-300"
            required
            placeholder="Description"
          ></textarea>
          <button
            type="submit"
            class="mt-5 text-white h-12 w-full px-4 rounded  bg-green-600 py-2  hover:bg-green-700 active:scale-95 transition"
          >
            Add Plant
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPlant;
