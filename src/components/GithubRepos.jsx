import React, { useEffect, useState } from 'react';

export default function GitHubRepos() {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch GitHub public repositories
        fetch('https://api.github.com/users/amanbhoria/repos') // Replace {username} with your GitHub username
            .then((response) => response.json())
            .then((data) => {
                setRepos(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching repos:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="text-center py-16">
                <p className="text-lg text-gray-600">Loading repositories...</p>
            </div>
        );
    }

    return (
        <section id="github-repos" className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">My GitHub Repositories</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 border-gray-200 pt-10">
                    {repos.map((repo) => (
                        <div key={repo.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h3 className="text-lg font-semibold text-gray-800">
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
                                    {repo.name}
                                </a>
                            </h3>
                            <p className="text-sm text-gray-600 mt-2">{repo.description || 'No description available.'}</p>
                            <div className="mt-4 flex items-center space-x-3 text-sm text-gray-500">
                                <span>🌟 {repo.stargazers_count}</span>
                                <span>🍴 {repo.forks_count}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
