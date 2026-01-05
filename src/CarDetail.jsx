import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './CarDetail.css'; 

const CarDetail = () => {
    const { id } = useParams();

    // --- TREBUIE SA AVEM DATELE SI AICI (Ca sa functioneze fara fisier extern) ---
    const carsData = [
        {
            category: "Economic & Compact",
            cars: [
                { id: "toyota-corolla", name: "Toyota Corolla", image: "https://ireland.apollo.olxcdn.com/v1/files/xbnijot1n4hd3-AUTOVITRO/image;s=644x461", description: "Toyota Corolla este alegerea ideală pentru deplasările urbane și extraurbane.", cost: 45, specs: { transmission: "Automată", fuel: "Hibrid", year: "2022" } },
                { id: "vw-golf-8", name: "Volkswagen Golf 8", image: "https://ireland.apollo.olxcdn.com/v1/files/mrfnp7hz7gm2-AUTOVITRO/image;s=644x461", description: "Volkswagen Golf 8 combină designul modern cu tehnologia avansată.", cost: 65, specs: { transmission: "Automată", fuel: "Benzină", year: "2023" } },
                { id: "ford-focus", name: "Ford Focus", image: "https://ireland.apollo.olxcdn.com/v1/files/krkhq7w7tgfk2-AUTOVITRO/image;s=644x461", description: "Ford Focus oferă o experiență de condus plăcută.", cost: 58, specs: { transmission: "Manuală", fuel: "Diesel", year: "2021" } }
            ]
        },
        {
            category: "Luxury & Executive",
            cars: [
                { id: "mercedes-s-class", name: "Mercedes-Benz S-Class", image: "https://ireland.apollo.olxcdn.com/v1/files/hfsoh6is1nzg3-AUTOVITRO/image;s=644x461", description: "Mercedes-Benz S-Class reprezintă standardul suprem al luxului auto.", cost: 230, specs: { transmission: "Automată", fuel: "Diesel", year: "2023" } },
                { id: "bmw-7-series", name: "BMW Seria 7", image: "https://ireland.apollo.olxcdn.com/v1/files/lucdujgwhjuv-AUTOVITRO/image;s=644x461", description: "BMW Seria 7 oferă un echilibru perfect între performanță sportivă.", cost: 190, specs: { transmission: "Automată", fuel: "Benzină", year: "2023" } }
            ]
        },
        {
            category: "SUV & Family",
            cars: [
                { id: "range-rover-sport", name: "Range Rover Sport", image: "https://ireland.apollo.olxcdn.com/v1/files/8daz3offo1b72-AUTOVITRO/image;s=644x461", description: "Range Rover Sport este un SUV puternic și versatil.", cost: 150, specs: { transmission: "Automată", fuel: "Diesel", year: "2022" } },
                { id: "volvo-xc90", name: "Volvo XC90", image: "https://ireland.apollo.olxcdn.com/v1/files/zw86f7bxnm541-AUTOVITRO/image;s=644x461", description: "Volvo XC90 este SUV-ul perfect pentru familii.", cost: 130, specs: { transmission: "Automată", fuel: "Hibrid Plug-in", year: "2023" } }
            ]
        },
        {
            category: "Electric & Hybrid",
            cars: [
                { id: "tesla-model-3", name: "Tesla Model 3", image: "https://ireland.apollo.olxcdn.com/v1/files/t6w0ezrjbebw-AUTOVITRO/image;s=644x461", description: "Tesla Model 3 este o alegere modernă 100% electrică.", cost: 110, specs: { transmission: "Automată", fuel: "Electric", year: "2022" } }
            ]
        }
    ];

    // Căutăm mașina după ID
    const car = carsData
        .flatMap(category => category.cars)
        .find(c => c.id === id);

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [totalPrice, setTotalPrice] = useState(0);
    const [days, setDays] = useState(0);

    if (!car) {
        return (
            <div style={{padding: '50px', textAlign: 'center'}}>
                <h2>Mașina nu a fost găsită.</h2>
                <Link to="/cars" style={{color: 'blue'}}>Înapoi la Flotă</Link>
            </div>
        );
    }

    const handleCalculate = () => {
        if (startDate && endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            const diffTime = end - start;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

            if (diffDays > 0) {
                setDays(diffDays);
                setTotalPrice(diffDays * car.cost);
            } else {
                alert("Data de returnare trebuie să fie după data de preluare!");
            }
        } else {
            alert("Te rog selectează ambele date!");
        }
    };

    return (
        <div className="car-detail-page">
            <div style={{background: '#2c3e50', padding: '15px 30px', color: 'white', display: 'flex', alignItems: 'center'}}>
                <Link to="/cars" style={{color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px'}}>
                    ← Înapoi la Flotă
                </Link>
                <span style={{marginLeft: '20px', opacity: 0.8}}>| {car.name}</span>
            </div>

            <div className="detail-container" style={{display: 'flex', flexWrap: 'wrap', gap: '40px', padding: '40px', maxWidth: '1200px', margin: '0 auto'}}>
                <div className="left-column" style={{flex: '2', minWidth: '300px'}}>
                    <h1 style={{fontSize: '36px', marginBottom: '15px', color: '#333'}}>{car.name}</h1>
                    <img src={car.image} alt={car.name} style={{width: '100%', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)'}} />
                    
                    <div className="specs-box" style={{marginTop: '30px', background: '#fff', padding: '25px', borderRadius: '12px', border: '1px solid #eee'}}>
                        <h3>Specificații</h3>
                        <p style={{lineHeight: '1.8', color: '#555'}}>{car.description}</p>
                        <div style={{marginTop: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px'}}>
                            <div style={{background: '#f8f9fa', padding: '10px'}}>Transmisie: <strong>{car.specs?.transmission}</strong></div>
                            <div style={{background: '#f8f9fa', padding: '10px'}}>Combustibil: <strong>{car.specs?.fuel}</strong></div>
                            <div style={{background: '#f8f9fa', padding: '10px'}}>An: <strong>{car.specs?.year}</strong></div>
                        </div>
                    </div>
                </div>

                <div className="right-column" style={{flex: '1', minWidth: '300px'}}>
                    <div className="calculator-card" style={{position: 'sticky', top: '20px', background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 8px 30px rgba(0,0,0,0.12)', border: '1px solid #e0e0e0'}}>
                        <h3 style={{marginTop: 0}}>Rezervă Acum</h3>
                        <div style={{fontSize: '32px', color: '#007bff', fontWeight: '800', margin: '15px 0'}}>
                            €{car.cost} <span style={{fontSize: '16px', color: '#777', fontWeight: 'normal'}}>/ zi</span>
                        </div>
                        <div className="calc-inputs">
                            <label style={{display: 'block', marginBottom: '5px', fontWeight: 'bold'}}>Preluare</label>
                            <input type="date" onChange={(e) => setStartDate(e.target.value)} style={{width: '100%', padding: '10px', marginBottom: '15px'}} />
                            <label style={{display: 'block', marginBottom: '5px', fontWeight: 'bold'}}>Returnare</label>
                            <input type="date" onChange={(e) => setEndDate(e.target.value)} style={{width: '100%', padding: '10px', marginBottom: '20px'}} />
                            <button onClick={handleCalculate} style={{width: '100%', padding: '14px', background: '#2c3e50', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer'}}>
                                Calculează Preț
                            </button>
                        </div>
                        {totalPrice > 0 && (
                            <div style={{marginTop: '25px', padding: '20px', background: '#f0f7ff', borderRadius: '8px'}}>
                                <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '24px', color: '#0056b3'}}>
                                    <span>Total:</span>
                                    <strong>€{totalPrice}</strong>
                                </div>
                                <button style={{width: '100%', marginTop: '20px', padding: '14px', background: '#ff4500', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer'}}>
                                    Finalizează Rezervarea
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetail;