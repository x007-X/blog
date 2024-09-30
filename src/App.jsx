import './App.css'
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Myself from './pages/Myself';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="p-8">
          <Routes>
            <Route path="/myself" element={<Myself />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
