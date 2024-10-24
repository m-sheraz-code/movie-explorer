import React from "react";
import Header from "./components/Header";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
import MovieList from "./components/MovieList";

function App() {
    return (
        <Router>
            <Header />
            <div><h1 className="main-heading">All Movies</h1></div>
            <MovieList/>
            <Footer/>
        </Router>
    );
}

export default App;
