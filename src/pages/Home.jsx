import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import About from "../components/About.jsx";
import Blogs from "../components/Blogs";
import GitHubRepos from "../components/GithubRepos.jsx";
import TagCloud from "../components/TagCloud.jsx";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading process (you can replace this with an actual condition)
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 0); // Simulate 1.5 seconds of loading

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div>
            <img
                className="w-full h-auto pt-24 grayscale brightness-90 contrast-110 hover:grayscale-0 hover:brightness-100 hover:contrast-100 transition-all duration-300"
                src="/banner.jpg"
                alt="banner"
            />
            <TagCloud />
            <About />
            <Blogs />

            {/* <GitHubRepos /> */}
        </div>
    );
};

export default Home;
