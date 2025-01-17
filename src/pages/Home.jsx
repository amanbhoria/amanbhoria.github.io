// Home.jsx
import Blogs from '../components/Blogs';

const Home = () => {
    return (
        <div>
            <h1 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight justify-center mx-auto text-center">
                Welcome to My Portfolio
            </h1>
            <Blogs />
        </div>
    );
};

export default Home;
