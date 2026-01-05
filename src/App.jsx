import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CarDetail from './CarDetail';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Pagina de Start */}
        <Route path="/" element={<AboutUs />} />
        
        {/* Lista de mașini */}
        <Route path="/cars" element={<ProductList />} />
        
        {/* Pagina de Detaliu (DINAMICĂ) */}
        {/* Aceasta este ruta pe care router-ul o căuta și nu o găsea! */}
        <Route path="/cars/:id" element={<CarDetail />} />
      </Routes>
    </div>
  );
}

export default App;