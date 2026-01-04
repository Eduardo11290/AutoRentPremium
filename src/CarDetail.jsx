import React, { useState } from 'react';
import './CarDetail.css';

const CarDetail = () => {
  // --- STATE ---
  // 1. Galerie Foto
  const [mainImage, setMainImage] = useState("https://via.placeholder.com/800x500?text=Fata+Masina");
  
  // 2. Calculator
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [total, setTotal] = useState({ days: 0, price: 0 });
  
  const pricePerDay = 250; // RON

  // --- LOGICĂ ---
  // Schimbare imagine
  const images = [
    "https://via.placeholder.com/800x500?text=Fata+Masina",
    "https://via.placeholder.com/800x500?text=Spate+Masina",
    "https://via.placeholder.com/800x500?text=Interior",
    "https://via.placeholder.com/800x500?text=Bord"
  ];

  // Calcul preț
  const handleCalculate = () => {
    if (!startDate || !endDate) return;

    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = end - start;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 0) {
      setTotal({
        days: diffDays,
        price: diffDays * pricePerDay
      });
    } else {
      alert("Data de returnare trebuie să fie după data de preluare!");
      setTotal({ days: 0, price: 0 });
    }
  };

  return (
    <div className="container product-page">
      
      {/* --- COLOANA STÂNGA: Galerie & Detalii --- */}
      <div className="main-content">
        
        {/* Galerie */}
        <div className="gallery-container">
          <div className="main-image-wrapper">
            <img src={mainImage} alt="Masina Principala" className="hero-img" />
          </div>
          <div className="thumbnails">
            {images.map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt={`thumb-${index}`} 
                onClick={() => setMainImage(img)}
                className={mainImage === img ? "active-thumb" : ""}
              />
            ))}
          </div>
        </div>

        {/* Tabel Specificații */}
        <div className="specs-section">
          <h2>Specificații Tehnice</h2>
          <table className="specs-table">
            <tbody>
              <tr><td><strong>Marcă</strong></td><td>BMW</td></tr>
              <tr><td><strong>Model</strong></td><td>Seria 3</td></tr>
              <tr><td><strong>An</strong></td><td>2023</td></tr>
              <tr><td><strong>Combustibil</strong></td><td>Diesel</td></tr>
              <tr><td><strong>Putere</strong></td><td>190 CP</td></tr>
              <tr><td><strong>Km</strong></td><td>15,000 km</td></tr>
            </tbody>
          </table>
        </div>

        {/* Descriere */}
        <div className="description">
          <h3>Descriere Vehicul</h3>
          <p>
            BMW Seria 3, pachet M Sport. Mașina este impecabilă tehnic și estetic. 
            Dotată cu Apple CarPlay, scaune încălzite, senzori 360 și pilot automat adaptiv.
            Ideală pentru călătorii de afaceri sau vacanțe.
          </p>
        </div>
      </div>

      {/* --- COLOANA DREAPTA: Calculator (Sticky) --- */}
      <div className="sidebar">
        <div className="calculator-card">
          <h3>Rezervă Acum</h3>
          <div className="price-tag">
            <span className="amount">{pricePerDay}</span> RON / zi
          </div>

          <div className="calc-form">
            <label>Preluare</label>
            <input 
              type="date" 
              value={startDate} 
              onChange={(e) => setStartDate(e.target.value)} 
            />

            <label>Returnare</label>
            <input 
              type="date" 
              value={endDate} 
              onChange={(e) => setEndDate(e.target.value)} 
            />

            <button onClick={handleCalculate} className="btn-calc">
              Calculează Preț
            </button>

            {total.days > 0 && (
              <div className="result-box">
                <div className="row">
                  <span>Durată:</span>
                  <strong>{total.days} Zile</strong>
                </div>
                <div className="row total">
                  <span>Total:</span>
                  <strong>{total.price} RON</strong>
                </div>
                <button className="btn-reserve">Trimite Cerere</button>
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export default CarDetail;