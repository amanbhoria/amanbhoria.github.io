import React, { useEffect, useState } from 'react';

const Projects = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        // Replace 'your-username' with your actual GitHub username
        fetch('https://api.github.com/users/your-username/repos?sort=updated')
            .then(response => response.json())
            .then(data => setRepos(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h2>My Projects</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {repos.map(repo => (
                    <div key={repo.id} style={{ border: '1px solid #ccc', margin: '8px', padding: '8px' }}>
                        <h3>{repo.name}</h3>
                        <p>{repo.description}</p>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            View on GitHub
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
