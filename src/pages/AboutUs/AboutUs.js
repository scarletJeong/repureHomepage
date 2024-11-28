import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Top from '../../components/Top';
import Bottom from '../../components/Bottom';

const AboutUs = () => {

    return (
        <div className="w-[1920px] flex flex-col items-start justify-start bg-[#fff] overflow-hidden">
            <div className="relative self-stretch h-[294px] shrink-0 bg-[#fff] overflow-hidden">
                <div className="absolute -translate-x-1/2 left-1/2 top-[160px] flex flex-col items-center justify-start gap-[20px]">
                <div className="text-[40px] leading-[50px] font-[Montserrat] font-bold text-[#000] whitespace-nowrap">ABOUT US</div>
                <div className="flex flex-row items-center justify-start gap-[40px]">
                    <div className="flex flex-col items-center justify-start border-[solid] border-#2d4198 border border-[0_0_1px]">
                        <Link to="/aboutus-ceo">
                            <div className="text-[18px] leading-[24px] font-['Pretendard'] font-semibold text-transform-[uppercase] text-[#2d4198] text-center whitespace-nowrap">기업소개</div>
                        </Link>    
                    </div>
                    <div className="flex flex-col items-center justify-start">
                        <Link to="/aboutus-history">
                            <div className="text-[18px] leading-[24px] font-['Pretendard'] text-transform-[uppercase] text-[#363636b2] text-center whitespace-nowrap">연혁</div>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                        <Link to="/aboutus-partners">
                            <div className="text-[18px] leading-[24px] font-['Pretendard'] text-transform-[uppercase] text-[#363636b2] text-center whitespace-nowrap">파트너쉽</div>
                        </Link>
                    </div>
                </div>
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
            <Bottom />
            <Top />
        </div>
      );
};

export default AboutUs;