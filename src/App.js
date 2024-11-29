
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";
// Main 관련 페이지
import Test from './pages/Home/Test';

// Business 관련 페이지
import Med from './pages/Business/Medicine'
import Ani from './pages/Business/Animal'
import Dig from './pages/Business/Dig'
import Food from './pages/Business/Food'
import Health from './pages/Business/Healthcare'

// R&D 관련 페이지
import Pipe from './pages/RD/Pipe'
import Cancer from './pages/RD/Cancer'

// Support 관련 페이지
import Map from './pages/Support/Map'

// About us 관련 페이지
import Ceo from './pages/AboutUs/Ceo';
import History from './pages/AboutUs/History';
import Partners from './pages/AboutUs/Partners';

import Privacy from './components/privacy';

// CSS 파일
import './index.css'; // Tailwind 설정 포함

function App() {
  return (
    <Router> 
      <Routes>

        {/* Main 페이지 */}
        <Route path="/" element={<Test />} />
        
        {/* AboutUs 페이지*/}
          <Route path="/aboutus-ceo" element={<Ceo />} />
          <Route path="/aboutus-history" element={<History />} />
          <Route path="/aboutus-partners" element={<Partners />} />

        {/* Business 페이지 */}
        <Route path="/business-medicine" element={<Med />} />
        <Route path="/business-animal" element={<Ani />} />
        <Route path="/business-dig" element={<Dig />} />
        <Route path="/business-food" element={<Food />} />
        <Route path="/business-healthcare" element={<Health />} />

        {/* RnD 페이지 */}
        <Route path="/rnd-pipe" element={<Pipe />} />
        <Route path="/rnd-cancer" element={<Cancer />} />

        {/* Support 페이지 */}
        <Route path="/contact-map" element={<Map />} />

        <Route path="/privacy" element={<Privacy />} />

      </Routes>
    </Router>
  );
}

export default App;