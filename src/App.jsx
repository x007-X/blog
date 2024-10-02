import './App.css'
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Myself from './pages/Myself';
import Blog from './pages/Blog';

function Main() {
  const location = useLocation(); // Now correctly inside Router context

  return (
    <>
      <div className="0">
        <Navbar />
        <div className="p-8">
          <Routes>
            <Route path="/myself" element={<Myself />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </div>

      {/* Conditionally render the images only if the current path is not /myself or /blog */}
      {location.pathname !== "/myself" && location.pathname !== "/blog" && (
        <div className="flex flex-row place-content-center justify-center gap-0 w-[100%] h-[30vh]">
          <img src="/a.jpg" alt="Image 1" className="h-full w-full object-cover" />
          <img src="/e.jpg" alt="Image 2" className="h-full w-full object-cover" />
          <img src="/b.jpg" alt="Image 3" className="h-full w-full object-cover" />
          <img src="/c.jpg" alt="Image 4" className="h-full w-full object-cover" />
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <Main /> {/* Moved the conditional logic into Main */}
    </Router>
  );
}

export default App;
