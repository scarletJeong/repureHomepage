
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main';
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

// CSS 파일
import './index.css'; // Tailwind 설정 포함

function App() {
  return (
    <Router>
      <Routes>
        {/* Main 페이지 */}
        <Route path="/" element={<Main />} />
        
        {/* Test 페이지 */}
        <Route path="/test" element={<Test />} />

        {/* Business 페이지 */}
        <Route path="/medicine" element={<Med />} />
        <Route path="/animal" element={<Ani />} />
        <Route path="/dig" element={<Dig />} />
        <Route path="/food" element={<Food />} />
        <Route path="/healthcare" element={<Health />} />

        {/* RnD 페이지 */}
        <Route path="/pipe" element={<Pipe />} />
        <Route path="/cancer" element={<Cancer />} />

         {/* Support 페이지 */}
         <Route path="/map" element={<Map />} />


      </Routes>
    </Router>
  );
}

export default App;