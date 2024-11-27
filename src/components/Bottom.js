import ScrollToTop from './ScrollToTop'; 
import React from 'react';

import repurelogo from '../assets/logo7_5054.png'
import goLine from '../assets/line7_5123.png'
import goLinked from '../assets/linkedin_icon.jpeg7_5135.png'
import goNaverblog from '../assets/image7_5136.png'
import goOpentarget from '../assets/opentarget 27_4974.png'

const Bottom = () => {
  return (

    <div className="relative self-stretch h-[480px] shrink-0 bg-[#f8f8f8]">
        <div className="absolute left-[554px] top-[105px] w-[600px] flex flex-col items-start justify-start gap-[24px]">
        <div className="self-stretch text-[14px] leading-[20px] font-['Pretendard'] font-semibold text-[#5f6368]">리퓨어 헬스케어 Co. <br/>서울특별시 금천구 가산디지털 1로 25, 1806호</div>
        <div className="flex flex-col items-start justify-start gap-[2px]">
            <div className="flex flex-row items-center justify-start gap-[4px]">
                <div className="w-[24px] h-[20px] text-[12px] leading-[20px] font-['Pretendard'] font-medium text-[#5f6368]">대표</div>
                <div className="text-[12px] leading-[20px] font-['Montserrat'] font-medium text-[#5f6368] whitespace-nowrap">:</div>
                <div className="text-[12px] leading-[20px] font-['Pretendard'] font-medium text-[#5f6368] whitespace-nowrap">김용상, 이재휘</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[4px]">
                <div className="w-[24px] h-[20px] text-[12px] leading-[20px] font-['Montserrat'] font-medium text-[#5f6368]">TEL</div>
                <div className="text-[12px] leading-[20px] font-['Montserrat'] font-medium text-[#5f6368] whitespace-nowrap">:</div>
                <div className="text-[12px] leading-[20px] font-['Montserrat'] font-medium text-[#5f6368] whitespace-nowrap">02-3473-3001</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[4px]">
                <div className="w-[24px] h-[20px] text-[12px] leading-[20px] font-['Montserrat'] font-medium text-[#5f6368]">FAX</div>
                <div className="text-[12px] leading-[20px] font-['Montserrat'] font-medium text-[#5f6368] whitespace-nowrap">:</div>
                <div className="text-[12px] leading-[20px] font-['Montserrat'] font-medium text-[#5f6368] whitespace-nowrap">02-3472-3007</div>
            </div>
            <div className="text-[12px] leading-[20px] font-['Montserrat'] font-medium text-[#5f6368] whitespace-nowrap">public@repurels.com</div>
        </div>
        <div className="self-stretch text-[10px] leading-[20px] font-['Montserrat'] font-medium text-[#a5a5a5]">© 2024 REPUREHEALTHCARE. All Rights Reserved.</div>
    </div>
    
    <img className="absolute left-[280px] top-[100px]" width="167" height="44" src={repurelogo}></img>
    
    
    <div className="absolute left-[1434px] top-[279px] flex flex-row items-center justify-start gap-[24px]">
      <div className="relative w-[104px] h-[18px] shrink-0">
        <div className="absolute left-0 top-0 text-[15px] font-['Pretendard'] font-bold text-[#777] whitespace-nowrap">개인정보처리방침</div>
      </div>
      <img width="0" height="12" src={goLine}></img>
      <div className="relative w-[52px] h-[18px] shrink-0">
        <div className="absolute left-0 top-0 text-[15px] font-['Pretendard'] font-bold text-[#777] whitespace-nowrap">오시는길</div>
      </div>
    </div>
    
    {/* Social Media */}
    <div className="absolute left-[1434px] top-[105px] flex flex-row items-center justify-start gap-[20px] z-10">
      {/* Naver Blog */}
      <a href="https://blog.naver.com/repurehc"  target="_blank" rel="noopener noreferrer"
         className="relative w-[36px] h-[36px] bg-[#fff] rounded-[32px] overflow-hidden flex items-center justify-center cursor-pointer">
        <img src={goNaverblog}  alt="Naver Blog" className="w-[30px] h-[28px]" />
      </a>

      {/* LinkedIn */}
      <a href="https://www.linkedin.com" target="_blank"  rel="noopener noreferrer"
         className="relative w-[36px] h-[36px] bg-[#fff] rounded-[32px] overflow-hidden flex items-center justify-center cursor-pointer" >
        <img src={goLinked} alt="LinkedIn" className="w-[36px] h-[36px]" />
      </a>

      {/* Open Target */}
      <a href="https://opentargets.org" target="_blank" rel="noopener noreferrer"
         className="relative w-[94px] h-[36px] flex items-center justify-center cursor-pointer" >
        <img src={goOpentarget} alt="Open Target" className="w-[81px] h-[24px]" />
      </a>
    </div>


   
    
    {/* 위로올라가는 화살표 */}
    <div className="fixed right-20 bottom-10">

      <ScrollToTop />
    </div>
    
    </div>

  );
};

export default Bottom;





