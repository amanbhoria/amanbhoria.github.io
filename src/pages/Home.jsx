// Home.jsx
import Blogs from '../components/Blogs';
import TagCloud from '../components/TagCloud.jsx';

const Home = () => {
    return (
        <div>
            {/* <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xlfont-bold justify-center mx-auto mt-10 mb-10 text-center">
                Aman Bhoria
            </h1> */}
            <img src="/banner.jpg" alt="banner" />

            <TagCloud />
            <Blogs />

        </div>
    );
};

export default Home;
