// About.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const About = () => {
    return (
        <div className="max-w-3xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">About Me</h1>
            <p className="text-gray-700 mb-6 leading-relaxed">
                I am a developer who loves building things with React...
            </p>

            {/* Link to your resume (PDF in public folder) */}
            <div className="mb-6">
                <a
                    href="/Aman Bhoria - Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                >
                    View My Resume
                </a>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Skills & Interests</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>React, Redux, and Tailwind CSS</li>
                    <li>Node.js, Express.js</li>
                    <li>RESTful APIs & GraphQL</li>
                    <li>Database Management (MongoDB, SQL)</li>
                    <li>Open Source Contributions</li>
                </ul>
            </div>

            <div className="flex items-center space-x-6">
                <a
                    href="https://github.com/amanbhoria"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="text-gray-800 hover:text-gray-600 transition-colors"
                >
                    <FaGithub size={30} />
                </a>
                <a
                    href="https://linkedin.com/in/amanbhoria"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="text-blue-600 hover:text-blue-500 transition-colors"
                >
                    <FaLinkedin size={30} />
                </a>
                <a
                    href="mailto:amanbhoria@gmail.com"
                    aria-label="Email me"
                    className="text-red-500 hover:text-red-400 transition-colors"
                >
                    <FaEnvelope size={30} />
                </a>
            </div>
        </div>
    );
};

export default About;
