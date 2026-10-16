import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MusicPlayer from "./components/MusicPlayer";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="w-screen bg-black text-white min-h-screen py-4 px-10">
      <Navbar />

      <Home />

      <br />
      <MusicPlayer />
      <br />

      <h1 className="text-2xl">* Blogs</h1>
      <br />
      <ul>
        <li className="my-2 text-xl">
          * <Link to="/blog/template"> Template blog </Link>
        </li>
      </ul>
      <Footer />
    </div>
  );
};

export default App;
