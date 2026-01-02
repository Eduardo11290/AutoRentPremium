import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './ProductList.css';
import CartItem from './CartItem';
import { addItem } from './CartSlice';

function ProductList({ onHomeClick }) {
    const [showCart, setShowCart] = useState(false);
    const [addedToCart, setAddedToCart] = useState({});
    const dispatch = useDispatch();

    
    const carsArray = [
        {
            category: "Economic & Compact",
            cars: [
                { 
                    name: "Toyota Corolla", 
                    image: "https://ireland.apollo.olxcdn.com/v1/files/xbnijot1n4hd3-AUTOVITRO/image;s=644x461", 
                    description: "Toyota Corolla este alegerea ideală pentru deplasările urbane și extraurbane. Oferă un consum redus de combustibil, fiabilitate dovedită și un interior confortabil pentru până la 5 pasageri.", 
                    cost: "€45" 
                },
                { 
                    name: "Volkswagen Golf 8", 
                    image: "https://ireland.apollo.olxcdn.com/v1/files/mrfnp7hz7gm2-AUTOVITRO/image;s=644x461", 
                    description: "Volkswagen Golf 8 combină designul modern cu tehnologia avansată și un nivel ridicat de confort. Este ușor de manevrat în oraș, dar suficient de stabil pentru drumuri lungi.", 
                    cost: "€65" 
                },
                { 
                    name: "Ford Focus", 
                    image: "https://ireland.apollo.olxcdn.com/v1/files/krkhq7w7tgfk2-AUTOVITRO/image;s=644x461", 
                    description: "Ford Focus oferă o experiență de condus plăcută, cu o manevrabilitate excelentă și un interior ergonomic. Este potrivit atât pentru oraș, cât și pentru călătorii mai lungi.", 
                    cost: "€58" 
                }
            ]
        },
        {
            category: "Luxury & Executive",
            cars: [
                { 
                    name: "Mercedes-Benz S-Class", 
                    image: "https://ireland.apollo.olxcdn.com/v1/files/hfsoh6is1nzg3-AUTOVITRO/image;s=644x461", 
                    description: "Mercedes-Benz S-Class reprezintă standardul suprem al luxului auto. Interiorul rafinat transformă fiecare călătorie într-o experiență premium.", 
                    cost: "€230" 
                },
                { 
                    name: "BMW Seria 7", 
                    image: "https://ireland.apollo.olxcdn.com/v1/files/lucdujgwhjuv-AUTOVITRO/image;s=644x461", 
                    description: "BMW Seria 7 oferă un echilibru perfect între performanță sportivă și confort de lux. Designul elegant și tehnologia de ultimă generație îl fac alegerea ideală.", 
                    cost: "€190" 
                }
            ]
        },
        {
            category: "SUV & Family",
            cars: [
                { 
                    name: "Range Rover Sport", 
                    image: "https://ireland.apollo.olxcdn.com/v1/files/8daz3offo1b72-AUTOVITRO/image;s=644x461", 
                    description: "Range Rover Sport este un SUV puternic și versatil, conceput pentru confort maxim indiferent de drum. Oferă spațiu generos și o poziție de condus înaltă.", 
                    cost: "€150" 
                },
                { 
                    name: "Volvo XC90", 
                    image: "https://ireland.apollo.olxcdn.com/v1/files/zw86f7bxnm541-AUTOVITRO/image;s=644x461", 
                    description: "Volvo XC90 este SUV-ul perfect pentru familii, punând accent pe siguranță, confort și spațiu. Interiorul elegant oferă o experiență relaxantă la drum lung.", 
                    cost: "€130" 
                }
            ]
        },
        {
            category: "Electric & Hybrid",
            cars: [
                { 
                    name: "Tesla Model 3", 
                    image: "https://ireland.apollo.olxcdn.com/v1/files/t6w0ezrjbebw-AUTOVITRO/image;s=644x461", 
                    description: "Tesla Model 3 este o alegere modernă pentru cei care doresc o experiență de condus silențioasă și eficientă. Autonomie generoasă, ideală pentru oraș.", 
                    cost: "€110" 
                }
            ]
        }
    ];

    const styleObj = {
        backgroundColor: '#2c3e50',
        color: '#fff',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '20px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
    };

    const styleObjUl = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '20px',
        paddingRight: '20px'
    };

    const styleA = {
        color: 'white',
        fontSize: '18px',
        textDecoration: 'none',
        fontWeight: 'bold',
        cursor: 'pointer'
    };

    const handleHomeClick = (e) => {
        e.preventDefault();
        onHomeClick();
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true);
    };

    const handleCarsClick = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    const handleAddToCart = (product) => {
        dispatch(addItem(product));
        setAddedToCart((prevState) => ({
            ...prevState,
            [product.name]: true,
        }));
    };

    return (
        <div className="main-container">
            <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="luxury" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                        <img src="https://cdn-icons-png.flaticon.com/512/3202/3202926.png" alt="car-logo" style={{width: '50px', filter: 'invert(1)'}} />
                        <a href="/" onClick={handleHomeClick} style={{textDecoration: 'none'}}>
                            <div>
                                <h3 style={{ color: 'white', margin: 0 }}>AutoRent Premium</h3>
                                <i style={{ color: '#ccc', fontSize: '14px' }}>Drive the Experience</i>
                            </div>
                        </a>
                    </div>
                </div>

                <div style={styleObjUl}>
                    <div><a href="#" onClick={handleCarsClick} style={styleA}>Flota Auto</a></div>
                    <div>
                        <a href="#" onClick={handleCartClick} style={styleA}>
                            <div className="cart" style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                                <span style={{fontSize: '30px'}}>🛒</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {!showCart ? (
                <div className="product-grid" style={{padding: '20px'}}>
                    {carsArray.map((category, index) => (
                        <div key={index}>
                            <h2 style={{borderBottom: '2px solid #2c3e50', paddingBottom: '10px', marginTop: '30px', color: '#333'}}>
                                {category.category}
                            </h2>
                            <div className="product-list">
                                {category.cars.map((car, i) => (
                                    <div className="product-card" key={i} style={{borderColor: '#ddd'}}>
                                        <div className="image-container" style={{height: '200px', overflow: 'hidden'}}>
                                            <img className="product-image" src={car.image} alt={car.name} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                                        </div>
                                        <div className="product-details" style={{padding: '10px'}}>
                                            <div className="product-title" style={{fontWeight: 'bold', fontSize: '1.2em'}}>{car.name}</div>
                                            <div className="product-description" style={{color: '#666', fontSize: '0.9em', margin: '10px 0'}}>{car.description}</div>
                                            <div className="product-cost" style={{color: '#2c3e50', fontWeight: 'bold', fontSize: '1.2em'}}>{car.cost} / zi</div>
                                            <button 
                                                className="product-button" 
                                                onClick={() => handleAddToCart(car)}
                                                style={{
                                                    backgroundColor: addedToCart[car.name] ? '#ccc' : '#2c3e50',
                                                    color: 'white',
                                                    border: 'none',
                                                    padding: '10px 20px',
                                                    cursor: addedToCart[car.name] ? 'default' : 'pointer',
                                                    borderRadius: '5px',
                                                    width: '100%',
                                                    marginTop: '10px'
                                                }}
                                                disabled={addedToCart[car.name]}
                                            >
                                                {addedToCart[car.name] ? 'Rezervat' : 'Rezervă Acum'}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;