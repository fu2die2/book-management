import React from 'react';
// import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import RentalPage from './components/pages/RentalPage';
import NotFound from './components/pages/NotFound';

const App: React.FC = () => {
  return (
    // <div className="App">
    //   <h1>Hello React Router v6</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rental" element={<RentalPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    // </div>
  );
}

export default App;
