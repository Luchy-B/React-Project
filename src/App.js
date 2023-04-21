import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Missions from './components/Missions';
import Rockets from './components/Rockets';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/missions" element={<Missions />} />
        <Route path="/rockets" element={<Rockets />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
