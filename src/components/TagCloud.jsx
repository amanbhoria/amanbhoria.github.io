import React from "react";

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
    "S3",
    "SQS",
    "REST-APIs",
    "GraphQL",
    "MongoDB",
    "Express.js",
    "Next.js",
];

const TagCloud = () => {
    return (
        <>
            <div className="tag-list pt-6 pb-6">
                {/* Row 1: Left to Right */}
                <div className="tag-container row1">
                    <div className="tag-slider">
                        {tags.concat(tags).map((tag, index) => (
                            <div key={index} className="tag">
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2: Right to Left */}
                <div className="tag-container row2 mt-2">
                    <div className="tag-slider">
                        {tags.concat(tags).map((tag, index) => (
                            <div key={index} className="tag">
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 3: Left to Right */}
                <div className="tag-container row3 mt-2">
                    <div className="tag-slider">
                        {tags.concat(tags).map((tag, index) => (
                            <div key={index} className="tag">
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
