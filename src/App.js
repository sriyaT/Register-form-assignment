import React from 'react';

import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
