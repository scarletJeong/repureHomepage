import React from 'react';

import logo from '../assets/logo7_5054.png'

const Top = () => {
    return (
    <div className="absolute left-0 top-0 w-[1920px] min-w-[1600px] flex flex-row items-center justify-between py-[25px] px-[60px] bg-[#fff] filter-[backdrop-blur(1px)]">
        <div className="relative w-[192px] h-[50px] shrink-0 overflow-hidden">
          <div className="absolute left-0 top-0 w-[192px] h-[48px] overflow-hidden">
            <img className="absolute left-0 top-0" width="192" height="48" src={logo}></img>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-[80px]">
          <div className="flex flex-col items-center justify-start">
            <div className="text-[16px] leading-[24px] font-['Montserrat'] font-medium text-transform-[uppercase] text-[#363636] text-center whitespace-nowrap">About Us</div>
          </div>
          <div className="flex flex-col items-center justify-start">
            <div className="text-[16px] leading-[24px] font-['Montserrat'] font-medium text-transform-[uppercase] text-[#363636] text-center whitespace-nowrap">Business</div>
          </div>
          <div className="flex flex-col items-center justify-start">
            <div className="text-[16px] leading-[24px] font-['Montserrat'] font-medium text-transform-[uppercase] text-[#363636] text-center whitespace-nowrap">R&D</div>
          </div>
          <div className="flex flex-col items-center justify-start">
            <div className="text-[16px] leading-[24px] font-['Montserrat'] font-medium text-transform-[uppercase] text-[#363636] text-center whitespace-nowrap">Support</div>
          </div>
        </div>
    </div>

    );
  }
  export default Top;