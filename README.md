AutoRent Premium is a high-end, responsive web application designed for browsing and booking luxury vehicles. Built with React and Redux Toolkit, this project demonstrates complex state management, dynamic pricing logic based on rental duration, and a sophisticated "Dark Mode" UI focused on user experience.

About the Project
The goal of this project was to build a scalable front-end application that simulates a real-world car rental service. Unlike simple e-commerce stores, AutoRent Premium handles time-based logic:

Users select Pick-up and Return dates.

The application calculates the total cost based on the daily rate and the number of days selected.

The state is managed globally, allowing data to persist between the Fleet page, Car Details, and the Shopping Cart.

The design philosophy focuses on a "Dark Luxury" aesthetic, utilizing deep blacks, grays, and striking red accents to evoke a premium feel similar to top-tier automotive brands.

Key Features
Extensive Fleet Catalog:

Browse vehicles by categories: Economic, Luxury, Supercars, SUVs, Electric.

Smart Navigation: Dropdown menu with "Scroll-to-Section" functionality.

Dynamic Booking System:

Interactive date pickers for Start/End dates.

Automatic calculation of rental days and total price.

Quick Book: One-click booking defaults to a 1-day rental (Today → Tomorrow).

Advanced Shopping Cart:

Real-time updates of the booking period (adjusting quantity updates the return date automatically).

Centralized layout for single items.

Full CRUD operations (Add, Update Days, Remove).

Premium UI/UX:

Fully responsive Flexbox layout (3 cards per row, centered orphans).

Custom-styled scrollbars.

Hover effects and smooth transitions.

Global Footer and Sticky Navbar with glassmorphism effect.

Technologies Used
React.js: Component-based architecture (ProductList, CarDetail, CartItem).

Redux Toolkit: Global state management (CartSlice) to handle booking data and quantities.

React Router Dom: Client-side routing for seamless page navigation.

React Icons: Professional vector icons for UI elements.

CSS3: Custom styling variables, Flexbox grids, and responsive media queries.