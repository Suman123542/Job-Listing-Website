import React, { useState } from "react";
import '../index.css';
const HeroSection = ({ onSearch }) => {
    const [keyword, setKeyword] = useState("");
    const [location, setLocation] = useState("");
    return (
        <section className="w-full bg-white pt-24">
            <div className="max-w-7xl mx-auto px-4 py-20 text-center">


                <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
                    Find jobs and plan your next future with us!
                </h1>


                <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm md:text-base pt-2">
                    Start your job search and discover thousands of opportunities from top companies.
                </p>

                <div className="mt-10 bg-white shadow-xl rounded-2xl flex flex-col md:flex-row items-stretch max-w-3xl mx-auto overflow-hidden">


                    <div className="flex items-center flex-1 px-4 gap-3 border-b md:border-b-0 md:border-r">
                        <svg
                            className="w-5 h-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                            <path d="M3 6h18v10a2 2 0 01-2 2H5a2 2 0 01-2-2V6z" />
                        </svg>
                        <input
                            type="text"
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                            placeholder="Job title or keyword"
                            className="w-full py-4 outline-none text-sm placeholder-gray-400"
                        />
                    </div>


                    <div className="flex items-center flex-1 px-4 gap-3 border-b md:border-b-0 md:border-r">
                        <svg
                            className="w-5 h-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 21s-6-5.686-6-10a6 6 0 1112 0c0 4.314-6 10-6 10z" />
                            <circle cx="12" cy="11" r="2" />
                        </svg>

                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="Location"
                            className="w-full py-4 outline-none text-sm placeholder-gray-400"
                        />
                    </div>


                    <button
                        onClick={() => onSearch(keyword, location)}
                        className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 text-sm font-medium"
                    >
                        Search Jobs
                    </button>
                </div>


                <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs pt-10">
                    {["Remote", "Full Time", "UX Designer", "Frontend", "Marketing"].map(
                        (tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 rounded-full border text-gray-500"
                            >
                                {tag}
                            </span>
                        )
                    )}
                </div>
            </div>

            <div className="w-full h-24 bg-gradient-to-t from-blue-50 to-transparent" />
        </section>
    );
};

export default HeroSection;