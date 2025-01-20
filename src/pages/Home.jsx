import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import About from "../components/About.jsx";
import Blogs from "../components/Blogs";
import GitHubRepos from "../components/GithubRepos.jsx";
import TagCloud from "../components/TagCloud.jsx";
import Contact from "./Contact.jsx";
import { Image, Breathing, Shimmer } from "react-shimmer";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     // Function to check if all resources are loaded
    //     const checkResourcesLoaded = async () => {
    //         // Wait for all images to load
    //         const images = Array.from(document.images);
    //         await Promise.all(
    //             images.map(
    //                 (img) =>
    //                     new Promise((resolve) => {
    //                         if (img.complete) {
    //                             resolve(); // Image already loaded
    //                         } else {
    //                             img.onload = resolve;
    //                             img.onerror = resolve; // Resolve even if loading fails
    //                         }
    //                     })
    //             )
    //         );

    //         // Simulate additional loading for API calls or other resources
    //         // For example, you can fetch data here
    //         // await fetchData();

    //         // Stop the loader once all content is ready
    //         setIsLoading(false);
    //     };

    //     checkResourcesLoaded();
    // }, []);

    // if (isLoading) {
    //     return <Loader />;
    // }

    return (
        <div>
            {/* <img
                className="w-full pt-24 h-auto grayscale brightness-90 contrast-110 hover:grayscale-0 hover:brightness-100 hover:contrast-100 transition-all duration-300"
                src="./banner2.webp"
                alt="banner"
            /> */}
            <div className="pt-20"><Image
                className="w-full pt-24 h-auto grayscale brightness-90 contrast-110 hover:grayscale-0 hover:brightness-100 hover:contrast-100 transition-all duration-300"
                src="./banner2.webp"
                fallback={
                    <Shimmer
                        className="w-full pt-24 h-auto grayscale brightness-90 contrast-110 hover:grayscale-0 hover:brightness-100 hover:contrast-100 transition-all duration-300"
                        width="100%"
                        height={2560}
                    />
                }
                alt="banner"
            /></div>

            <TagCloud />
            <About />
            <Blogs />
            <Contact />

            {/* <GitHubRepos /> */}
        </div>
    );
};

export default Home;
