import React from "react";
import JobCard from "./JobCard";

const JobList = ({ jobs, onSelect }) => {
  if (jobs.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-10">
        No jobs found
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} onClick={onSelect} />
      ))}
    </div>
  );
};

export default JobList;