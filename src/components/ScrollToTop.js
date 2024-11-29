import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import btn_forTheTop from '../assets/btn_forTheTop.png'; 

const ScrollToTop = () => {
  const { pathname } = useLocation(); 
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  }, [pathname]); 


  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
   <button
      onClick={handleScrollToTop}
      className="scroll__container bottom-0 right-0 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-800 transition duration-300" style={{width: "60px", height : "60px", display: "flex", alignItems: "center", justifyContent: "center"}}>
      <img src={btn_forTheTop} alt="Scroll to Top" /> 
    </button>
  );
};

export default ScrollToTop;
