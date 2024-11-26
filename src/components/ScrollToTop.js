import React from 'react';
import btn_forTheTop from '../assets/btn_forTheTop.png'; // 화살표 이미지 파일 경로

const ScrollToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0, // 페이지 맨 위로 이동
      behavior: 'smooth', // 부드럽게 스크롤
    });
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button onClick={handleScrollToTop}
        className="fixed bottom-80 right-10 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-800 transition duration-300"
      >
        <img src={btn_forTheTop} alt="Scroll to Top" width="30" height="30" />
      </button>
    </div>
  );
};

export default ScrollToTop;
