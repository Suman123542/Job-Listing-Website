import React from "react";

const companies = [
  { name: "Google", jobs: 12, location: "USA" },
  { name: "Amazon", jobs: 8, location: "Remote" },
  { name: "Microsoft", jobs: 6, location: "India" },
  { name: "Meta", jobs: 4, location: "Remote" },
];

const Companies = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-24">
      <h1 className="text-3xl font-bold mb-8">Companies Hiring</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {companies.map((company, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold">{company.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{company.location}</p>
            <p className="text-sm text-blue-600 mt-3">
              {company.jobs} open jobs
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;