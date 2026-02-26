import React from "react";

const JobCard = ({ job, onClick }) => {
  return (
    <div
      onClick={() => onClick(job)}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl cursor-pointer transition"
    >
      <h3 className="text-lg font-semibold">{job.title}</h3>
      <p className="text-sm text-gray-500">{job.company}</p>
      <p className="text-sm">{job.location}</p>

      <div className="mt-2 flex gap-3 text-xs">
        <span className="text-blue-600">{job.type}</span>
        <span className="text-gray-400">{job.experience}</span>
      </div>
    </div>
  );
};

export default JobCard;