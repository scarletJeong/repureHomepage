
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main';
import Test from './pages/Home/Test';
import './index.css'; // Tailwind 설정 포함

function App() {
  return (
    <Router>
      <Routes>
        {/* Main 페이지 */}
        <Route path="/" element={<Main />} />
        
        {/* Test 페이지 */}
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;