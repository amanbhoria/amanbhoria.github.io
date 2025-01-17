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
            <style>
                {`
    .tag-list {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px 0;
      background-color: #1a202c;
      max-width: 100%;
      margin: 0 auto;
      position: relative;
    }

    .tag-container {
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      overflow: hidden;
      width: 100%;
      position: relative;
      mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
      -webkit-mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
    }

    .tag-slider {
      display: flex;
      flex-wrap: nowrap;
      gap: 10px;
    }

    @keyframes slideLeft {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(-100%);
      }
    }

    @keyframes slideRight {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }

    .tag {
      background-color: #2d3748;
      padding: 10px 20px;
      border-radius: 12px;
      color: white;
      font-size: 14px;
      font-weight: 600;
      transition: background-color 0.3s ease;
    }

    .tag:hover {
      background-color: #4a5568;
    }

    /* Row 1: Left to right */
    .row1 .tag-slider {
      animation: slideLeft 60s linear infinite;
    }

    /* Row 2: Right to left */
    .row2 .tag-slider {
      animation: slideRight 60s linear infinite;
    }

    /* Row 3: Left to right */
    .row3 .tag-slider {
      animation: slideLeft 60s linear infinite;
    }
  `}
            </style>

            <div className="tag-list">
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
