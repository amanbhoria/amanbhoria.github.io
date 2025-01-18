import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import About from "../components/About.jsx";
import Blogs from "../components/Blogs";
import GitHubRepos from "../components/GithubRepos.jsx";
import TagCloud from "../components/TagCloud.jsx";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Function to check if all resources are loaded
        const checkResourcesLoaded = async () => {
            // Wait for all images to load
            const images = Array.from(document.images);
            await Promise.all(
                images.map(
                    (img) =>
                        new Promise((resolve) => {
                            if (img.complete) {
                                resolve(); // Image already loaded
                            } else {
                                img.onload = resolve;
                                img.onerror = resolve; // Resolve even if loading fails
                            }
                        })
                )
            );

            // Simulate additional loading for API calls or other resources
            // For example, you can fetch data here
            // await fetchData();

            // Stop the loader once all content is ready
            setIsLoading(false);
        };

        checkResourcesLoaded();
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
