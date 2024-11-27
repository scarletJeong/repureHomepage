import { useState, EventHandler, ReactNode } from 'react'


import Bottom from '../../components/Bottom'
import Top from '../../components/Top'
import BusinessTitle from '../../components/BusinessTitle'

import dog1 from '../../assets/Rectangle 70188_882.png'
import dog2 from '../../assets/Rectangle 71188_885.png'
import dog3 from '../../assets/Rectangle 72188_888.png'
import dog4 from '../../assets/img_bs_animal195_1949.png'

import img1 from '../../assets/bg169_1682.png'
import img2 from '../../assets/Rectangle 73188_1093.png'
import img3 from '../../assets/image188_1109.png'
import img4 from '../../assets/image188_1126.png'
import img5 from '../../assets/image188_1130.png'
import img6 from '../../assets/image188_1143.png'
import img7 from '../../assets/image190_1155.png'
import img8 from '../../assets/image188_1147.png'
import img9 from '../../assets/image188_1151.png'
import img10 from '../../assets/image188_1134.png'
import img11 from '../../assets/image190_1159.png'
import img12 from '../../assets/image190_1183.png'
import img13 from '../../assets/image190_1188.png'




const Animal = () => {
	return (<div className="w-[1920px] flex flex-col items-start justify-start bg-[#fff] mx-auto flex flex-col items-center">
 
 {/*title */}
  {/* Business Title */}
  <BusinessTitle activeTab="동물사업" />


  <div className="relative self-stretch h-[1500px] shrink-0 bg-[#fff] overflow-hidden">
    <div className="absolute -translate-x-1/2 left-[calc(50%+-457px)] top-[860px] w-[445px] flex flex-col items-start justify-start gap-[20px]">
      <div className="self-stretch text-[40px] leading-[50px] font-['Pretendard'] font-bold text-transform-[uppercase] text-[#000]">당신의 가족이 당신 곁에서<br/>건강할 수 있도록 지원합니다</div>
      <div className="self-stretch text-[16px] leading-[24px] font-['Pretendard'] text-[#888] text-justify">여러 해외 파트너사들과 공급계약을 체결하고 의약품의 수입, 유통, 신약개발, 위탁개발 생산 등의 사업을 진행하고 있습니다.</div>
    </div>
    <div className="absolute -translate-x-1/2 left-[calc(50%+273px)] top-[1010px] flex flex-row items-center justify-start gap-[21px]">
      <div className="flex flex-col items-center justify-start gap-[6px]">
        <img width="256" height="256" src={dog1}></img>
        <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#000] text-center whitespace-nowrap">의약품/의약부외품 수입 유통</div>
      </div>
      <div className="flex flex-col items-center justify-start gap-[6px]">
        <img width="256" height="256" src={dog2}></img>
        <div className="self-stretch text-[18px] leading-[24px] font-['Pretendard'] text-[#000] text-center">동물 식품 수입 유통</div>
      </div>
      <div className="flex flex-col items-center justify-start gap-[6px]">
        <img width="256" height="256" src={dog3}></img>
        <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#000] text-center whitespace-nowrap">동물 의료기기 수입 유통</div>
      </div>
    </div>
    <div className="absolute -translate-x-1/2 left-[calc(50%+276px)] top-[909px] w-[810px] h-[1px] bg-[#d9d9d9]"></div>
    <img className="absolute -translate-x-1/2 left-[calc(50%+-200px)] top-[100px]" width="960" height="600" src={dog4}></img>
    <div className="absolute -translate-x-1/2 left-[calc(50%+426px)] top-[379px] w-[508px] h-[321px] flex flex-col items-start justify-start p-[50px] bg-[linear-gradient(68.23deg,#3b312b_0%,#a18774_100%)] rounded-t-0 rounded-b">
      <div className="w-[408px] flex flex-col items-start justify-start gap-[24px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
          <div className="text-[16px] leading-[20px] font-['Montserrat'] text-[#efefef] whitespace-nowrap">ANIMAL</div>
          <div className="text-[54px] leading-[64px] font-['Pretendard'] font-bold text-[#fff] whitespace-nowrap">동물사업</div>
        </div>
        <div className="self-stretch text-[18px] leading-[24px] font-['Pretendard'] text-[#f5f5f5] text-justify">개와 고양이는 더이상 우리를 즐겁게 해주는 애완동물이 아니라 여생을 함께하는 반려동물이 되었습니다. 리퓨어는 반려동물이 건강하게 우리 곁에 머무를 수 있도록 정확한 진단을 바탕으로 동물의약품과 식품, 서비스를 제공합니다.</div>
      </div>
    </div>
  </div>
  <div className="relative self-stretch h-[943px] shrink-0 bg-[#f2f2f2]">
    <img className="absolute left-[-14px] top-0" width="1947" height="1005" src={img1}></img>
    <div className="absolute -translate-x-1/2 left-1/2 top-[276px] w-[880px] flex flex-wrap items-start justify-start gap-[20px]">
      <div className="relative w-[160px] h-[160px] shrink-0">
        <img className="absolute left-0 top-0" width="160" height="160" src={img2}></img>
        <div className="absolute left-0 top-[120px] w-[160px] h-[40px] flex flex-row items-center justify-center py-[10px] px-[47px] bg-[#8db343]">
          <div className="text-[14px] leading-[20px] font-['Pretendard'] text-[#fff] text-justify whitespace-nowrap">린스(보습)</div>
        </div>
      </div>
      <div className="relative w-[160px] h-[160px] shrink-0">
        <img className="absolute left-0 top-0" width="160" height="160" src={img3}></img>
        <div className="absolute left-0 top-[120px] w-[160px] h-[40px] flex flex-row items-center justify-center py-[10px] px-[22px] bg-[#8db343]">
          <div className="text-[14px] leading-[20px] font-['Pretendard'] text-[#fff] text-justify whitespace-nowrap">샴푸(세정)</div>
        </div>
      </div>
      <div className="relative w-[160px] h-[160px] shrink-0">
        <img className="absolute left-0 top-0" width="160" height="160" src={img4}></img>
        <div className="absolute left-0 top-[120px] w-[160px] h-[40px] flex flex-row items-center justify-center py-[10px] px-[55px] bg-[#8db343]">
          <div className="text-[14px] leading-[20px] font-['Pretendard'] text-[#fff] text-justify whitespace-nowrap">피부보습제(건조,가려움)</div>
        </div>
      </div>
      <div className="relative w-[160px] h-[160px] shrink-0">
        <img className="absolute left-0 top-0" width="160" height="160" src={img5}></img>
        <div className="absolute left-0 top-[120px] w-[160px] h-[40px] flex flex-row items-center justify-center py-[10px] px-[55px] bg-[#8db343]">
          <div className="text-[14px] leading-[20px] font-['Pretendard'] text-[#fff] text-justify whitespace-nowrap">샴푸(건조,가려움)</div>
        </div>
      </div>
      <div className="relative w-[160px] h-[160px] shrink-0">
        <img className="absolute left-0 top-0" width="160" height="160" src={img6}></img>
        <div className="absolute left-0 top-[120px] w-[160px] h-[40px] flex flex-row items-center justify-center py-[10px] px-[55px] bg-[#8db343]">
          <div className="text-[14px] leading-[20px] font-['Pretendard'] text-[#fff] text-justify whitespace-nowrap">구강향균</div>
        </div>
      </div>
      <div className="relative w-[160px] h-[160px] shrink-0">
        <img className="absolute left-0 top-0" width="160" height="160" src={img7}></img>
        <div className="absolute left-0 top-[120px] w-[160px] h-[40px] flex flex-row items-center justify-center py-[10px] px-[55px] bg-[#8db343]">
          <div className="text-[14px] leading-[20px] font-['Pretendard'] text-[#fff] text-justify whitespace-nowrap">치석제거</div>
        </div>
      </div>
      <div className="relative w-[160px] h-[160px] shrink-0">
        <img className="absolute left-0 top-0" width="160" height="160" src={img8}></img>
        <div className="absolute left-0 top-[120px] w-[160px] h-[40px] flex flex-row items-center justify-center py-[10px] px-[55px] bg-[#8db343]">
          <div className="text-[14px] leading-[20px] font-['Pretendard'] text-[#fff] text-justify whitespace-nowrap">귀청소제(일반)</div>
        </div>
      </div>
      <div className="relative w-[160px] h-[160px] shrink-0">
        <img className="absolute left-0 top-0" width="160" height="160" src={img9}></img>
        <div className="absolute left-0 top-[120px] w-[160px] h-[40px] flex flex-row items-center justify-center py-[10px] px-[55px] bg-[#8db343]">
          <div className="text-[14px] leading-[20px] font-['Pretendard'] text-[#fff] text-justify whitespace-nowrap">귀청소제(귀지제거)</div>
        </div>
      </div>
      <div className="relative w-[160px] h-[160px] shrink-0">
        <img className="absolute left-0 top-0" width="160" height="160" src={img10}></img>
        <div className="absolute left-0 top-[120px] w-[160px] h-[40px] flex flex-row items-center justify-center py-[10px] px-[55px] bg-[#8db343]">
          <div className="text-[14px] leading-[20px] font-['Pretendard'] text-[#fff] text-justify whitespace-nowrap">귀청소제(향균)</div>
        </div>
      </div>
      <div className="relative w-[160px] h-[160px] shrink-0">
        <img className="absolute left-0 top-0" width="160" height="160" src={img11}></img>
        <div className="absolute left-0 top-[120px] w-[160px] h-[40px] flex flex-row items-center justify-center py-[10px] px-[55px] bg-[#8db343]">
          <div className="text-[14px] leading-[20px] font-['Pretendard'] text-[#fff] text-justify whitespace-nowrap">귀청소제(치료전)</div>
        </div>
      </div>
      <div className="relative w-[160px] h-[160px] shrink-0">
        <img className="absolute left-0 top-0" width="160" height="160" src={img12}></img>
        <div className="absolute left-[52px] top-[53px] text-[32px] leading-[32px] font-['Pretendard'] font-semibold text-[#ffffffe5] text-justify whitespace-nowrap">+23</div>
        <div className="absolute left-0 top-[120px] w-[160px] h-[40px] flex flex-row items-center justify-center py-[10px] px-[55px] bg-[#e4b183]">
          <div className="text-[14px] leading-[20px] font-['Pretendard'] text-[#fff] text-justify whitespace-nowrap">강아지 처방사료</div>
        </div>
      </div>
      <div className="relative w-[160px] h-[160px] shrink-0">
        <img className="absolute left-0 top-0" width="160" height="160" src={img13}></img>
        <div className="absolute left-[56px] top-[53px] text-[32px] leading-[32px] font-['Pretendard'] font-semibold text-[#ffffffe5] text-justify whitespace-nowrap">+13</div>
        <div className="absolute left-0 top-[120px] w-[160px] h-[40px] flex flex-row items-center justify-center py-[10px] px-[55px] bg-[#e4b183]">
          <div className="text-[14px] leading-[20px] font-['Pretendard'] text-[#fff] text-justify whitespace-nowrap">고양이 처방사료</div>
        </div>
      </div>
    </div>
    <div className="absolute -translate-x-1/2 left-1/2 top-[100px] flex flex-col items-center justify-start gap-[4px]">
      <div className="text-[16px] leading-[20px] font-['Pretendard'] font-medium text-[#000] whitespace-nowrap">리퓨어 보유 제품</div>
      <div className="text-[54px] font-['Pretendard'] font-extrabold text-[#000] text-center whitespace-nowrap">보유한 동물 Product</div>
      <div className="text-[16px] leading-[24px] font-['Pretendard'] text-[#888] text-justify whitespace-nowrap">피부, 구강, 귀 등 위생관리를 위한 의약부외품 10개와 연령/질환별 처방사료 총36개를 보유하고 있습니다.</div>
    </div>
  </div>
  <div className="relative self-stretch h-[1005px] shrink-0 bg-[#fff]">
    <div className="absolute left-0 top-[388px] w-[1920px] h-[1px] bg-[#2d4198]"></div>
    <div className="absolute -translate-x-1/2 left-[calc(50%+-459px)] top-[200px] flex flex-col items-start justify-start gap-[24px]">
      <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
        <div className="text-[16px] leading-[20px] font-['Pretendard'] font-medium text-[#2d4198] whitespace-nowrap">보유 동물의약품</div>
        <div className="text-[36px] leading-[40px] font-['Montserrat'] font-semibold text-[#000] whitespace-nowrap">MEDICINE LIST</div>
      </div>
      <div className="text-[16px] leading-[24px] font-['Pretendard'] text-[#888] text-justify whitespace-nowrap">개 쿠싱병 치료제를 포함한 13종 반려동물 치료제를 보유하고 있습니다.</div>
    </div>
    <div className="absolute -translate-x-1/2 left-[calc(50%+-510px)] top-[372px] w-[340px] flex flex-col items-center justify-start gap-[20px]">
      <div className="flex flex-row items-center justify-center py-[6px] px-[15px] bg-[#fff] border-[2px] border-solid border-[#2d4198] rounded-[50px]">
        <div className="text-[14px] leading-[20px] font-['Pretendard'] font-medium text-[#2d4198] whitespace-nowrap">내분비치료</div>
      </div>
      <div className="flex flex-col items-start justify-center gap-[4px]">
        <div className="h-[32px] shrink-0 flex flex-row items-center justify-start gap-[20px]">
          <div className="text-[20px] leading-[24px] font-['Montserrat'] font-bold text-[#000] text-justify whitespace-nowrap">Vetoryl</div>
          <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#414141] text-justify whitespace-nowrap">부신피질기능항진증</div>
        </div>
        <div className="h-[32px] shrink-0 flex flex-row items-center justify-start gap-[20px]">
          <div className="text-[20px] leading-[24px] font-['Montserrat'] font-bold text-[#000] text-justify whitespace-nowrap">Zycortal</div>
          <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#414141] text-justify whitespace-nowrap">부신피질기능저하증</div>
        </div>
        <div className="h-[32px] shrink-0 flex flex-row items-center justify-start gap-[20px]">
          <div className="text-[20px] leading-[24px] font-['Montserrat'] font-bold text-[#000] text-justify whitespace-nowrap">Thyforon</div>
          <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#414141] text-justify whitespace-nowrap">갑상선기능저하증</div>
        </div>
        <div className="h-[32px] shrink-0 flex flex-row items-center justify-start gap-[20px]">
          <div className="text-[20px] leading-[24px] font-['Montserrat'] font-bold text-[#000] text-justify whitespace-nowrap">Felimazole</div>
          <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#414141] text-justify whitespace-nowrap">갑상선기능항진증</div>
        </div>
      </div>
    </div>
    <div className="absolute -translate-x-1/2 left-[calc(50%+170px)] top-[372px] w-[340px] flex flex-col items-center justify-start gap-[20px]">
      <div className="flex flex-row items-center justify-center py-[6px] px-[15px] bg-[#fff] border-[2px] border-solid border-[#2d4198] rounded-[50px]">
        <div className="text-[14px] leading-[20px] font-['Pretendard'] font-medium text-[#2d4198] whitespace-nowrap">심장/눈 치료</div>
      </div>
      <div className="flex flex-col items-start justify-center gap-[4px]">
        <div className="h-[32px] shrink-0 flex flex-row items-center justify-start gap-[20px]">
          <div className="text-[20px] leading-[24px] font-['Montserrat'] font-bold text-[#000] text-justify whitespace-nowrap">Cadisure</div>
          <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#414141] text-justify whitespace-nowrap">울혈성심부전증</div>
        </div>
        <div className="flex flex-col items-start justify-center">
          <div className="h-[32px] shrink-0 flex flex-row items-center justify-start gap-[20px]">
            <div className="text-[20px] leading-[24px] font-['Montserrat'] font-bold text-[#000] text-justify whitespace-nowrap">Isathal</div>
            <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#414141] text-justify whitespace-nowrap">결막염</div>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute -translate-x-1/2 left-[calc(50%+510px)] top-[372px] w-[340px] flex flex-col items-center justify-start gap-[20px]">
      <div className="flex flex-row items-center justify-center py-[6px] px-[15px] bg-[#fff] border-[2px] border-solid border-[#2d4198] rounded-[50px]">
        <div className="text-[14px] leading-[20px] font-['Pretendard'] font-medium text-[#2d4198] whitespace-nowrap">수술/관절 치료</div>
      </div>
      <div className="flex flex-col items-start justify-center gap-[4px]">
        <div className="h-[32px] shrink-0 flex flex-row items-center justify-start gap-[20px]">
          <div className="text-[20px] leading-[24px] font-['Montserrat'] font-bold text-[#000] text-justify whitespace-nowrap">Sedator</div>
          <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#414141] text-justify whitespace-nowrap">진정제</div>
        </div>
        <div className="h-[32px] shrink-0 flex flex-row items-center justify-start gap-[20px]">
          <div className="text-[20px] leading-[24px] font-['Montserrat'] font-bold text-[#000] text-justify whitespace-nowrap">Atipam</div>
          <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#414141] text-justify whitespace-nowrap">마취각성제</div>
        </div>
        <div className="flex flex-col items-start justify-center">
          <div className="h-[32px] shrink-0 flex flex-row items-center justify-start gap-[20px]">
            <div className="text-[20px] leading-[24px] font-['Montserrat'] font-bold text-[#000] text-justify whitespace-nowrap">Prevomax</div>
            <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#414141] text-justify whitespace-nowrap">구토억제제</div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center">
          <div className="h-[32px] shrink-0 flex flex-row items-center justify-start gap-[20px]">
            <div className="text-[20px] leading-[24px] font-['Montserrat'] font-bold text-[#000] text-justify whitespace-nowrap">Phycox</div>
            <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#414141] text-justify whitespace-nowrap">관절보조제</div>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute -translate-x-1/2 left-[calc(50%+-170px)] top-[372px] w-[340px] flex flex-col items-center justify-start gap-[20px]">
      <div className="flex flex-row items-center justify-center py-[6px] px-[15px] bg-[#fff] border-[2px] border-solid border-[#2d4198] rounded-[50px]">
        <div className="text-[14px] leading-[20px] font-['Pretendard'] font-medium text-[#2d4198] whitespace-nowrap">피부질환치료</div>
      </div>
      <div className="flex flex-col items-start justify-center gap-[4px]">
        <div className="h-[32px] shrink-0 flex flex-row items-center justify-start gap-[20px]">
          <div className="text-[20px] leading-[24px] font-['Montserrat'] font-bold text-[#000] text-justify whitespace-nowrap">Canaural</div>
          <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#414141] text-justify whitespace-nowrap">감염성외이도</div>
        </div>
        <div className="h-[32px] shrink-0 flex flex-row items-center justify-start gap-[20px]">
          <div className="text-[20px] leading-[24px] font-['Montserrat'] font-bold text-[#000] text-justify whitespace-nowrap">Isaderm</div>
          <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#414141] text-justify whitespace-nowrap">아토피, 감염증, 피부염</div>
        </div>
        <div className="h-[32px] shrink-0 flex flex-row items-center justify-start gap-[20px]">
          <div className="text-[20px] leading-[24px] font-['Montserrat'] font-bold text-[#000] text-justify whitespace-nowrap">Redonyl ultra</div>
          <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#414141] text-justify whitespace-nowrap">피부영양제</div>
        </div>
      </div>
    </div>
  </div>

    {/*bottom */}
    <Bottom />

    {/* top */}
    <Top />
    

</div>)
}

export default Animal;