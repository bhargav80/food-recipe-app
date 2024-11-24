import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Home from './pages/Home';

import { Header } from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import RecipeDetails from './pages/RecipeDetails';
function App() {
 

  return (
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
