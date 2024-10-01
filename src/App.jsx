import './App.css'
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Myself from './pages/Myself';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <div className=" bg-gray-100">
        <Navbar />
        <div className="p-8">
          <Routes>
            <Route path="/myself" element={<Myself />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
        
      </div>
      <div className="flex flex-row place-content-center justify-center gap-0 w-[100%] h-[30vh]">
            <img src="/a.jpg" alt="Image 1" className="h-full w-full object-cover" />
            <img src="/e.jpg" alt="Image 2" className="h-full w-full object-cover" />
            <img src="/b.jpg" alt="Image 3" className="h-full w-full object-cover" />
            <img src="/c.jpg" alt="Image 4" className="h-full w-full object-cover" />
          </div>
    </Router>
    
  );
}

export default App;
