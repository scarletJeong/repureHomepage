import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo7_5054.png';

const Top = () => {
  return (
    <div className="absolute left-0 top-0 w-[1920px] min-w-[1600px] flex flex-row items-center justify-between py-[25px] px-[60px] bg-[#fff] filter-[backdrop-blur(1px)]">
      <div className="relative w-[192px] h-[50px] shrink-0 overflow-hidden">

        {/* 로고를 클릭하면 test 페이지로 이동 */}
        <Link to="/" className="absolute left-0 top-0 w-[192px] h-[48px] overflow-hidden">
          <img className="absolute left-0 top-0" width="192" height="48" src={logo} alt="Logo" />
        </Link>
        
      </div>
      <div className="flex flex-row items-center justify-center gap-[80px]">
        {/* 메뉴 항목 */}
        <Link to="/aboutus-ceo" className="text-[16px] leading-[24px] font-['Montserrat'] font-medium uppercase text-[#363636] text-center whitespace-nowrap">
          About Us
        </Link>
        <Link to="/medicine" className="text-[16px] leading-[24px] font-['Montserrat'] font-medium uppercase text-[#363636] text-center whitespace-nowrap">
          Business
        </Link>
        <Link to="/pipe" className="text-[16px] leading-[24px] font-['Montserrat'] font-medium uppercase text-[#363636] text-center whitespace-nowrap">
          R&D
        </Link>
        <Link to="/map" className="text-[16px] leading-[24px] font-['Montserrat'] font-medium uppercase text-[#363636] text-center whitespace-nowrap">
          Support
        </Link>
      </div>
    </div>
  );
};

export default Top;
