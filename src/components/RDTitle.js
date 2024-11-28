import React from "react";
import { useNavigate } from "react-router-dom";

const RDTitle = ({ activeTab }) => {

 const navigate = useNavigate();

 const tabs = [
    {label : '파이프라인', path : '/rnd-pipe'},
    {label : '항암치료', path : '/rnd-cancer'}
 ];

 return ( 
    <div className="relative self-stretch h-[294px] shrink-0 bg-[#fff] overflow-hidden">
      <div className="absolute -translate-x-1/2 left-1/2 top-[160px] flex flex-col items-center justify-start gap-[20px]">
        <div className="text-[40px] leading-[50px] font-['Montserrat'] font-bold text-[#000] whitespace-nowrap">
          R&D
        </div>
        <div className="flex flex-row items-center justify-start gap-[40px]">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-start cursor-pointer ${
                activeTab === tab.label
                  ? 'border-b-[2px] border-[#2d4198] text-[#2d4198] font-bold'
                  : 'text-[#363636b2]'
              }`}
              onClick={() => navigate(tab.path)}
            >
              <div className="text-[18px] leading-[24px] font-['Pretendard'] uppercase text-center whitespace-nowrap">
                {tab.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>    

 );
};

export default RDTitle;
