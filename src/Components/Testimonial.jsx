import React from 'react';
import img1 from '../Assests/1.webp';
import img2 from '../Assests/2.webp';
import img3 from '../Assests/3.webp';
import img4 from '../Assests/4.webp';

// Testimonial card component
const TestimonialCard = ({ img, quote, name, location }) => (
  <div className="p-4 bg-white dark:bg-green-950 dark:border border-white rounded-lg shadow-sm text-sm w-full max-w-sm mx-auto transition dark:text-white hover:-translate-y-2 duration-300">
    <img src={img} alt={name} className="rounded-full  w-full object-cover" />
    <h3 className="text-2xl font-Rancho ml-2 mt-3">{name}</h3>
    <div className="ml-2 mb-2">
      <h4 className="text-xl capitalize text-green-900 dark:text-green-300 font-semibold">
        {location}
      </h4>
      <p className="mt-2 text-[16px] italic">"{quote}"</p>
    </div>
    <button
      type="button"
      className="mt-4 mb-2 ml-2 px-6 py-2 font-Rancho text-2xl border-2 rounded-full transition-all duration-500
                 text-green-900 border-green-900 hover:-translate-y-2
                 dark:text-white dark:border-white"
    >
      Read More
    </button>
  </div>
);

// Testimonial section component
const Testimonial = () => {
  const testimonials = [
    {
      img: img1,
      quote:
        'GreenTrack has completely changed how I care for my plants! The reminders and mood tracker keep me on top of my plant parenting. My peace lily  looked this happy years!',
      name: 'Sarah M.',
      location: 'California, USA',
    },
    {
      img: img2,
      quote:
        'As a total beginner, I used to kill every plant I bought. But the Beginner-Friendly Plants section gave me confidence and GreenPoints makes it fun! Highly recommend it.',
      name: 'James L.',
      location: 'London, UK',
    },
    {
      img: img3,
      quote:
        'The Plant Care Guide is amazing. Its like having a plant coach on demand. I even shared the site with my gardening group. Love the clean design and easy use.',
      name: 'Daniel K.',
      location: 'Toronto, Canada',
    },
    {
      img: img4,
      quote:
        'The GreenTrack dashboard is genius. I track all 12 of my plants in one place and the daily tips are spot-on. This is exactly what I needed to stay consistent with plant care.',
      name: 'Ayesha R.',
      location: 'Dubai, UAE',
    },
  ];

  return (
    <div className=" py-[100px] ">
      <div className="container flex flex-col items-center mx-auto mb-12">
        <h1 className="p-4 text-4xl font-semibold leading-none text-center font-Rancho text-green-900 dark:text-white">
          What Our Customers Are Saying
        </h1>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
