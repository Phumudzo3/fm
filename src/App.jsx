import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RadioPlayer from './components/RadioPlayer';
import StationBanner from './components/StationBanner';
import AdvertSection from './components/AdvertSection'; // Make sure this component exists
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <StationBanner />

      <main className="main-content">
        <div id="live">
          <RadioPlayer />
        </div>

        <div id="adverts">
          <AdvertSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
