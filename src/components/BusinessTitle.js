import React from 'react';
import { useNavigate } from 'react-router-dom';

const BusinessTitle = ({ activeTab }) => {

  const navigate = useNavigate();

  const tabs = [
    { label: "의약사업", path: "/medicine" },
    { label: "동물사업", path: "/animal" },
    { label: "헬스케어사업", path: "/healthcare" },
    { label: "식품사업", path: "/food" },
    { label: "요양 및 진단사업", path: "/dig" },
  ];

  return (
    <div className="relative self-stretch h-[294px] bg-[#fff]">
      <div className="absolute -translate-x-1/2 left-1/2 top-[160px] flex flex-col items-center gap-[20px]">
        <div className="text-[40px] font-bold text-[#000]">BUSINESS</div>
        <div className="flex flex-row gap-[40px]">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`cursor-pointer ${
                activeTab === tab.label
                  ? "border-b-2 border-[#2d4198] text-[#2d4198] font-semibold"
                  : "text-[#363636b2]"
              }`}
              onClick={() => navigate(tab.path)}
            >
              <span className="text-[18px] text-center">{tab.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessTitle;