import React, { useState, useEffect } from 'react'; // 1. Am adaugat useEffect
import { useParams, Link, useNavigate } from 'react-router-dom'; // 2. Am adaugat useNavigate
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './CarDetail.css'; 

const CarDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate(); // 3. Initializam navigarea
    const cartItems = useSelector(state => state.cart.items);

    // 4. ACEASTA ESTE REZOLVAREA PENTRU PROBLEMA 1 (Scroll sus cand intri pe pagina)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // --- PASTREAZA AICI DATELE TALE (carsData) ---
    // (Nu am modificat nimic aici, foloseste lista ta din fisierul tau curent)
    const carsData = [
        {
            category: "Economic & Compact",
            cars: [
                // ... COPIAZA AICI LISTA TA COMPLETA CU LINKURILE TALE ...
                // ... Daca dai copy-paste la tot fisierul, asigura-te ca aici sunt datele tale ...
                { 
                    id: "toyota-corolla", name: "Toyota Corolla", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/77/77e41c87-69ad-422a-83c2-ad5c854f6986?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/ba/ba2553c3-cdb0-4bd3-8f5e-907169cc9318?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/49/4928b310-ba87-4450-bffc-5702bcf9232a?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/d9/d96ae955-4fc8-4eaf-9e7d-d942e4d405de?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/d9/d96ae955-4fc8-4eaf-9e7d-d942e4d405de?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/12/1288675d-f572-4979-b9f1-47b52268abe4?rule=mo-1600"], 
                    description: "Toyota Corolla este alegerea ideală pentru deplasările urbane.", cost: 45, specs: { transmission: "Automată", fuel: "Hibrid", year: "2022", engine: "1.8L", power: "122 CP" }, 
                    features: { audio: ["CarPlay", "Bluetooth"], comfort: ["AC", "Scaune încălzite"], safety: ["ABS", "Camera Spate"] } 
                },
                // ... restul masinilor tale ...
                { 
                    id: "vw-golf-8", name: "Volkswagen Golf 8", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/5b/5bd5091f-7cfe-4a40-9c83-bae9efde3546?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/b5/b54cfe54-7645-442a-9fa1-3d87f6b38736?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/83/83805fdb-adce-48e3-a463-b5496008c02c?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/f2/f29bd19b-67be-4320-972d-b8e08c4950f5?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/d3/d3425730-2794-4d0a-8c8c-f4cc0d5ed099?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/d7/d78852e9-0689-430f-9de3-bcc479b63588?rule=mo-1600"], 
                    description: "VW Golf 8 modern.", cost: 65, specs: { transmission: "Automată", fuel: "Benzină", year: "2023", engine: "1.5 TSI", power: "150 CP" }, 
                    features: { audio: ["Navi", "Digital Cockpit"], comfort: ["Keyless", "Volan Piele"], safety: ["Lane Assist", "Front Assist"] } 
                },
                { 
                    id: "ford-focus", name: "Ford Focus", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/8c/8c1019e6-d094-4046-8974-06f0d166040b?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/0f/0f64c12d-9ffb-47f4-a3ce-d2eedea8d9f0?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/e2/e2c45fa6-2e01-4c69-b2d2-1f8d5efe7065?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/3b/3b53bd11-575f-468f-814c-ea4817a7a83f?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/57/57f5723a-0ba6-4f99-8693-f435c2154015?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/cb/cb69d223-5c01-4a32-8e88-145289d35858?rule=mo-1600"], 
                    description: "Ford Focus manevrabil.", cost: 58, specs: { transmission: "Manuală", fuel: "Diesel", year: "2021", engine: "1.5 EcoBlue", power: "120 CP" }, 
                    features: { audio: ["SYNC 3", "6 Boxe"], comfort: ["AC", "Oglinzi electrice"], safety: ["ESP", "Asistenta panta"] } 
                },
                { id: "ford-fiesta", name: "Ford Fiesta", images: ["https://img.classistatic.de/api/v1/mo-prod/images/91/9166fe18-8ccc-4ec0-9a5c-19c57ad10243?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/84/843b5bcb-6cc4-493d-a6b8-83215f34c536?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/34/3486a821-f6f3-4df5-9982-889b6897d074?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/90/90b6e0e9-aebf-40ab-a1d0-ac1004811540?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/5c/5c274fe0-8dd1-4fb3-b9af-34000795f4b7?rule=mo-1600"], description: "Compactă și agilă.", cost: 40, specs: { transmission: "Manuală", fuel: "Benzină", year: "2020", engine: "1.0 EcoBoost", power: "100 CP" }, features: { audio: ["Bluetooth"], comfort: ["AC Manual"], safety: ["ABS"] } },
                { id: "dacia-logan", name: "Dacia Logan", images: ["https://img.classistatic.de/api/v1/mo-prod/images/f7/f71f485d-f026-4a73-86b4-7ead3bdeb28a?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/76/76b35740-6125-4c02-90c5-8dde4a9957f0?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/67/6728307c-ab12-44ce-b2ec-c90b9d47d26e?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/55/55623896-9039-412f-8653-a8b346eabf13?rule=mo-1600"], description: "Spațioasă și economică.", cost: 35, specs: { transmission: "Manuală", fuel: "Benzină + GPL", year: "2023", engine: "1.0 TCe", power: "100 CP" }, features: { audio: ["Radio"], comfort: ["Geamuri electrice"], safety: ["ESP"] } },
                { id: "audi-a4", name: "Audi A4", images: ["https://img.classistatic.de/api/v1/mo-prod/images/e4/e4542d20-8352-433e-82c3-268cf68988a6?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/32/32b264e5-1ac6-48ad-9519-e6ccabccc82c?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/2c/2c0fee08-2890-4b42-ad5b-67bdc75e2d70?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/1a/1a26b487-ebbf-4842-b504-5665a7ac0ba5?rule=mo-1600"], description: "Eleganță business.", cost: 85, specs: { transmission: "Automată", fuel: "Diesel", year: "2021", engine: "2.0 TDI", power: "190 CP" }, features: { audio: ["MMI Plus"], comfort: ["Climatronic 3 zone"], safety: ["Pre Sense"] } },
                { id: "hyundai-i30", name: "Hyundai i30", images: ["https://img.classistatic.de/api/v1/mo-prod/images/0e/0e0d58c6-308a-4b19-93df-c9544fd69713?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/91/91e6a538-301b-45ba-b3a0-76fc6bf99a9a?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/7e/7e240f05-a6a5-465e-a263-887aa45549d5?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/a8/a8a5f839-fbc6-40e9-af94-c9f4d43fa40e?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/8d/8dbb899a-9a89-40c3-9858-a01f6943405f?rule=mo-1600"], description: "Design modern.", cost: 50, specs: { transmission: "Automată", fuel: "Benzină", year: "2022", engine: "1.5 T-GDi", power: "160 CP" }, features: { audio: ["Touchscreen"], comfort: ["Scaune încălzite"], safety: ["Lane Keep"] } }
            ]
        },
        {
            category: "Luxury & Executive",
            cars: [
                { 
                    id: "mercedes-s-class", name: "Mercedes-Benz S-Class", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/72/7274d6b8-607f-44e9-a9eb-9d94035f99ba?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/05/055c4a74-d0ef-4f5c-bcb1-90ef16d11f44?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/c5/c594648c-23c8-4be6-b3ce-43cac491ca36?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/b8/b81b7990-b9f4-473a-98b8-64058ecbbd06?rule=mo-1600"], 
                    description: "Lux suprem.", cost: 230, specs: { transmission: "Automată", fuel: "Diesel", year: "2023", engine: "3.0L", power: "286 CP" }, features: { audio: ["Burmester"], comfort: ["Masaj"], safety: ["Distronic"] } 
                },
                { 
                    id: "bmw-7-series", name: "BMW Seria 7", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/3b/3b67692b-2786-40a3-b9e7-03730943dcef?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/a9/a9d28f7f-b1cd-4fff-81ba-9811c845c6c4?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/98/98e4cbc2-4c8f-4cde-ab49-f8369e955ace?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/8d/8dc90cfc-d720-4e23-ab6a-c62985b6564b?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/f2/f21487a3-47b4-42a4-8900-0adb39d22491?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/aa/aad81d14-bf86-4992-9705-04e6ebf549f8?rule=mo-1600"], 
                    description: "Sport și confort.", cost: 190, specs: { transmission: "Automată", fuel: "Benzină", year: "2023", engine: "3.0L", power: "340 CP" }, features: { audio: ["Harman"], comfort: ["Soft Close"], safety: ["Laserlight"] } 
                },
                { id: "rolls-royce-phantom", name: "Rolls-Royce Phantom", images: ["https://img.classistatic.de/api/v1/mo-prod/images/54/54421a3a-7429-4648-bb6b-ff60676f043c?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/a5/a5204762-5bbc-4d0d-95aa-dc4bd676a73a?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/c1/c10501e5-313a-4f26-bec0-cef069c943ec?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/ff/ffd71cc5-23e2-49e5-86ee-fa51be730343?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/f8/f8455e6b-6ec9-4da5-b45b-c0fbfc3f7eb8?rule=mo-1600"], description: "Opulență absolută.", cost: 1200, specs: { transmission: "Automată", fuel: "Benzină", year: "2023", engine: "6.75L V12", power: "563 CP" }, features: { audio: ["Bespoke"], comfort: ["Plafon înstelat"], safety: ["Night Vision"] } },
                { id: "audi-s8", name: "Audi S8", images: ["https://img.classistatic.de/api/v1/mo-prod/images/36/36dbb2b5-e708-46db-8c5b-989ec552b66c?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/77/775a6267-5756-4c4b-8071-15c9071e1d6b?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/46/460208f1-4634-4910-9eac-d8f1c99fbaa5?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/dd/ddaded02-b3fb-47ef-b04c-b733d13b82b2?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/31/31121cb8-54dc-4078-a510-447f523a8508?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/ea/ea5db0ad-5f18-40ad-a5ab-8458c9ce3c9c?rule=mo-1600"], description: "Limuzina sportivă.", cost: 250, specs: { transmission: "Automată", fuel: "Benzină", year: "2022", engine: "4.0 TFSI", power: "571 CP" }, features: { audio: ["Bang & Olufsen"], comfort: ["Suspensie Activă"], safety: ["Matrix LED"] } },
                { id: "vw-phaeton", name: "VW Phaeton", images: ["https://www.netcarshow.com/Volkswagen-Phaeton_D2_Concept-2016-1280-4feed6ce12c23073c5818e3a00ed4834c3.jpg", "https://www.netcarshow.com/Volkswagen-Phaeton_D2_Concept-2016-1280-0433c6327c7fae07611d2120101567af93.jpg", "https://www.netcarshow.com/Volkswagen-Phaeton_D2_Concept-2016-1280-2b8dd56c3a4fdde44df5afd7b0e17d2b5a.jpg?token=632b01081414b8449c058fe0fc25b967d8b6b19633562417d56287b"], description: "Clasic și confortabil.", cost: 100, specs: { transmission: "Automată", fuel: "Diesel", year: "2016", engine: "3.0 TDI", power: "245 CP" }, features: { audio: ["Dynaudio"], comfort: ["Scaune ventilate"], safety: ["ACC"] } },
                { id: "bentley-flying-spur", name: "Bentley Flying Spur", images: ["https://img.classistatic.de/api/v1/mo-prod/images/30/30774bda-eabd-4ad6-a224-4f01f973c12a?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/36/36c4d037-d53b-46d7-8a76-72d79af745de?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/db/db9e5c05-875c-45ce-877c-84c6e7bd3ce3?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/27/275b1741-501b-4276-a378-9ebf1c73fd00?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/a8/a870ca6a-98c9-4343-a7a6-a38fe48ad2f5?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/b8/b877e766-3792-4490-a986-d66f5b05b9a2?rule=mo-1600"], description: "Lux britanic.", cost: 500, specs: { transmission: "Automată", fuel: "Benzină", year: "2022", engine: "6.0 W12", power: "635 CP" }, features: { audio: ["Naim"], comfort: ["Masaj pietre calde"], safety: ["HUD"] } },
                { id: "lexus-ls", name: "Lexus LS", images: ["https://img.classistatic.de/api/v1/mo-prod/images/85/8554fa3f-ce28-47aa-818f-a40839780fea?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/af/af56158b-12ee-4005-a61b-d35adfbfa4f3?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/21/218c3a07-1543-4aa8-a55d-4cec60fbfc69?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/e9/e97f54b6-dc89-455d-b5f4-67b11e833f2e?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/f6/f6227a92-a1a4-4f17-9a0d-e72ae3d3da9d?rule=mo-1600"], description: "Ospitalitate japoneză.", cost: 180, specs: { transmission: "Automată", fuel: "Hibrid", year: "2022", engine: "3.5L V6", power: "359 CP" }, features: { audio: ["Mark Levinson"], comfort: ["Scaune Ottoman"], safety: ["Lexus Safety +"] } }
            ]
        },
        {
            category: "Supercars & Sport",
            cars: [
                { 
                    id: "chevrolet-corvette-zr1", name: "Chevrolet Corvette ZR1", 
                    images: ["https://www.netcarshow.com/Chevrolet-Corvette_ZR1-2025-1280-b2f818c5240c9474eb7cdd3f808c2ec1c3.jpg", "https://www.netcarshow.com/Chevrolet-Corvette_ZR1-2025-1280-8f3ed9cf3eb37defc6957b8740686f69d9.jpg", "https://www.netcarshow.com/Chevrolet-Corvette_ZR1-2025-1280-9ec522765afd0be0d114d82070a85f7134.jpg", "https://www.netcarshow.com/Chevrolet-Corvette_ZR1-2025-1280-06bfd6ec645a3d0756c34caa10f4443f2b.jpg?token=77f3e1541414b8449b058fe0fc2f44e4ea62d241d9d5328f854a853"], 
                    description: "Putere americană brută.", cost: 400, specs: { transmission: "Automată", fuel: "Benzină", year: "2020", engine: "6.2L V8", power: "755 CP" }, features: { audio: ["Bose"], comfort: ["Scaune Sport"], safety: ["Track Mode"] } 
                },
                { 
                    id: "ferrari-f8", name: "Ferrari F8 Tributo", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/37/371cc7f3-9577-485e-83e5-a6af2efe90c3?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/c4/c4c6dde9-2331-4a54-96f8-03abd4f66077?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/1f/1f1d9752-e0a2-4582-9f36-f399661ce7d2?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/2b/2b2c76f3-2161-415c-b4ef-44e1beb6d3f1?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/69/695b3086-3c67-46f8-9d34-3164fc691d86?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/71/71d213cf-3414-4ab2-9306-d495004480b1?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/ef/ef6d3469-a602-4c9f-990a-db3992e70d7d?rule=mo-1600"], 
                    description: "Capodopera italiană.", cost: 900, specs: { transmission: "F1", fuel: "Benzină", year: "2022", engine: "3.9L V8 Turbo", power: "720 CP" }, features: { audio: ["JBL"], comfort: ["Piele Alcantara"], safety: ["Carbon Ceramic"] } 
                },
                { 
                    id: "lamborghini-revuelto", name: "Lamborghini Revuelto", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/b2/b25d3559-b5f8-42df-9669-b939f1f80860?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/10/10fef21e-eb43-4381-b33d-00c04b130ddb?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/13/13c2ebca-0d5d-4ddc-8a60-0f0893b787ec?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/ac/acf3d0f7-bec5-41b9-b104-c8e06e515bce?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/d2/d269925e-8a41-456a-8afe-418a8d2b9e4a?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/05/0518ddb9-fe56-4587-945a-66f611da252f?rule=mo-1600"], 
                    description: "V12 Hibrid.", cost: 1500, specs: { transmission: "Automată", fuel: "Hibrid V12", year: "2024", engine: "6.5L V12", power: "1015 CP" }, features: { audio: ["Sensonum"], comfort: ["Telemetry"], safety: ["AWD"] } 
                },
                { 
                    id: "porsche-gt3rs", name: "Porsche 911 GT3 RS", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/f4/f4337b10-e423-4819-ace4-3e866eef9faa?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/07/07bb9655-ae6a-408e-9ee7-aabbc77918e4?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/91/91413ace-7e53-4ab1-8ca6-67eac276fcea?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/29/29122c60-2b4a-400f-99ee-b9eebccf86ee?rule=mo-1600"], 
                    description: "Născută pe circuit.", cost: 800, specs: { transmission: "PDK", fuel: "Benzină", year: "2023", engine: "4.0L Boxer", power: "525 CP" }, features: { audio: ["Sound Package"], comfort: ["Roll Cage"], safety: ["DRS"] } 
                },
                { 
                    id: "mclaren-720s", name: "McLaren 720S", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/5f/5f92ec69-7350-41de-a260-7ffc47e96550?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/ec/eccce617-f601-4d82-8aa6-477edda51c75?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/3b/3b93e60f-ae41-45bf-8657-b9060d75f1cf?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/81/8138d7ec-634c-482a-b450-a5fc19a6fd20?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/8e/8e10a48c-c5fb-46ad-9cd0-8e77b961ca1a?rule=mo-1600"], 
                    description: "Aerodinamică perfectă.", cost: 850, specs: { transmission: "Automată", fuel: "Benzină", year: "2022", engine: "4.0L V8", power: "720 CP" }, features: { audio: ["Bowers & Wilkins"], comfort: ["Uși fluture"], safety: ["Variable Drift"] } 
                }
            ]
        },
        {
            category: "SUV & Family",
            cars: [
                { 
                    id: "range-rover-sport", name: "Range Rover Sport", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/3c/3c1cb9b1-bc78-4406-bb10-a2cc9281539d?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/c3/c3dd003a-db43-41e9-999f-6cc0be89e44d?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/f0/f0e4345b-68b6-4962-a0d5-5259c38da4fc?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/bd/bd2b504b-fb92-451c-8e38-80169fd5d500?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/e4/e4e0b694-fc7b-49f1-a1ac-70b631164a1d?rule=mo-1600"], 
                    description: "SUV puternic.", cost: 150, specs: { transmission: "Automată", fuel: "Diesel", year: "2022", engine: "3.0L", power: "300 CP" }, features: { audio: ["Meridian"], comfort: ["Suspensie aer"], safety: ["Blind Spot"] } 
                },
                { 
                    id: "volvo-xc90", name: "Volvo XC90", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/8a/8a1211c3-0f71-46d8-b9db-7ad61a8caef1?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/da/da424426-1f0d-44f7-989a-b57dc6310b70?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/22/227057c8-36f6-492c-81c2-9c35231eca69?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/4d/4dee672c-8dc5-43a4-a84a-dc611b2fad4c?rule=mo-1600"], 
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

    const car = carsData
        .flatMap(category => category.cars)
        .find(c => c.id === id);

    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [totalPrice, setTotalPrice] = useState(0);
    const [days, setDays] = useState(0);

    // --- REZOLVARE PROBLEMA 1: Scroll sus cand intri pe pagina ---
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!car) {
        return (
            <div style={{padding: '50px', textAlign: 'center', background: '#050505', minHeight: '100vh', color: 'white'}}>
                <h2>Mașina nu a fost găsită.</h2>
                <div 
                    onClick={() => navigate(-1)} 
                    style={{color: '#ff4d4d', cursor: 'pointer', textDecoration: 'underline'}}
                >
                    Înapoi la Flotă
                </div>
            </div>
        );
    }

    const isAdded = cartItems.some(item => item.id === car.id);

    const nextImage = () => {
        setCurrentImgIndex((prev) => (prev === car.images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        setCurrentImgIndex((prev) => (prev === 0 ? car.images.length - 1 : prev - 1));
    };

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

    const handleAddToCart = () => {
        if (!isAdded) {
            // Dacă days e 0 (nu a calculat), punem 1 zi implicit
            const rentalDays = days > 0 ? days : 1; 
            
            // Trimitem mașina + numărul de zile (ca quantity)
            dispatch(addItem({ ...car, quantity: rentalDays }));
        }
    };

    return (
        <div className="car-detail-page">
            <div style={{background: '#000', padding: '15px 30px', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000, boxSizing: 'border-box'}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    {/* --- REZOLVARE PROBLEMA 2: Buton "Back" inteligent --- */}
                    <div 
                        onClick={() => navigate(-1)} 
                        style={{color: '#aaa', textDecoration: 'none', fontWeight: 'bold', fontSize: '16px', display: 'flex', alignItems: 'center', cursor: 'pointer'}}
                    >
                        <span style={{marginRight: '5px'}}>‹</span> Înapoi
                    </div>
                    <span style={{marginLeft: '20px', color: '#ff4d4d', fontWeight: 'bold'}}> | {car.name}</span>
                </div>
                <Link to="/cart" style={{textDecoration: 'none', color: 'white'}}>
                    <div style={{ fontSize: '24px', position: 'relative', cursor: 'pointer' }}>
                        🛒 
                        {cartItems.length > 0 && (
                            <span style={{
                                position: 'absolute', top: '-5px', right: '-10px', 
                                background: '#ff4d4d', color: 'white', borderRadius: '50%', 
                                fontSize: '12px', padding: '2px 6px'
                            }}>
                                {cartItems.length}
                            </span>
                        )}
                    </div>
                </Link>
            </div>

            <div className="detail-container" style={{paddingTop: '100px'}}>
                <div className="left-content">
                    <h1 className="car-title">{car.name}</h1>
                    <div className="image-gallery-box">
                        <img src={car.images[currentImgIndex]} alt={car.name} className="main-image" />
                        <button className="slider-btn left-btn" onClick={prevImage}>❮</button>
                        <button className="slider-btn right-btn" onClick={nextImage}>❯</button>
                        
                        {/* Counter pentru poze */}
                        <div className="slide-counter">
                            {currentImgIndex + 1} / {car.images.length}
                        </div>
                    </div>
                    
                    <div className="section-card">
                        <h3>Specificații</h3>
                        <p>{car.description}</p>
                         {/* --- SECTIUNEA SPECIFICAȚII VIZUALE --- */}
                        <div className="section-card">
                            <h3>Despre Mașină</h3>
                            <p style={{lineHeight: '1.6', color: '#ccc', marginBottom: '20px'}}>{car.description}</p>
                            
                            <div style={{
                                display: 'grid', 
                                gridTemplateColumns: '1fr 1fr', 
                                gap: '15px', 
                                background: '#1a1a1a', 
                                padding: '20px', 
                                borderRadius: '15px'
                            }}>
                                {/* TRANSMISIE */}
                                <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                    <span style={{fontSize: '24px'}}>⚙️</span>
                                    <div>
                                        <div style={{fontSize: '12px', color: '#888'}}>Transmisie</div>
                                        <div style={{fontWeight: 'bold'}}>{car.specs?.transmission}</div>
                                    </div>
                                </div>

                                {/* COMBUSTIBIL */}
                                <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                    <span style={{fontSize: '24px'}}>⛽</span>
                                    <div>
                                        <div style={{fontSize: '12px', color: '#888'}}>Combustibil</div>
                                        <div style={{fontWeight: 'bold'}}>{car.specs?.fuel}</div>
                                    </div>
                                </div>

                                {/* MOTOR */}
                                <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                    <span style={{fontSize: '24px'}}>🚀</span>
                                    <div>
                                        <div style={{fontSize: '12px', color: '#888'}}>Motor</div>
                                        <div style={{fontWeight: 'bold'}}>{car.specs?.engine || 'N/A'}</div>
                                    </div>
                                </div>

                                {/* PUTERE */}
                                <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                    <span style={{fontSize: '24px'}}>⚡</span>
                                    <div>
                                        <div style={{fontSize: '12px', color: '#888'}}>Putere</div>
                                        <div style={{fontWeight: 'bold'}}>{car.specs?.power || 'N/A'}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="features-container">
                        <h3 className="section-title" style={{marginTop: '40px', marginBottom: '20px'}}>Dotări și Echipamente</h3>
                        {car.features && (
                            <>
                                <details className="feature-accordion" open><summary>Audio și Tehnologie</summary><ul className="feature-list">{car.features.audio.map((item, i) => <li key={i}>✓ {item}</li>)}</ul></details>
                                <details className="feature-accordion"><summary>Confort și Echipamente</summary><ul className="feature-list">{car.features.comfort.map((item, i) => <li key={i}>✓ {item}</li>)}</ul></details>
                                <details className="feature-accordion"><summary>Siguranță și Asistență</summary><ul className="feature-list">{car.features.safety.map((item, i) => <li key={i}>✓ {item}</li>)}</ul></details>
                            </>
                        )}
                    </div>
                </div>

                <div className="right-sidebar">
                    <div className="calculator-card">
                        <div className="price-tag">
                            €{car.cost} <span style={{fontSize: '14px', color: '#888', fontWeight: 'normal'}}>/ zi</span>
                        </div>

                        <div className="calc-inputs">
                            {/* Container pentru date - le stilizăm să arate modern */}
                            <div className="date-group">
                                <div className="date-field">
                                    <label>📅 Preluare</label>
                                    <input 
                                        type="date" 
                                        onChange={(e) => setStartDate(e.target.value)} 
                                        className="premium-date-input"
                                    />
                                </div>
                                
                                <div className="date-field">
                                    <label>📅 Returnare</label>
                                    <input 
                                        type="date" 
                                        onChange={(e) => setEndDate(e.target.value)} 
                                        className="premium-date-input"
                                    />
                                </div>
                            </div>

                            <button onClick={handleCalculate} className="calc-btn">
                                Calculează Preț
                            </button>
                        </div>

                        {totalPrice > 0 && (
                            <div className="result-box">
                                <div className="result-row"><span>Durată:</span><strong>{days} Zile</strong></div>
                                <div className="result-total"><span>Total:</span><strong>€{totalPrice}</strong></div>
                                
                                <button 
                                    className="finalize-btn"
                                    onClick={handleAddToCart}
                                    disabled={isAdded}
                                    style={{
                                        backgroundColor: isAdded ? '#333' : '#ff4d4d',
                                        color: isAdded ? '#777' : 'white',
                                        cursor: isAdded ? 'default' : 'pointer',
                                        marginTop: '15px',
                                        width: '100%',
                                        padding: '15px',
                                        border: 'none',
                                        borderRadius: '8px',
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase',
                                        fontSize: '14px',
                                        letterSpacing: '1px',
                                        transition: '0.3s'
                                    }}
                                >
                                    {isAdded ? 'Rezervat ✓' : 'Rezervă Acum'}
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