import { useState, EventHandler, ReactNode } from 'react';
import image16158_611 from '../../assets/image16158_611.png'
import image20158_625 from '../../assets/image20158_625.png'
import image158_602 from '../../assets/image158_602.png'
import image158_609 from '../../assets/image158_609.png'
import image158_615 from '../../assets/image158_615.png'
import image158_617 from '../../assets/image158_617.png'
import image158_619 from '../../assets/image158_619.png'
import image158_621 from '../../assets/image158_621.png'
import image158_623 from '../../assets/image158_623.png'
import image161_835 from '../../assets/image161_835.png'
import image161_837 from '../../assets/image161_837.png'
import image161_841 from '../../assets/image161_841.png'
import image161_843 from '../../assets/image161_843.png'
import image161_845 from '../../assets/image161_845.png'
import image161_847 from '../../assets/image161_847.png'
import image161_849 from '../../assets/image161_849.png'
import image161_851 from '../../assets/image161_851.png'
import image161_853 from '../../assets/image161_853.png'
import image161_856 from '../../assets/image161_856.png'

import logo161_861 from '../../assets/logo161_861.png'
import logo1158_613 from '../../assets/logo1158_613.png'
import logo1161_839 from '../../assets/logo1161_839.png'
import logo1161_860 from '../../assets/logo1161_860.png'
import logo01148_372 from '../../assets/logo01148_372.png'

import image8149_431 from '../../assets/image8149_431.png'
import image8149_433 from '../../assets/image8149_433.png'
import image8149_435 from '../../assets/image8149_435.png'
import image8149_437 from '../../assets/image8149_437.png'
import image15149_461 from '../../assets/image15149_461.png'

import image16158_586 from '../../assets/image16158_586.png'
import image20158_600 from '../../assets/image20158_600.png'
import image149_445 from '../../assets/image149_445.png'
import image149_449 from '../../assets/image149_449.png'
import image149_451 from '../../assets/image149_451.png'
import image156_466 from '../../assets/image156_466.png'

import image156_475 from '../../assets/image156_475.png'
import image158_584 from '../../assets/image158_584.png'
import image158_590 from '../../assets/image158_590.png'
import image158_592 from '../../assets/image158_592.png'
import image158_594 from '../../assets/image158_594.png'
import image158_596 from '../../assets/image158_596.png'
import image158_598 from '../../assets/image158_598.png'
import logo1158_588 from '../../assets/logo1158_588.png'
import bg7_2679 from '../../assets/bg7_2679.png'

import AboutUsTitle from '../../components/AboutUsTitle';
import Top from '../../components/Top';
import Bottom from '../../components/Bottom';


