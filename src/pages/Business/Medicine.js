import { useState, EventHandler, ReactNode } from 'react'

import Bottom from '../../components/Bottom'
import Top from '../../components/Top'
import BusinessTitle from '../../components/BusinessTitle'

import hand from '../../assets/img_bs_medicine195_1957.png'
import medi1 from '../../assets/Rectangle 70184_561.png'
import medi2 from '../../assets/Rectangle 71184_562.png'
import medi3 from '../../assets/Rectangle 72184_563.png'


const Medicine = () => {
	return (<div className="w-[1920px] flex flex-col items-start justify-start bg-[#fff] overflow-hidden">
  
  {/*title */}
  {/* Business Title */}
  <BusinessTitle activeTab="의약사업" />



  <div className="relative self-stretch h-[2054px] shrink-0 bg-[#fff] overflow-hidden">
    <div className="absolute left-0 top-[1724px] w-[1920px] h-[1px] bg-[#2d4198] opacity-[.6]"></div>
    <div className="absolute -translate-x-1/2 left-1/2 top-[1708px] flex flex-row items-start justify-start">
      <div className="w-[453px] shrink-0 flex flex-col items-center justify-start gap-[20px]">
        <div className="flex flex-row items-center justify-center py-[6px] px-[15px] bg-[#fff] border-[2px] border-solid border-[#2d4198] rounded-[50px]">
          <div className="text-[14px] leading-[20px] font-['Pretendard'] font-medium text-[#2d4198] whitespace-nowrap">혈액종양 질환</div>
        </div>
        <div className="flex flex-col items-start justify-center gap-[4px]">
          <div className="h-[32px] shrink-0 flex flex-row items-center justify-start gap-[20px]">
            <div className="text-[20px] leading-[24px] font-['Montserrat'] font-bold text-[#000] text-justify whitespace-nowrap">Trisenox</div>
            <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#414141] text-justify whitespace-nowrap">APL(급성전골수세포백혈병)</div>
          </div>
          <div className="h-[32px] shrink-0 flex flex-row items-center justify-start gap-[20px]">
            <div className="text-[20px] leading-[24px] font-['Montserrat'] font-bold text-[#000] text-justify whitespace-nowrap">Lysodren</div>
            <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#414141] text-justify whitespace-nowrap">부신피질암종</div>
          </div>
        </div>
      </div>
      <div className="w-[453px] shrink-0 flex flex-col items-center justify-start gap-[20px]">
        <div className="flex flex-row items-center justify-center py-[6px] px-[15px] bg-[#fff] border-[2px] border-solid border-[#2d4198] rounded-[50px]">
          <div className="text-[14px] leading-[20px] font-['Pretendard'] font-medium text-[#2d4198] whitespace-nowrap">소화기/류마티스 질환</div>
        </div>
        <div className="flex flex-col items-start justify-center gap-[4px]">
          <div className="h-[32px] shrink-0 flex flex-row items-center justify-start gap-[20px]">
            <div className="text-[20px] leading-[24px] font-['Montserrat'] font-bold text-[#000] text-justify whitespace-nowrap">Mutaflor capsule</div>
            <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#414141] text-justify whitespace-nowrap">APL(급성전골수세포백혈병)</div>
          </div>
          <div className="h-[32px] shrink-0 flex flex-row items-center justify-start gap-[20px]">
            <div className="text-[20px] leading-[24px] font-['Montserrat'] font-bold text-[#000] text-justify whitespace-nowrap">Mutaflor suspension</div>
            <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#414141] text-justify whitespace-nowrap">부신피질암종</div>
          </div>
        </div>
      </div>
      <div className="w-[453px] shrink-0 flex flex-col items-center justify-start gap-[20px]">
        <div className="flex flex-row items-center justify-center py-[6px] px-[15px] bg-[#fff] border-[2px] border-solid border-[#2d4198] rounded-[50px]">
          <div className="text-[14px] leading-[20px] font-['Pretendard'] font-medium text-[#2d4198] whitespace-nowrap">귀 질환</div>
        </div>
        <div className="flex flex-col items-start justify-center">
          <div className="h-[32px] shrink-0 flex flex-row items-center justify-start gap-[20px]">
            <div className="text-[20px] leading-[24px] font-['Montserrat'] font-bold text-[#000] text-justify whitespace-nowrap">Cetraxal</div>
            <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#414141] text-justify whitespace-nowrap">급성 외이염</div>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute -translate-x-1/2 left-[calc(50%+-495px)] top-[1496px] flex flex-col items-start justify-start gap-[24px]">
      <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
        <div className="text-[16px] leading-[20px] font-['Pretendard'] font-medium text-[#2d4198] whitespace-nowrap">공급 의약품</div>
        <div className="text-[36px] leading-[40px] font-['Montserrat'] font-semibold text-[#000] whitespace-nowrap">MEDICINE LIST</div>
      </div>
      <div className="text-[16px] leading-[24px] font-['Pretendard'] text-[#888] text-justify whitespace-nowrap">희귀 의약품을 포함한 총5개의 의약품을 공급하고 있습니다.</div>
    </div>
    <div className="absolute -translate-x-1/2 left-[calc(50%+273px)] top-[1010px] flex flex-row items-center justify-start gap-[21px]">
      <div className="flex flex-col items-center justify-start gap-[6px]">
        <img width="256" height="256" src={medi1}></img>
        <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#000] text-center whitespace-nowrap">의약품 수입 유통</div>
      </div>
      <div className="w-[256px] shrink-0 flex flex-col items-center justify-start gap-[6px]">
        <img width="256" height="256" src={medi2}></img>
        <div className="self-stretch text-[18px] leading-[24px] font-['Pretendard'] text-[#000] text-center">신약 개발</div>
      </div>
      <div className="flex flex-col items-center justify-start gap-[6px]">
        <img width="256" height="256" src={medi3}></img>
        <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#000] text-center whitespace-nowrap">위탁 개발 생산</div>
      </div>
    </div>
    <div className="absolute -translate-x-1/2 left-[calc(50%+-488px)] top-[860px] flex flex-col items-start justify-start gap-[20px]">
      <div className="w-[383px] text-[40px] leading-[50px] font-['Pretendard'] font-bold text-transform-[uppercase] text-[#000]">누구나 치료받을 수 있는 세상을 만들어 나갑니다</div>
      <div className="w-[383px] text-[16px] leading-[24px] font-['Pretendard'] text-[#888] text-justify">여러 파트너사들과 공급계약을 체결하고 의약품의 수입, 유통, 신약개발, 위탁개발 생산 등의 사업을 진행하고 있습니다.</div>
    </div>
    <div className="absolute -translate-x-1/2 left-[calc(50%+276px)] top-[909px] w-[810px] h-[1px] bg-[#d9d9d9]"></div>
    <img className="absolute -translate-x-1/2 left-[calc(50%+-200px)] top-[100px]" width="960" height="600" src={hand}></img>
    <div className="absolute -translate-x-1/2 left-[calc(50%+426px)] top-[379px] w-[508px] h-[321px] flex flex-col items-start justify-start p-[50px] bg-[linear-gradient(-111.09deg,#859c93_0%,#2e3633_100%)] rounded-t-0 rounded-b">
      <div className="w-[408px] flex flex-col items-start justify-start gap-[24px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
          <div className="text-[16px] leading-[20px] font-['Montserrat'] text-[#efefef] whitespace-nowrap">MEDICINE</div>
          <div className="text-[54px] leading-[64px] font-['Pretendard'] font-bold text-[#fff] whitespace-nowrap">의약사업</div>
        </div>
        <div className="self-stretch text-[18px] leading-[24px] font-['Pretendard'] text-[#bfbfbf] text-justify">수많은 사람들이 난치병과 희귀질환으로 고통 받고 있지만 희귀질환을 진단하는 것은 쉽지 않을 뿐더러 치료제를 구하는 것은 더더욱 어렵습니다. 리퓨어는 환자의 아픔과 고통을 이해하고 해결하기 위해 최선을 다할 것입니다.</div>
      </div>
    </div>
  </div>

  {/*bottom */}
  <Bottom />

  {/* top */}
  <Top />
  


</div>)
}

export default Medicine;