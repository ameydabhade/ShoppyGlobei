import React from "react";
import { Link } from "react-router-dom";

function Home () {
  return (
    <div className="bg-black text-gray-800">

      <section className="h-screen bg-[url('/woman-shopping-for-clothes.jpg')]  text-white flex items-center justify-center text-center" >
        <div>
          <h1 className="text-4xl font-bold mb-4">Welcome to ShoppyGlobe</h1>
          <p className="text-lg mb-6">Your one-stop shop for everything you need!</p>
          <Link to={'/browse'} className="px-6 py-3 bg-yellow-500 text-black text-lg font-semibold rounded-lg hover:bg-yellow-400 transition duration-300">
            Shop Now
          </Link>
        </div>
      </section>


    </div>
  );
};

export default Home;
