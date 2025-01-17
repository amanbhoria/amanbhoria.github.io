// Blogs.jsx
import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('https://dev.to/api/articles?username=amanbhoria')
            .then((response) => response.json())
            .then((data) => setArticles(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-semibold mb-6 text-center">My Dev.to Blogs</h2>
            {/* Responsive grid: single column on mobile, two columns on medium screens, three on large */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => (
                    <div
                        key={article.id}
                        className="bg-white rounded-lg shadow-md p-5 flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                            <p className="text-gray-700 mb-4 line-clamp-3">
                                {article.description}
                            </p>
                        </div>

                        <a
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-block text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition-colors"
                        >
                            Read more
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
