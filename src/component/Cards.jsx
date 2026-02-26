import React from "react";
import { jobCategories } from "../assets/data";

const Cards = () => {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Explore Jobs by Category
        </h2>

        <p className="mt-3 text-gray-500 text-sm md:text-base">
          Choose your industry and find the right opportunity
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {jobCategories.map((item) => (
            <div
              key={item.id}
              onClick={() =>
                (window.location.href = `/jobs?category=${item.title}`)
              }
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition cursor-pointer group"
            >
              <div className="text-4xl">{item.icon}</div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                {item.title}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                {item.jobs}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;