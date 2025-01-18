import React, { useState, useEffect } from "react";

const tags = [
    "Node.js",
    "HTML",
    "JavaScript",
    "CSS",
    "Vue.js",
    "Nuxt.js",
    "TypeScript",
    "TypeORM",
    "React.js",
    "React Native",
    "TailwindCSS",
    "Tamagui",
    "Aceternity UI",
    "KoaJs",
    "S3",
    "SQS",
    "REST-APIs",
    "GraphQL",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "Express.js",
    "Next.js",
    "Docker",
    "Github",
];

const TagCloud = () => {
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimationKey((prevKey) => prevKey + 1);
        }, 8000); // Duration before the animation restarts (adjust as needed)
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <style>
                {`
                .tag-container {
    display: flex;
    overflow: hidden;
    width: 100%;
    position: relative;
    white-space: nowrap;
    transform: translateY(100px);
    opacity: 0;
}

@keyframes slideIn {
    0% {
        transform: translateY(100px);
        opacity: 0;
    }
    50% {
        transform: translateY(20px);
        opacity: 0.5;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}
                `}
            </style>

            <div className="tag-list pt-6 pb-6">
                {/* Row 1: Left to Right */}
                <div className={`tag-container row1`} key={`row1-${animationKey}`}>
                    <div className="tag-slider">
                        {tags.concat(tags).map((tag, index) => (
                            <div key={`row1-${index}`} className="tag">
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2: Right to Left */}
                <div className={`tag-container row2 mt-2`} key={`row2-${animationKey}`}>
                    <div className="tag-slider">
                        {tags.concat(tags).map((tag, index) => (
                            <div key={`row2-${index}`} className="tag">
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 3: Left to Right */}
                <div className={`tag-container row3 mt-2`} key={`row3-${animationKey}`}>
                    <div className="tag-slider">
                        {tags.concat(tags).map((tag, index) => (
                            <div key={`row3-${index}`} className="tag">
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TagCloud;
