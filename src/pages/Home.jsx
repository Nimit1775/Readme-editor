import React from 'react';
import { Link } from 'react-router-dom';
import  { Vortex } from '../components/ui/Vortex'; // Adjust the path if necessary

const Home = () => {
  return (
    <div className="w-full mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          An editor for your github readmes
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Tired of writing markdown? Use our editor to create beautiful readmes
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <Link to={"/editor"}>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Start Writing
          </button>
          </Link>
          
        </div>
      </Vortex>
      
     
    </div>
     
   
  );
};

export default Home;