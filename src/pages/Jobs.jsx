import React, { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import { jobsData } from "../assets/jobsData";
import JobList from "../component/JobList";
import JobDetails from "../component/JobDetails";

const Jobs = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchParams] = useSearchParams();

  const keyword = (searchParams.get("keyword") || "").toLowerCase();
  const location = (searchParams.get("location") || "").toLowerCase();
  const category = (searchParams.get("category") || "").toLowerCase();

  const filteredJobs = useMemo(() => {
    return jobsData.filter((job) => {
      const matchKeyword =
        !keyword || job.title.toLowerCase().includes(keyword);
      const matchLocation =
        !location || job.location.toLowerCase().includes(location);
      const matchCategory =
        !category || job.category.toLowerCase().includes(category);

      return matchKeyword && matchLocation && matchCategory;
    });
  }, [keyword, location, category]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold text-center mb-12">
        All Jobs
      </h1>

      <JobList
        jobs={filteredJobs}
        onSelect={(job) => setSelectedJob(job)}
      />

      {/* Modal */}
      {selectedJob && (
        <JobDetails
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      )}
    </div>
  );
};

export default Jobs;