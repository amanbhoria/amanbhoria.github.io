// Home.jsx
import About from '../components/About.jsx';
import Blogs from '../components/Blogs';
import GitHubRepos from '../components/GithubRepos.jsx';
import TagCloud from '../components/TagCloud.jsx';

const Home = () => {
    return (
        <div>
            <img class="w-full h-auto pt-24 grayscale brightness-90 contrast-110 hover:grayscale-0 hover:brightness-100 hover:contrast-100 transition-all duration-300" src="/banner.jpg" alt="banner" />
            <TagCloud />
            <About />
            <Blogs />

            {/* <GitHubRepos /> */}

        </div>
    );
};

export default Home;
