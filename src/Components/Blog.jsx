import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      img: 'https://i.postimg.cc/6qrjv21x/Plant-Care.webp',
      category: 'Plant Care',
      date: '2025-05-21',
      title: 'The Secret to Thriving Indoor Plants',
      description:
        'Learn the key habits that keep your houseplants healthy and vibrant year-round—from choosing the right spot to mastering a watering routine.',
    },
    {
      img: 'https://i.postimg.cc/kg4snp9m/Sunlight-Guide.webp',
      category: 'Sunlight Guide',
      date: '2025-05-19',
      title: 'Sunlight Decoded: Which Plants Need What',
      description:
        'Not all plants crave full sun! Discover the differences between low, medium, and high light plants and how to position them correctly in your space.',
    },
    {
      img: 'https://i.postimg.cc/j5zQgV6z/Watering-Tips.png',
      category: 'Watering Tips',
      date: '2025-05-16',
      title: 'Watering Woes: How Much Is Too Much?',
      description:
        'Overwatering is the #1 killer of houseplants. This guide will help you recognize the signs and build the perfect watering schedule.',
    },
    {
      img: 'https://i.postimg.cc/9XYYyhQ2/Beginner-Plants.webp',
      category: 'Beginner Plants',
      date: '2025-05-14',
      title: 'Beginner’s Plant Picks: Top 5 Easy-Care Favorites',
      description:
        'New to plant parenting? Start with these no-fuss plants that thrive with minimal attention and are perfect for beginners.',
    },
  ];

  return (
    <div className=" transition-colors duration-300">
      {/* Section Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl sm:text-5xl font-Rancho text-green-900 dark:text-white">
          Latest from Blog
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          Explore stories, tips, and insights to enrich your plant journey.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="w-full mt-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
        {blogPosts.map((post, idx) => (
          <article
            key={idx}
            className="bg-white dark:bg-transparent dark:border border-white-1px rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative">
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-48 sm:h-56 object-cover"
              />
              <span className="absolute top-4 left-4 bg-white dark:bg-green-700 text-gray-900 dark:text-white px-3 py-1 text-xs font-semibold rounded-full">
                {post.category}
              </span>
            </div>

            <div className="p-5">
              <time
                dateTime={post.date}
                className="block text-sm text-gray-500 dark:text-gray-300"
              >
                {post.date}
              </time>
              <h3 className="mt-2 text-2xl font-semibold text-green-900 dark:text-white hover:underline transition">
                <a href="#">{post.title}</a>
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {post.description}
              </p>

              <button
                className="mt-4 mb-3 flex items-center ml-2 px-6 py-2 font-Rancho text-2xl border-2 rounded-full transition-all duration-500
                 text-green-900 border-green-900 hover:-translate-y-2
                 dark:text-white dark:border-white"
              >
                Continue Reading
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
