import React from 'react';
import { useNavigate } from 'react-router-dom';

const BusinessTitle = ({ activeTab }) => {

    const navigate = useNavigate();

  const tabs = [
    { label: '의약사업', path: '/medicine' },
    { label: '동물사업', path: '/animal' },
    { label: '헬스케어사업', path: '/healthcare' },
    { label: '식품사업', path: '/food' },
    { label: '요양 및 진단사업', path: '/diagnostics' },
  ];

    return (


<div className="relative self-stretch h-[294px] shrink-0 bg-[#fff] overflow-hidden">
      <div className="absolute -translate-x-1/2 left-1/2 top-[160px] flex flex-col items-center justify-start gap-[20px]">
        <div className="text-[40px] leading-[50px] font-['Montserrat'] font-bold text-[#000] whitespace-nowrap">BUSINESS</div>
        <div className="flex flex-row items-center justify-start gap-[40px]">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-start ${
                activeTab === tab.label
                  ? 'border-[solid] border-#2d4198 border-b-[2px] text-[#2d4198] font-semibold'
                  : 'text-[#363636b2]'
              } cursor-pointer`}
              onClick={() => navigate(tab.path)} // 페이지 이동
            >
              <div className="text-[18px] leading-[24px] font-['Pretendard'] text-transform-[uppercase] text-center whitespace-nowrap">
                {tab.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    );
}
export default BusinessTitle;