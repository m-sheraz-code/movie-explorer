import React from "react";
import Header from "../components/Header";
import '../App.css';
import Footer from "../components/Footer";
import MovieList from "../components/MovieList";

function Home() {
    return ( 
      <div>
          <Header />
          <div><h1 className="main-heading">All Movies</h1></div>
          <MovieList/>
          <Footer/>
      </div>
    );
}

export default Home;
