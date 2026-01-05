import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './ProductList.css';
import { addItem } from './CartSlice';
import CartItem from './CartItem';

function ProductList() {
    const [showCart, setShowCart] = useState(false);
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    // --- DATELE SUNT ACUM AICI (NU MAI IMPORTĂM NIMIC) ---
    const carsData = [
        {
            category: "Economic & Compact",
            cars: [
                { 
                    id: "toyota-corolla",
                    name: "Toyota Corolla", 
                    image: "https://ireland.apollo.olxcdn.com/v1/files/xbnijot1n4hd3-AUTOVITRO/image;s=644x461", 
                    description: "Toyota Corolla este alegerea ideală pentru deplasările urbane și extraurbane. Consum redus și fiabilitate.", 
                    cost: 45,
                    specs: { transmission: "Automată", fuel: "Hibrid", year: "2022" }
                },
                { 
                    id: "vw-golf-8",
                    name: "Volkswagen Golf 8", 
                    image: "https://ireland.apollo.olxcdn.com/v1/files/mrfnp7hz7gm2-AUTOVITRO/image;s=644x461", 
                    description: "Volkswagen Golf 8 combină designul modern cu tehnologia avansată.", 
                    cost: 65,
                    specs: { transmission: "Automată", fuel: "Benzină", year: "2023" }
                },
                { 
                    id: "ford-focus",
                    name: "Ford Focus", 
                    image: "https://ireland.apollo.olxcdn.com/v1/files/krkhq7w7tgfk2-AUTOVITRO/image;s=644x461", 
                    description: "Ford Focus oferă o experiență de condus plăcută și manevrabilitate excelentă.", 
                    cost: 58,
                    specs: { transmission: "Manuală", fuel: "Diesel", year: "2021" }
                }
            ]
        },
        {
            category: "Luxury & Executive",
            cars: [
                { 
                    id: "mercedes-s-class",
                    name: "Mercedes-Benz S-Class", 
                    image: "https://ireland.apollo.olxcdn.com/v1/files/hfsoh6is1nzg3-AUTOVITRO/image;s=644x461", 
                    description: "Mercedes-Benz S-Class reprezintă standardul suprem al luxului auto.", 
                    cost: 230,
                    specs: { transmission: "Automată", fuel: "Diesel", year: "2023" } 
                },
                { 
                    id: "bmw-7-series",
                    name: "BMW Seria 7", 
                    image: "https://ireland.apollo.olxcdn.com/v1/files/lucdujgwhjuv-AUTOVITRO/image;s=644x461", 
                    description: "BMW Seria 7 oferă un echilibru perfect între performanță sportivă și confort.", 
                    cost: 190,
                    specs: { transmission: "Automată", fuel: "Benzină", year: "2023" }
                }
            ]
        },
        {
            category: "SUV & Family",
            cars: [
                { 
                    id: "range-rover-sport",
                    name: "Range Rover Sport", 
                    image: "https://ireland.apollo.olxcdn.com/v1/files/8daz3offo1b72-AUTOVITRO/image;s=644x461", 
                    description: "Range Rover Sport este un SUV puternic și versatil.", 
                    cost: 150,
                    specs: { transmission: "Automată", fuel: "Diesel", year: "2022" } 
                },
                { 
                    id: "volvo-xc90",
                    name: "Volvo XC90", 
                    image: "https://ireland.apollo.olxcdn.com/v1/files/zw86f7bxnm541-AUTOVITRO/image;s=644x461", 
                    description: "Volvo XC90 este SUV-ul perfect pentru familii, punând accent pe siguranță.", 
                    cost: 130,
                    specs: { transmission: "Automată", fuel: "Hibrid Plug-in", year: "2023" }
                }
            ]
        },
        {
            category: "Electric & Hybrid",
            cars: [
                { 
                    id: "tesla-model-3",
                    name: "Tesla Model 3", 
                    image: "https://ireland.apollo.olxcdn.com/v1/files/t6w0ezrjbebw-AUTOVITRO/image;s=644x461", 
                    description: "Tesla Model 3 este o alegere modernă pentru cei care doresc o experiență silențioasă.", 
                    cost: 110,
                    specs: { transmission: "Automată", fuel: "Electric", year: "2022" } 
                }
            ]
        }
    ];

    const handleAddToCart = (product) => {
        dispatch(addItem(product));
    };

    const isAddedToCart = (carId) => {
        return cartItems.some(item => item.id === carId);
    };

    const navbarStyle = {
        backgroundColor: '#2c3e50',
        color: '#fff',
        padding: '15px 30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
    };

    if (showCart) {
        return <CartItem onContinueShopping={() => setShowCart(false)} />;
    }

    return (
        <div className="main-container">
            <div style={navbarStyle}>
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                    <h3 style={{margin:0}}>AutoRent Premium</h3>
                </Link>

                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <span onClick={() => setShowCart(false)} style={{ cursor: 'pointer', fontWeight: 'bold' }}>Flota Auto</span>
                    <div onClick={() => setShowCart(true)} style={{ cursor: 'pointer', fontSize: '24px' }}>
                        🛒 {cartItems.length > 0 && <span style={{fontSize: '14px', background: 'red', borderRadius: '50%', padding: '2px 6px', verticalAlign: 'top'}}>{cartItems.length}</span>}
                    </div>
                </div>
            </div>

            <div className="product-grid" style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
                {carsData.map((category, index) => (
                    <div key={index} style={{ marginBottom: '50px' }}>
                        <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: '10px', color: '#333' }}>{category.category}</h2>
                        
                        <div className="product-list">
                            {category.cars.map((car) => (
                                <div className="product-card" key={car.id} style={{ border: '1px solid #ddd', borderRadius: '10px', overflow: 'hidden', background: '#fff', display: 'flex', flexDirection: 'column' }}>
                                    
                                    <Link to={`/cars/${car.id}`} style={{ height: '220px', overflow: 'hidden', cursor: 'pointer' }}>
                                        <img src={car.image} alt={car.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </Link>
                                    
                                    <div style={{ padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                        <h3 style={{ margin: '0 0 10px 0' }}>{car.name}</h3>
                                        <p style={{ color: '#666', fontSize: '14px', flexGrow: 1 }}>{car.description.substring(0, 100)}...</p>
                                        <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#2c3e50', margin: '15px 0' }}>€{car.cost} / zi</div>

                                        <Link to={`/cars/${car.id}`} style={{ 
                                            display: 'block', textAlign: 'center', textDecoration: 'none', color: '#007bff', 
                                            border: '1px solid #007bff', padding: '10px', borderRadius: '6px', marginBottom: '10px', fontWeight: '600'
                                        }}>
                                            Vezi Detalii & Poze
                                        </Link>

                                        <button 
                                            onClick={() => handleAddToCart(car)}
                                            disabled={isAddedToCart(car.id)}
                                            style={{
                                                width: '100%', padding: '12px', backgroundColor: isAddedToCart(car.id) ? '#ccc' : '#28a745',
                                                color: 'white', border: 'none', borderRadius: '6px', cursor: isAddedToCart(car.id) ? 'default' : 'pointer', fontWeight: 'bold'
                                            }}
                                        >
                                            {isAddedToCart(car.id) ? 'Adăugat în Coș' : 'Rezervă Acum'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;