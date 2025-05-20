import React from 'react';

const HeroBanner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        {/* Background Image */}
        <img
          src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
          className="w-full h-[550px] rounded-2xl"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 "></div>

        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <h1 className="text-white text-center text-5xl w-2/4 mx-auto font-bold">
            Keep Your Plants Happy with Smart Tracking
          </h1>
          <p className="text-white text-2xl text-center w-2/4 mx-auto">
            Log watering, fertilizing, and care tasks in one simple dashboard.
            Never forget plant care again.
          </p>
          <button className="px-6 py-2 text-xl font-semibold text-white border-2 border-white rounded-full">
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

      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
          className="w-full"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 "></div>

        {/* Centered Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">hello</h1>
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
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
          className="w-full"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 "></div>

        {/* Centered Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">hello</h1>
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
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
          className="w-full rounded-2xl"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 "></div>

        {/* Centered Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">hello</h1>
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
