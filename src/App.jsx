import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Myself from './pages/Myself';
import Blog from './pages/Blog';
import UnderstandingAGI from './pages/BlogPost1'; // Import individual blog post pages
import MysteriesOfSpace from './pages/BlogPost2';
import FusionEnergyRevolution from './pages/BlogPost3';


function Main() {
  const location = useLocation(); // Inside Router context

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center p-8">
        <Routes>
          <Route path="/myself" element={<Myself />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogpost1" element={<UnderstandingAGI />} />
          <Route path="/blogpost2" element={<MysteriesOfSpace />} />
          <Route path="/blogpost3" element={<FusionEnergyRevolution />} />
        </Routes>
      </div>

      {/* Conditionally render images only if not on /myself or /blog */}
      {location.pathname == "/" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto h-[80vh] rounded-3xl overflow-hidden">
          <img src="/a.jpg" alt="Image 1" className="h-full w-full object-cover" />
          <img src="/e.jpg" alt="Image 2" className="h-full w-full object-cover" />
          <img src="/b.jpg" alt="Image 3" className="h-full w-full object-cover" />
          <img src="/c.jpg" alt="Image 4" className="h-full w-full object-cover" />
          <img src="/lm1.jpg" alt="Image 5" className="h-full w-full object-cover" />
          <img src="/lm2.jpg" alt="Image 6" className="h-full w-full object-cover" />
          <img src="/lm3.jpg" alt="Image 7" className="h-full w-full object-cover" />
          <img src="/lm4.jpg" alt="Image 8" className="h-full w-full object-cover" />
          <img src="/ney1.jpg" alt="Image 9" className="h-full w-full object-cover" />
          <img src="/ney2.jpg" alt="Image 10" className="h-full w-full object-cover" />
          <img src="/ney3.jpg" alt="Image 11" className="h-full w-full object-cover" />
          <img src="/ney4.jpg" alt="Image 12" className="h-full w-full object-cover sepia-[.7]" />
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <Main /> {/* Moved conditional logic into Main */}
    </Router>
  );
}

export default App;
