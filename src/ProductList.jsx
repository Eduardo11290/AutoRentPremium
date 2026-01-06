import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './ProductList.css';
import { addItem } from './CartSlice';

function ProductList() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    useEffect(() => {
        const savedScroll = sessionStorage.getItem('scrollPosition');
        if (savedScroll) {
            window.scrollTo(0, parseInt(savedScroll));
        }
    }, []);

    // --- 2. FUNCȚIA CARE SALVEAZĂ SCROLL-UL CÂND DAI CLICK PE O MAȘINĂ ---
    const saveScrollPosition = () => {
        sessionStorage.setItem('scrollPosition', window.scrollY);
    };

    const carsData = [
        {
            category: "Economic & Compact",
            cars: [
                { 
                    id: "toyota-corolla", name: "Toyota Corolla", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/77/77e41c87-69ad-422a-83c2-ad5c854f6986?rule=mo-1600"], 
                    description: "Toyota Corolla este alegerea ideală pentru deplasările urbane.", cost: 45, specs: { transmission: "Automată", fuel: "Hibrid", year: "2022", engine: "1.8L", power: "122 CP" }, features: { audio: ["CarPlay"], comfort: ["AC"], safety: ["ABS"] } 
                },
                { 
                    id: "vw-golf-8", name: "Volkswagen Golf 8", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/5b/5bd5091f-7cfe-4a40-9c83-bae9efde3546?rule=mo-1600"], 
                    description: "VW Golf 8 modern.", cost: 65, specs: { transmission: "Automată", fuel: "Benzină", year: "2023", engine: "1.5 TSI", power: "150 CP" }, features: { audio: ["Navi"], comfort: ["Keyless"], safety: ["Lane Assist"] } 
                },
                { 
                    id: "ford-focus", name: "Ford Focus", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/8c/8c1019e6-d094-4046-8974-06f0d166040b?rule=mo-1600"], 
                    description: "Ford Focus manevrabil.", cost: 58, specs: { transmission: "Manuală", fuel: "Diesel", year: "2021", engine: "1.5 EcoBlue", power: "120 CP" }, features: { audio: ["SYNC 3"], comfort: ["AC"], safety: ["ESP"] } 
                },
                { id: "ford-fiesta", name: "Ford Fiesta", images: ["https://img.classistatic.de/api/v1/mo-prod/images/91/9166fe18-8ccc-4ec0-9a5c-19c57ad10243?rule=mo-1600"], description: "Compactă și agilă.", cost: 40, specs: { transmission: "Manuală", fuel: "Benzină", year: "2020", engine: "1.0 EcoBoost", power: "100 CP" }, features: { audio: ["Bluetooth"], comfort: ["AC Manual"], safety: ["ABS"] } },
                { id: "dacia-logan", name: "Dacia Logan", images: ["https://img.classistatic.de/api/v1/mo-prod/images/f7/f71f485d-f026-4a73-86b4-7ead3bdeb28a?rule=mo-1600"], description: "Spațioasă și economică.", cost: 35, specs: { transmission: "Manuală", fuel: "Benzină + GPL", year: "2023", engine: "1.0 TCe", power: "100 CP" }, features: { audio: ["Radio"], comfort: ["Geamuri electrice"], safety: ["ESP"] } },
                { id: "audi-a4", name: "Audi A4", images: ["https://img.classistatic.de/api/v1/mo-prod/images/e4/e4542d20-8352-433e-82c3-268cf68988a6?rule=mo-1600"], description: "Eleganță business.", cost: 85, specs: { transmission: "Automată", fuel: "Diesel", year: "2021", engine: "2.0 TDI", power: "190 CP" }, features: { audio: ["MMI Plus"], comfort: ["Climatronic 3 zone"], safety: ["Pre Sense"] } },
                { id: "hyundai-i30", name: "Hyundai i30", images: ["https://img.classistatic.de/api/v1/mo-prod/images/0e/0e0d58c6-308a-4b19-93df-c9544fd69713?rule=mo-1600"], description: "Design modern.", cost: 50, specs: { transmission: "Automată", fuel: "Benzină", year: "2022", engine: "1.5 T-GDi", power: "160 CP" }, features: { audio: ["Touchscreen"], comfort: ["Scaune încălzite"], safety: ["Lane Keep"] } }
            ]
        },
        {
            category: "Luxury & Executive",
            cars: [
                { 
                    id: "mercedes-s-class", name: "Mercedes-Benz S-Class", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/72/7274d6b8-607f-44e9-a9eb-9d94035f99ba?rule=mo-1600"], 
                    description: "Lux suprem.", cost: 230, specs: { transmission: "Automată", fuel: "Diesel", year: "2023", engine: "3.0L", power: "286 CP" }, features: { audio: ["Burmester"], comfort: ["Masaj"], safety: ["Distronic"] } 
                },
                { 
                    id: "bmw-7-series", name: "BMW Seria 7", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/3b/3b67692b-2786-40a3-b9e7-03730943dcef?rule=mo-1600"], 
                    description: "Sport și confort.", cost: 190, specs: { transmission: "Automată", fuel: "Benzină", year: "2023", engine: "3.0L", power: "340 CP" }, features: { audio: ["Harman"], comfort: ["Soft Close"], safety: ["Laserlight"] } 
                },
                { id: "rolls-royce-phantom", name: "Rolls-Royce Phantom", images: ["https://img.classistatic.de/api/v1/mo-prod/images/54/54421a3a-7429-4648-bb6b-ff60676f043c?rule=mo-1600"], description: "Opulență absolută.", cost: 1200, specs: { transmission: "Automată", fuel: "Benzină", year: "2023", engine: "6.75L V12", power: "563 CP" }, features: { audio: ["Bespoke"], comfort: ["Plafon înstelat"], safety: ["Night Vision"] } },
                { id: "audi-s8", name: "Audi S8", images: ["https://img.classistatic.de/api/v1/mo-prod/images/36/36dbb2b5-e708-46db-8c5b-989ec552b66c?rule=mo-1600"], description: "Limuzina sportivă.", cost: 250, specs: { transmission: "Automată", fuel: "Benzină", year: "2022", engine: "4.0 TFSI", power: "571 CP" }, features: { audio: ["Bang & Olufsen"], comfort: ["Suspensie Activă"], safety: ["Matrix LED"] } },
                { id: "vw-phaeton", name: "VW Phaeton", images: ["https://www.netcarshow.com/Volkswagen-Phaeton_D2_Concept-2016-1280-4feed6ce12c23073c5818e3a00ed4834c3.jpg"], description: "Clasic și confortabil.", cost: 100, specs: { transmission: "Automată", fuel: "Diesel", year: "2016", engine: "3.0 TDI", power: "245 CP" }, features: { audio: ["Dynaudio"], comfort: ["Scaune ventilate"], safety: ["ACC"] } },
                { id: "bentley-flying-spur", name: "Bentley Flying Spur", images: ["https://img.classistatic.de/api/v1/mo-prod/images/30/30774bda-eabd-4ad6-a224-4f01f973c12a?rule=mo-1600"], description: "Lux britanic.", cost: 500, specs: { transmission: "Automată", fuel: "Benzină", year: "2022", engine: "6.0 W12", power: "635 CP" }, features: { audio: ["Naim"], comfort: ["Masaj pietre calde"], safety: ["HUD"] } },
                { id: "lexus-ls", name: "Lexus LS", images: ["https://img.classistatic.de/api/v1/mo-prod/images/85/8554fa3f-ce28-47aa-818f-a40839780fea?rule=mo-1600"], description: "Ospitalitate japoneză.", cost: 180, specs: { transmission: "Automată", fuel: "Hibrid", year: "2022", engine: "3.5L V6", power: "359 CP" }, features: { audio: ["Mark Levinson"], comfort: ["Scaune Ottoman"], safety: ["Lexus Safety +"] } }
            ]
        },
        {
            category: "Supercars & Sport",
            cars: [
                { id: "chevrolet-corvette-zr1", name: "Chevrolet Corvette ZR1", images: ["https://www.netcarshow.com/Chevrolet-Corvette_ZR1-2025-1280-b2f818c5240c9474eb7cdd3f808c2ec1c3.jpg"], description: "Putere americană brută.", cost: 400, specs: { transmission: "Automată", fuel: "Benzină", year: "2020", engine: "6.2L V8", power: "755 CP" }, features: { audio: ["Bose"], comfort: ["Scaune Sport"], safety: ["Track Mode"] } },
                { id: "ferrari-f8", name: "Ferrari F8 Tributo", images: ["https://img.classistatic.de/api/v1/mo-prod/images/37/371cc7f3-9577-485e-83e5-a6af2efe90c3?rule=mo-1600"], description: "Capodopera italiană.", cost: 900, specs: { transmission: "F1", fuel: "Benzină", year: "2022", engine: "3.9L V8 Turbo", power: "720 CP" }, features: { audio: ["JBL"], comfort: ["Piele Alcantara"], safety: ["Carbon Ceramic"] } },
                { id: "lamborghini-revuelto", name: "Lamborghini Revuelto", images: ["https://img.classistatic.de/api/v1/mo-prod/images/b2/b25d3559-b5f8-42df-9669-b939f1f80860?rule=mo-1600"], description: "V12 Hibrid.", cost: 1500, specs: { transmission: "Automată", fuel: "Hibrid V12", year: "2024", engine: "6.5L V12", power: "1015 CP" }, features: { audio: ["Sensonum"], comfort: ["Telemetry"], safety: ["AWD"] } },
                { id: "porsche-gt3rs", name: "Porsche 911 GT3 RS", images: ["https://img.classistatic.de/api/v1/mo-prod/images/f4/f4337b10-e423-4819-ace4-3e866eef9faa?rule=mo-1600"], description: "Născută pe circuit.", cost: 800, specs: { transmission: "PDK", fuel: "Benzină", year: "2023", engine: "4.0L Boxer", power: "525 CP" }, features: { audio: ["Sound Package"], comfort: ["Roll Cage"], safety: ["DRS"] } },
                { id: "mclaren-720s", name: "McLaren 720S", images: ["https://img.classistatic.de/api/v1/mo-prod/images/5f/5f92ec69-7350-41de-a260-7ffc47e96550?rule=mo-1600"], description: "Aerodinamică perfectă.", cost: 850, specs: { transmission: "Automată", fuel: "Benzină", year: "2022", engine: "4.0L V8", power: "720 CP" }, features: { audio: ["Bowers & Wilkins"], comfort: ["Uși fluture"], safety: ["Variable Drift"] } }
            ]
        },
        {
            category: "SUV & Family",
            cars: [
                { 
                    id: "range-rover-sport", name: "Range Rover Sport", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/3c/3c1cb9b1-bc78-4406-bb10-a2cc9281539d?rule=mo-1600"], 
                    description: "SUV puternic.", cost: 150, specs: { transmission: "Automată", fuel: "Diesel", year: "2022", engine: "3.0L", power: "300 CP" }, features: { audio: ["Meridian"], comfort: ["Suspensie aer"], safety: ["Blind Spot"] } 
                },
                { 
                    id: "volvo-xc90", name: "Volvo XC90", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/8a/8a1211c3-0f71-46d8-b9db-7ad61a8caef1?rule=mo-1600"], 
                    description: "Siguranță de top.", cost: 130, specs: { transmission: "Automată", fuel: "Hibrid", year: "2023", engine: "2.0L", power: "455 CP" }, features: { audio: ["B&W"], comfort: ["7 Locuri"], safety: ["City Safety"] } 
                },
                { id: "maybach-gls", name: "Mercedes-Maybach GLS", images: ["https://img.classistatic.de/api/v1/mo-prod/images/cc/cc0f65af-7256-45d8-a4ef-dc1e2edc9bce?rule=mo-1600"], description: "Luxul la înălțime.", cost: 600, specs: { transmission: "Automată", fuel: "Benzină", year: "2023", engine: "4.0 V8", power: "558 CP" }, features: { audio: ["Burmester High-End"], comfort: ["Frigider"], safety: ["E-Active Body"] } },
                { id: "hyundai-tucson", name: "Hyundai Tucson", images: ["https://img.classistatic.de/api/v1/mo-prod/images/33/33386a6a-e2bd-455c-b13e-5e54f827d6ff?rule=mo-1600"], description: "Design futurist.", cost: 70, specs: { transmission: "Automată", fuel: "Hibrid", year: "2023", engine: "1.6 T-GDi", power: "230 CP" }, features: { audio: ["Krell"], comfort: ["Scaune ventilate"], safety: ["BVM"] } },
                { id: "vw-touareg", name: "VW Touareg", images: ["https://img.classistatic.de/api/v1/mo-prod/images/38/38d75618-282c-4802-9daf-7ea63c54129b?rule=mo-1600"], description: "Robust și tehnologizat.", cost: 140, specs: { transmission: "Automată", fuel: "Diesel", year: "2022", engine: "3.0 V6 TDI", power: "286 CP" }, features: { audio: ["Dynaudio"], comfort: ["Cockpit Innovision"], safety: ["Night Vision"] } },
                { id: "bmw-x5", name: "BMW X5", images: ["https://img.classistatic.de/api/v1/mo-prod/images/37/37fc9dea-e64c-4f7d-ad64-f543eef14b72?rule=mo-1600"], description: "Liderul clasei.", cost: 160, specs: { transmission: "Automată", fuel: "Diesel", year: "2023", engine: "3.0d", power: "286 CP" }, features: { audio: ["Harman"], comfort: ["Piele Vernasca"], safety: ["Driving Assist"] } },
                { id: "audi-q7", name: "Audi Q7", images: ["https://img.classistatic.de/api/v1/mo-prod/images/a6/a6b404e7-15b8-40d0-9da7-be4bc8e74a9d?rule=mo-1600"], description: "Spațioasă pentru 7 persoane.", cost: 155, specs: { transmission: "Automată", fuel: "Diesel", year: "2022", engine: "3.0 TDI", power: "286 CP" }, features: { audio: ["Bose"], comfort: ["Virtual Cockpit"], safety: ["Side Assist"] } }
            ]
        },
        {
            category: "Electric & Hybrid",
            cars: [
                { 
                    id: "tesla-model-3", name: "Tesla Model 3", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/13/13d10ac3-9edd-484d-8f09-cd50440ee98c?rule=mo-1600"], 
                    description: "Electric 100%.", cost: 110, specs: { transmission: "Automată", fuel: "Electric", year: "2022", engine: "Dual Motor", power: "490 CP" }, features: { audio: ["Premium"], comfort: ["Glass Roof"], safety: ["Autopilot"] } 
                },
                { id: "tesla-model-x", name: "Tesla Model X", images: ["https://img.classistatic.de/api/v1/mo-prod/images/91/91c95ac2-5271-45fa-80b1-f934d27a4315?rule=mo-1600"], description: "SUV-ul electric suprem.", cost: 200, specs: { transmission: "Automată", fuel: "Electric", year: "2022", engine: "Plaid", power: "1020 CP" }, features: { audio: ["Immersive Sound"], comfort: ["Falcon Doors"], safety: ["FSD"] } },
                { id: "bmw-330e", name: "BMW 330e", images: ["https://img.classistatic.de/api/v1/mo-prod/images/99/99ca29a5-a9e2-4a41-89db-62b760ef7e03?rule=mo-1600"], description: "Hibrid sportiv.", cost: 90, specs: { transmission: "Automată", fuel: "Plug-in Hybrid", year: "2023", engine: "2.0L", power: "292 CP" }, features: { audio: ["HiFi"], comfort: ["Precondiționare"], safety: ["DTC"] } },
                { id: "porsche-taycan", name: "Porsche Taycan", images: ["https://img.classistatic.de/api/v1/mo-prod/images/c3/c3c0ea40-5ee0-4bb1-b259-ef3a43d92021?rule=mo-1600"], description: "Suflet electrizat.", cost: 250, specs: { transmission: "Automată 2 trepte", fuel: "Electric", year: "2023", engine: "Turbo S", power: "761 CP" }, features: { audio: ["Burmester"], comfort: ["Ecran Pasager"], safety: ["Porsche InnoDrive"] } },
                { id: "audi-etron-gt", name: "Audi RS e-tron GT", images: ["https://img.classistatic.de/api/v1/mo-prod/images/8d/8d1617fa-e086-40a1-8042-420a675664f6?rule=mo-1600"], description: "Viitorul este aici.", cost: 240, specs: { transmission: "Automată", fuel: "Electric", year: "2023", engine: "RS", power: "646 CP" }, features: { audio: ["Bang & Olufsen"], comfort: ["Scaune Sport Pro"], safety: ["Pre Sense"] } }
            ]
        }
    ];

    const handleAddToCart = (product) => {
        dispatch(addItem(product));
    };

    // AICI ESTE FUNCȚIA CARE LIPSEA!
    const isAddedToCart = (carId) => {
        return cartItems.some(item => item.id === carId);
    };

    const navbarStyle = {
        backgroundColor: '#000',
        color: '#fff',
        padding: '15px 30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        borderBottom: '1px solid #333',
        boxSizing: 'border-box'
    };

    return (
        <div className="main-container">
            <div style={navbarStyle}>
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                    <h3 style={{margin:0, textTransform: 'uppercase', letterSpacing: '1px'}}>AutoRent <span style={{color: '#ff4d4d'}}>Premium</span></h3>
                </Link>

                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <Link to="/cart" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: '15px', fontWeight: 'bold', color: '#ccc' }}>Vezi Coșul</span>
                        <div style={{ fontSize: '24px', position: 'relative' }}>
                            🛒 
                            {cartItems.length > 0 && (
                                <span style={{fontSize: '14px', background: '#ff4d4d', borderRadius: '50%', padding: '2px 6px', verticalAlign: 'top', position: 'absolute', top: '-5px', right: '-10px', color: 'white'}}>
                                    {cartItems.length}
                                </span>
                            )}
                        </div>
                    </Link>
                </div>
            </div>

            <div className="product-grid" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '80px auto 0 auto', background: '#050505' }}>
                {carsData.map((category, index) => (
                    <div key={index} style={{ marginBottom: '50px' }}>
                        <h2 style={{ borderBottom: '1px solid #333', paddingBottom: '15px', color: '#fff', marginBottom: '25px', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1.5rem' }}>
                            {category.category}
                        </h2>
                        
                        <div className="product-list">
                            {category.cars.map((car) => (
                                <div className="product-card" key={car.id} style={{ 
                                    border: '1px solid #222', 
                                    borderRadius: '15px', 
                                    overflow: 'hidden', 
                                    background: '#121212', 
                                    display: 'flex', 
                                    flexDirection: 'column',
                                    transition: 'all 0.3s ease'
                                }}>
                                    
                                    <Link 
                                        to={`/cars/${car.id}`} 
                                        onClick={saveScrollPosition}
                                        style={{ height: '240px', overflow: 'hidden', cursor: 'pointer', position: 'relative' }}
                                    >
                                        <img src={car.images[0]} alt={car.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        <div style={{position: 'absolute', bottom: 0, left: 0, width: '100%', height: '50px', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'}}></div>
                                    </Link>
                                    
                                    <div style={{ padding: '25px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                        <h3 style={{ margin: '0 0 10px 0', color: 'white', fontSize: '1.4rem' }}>{car.name}</h3>
                                        <p style={{ color: '#aaa', fontSize: '14px', flexGrow: 1, lineHeight: '1.6' }}>{car.description.substring(0, 100)}...</p>
                                        
                                        <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#ff4d4d', margin: '20px 0' }}>
                                            €{car.cost} <span style={{fontSize: '14px', color: '#888', fontWeight: 'normal'}}>/ zi</span>
                                        </div>

                                        {/* --- 4. MODIFICARE AICI: ADĂUGAT onClick PENTRU A SALVA SCROLL-UL --- */}
                                        <Link 
                                            to={`/cars/${car.id}`} 
                                            onClick={saveScrollPosition}
                                            style={{ 
                                                display: 'block', textAlign: 'center', textDecoration: 'none', color: 'white', 
                                                background: '#333', padding: '12px', borderRadius: '8px', marginBottom: '10px', fontWeight: '600', transition: '0.3s'
                                            }} 
                                            className="details-btn"
                                        >
                                            Vezi Detalii & Dotări
                                        </Link>

                                        <button 
                                            onClick={() => handleAddToCart(car)}
                                            disabled={isAddedToCart(car.id)}
                                            style={{
                                                width: '100%', 
                                                padding: '12px', 
                                                backgroundColor: isAddedToCart(car.id) ? '#444' : '#ff4d4d', 
                                                color: isAddedToCart(car.id) ? '#aaa' : 'white',
                                                border: 'none', 
                                                borderRadius: '6px', 
                                                cursor: isAddedToCart(car.id) ? 'default' : 'pointer', 
                                                fontWeight: 'bold',
                                                textTransform: 'uppercase'
                                            }}
                                        >
                                            {isAddedToCart(car.id) ? 'În Coș' : 'Rezervă Acum'}
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