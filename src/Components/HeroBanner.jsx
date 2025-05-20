import React from 'react';
import SlideImg1 from '../Assests/Keep Your Plants Happy with Smart Tracking.webp';
import SlideImg2 from '../Assests/Personalized Plant Profiles.webp';
import SlideImg3 from '../Assests/Set Reminders & Stay On Schedule.webp';
import SlideImg4 from '../Assests/Monitor Plant Health.webp';

const HeroBanner = () => {
  return (
    <div className="carousel w-full my-10">
      <div id="slide1" className="carousel-item relative w-full rounded-2xl">
        {/* Background Image */}
        <img src={SlideImg1} className="w-full h-[550px] rounded-2xl" />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 "></div>

        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <h1 className="text-white text-center font-Rancho text-5xl w-2/4 mx-auto">
            Keep Your Plants Happy with Smart Tracking
          </h1>
          <p className="text-white text-2xl text-center w-2/4 mx-auto">
            Log watering, fertilizing, and care tasks in one simple dashboard.
            Never forget plant care again.
          </p>
          <button className="px-6 py-2 text-xl font-Rancho   font-semibold text-white border-2 border-white rounded-full">
            Start Tracking
          </button>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full rounded-2xl">
        <img src={SlideImg2} className="w-full h-[550px] rounded-2xl" />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 "></div>

        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <h1 className="text-white text-center font-Rancho text-5xl w-2/4 mx-auto">
            Create and Manage Your Own Plant Collection
          </h1>
          <p className="text-white text-2xl text-center w-2/4 mx-auto">
            Add your houseplants with photos, nicknames, and care preferences.
            It’s your personal plant journal.
          </p>
          <button className="px-6 py-2 text-xl font-Rancho font-semibold text-white border-2 border-white rounded-full">
            Add Your Plants
          </button>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full rounded-2xl">
        <img src={SlideImg3} className="w-full h-[550px] rounded-2xl" />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 "></div>

        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <h1 className="text-white text-center font-Rancho text-5xl w-2/4 mx-auto">
            Timely Reminders for Every Care Task
          </h1>
          <p className="text-white text-2xl text-center w-2/4 mx-auto">
            Get alerts for watering, fertilizing, and more—right when your
            plants need it.
          </p>
          <button className="px-6 py-2 text-xl font-Rancho font-semibold text-white border-2 border-white rounded-full">
            Set Reminders
          </button>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full rounded-2xl">
        <img src={SlideImg4} className="w-full h-[550px] rounded-2xl" />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 "></div>

        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <h1 className="text-white text-center font-Rancho text-5xl w-2/4 mx-auto">
            Track Growth & Health Over Time
          </h1>
          <p className="text-white text-2xl text-center w-2/4 mx-auto">
            Log notes, monitor changes, and keep your green friends thriving
            with detailed health tracking.
          </p>
          <button className="px-6 py-2 text-xl font-Rancho font-semibold text-white border-2 border-white rounded-full">
            Track Health
          </button>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
