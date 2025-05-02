import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RadioPlayer from './components/RadioPlayer'; // Assuming this exists
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <RadioPlayer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
