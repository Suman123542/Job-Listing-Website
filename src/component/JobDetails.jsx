import React from "react";

const JobDetails = ({ job, onClose }) => {
  if (!job) return null;

  const handleApply = () => {
    alert("Applied successfully ✅");
    onClose();
  };

  return (
    <>
      {/* Transparent click layer with LIGHT blur */}
      <div
        className="fixed inset-0 z-40 backdrop-blur-[2px]"
        onClick={onClose}
      />

      {/* Floating Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
        <div
          className="bg-white max-w-2xl w-full mx-4 p-8 rounded-2xl 
                     shadow-[0_20px_60px_rgba(0,0,0,0.18)]
                     transform scale-[1.02]
                     pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-2xl font-bold">{job.title}</h2>

          <p className="mt-2 text-gray-600">
            {job.company} • {job.location}
          </p>

          <div className="mt-4 flex gap-4 text-sm">
            <span>💼 {job.type}</span>
            <span>⏳ {job.experience}</span>
            <span>💰 {job.salary}</span>
          </div>

          <p className="mt-6 text-gray-700 leading-relaxed">
            {job.description}
          </p>

          <h3 className="mt-6 font-semibold">Responsibilities</h3>
          <ul className="list-disc ml-6 mt-2 text-gray-600">
            {job.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          {/* Actions */}
          <div className="mt-8 flex justify-end gap-4">
            <button
              onClick={onClose}
              className="px-5 py-2 border rounded-lg hover:bg-gray-100"
            >
              Close
            </button>

            <button
              onClick={handleApply}
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;