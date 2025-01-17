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
        <div className="bg-white py-24 sm:py-32">
            <section id='about'>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                            My Blogs
                        </h2>
                        <p className="mt-2 text-lg text-gray-600">
                            Explore my thoughts and insights on web development, coding, and more.
                        </p>
                    </div>
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {articles.map((article) => (
                            <article key={article.id} className="flex max-w-xl flex-col items-start justify-between border-solid border-2 border-gray-100 p-5 rounded-t">
                                <div className="flex items-center gap-x-4 text-xs border-blue-800">
                                    <time dateTime={article.published_at} className="text-gray-500">
                                        {new Date(article.published_at).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric',
                                        })}
                                    </time>
                                    <a
                                        href={article.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                    >
                                        {article.tag_list.join(', ')}
                                    </a>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
                                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                                            <span className="absolute inset-0" />
                                            {article.title}
                                        </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm text-gray-600">{article.description}</p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <img
                                        alt={article.user.name}
                                        src={article.user.profile_image}
                                        className="h-10 w-10 rounded-full bg-gray-50"
                                    />
                                    <div className="text-sm">
                                        <p className="font-semibold text-gray-900">
                                            <a href={`https://dev.to/${article.user.username}`} target="_blank" rel="noopener noreferrer">
                                                <span className="absolute inset-0" />
                                                {article.user.name}
                                            </a>
                                        </p>
                                        <p className="text-gray-600">Author</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;
