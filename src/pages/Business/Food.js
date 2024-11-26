import { useState, EventHandler, ReactNode } from 'react'

import Bottom from '../../components/Bottom'
import Top from '../../components/Top'

import img1 from '../../assets/Rectangle 70190_1510.png'
import img2 from '../../assets/Rectangle 71190_1513.png'
import img3 from '../../assets/Rectangle 72190_1516.png'
import img4 from '../../assets/img_bs_food195_1931.png'
import img5 from '../../assets/large/chevron_forward195_2114.png'
import img6 from '../../assets/large/chevron_forward195_2117.png'
import img7 from '../../assets/large/chevron_forward195_2120.png'
import img8 from '../../assets/image 21195_1917.png'
import img9 from '../../assets/Vector 1195_1971.png'
import img10 from '../../assets/Vector 2195_1975.png'
import img11 from '../../assets/Group 25195_2043.png'
import img12 from '../../assets/Group 27198_3204.png'
import img13 from '../../assets/Group 26195_2101.png'


const Food = () => {
	return (<div className="w-[1920px] flex flex-col items-start justify-start bg-[#fff] overflow-hidden">
         {/*title */}
  <div className="relative self-stretch h-[294px] shrink-0 bg-[#fff] overflow-hidden">
    <div className="absolute -translate-x-1/2 left-1/2 top-[160px] flex flex-col items-center justify-start gap-[20px]">
      <div className="text-[40px] leading-[50px] font-['Montserrat'] font-bold text-[#000] whitespace-nowrap">BUSINESS</div>
      <div className="flex flex-row items-center justify-start gap-[40px]">
        <div className="flex flex-col items-center justify-start">
          <div className="text-[18px] leading-[24px] font-['Pretendard'] text-transform-[uppercase] text-[#363636b2] text-center whitespace-nowrap">의약사업</div>
        </div>
        <div className="flex flex-col items-center justify-start">
          <div className="text-[18px] leading-[24px] font-['Pretendard'] text-transform-[uppercase] text-[#363636b2] text-center whitespace-nowrap">동물사업</div>
        </div>
        <div className="flex flex-col items-center justify-start">
          <div className="text-[18px] leading-[24px] font-['Pretendard'] text-transform-[uppercase] text-[#363636b2] text-center whitespace-nowrap">헬스케어사업</div>
        </div>
        <div className="flex flex-col items-center justify-start border-[solid] border-#2d4198 border border-[0_0_1px]">
          <div className="text-[18px] leading-[24px] font-['Pretendard'] font-semibold text-transform-[uppercase] text-[#2d4198] text-center whitespace-nowrap">식품사업</div>
        </div>
        <div className="flex flex-col items-center justify-start">
          <div className="text-[18px] leading-[24px] font-['Pretendard'] text-transform-[uppercase] text-[#363636b2] text-center whitespace-nowrap">요양 및 진단사업</div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="relative self-stretch h-[1491px] shrink-0 bg-[#fff] overflow-hidden">
    <div className="absolute -translate-x-1/2 left-[calc(50%+-457px)] top-[860px] w-[445px] flex flex-col items-start justify-start gap-[20px]">
      <div className="self-stretch text-[40px] leading-[50px] font-['Pretendard'] font-bold text-transform-[uppercase] text-[#000]">건강하고 지속가능한<br/>먹거리를 제공합니다</div>
      <div className="self-stretch text-[16px] leading-[24px] font-['Pretendard'] text-[#888] text-justify">디지털 정보로 디자인하여 대체식품을 제조하는 방식을 연구합니다.</div>
    </div>
    <div className="absolute left-[828px] top-[1010px] flex flex-row items-center justify-start gap-[21px]">
      <div className="flex flex-col items-center justify-start gap-[6px]">
        <img width="256" height="256" src={img1}></img>
        <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#000] text-center whitespace-nowrap">초미세분말</div>
      </div>
      <div className="w-[256px] shrink-0 flex flex-col items-center justify-start gap-[6px]">
        <img width="256" height="256" src={img2}></img>
        <div className="self-stretch text-[18px] leading-[24px] font-['Pretendard'] text-[#000] text-center">단백질섬유</div>
      </div>
      <div className="flex flex-col items-center justify-start gap-[6px]">
        <img width="256" height="256" src={img3}></img>
        <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#000] text-center whitespace-nowrap">대체육</div>
      </div>
    </div>
    <div className="absolute -translate-x-1/2 left-[calc(50%+276px)] top-[909px] w-[810px] h-[1px] bg-[#d9d9d9]"></div>
    <img className="absolute -translate-x-1/2 left-[calc(50%+-200px)] top-[100px]" width="960" height="600" src={img4}></img>
    <div className="absolute -translate-x-1/2 left-[calc(50%+426px)] top-[379px] w-[508px] h-[321px] flex flex-col items-start justify-start p-[50px] bg-[linear-gradient(-111.3deg,#d67d72_0%,#70423b_100%)] rounded-t-0 rounded-b">
      <div className="w-[408px] flex flex-col items-start justify-start gap-[24px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
          <div className="text-[16px] leading-[20px] font-['Montserrat'] text-[#efefef] whitespace-nowrap">HEALTHCARE</div>
          <div className="text-[54px] leading-[64px] font-['Pretendard'] font-bold text-[#fff] whitespace-nowrap">식품사업</div>
        </div>
        <div className="self-stretch text-[18px] leading-[24px] font-['Pretendard'] text-[#f8f8f8] text-justify">무엇을 먹느냐가 우리의 건강을 좌우합니다. 많은 질환들이 잘못된 식습관과 영양의 불균형으로부터 비롯됩니다. 리퓨어는 3D 프린팅 기술을 식품에 접목하여 건강하고 지속가능한 먹거리를 제공합니다.</div>
      </div>
    </div>
  </div>
  <div className="relative self-stretch h-[927px] shrink-0 bg-[#ffdfdb]">
    <div className="absolute left-[-241px] top-0 w-[2547px] h-[867px] flex">
      <div className="absolute left-0 top-[231px] w-[622px] h-[636px] flex">
        <div className="absolute left-0 top-[0px] w-[552px] h-[552px] border-[1px] border-solid border-[#e8e8e8] rounded-full"></div>
        <div className="absolute left-[292px] top-[479px] w-[139px] h-[139px] border-[1px] border-solid border-[#2f3474] rounded-full"></div>
      </div>
      <div className="absolute left-[1926px] top-0 w-[621px] h-[648px] flex">
        <div className="absolute right-[336px] top-[363px] w-[285px] h-[285px]"></div>
        <div className="absolute right-0 top-0 w-[552px] h-[552px] border-[1px] border-solid border-[#c0192d80] rounded-full"></div>
      </div>
    </div>
    <div className="absolute left-0 top-[434px] w-[1920px] h-[32px] flex">
      <div className="absolute -translate-x-1/2 left-1/2 top-[15px] w-[1920px] h-[2px] bg-[#fff]"></div>
      <img className="absolute -translate-x-1/2 left-[calc(50%+-320px)] top-0" width="32" height="32" src={img5}></img>
      <img className="absolute -translate-x-1/2 left-1/2 top-0" width="32" height="32" src={img6}></img>
      <img className="absolute -translate-x-1/2 left-[calc(50%+320px)] top-0" width="32" height="32" src={img7}></img>
    </div>
    <div className="absolute -translate-x-1/2 left-[calc(50%+-447px)] top-[100px] flex flex-col items-start justify-start gap-[24px]">
      <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
        <div className="text-[16px] leading-[20px] font-['Pretendard'] font-medium text-[#2d4198] whitespace-nowrap">대체육 제조과정</div>
        <div className="text-[36px] leading-[40px] font-['Montserrat'] font-semibold text-[#000] whitespace-nowrap">PROCESS</div>
      </div>
      <div className="text-[16px] leading-[24px] font-['Pretendard'] text-[#626262] text-justify whitespace-nowrap">디지털 모델링을 이용하여 대체 단백질 식품을 제조하는 공정을 연구합니다.</div>
    </div>
    <div className="absolute -translate-x-1/2 left-1/2 top-[321px] flex flex-row items-center justify-start gap-[80px]">
      <div className="w-[240px] shrink-0 flex flex-col items-center justify-start gap-[20px]">
        <div className="relative w-[240px] h-[240px] shrink-0 flex">
          <div className="absolute left-0 top-0 w-[240px] h-[240px] bg-[#ffffff99] border-[2px] border-solid border-[#fff] rounded-full filter-[backdrop-blur(2px)]"></div>
          <img className="absolute left-[50px] top-[72px]" width="140" height="96" src={img8}></img>
          <img className="absolute left-[59px] top-[59px]" width="8" height="42" src={img9}></img>
          <img className="absolute left-[109px] top-[150px]" width="18" height="36" src={img10}></img>
          <div className="absolute left-[69px] top-[48px] text-[18px] leading-[24px] font-['Pretendard'] text-[#eeb690] text-center whitespace-nowrap">지방</div>
          <div className="absolute left-[128px] top-[174px] text-[18px] leading-[24px] font-['Pretendard'] text-[#e05b54] text-center whitespace-nowrap">단백질</div>
          <div className="absolute left-[53px] top-[100px] w-[12px] h-[12px] bg-[#ffffff80] border-[1px] border-solid border-[#eeb791] rounded-full"></div>
          <div className="absolute left-[102px] top-[138px] w-[12px] h-[12px] bg-[#ffffff80] border-[1px] border-solid border-[#e05b54] rounded-full"></div>
        </div>
        <div className="self-stretch text-[18px] leading-[24px] font-['Pretendard'] text-[#000] text-center">정보/CAD 모델링</div>
      </div>
      <div className="w-[240px] shrink-0 flex flex-col items-center justify-start gap-[20px]">
        <img width="240" height="240" src={img11}></img>
        <div className="self-stretch text-[18px] leading-[24px] font-['Pretendard'] text-[#000] text-center">3D 프린팅</div>
      </div>
      <div className="w-[240px] shrink-0 flex flex-col items-center justify-start gap-[20px]">
        <img width="240" height="240" src={img12}></img>
        <div className="self-stretch text-[18px] leading-[24px] font-['Pretendard'] text-[#000] text-center">조직화</div>
      </div>
      <div className="w-[240px] shrink-0 flex flex-col items-center justify-start gap-[20px]">
        <img width="240" height="240" src={img13}></img>
        <div className="self-stretch text-[18px] leading-[24px] font-['Pretendard'] text-[#000] text-center">제품생산</div>
      </div>
    </div>
  </div>
   
   {/*bottom */}
   <Bottom />

    {/* top */}
    <Top />

</div>)
}

export default Food;