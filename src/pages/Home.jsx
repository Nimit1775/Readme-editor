import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Markdown Editor</h1>
      <Link to="/editor">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Start Editing
        </button>
      </Link>
    </div>
  );
};

export default Home;
