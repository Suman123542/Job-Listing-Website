import React from "react";

const blogs = [
  {
    title: "How to Prepare for a Job Interview",
    date: "March 12, 2025",
    summary: "Tips and tricks to crack technical and HR interviews."
  },
  {
    title: "Top Skills Employers Look For in 2025",
    date: "March 5, 2025",
    summary: "Learn the most in-demand skills in today’s job market."
  },
  {
    title: "Remote Jobs: Pros and Cons",
    date: "February 28, 2025",
    summary: "Is remote work really worth it? Let’s find out."
  }
];

const Blog = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 pt-24">
      <h1 className="text-3xl font-bold mb-8">Career Blog</h1>

      <div className="space-y-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-xs text-gray-400 mt-1">{blog.date}</p>
            <p className="text-gray-600 mt-3">{blog.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;