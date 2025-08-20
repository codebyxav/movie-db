import Header from './components/Header';
import Footer from './components/Footer';
import AllRoutes from './routes/AllRoutes';


import './App.css';
import { useEffect, useState } from 'react';

function App() {


  return (
    <div className="App">
      <Header />
        <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
