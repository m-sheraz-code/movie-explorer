import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/HomePage';
import MovieDetails from './Pages/MovieDetailsPage';
import Favourite from './Pages/FavouritePage';

function App() {
  return (
      <Router>
          <Routes>
              <Route exact path="/HomePage" element={<Home />} />
              <Route path="/MovieDetailsPage" element={<MovieDetails />} />
              <Route path="/FavouritePage" element={<Favourite />} />
          </Routes>
      </Router>
  );
}

export default App;
