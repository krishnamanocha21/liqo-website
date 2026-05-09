
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AirConditionersPage from './pages/AirConditionersPage';
import RefrigeratorsPage from './pages/RefrigeratorsPage';
import WashingMachinesPage from './pages/WashingMachinesPage';
import TelevisionsPage from './pages/TelevisionsPage';
import KitchenAppliancesPage from './pages/KitchenAppliancesPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/air-conditioners" element={<AirConditionersPage />} />
        <Route path="/refrigerators" element={<RefrigeratorsPage />} />
        <Route path="/washing-machines" element={<WashingMachinesPage />} />
        <Route path="/televisions" element={<TelevisionsPage />} />
        <Route path="/kitchen-appliances" element={<KitchenAppliancesPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
