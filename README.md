AutoRent Premium - Full-Stack Car Rental Platform
AutoRent Premium is a robust, full-stack web application designed for browsing and booking luxury vehicles. Built with React (Frontend) and ASP.NET Core Web API (Backend), this project bridges modern UI design with enterprise-level backend architecture, demonstrating proficiency in both client-side and server-side development.

About the Project
This project simulates a real-world premium car rental service. It goes beyond simple static pages by implementing a Full-Stack Architecture:

Frontend: A responsive React SPA that handles user interaction, state management (Redux), and dynamic pricing logic.

Backend: A C# .NET API that manages data persistence, serving vehicle data and saving bookings to local JSON files.

The design philosophy focuses on a "Dark Luxury" aesthetic, while the code structure strictly adheres to Object-Oriented Programming (OOP) principles, Dependency Injection, and Generic Host patterns as required by modern academic standards.

Architecture & OOP Concepts
The backend is built using .NET 8.0 and demonstrates core computer science concepts:

Encapsulation: Data models (Vehicle, Car, Booking) protect their internal state.

Inheritance: The Car class inherits common properties from the abstract Vehicle base class.

Polymorphism: Method overriding (e.g., GetSummary()) and Interface implementation (IFileService).

Composition: Car objects are composed of CarSpecs and CarFeatures.

Dependency Injection (DI): Services like IFileService are injected into Controllers, ensuring loose coupling.

Key Features
Frontend (React + Redux)
Dynamic Booking System:

Interactive date pickers for Start/End dates.

Real-time price calculation based on rental duration.

Advanced Shopping Cart:

API Integration: Submitting a booking sends data directly to the Backend API.

Centralized state management using Redux Toolkit.

Premium UI/UX:

Fully responsive Flexbox layout (optimized for Mobile & Desktop).

Custom-styled "Dark Mode" aesthetic with glassmorphism effects.

Backend (.NET Core API)
RESTful API Endpoints:

GET /api/cars: Fetches the vehicle fleet dynamically.

POST /api/bookings: Receives and persists user bookings.

Data Persistence: Uses a custom FileService wrapper to read/write data to JSON files, simulating a database without external dependencies.

CORS Enabled: Configured to allow secure communication with the React frontend.

Generic Host: Uses the standard .NET Generic Host for configuration, logging (ILogger), and lifecycle management.

Technologies Used
Frontend
React.js: Component-based UI (ProductList, CarDetail).

Redux Toolkit: Global state management.

React Router Dom: Navigation routing.

CSS3: Custom variables & animations.

Backend
C# / .NET 8.0: Server-side logic.

ASP.NET Core Web API: API Framework.

System.Text.Json: High-performance JSON processing.

Author: Stefoni Petru Eduard Built as a final project demonstrating Full-Stack development mastery.