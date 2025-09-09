import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Alerts from './pages/Alerts';
import Teams from './pages/Teams';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <header className="bg-red-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Disaster Management System</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/alerts" className="hover:underline">Alerts</Link>
          <Link to="/teams" className="hover:underline">Emergency Teams</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>
      </header>

      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
