import React from 'react';

const About = () => {
    return (
        <section id="about">
            <div className="bg-white py-24 sm:py-32">

                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                            About Me
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Hello! I'm Aman Bhoria, a Software Developer with over 2.5 years of experience in full-stack development and a strong passion for creating innovative solutions to real-world problems.
                        </p>
                        <p className="mt-4 text-lg text-gray-600">
                            I co-founded <strong>Crewgage</strong>, a workforce management software, where I developed a React Native app using Firebase to manage teams and data. At BITQIT Pvt. Ltd., I contributed to developing <strong>AutoDM v1.2.0</strong>, streamlining data migration processes and enhancing efficiency for various clients.
                        </p>
                        <p className="mt-4 text-lg text-gray-600">
                            With expertise in technologies like React, React Native, Node.js, and Firebase, I’m dedicated to delivering exceptional user experiences. Beyond development, I enjoy exploring new technologies like Rust and GraphQL and contributing to open-source projects.
                        </p>
                        <p className="mt-4 text-lg text-gray-600">
                            When I’m not coding, you’ll find me producing music, diving into creative projects, or exploring the world around me. My journey as a developer is driven by a desire to continuously learn, collaborate, and push boundaries.
                        </p>
                    </div>
                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <img
                            src="./techBanner.png" // Replace with your image URL
                            alt="Aman Bhoria"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
