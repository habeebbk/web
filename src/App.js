import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ListingsPage from './pages/ListingsPage';
import ContactPage from './pages/ContactPage';
import ListingDetailsPage from './pages/ListingDetailsPage'; // Import the ListingDetailsPage
import BuyPage from './pages/BuyPage'; // Import the BuyPage
import SellPage from './pages/SellPage'; // Import the SellPage
import RentPage from './pages/RentPage'; // Import the RentPage
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/listings" element={<ListingsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/listing/:id" element={<ListingDetailsPage />} /> {/* Route for Listing Details */}
        <Route path="/buy" element={<BuyPage />} /> {/* Route for Buy Page */}
        <Route path="/sell" element={<SellPage />} /> {/* Route for Sell Page */}
        <Route path="/rent" element={<RentPage />} /> {/* Route for Rent Page */}
      </Routes>
    </Router>
  );
}

export default App;
