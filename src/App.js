import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer';
import Homepage from './components/homepage/Homepage'



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <p></p>
        <Homepage />
        <p></p>
      </div>
    </ BrowserRouter>
  );
}

export default App;
