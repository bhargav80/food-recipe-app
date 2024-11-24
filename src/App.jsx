import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Home from './pages/Home';
import { FavoritesProvider } from './context/FavoritesContext';
import { Header } from './components/Header';
import Favorites from './pages/Favorites';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import RecipeDetails from './pages/RecipeDetails';
function App() {
 

  return (
    <FavoritesProvider>
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
    </FavoritesProvider>
  );
}

export default App;