const Partners = () => {
	return (
        <div className="relative w-[1920px] min-w-[1440px] flex flex-col justify-start bg-[#fff] mx-auto  items-center" >
            <AboutUsTitle activeTab="파트너쉽" />
            <div className="relative self-stretch h-[2425px] shrink-0 overflow-hidden">
                <img className="absolute left-0 right-0 top-0 bottom-0" width="1920" height="2425" src={bg7_2679}></img>
                <div className="absolute right-[279px] top-[144px] w-[810px] h-[1px] bg-[#d9d9d9]"></div>
                <div className="absolute -translate-x-1/2 left-[calc(50%+274px)] top-[185px] w-[806px] flex flex-col items-start justify-start gap-[80px]">
                <div className="flex flex-col items-start justify-start gap-[20px]">
                    <div className="flex flex-row items-center justify-start gap-[20px]">
                    <div className="text-[20px] leading-[24px] font-['Montserrat'] font-bold text-[#000] text-justify whitespace-nowrap">Pharmaceutical Company</div>
                    <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#414141] text-justify whitespace-nowrap">해외 제약사</div>
                    </div>
                    <div className="w-[806px] flex flex-wrap items-start justify-start">
                    <img src={logo01148_372}></img>
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center">
                        <img src={image8149_431}></img>
                    </div>
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center">
                        <img src={image8149_433}></img>
                    </div>
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center">
                        <img src={image8149_435}></img>
                    </div>
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center">
                        <img src={image8149_437}></img>
                    </div>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[20px]">
                    <div className="flex flex-row items-center justify-start gap-[20px]">
                    <div className="text-[20px] leading-[24px] font-['Montserrat'] font-bold text-[#000] text-justify whitespace-nowrap">Medical Facilities</div>
                    <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#414141] text-justify whitespace-nowrap">의료기관</div>
                    </div>
                    <div className="w-[806px] flex flex-wrap items-start justify-start">
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center">
                        <img src={image15149_461}></img>
                    </div>
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center">
                        <img src={image149_449}></img>
                    </div>
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center">
                        <img src={image149_451}></img>
                    </div>
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center">
                        <img src={image149_445}></img>
                    </div>
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center">
                        <img src={image156_466}></img>
                    </div>
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center">
                        <img src={image156_475}></img>
                    </div>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[20px]">
                    <div className="flex flex-row items-center justify-start gap-[20px]">
                    <div className="text-[20px] leading-[24px] font-['Montserrat'] font-bold text-[#000] text-justify whitespace-nowrap">Educational Institution</div>
                    <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#414141] text-justify whitespace-nowrap">교육기관</div>
                    </div>
                    <div className="w-[806px] flex flex-wrap items-start justify-start">
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center">
                        <img src={image158_584}></img>
                    </div>
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center">
                        <img src={image16158_586}></img>
                    </div>
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center">
                        <img src={logo1158_588}></img>
                    </div>
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center">
                        <img src={image158_590}></img>
                    </div>
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center">
                        <img src={image158_592}></img>
                    </div>
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center">
                        <img src={ image158_594}></img>
                    </div>
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center">
                        <img src={image158_596}></img>
                    </div>
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center">
                        <img src={image158_598}></img>
                    </div>
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center">
                        <img src={image20158_600}></img>
                    </div>
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center">
                        <img src={image158_602}></img>
                    </div>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[20px]">
                    <div className="flex flex-row items-center justify-start gap-[20px]">
                    <div className="text-[20px] leading-[24px] font-['Montserrat'] font-bold text-[#000] text-justify whitespace-nowrap">R&D</div>
                    <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#414141] text-justify whitespace-nowrap">연구개발</div>
                    </div>
                    <div className="w-[806px] flex flex-wrap items-start justify-start">
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center">
                        <img src={image158_609}></img>
                    </div>
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center">
                        <img src={image16158_611}></img>
                    </div>
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center">
                        <img src={logo1158_613}></img>
                    </div>
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center">
                        <img src={logo1161_860}></img>
                    </div>
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center">
                        <img src={image158_615}></img>
                    </div>
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center">
                        <img src={image158_617}></img>
                    </div>
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center">
                        <img src={image158_619}></img>
                    </div>
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center">
                        <img src={image158_621}></img>
                    </div>
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center">
                        <img src={ image20158_625}></img>
                    </div>
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center">
                        <img src={image158_623}></img>
                    </div>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[20px]">
                    <div className="flex flex-row items-center justify-start gap-[20px]">
                    <div className="text-[20px] leading-[24px] font-['Montserrat'] font-bold text-[#000] text-justify whitespace-nowrap">Business Cooperation</div>
                    <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#414141] text-justify whitespace-nowrap">사업협력</div>
                    </div>
                    <div className="w-[806px] flex flex-wrap items-start justify-start">
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center">
                        <img src={image161_853}></img>
                    </div>
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center">
                        <img src={image161_835}></img>
                    </div>
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center">
                        <img src={image161_837}></img>
                    </div>
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center">
                        <img src={logo1161_839}></img>
                    </div>
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center">
                        <img src={image161_856}></img>
                    </div>
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center">
                        <img src={image161_849}></img>
                    </div>
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center">
                        <img src={ image161_841}></img>
                    </div>
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center">
                        <img src={logo161_861}></img>
                    </div>
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center">
                        <img src={image161_851}></img>
                    </div>
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center opacity-[.4]">
                        <img src={image161_843}></img>
                    </div>
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center">
                        <img src={ image161_847}></img>
                    </div>
                    <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center">
                        <img src={image161_845}></img>
                    </div>
                    </div>
                </div>
                </div>
                <div className="absolute -translate-x-1/2 left-[calc(50%+-531px)] top-[100px] w-[297px] flex flex-col items-start justify-start gap-[24px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                    <div className="text-[16px] leading-[20px] font-['Pretendard'] font-medium text-[#2d4198] whitespace-nowrap">국내외 파트너스</div>
                    <div className="text-[36px] leading-[40px] font-['Montserrat'] font-semibold text-[#000] whitespace-nowrap">OUR PARTNERS</div>
                </div>
                <div className="self-stretch text-[16px] leading-[24px] font-['Pretendard'] text-[#888] text-justify">리퓨어헬스케어와 함께 보다 건강한 삶으로 나아가는 협력사들입니다.</div>
                </div>
            </div>
            <Top />
            <Bottom />
    </div>
)
}

export default Partners