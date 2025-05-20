import React from 'react';
import logoImg from '../Assests/GreenTrack Logo.webp';

const AddPlant = () => {
  const handelAddPlant = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newAddPlant = Object.fromEntries(formData.entries());
    console.log(newAddPlant);

    // send plant data to db
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
    <div className="w-11/12 mx-auto mt-[50px]  mb-[100px] shadow p-20 rounded-3xl ">
      <div className="flex items-center justify-center">
        <img src={logoImg} alt="" className="w-10 h-10" />
        <h2 className="text-4xl font-Rancho">Add A New Plant</h2>
      </div>
      <p className="text-center py-5">
        Fill out the form below to add a new plant to your collection
      </p>
      <form
        onSubmit={handelAddPlant}
        className="flex flex-col items-center gap-4 "
      >
        <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
          <div className="w-full">
            <label className="text-black/70" for="name">
              Plant Name
            </label>
            <input
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
              type="text"
              name="PlantName"
              required
              placeholder=" Enter Plant Name"
            />
          </div>
          <div className="w-full">
            <label className="text-black/70" for="name">
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
        <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
          <div className="w-full">
            <label className="text-black/70" for="name">
              Category
            </label>
            <select
              name="category"
              // value={formData.category}
              // onChange={handleChange}
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
            >
              <option value="succulent">Succulent</option>
              <option value="fern">Fern</option>
              <option value="flowering">Flowering</option>
            </select>
          </div>
          <div className="w-full">
            <label className="text-black/70" for="name">
              CareLevel
            </label>
            <select
              name="careLevel"
              // value={formData.careLevel}
              // onChange={handleChange}
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
            >
              <option value="easy">Easy</option>
              <option value="moderate">Moderate</option>
              <option value="difficult">Difficult</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
          <div className="w-full">
            <label className="text-black/70" for="name">
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
            <label className="text-black/70" for="name">
              Health Status
            </label>
            <select
              name="HealthStatus"
              // value={formData.careLevel}
              // onChange={handleChange}
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
            >
              <option value="easy">Needs Attention</option>
              <option value="moderate">Struggling</option>
              <option value="difficult">Recovering</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
          <div className="w-full">
            <label className="text-black/70" for="name">
              Last Watered Date
            </label>
            <input
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
              name="lastWateredDate"
              type="date"
              required
              placeholder=""
            />
          </div>
          <div className="w-full">
            <label className="text-black/70" for="name">
              Next Watering Date
            </label>
            <input
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
              name="lastWateredDate"
              type="date"
              placeholder=""
              required
            />
          </div>
        </div>

        <div className="mt-6 w-[350px] md:w-[700px]">
          <label className="text-black/70" for="name">
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
            className="mt-5 text-white h-12 w-full px-4 rounded  bg-green-600 py-2  hover:bg-green-700 active:scale-95 transition"
          >
            Add Plant
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPlant;
