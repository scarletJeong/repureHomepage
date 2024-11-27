import { useState, EventHandler, ReactNode } from 'react'

import Bottom from '../../components/Bottom'
import Top from '../../components/Top'
import BusinessTitle from '../../components/BusinessTitle'

import img1 from '../../assets/Rectangle 70195_2143.png'
import img2 from '../../assets/Rectangle 71195_2146.png'
import img3 from '../../assets/Rectangle 72195_2149.png'
import img4 from '../../assets/Rectangle 70195_2326.png'
import img5 from '../../assets/Rectangle 71195_2329.png'
import img6 from '../../assets/Rectangle 72195_2332.png'
import img7 from '../../assets/img_bs_diagnostic195_2152.png'


const Dig = () => {
	return (<div className="w-[1920px] flex flex-col items-start justify-start bg-[#fff] mx-auto flex flex-col items-center">

  {/*title */}
  {/* Business Title */}
  <BusinessTitle activeTab="요양 및 진단사업" />


  <div className="relative self-stretch h-[2064px] shrink-0 bg-[#fff] overflow-hidden">
    <div className="absolute -translate-x-1/2 left-[calc(50%+454px)] top-[1496px] flex flex-col items-end justify-start gap-[20px]">
      <div className="text-[40px] leading-[50px] font-['Pretendard'] font-bold text-transform-[uppercase] text-[#000] text-right whitespace-nowrap">첨단 IOT기술 활용한<br/>새로운 단계의<br/>노후생활을 제안합니다</div>
      <div className="text-[16px] leading-[24px] font-['Pretendard'] text-[#888] text-right whitespace-nowrap">IOT 기반의 시설과 장비를 통해 환자들은 편리한 생활을 누릴 뿐만 아니라<br/>자신의 건강 상태를 관리하는 데에 도움을 받을 수 있습니다.<br/>리퓨어는 첨단 기술을 통해 요양산업의 새로운 패러다임을 제시합니다. </div>
    </div>
    <div className="absolute left-[828px] top-[1010px] flex flex-row items-center justify-start gap-[21px]">
      <div className="flex flex-col items-center justify-start gap-[6px]">
        <img width="256" height="256" src={img1}></img>
        <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#000] text-center whitespace-nowrap">유전자 검사</div>
      </div>
      <div className="w-[256px] shrink-0 flex flex-col items-center justify-start gap-[6px]">
        <img width="256" height="256" src={img2}></img>
        <div className="self-stretch text-[18px] leading-[24px] font-['Pretendard'] text-[#000] text-center">다중오믹스 플랫폼</div>
      </div>
      <div className="flex flex-col items-center justify-start gap-[6px]">
        <img width="256" height="256" src={img3}></img>
        <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#000] text-center whitespace-nowrap">진단 시약 기기</div>
      </div>
    </div>
    <div className="absolute -translate-x-1/2 left-[calc(50%+-281px)] top-[1558px] flex flex-row items-center justify-start gap-[21px]">
      <div className="flex flex-col items-center justify-start">
        <img width="256" height="256" src={img4}></img>
      </div>
      <div className="w-[256px] shrink-0 flex flex-col items-center justify-start">
        <img width="256" height="256" src={img5}></img>
      </div>
      <div className="flex flex-col items-center justify-start">
        <img width="256" height="256" src={img6}></img>
      </div>
    </div>
    <div className="absolute -translate-x-1/2 left-[calc(50%+-457px)] top-[860px] w-[445px] flex flex-col items-start justify-start gap-[20px]">
      <div className="self-stretch text-[40px] leading-[50px] font-['Pretendard'] font-bold text-transform-[uppercase] text-[#000]">신속 정확한 진단으로<br/>건강을 책임집니다</div>
      <div className="self-stretch text-[16px] leading-[24px] font-['Pretendard'] text-[#888] text-justify">정확한 진단은 오진을 줄이고 병증에 신속하게 대처할 수 있게 합니다.<br/>리퓨어는 정확한 진단으로 예방과 치료에 앞장설 수 있도록 유전자 및 오믹스 기반 키드 개발, 휴대용 진단기기 개발을 예정하고 있습니다.</div>
    </div>
    <div className="absolute -translate-x-1/2 left-[calc(50%+276px)] top-[909px] w-[810px] h-[1px] bg-[#d9d9d9]"></div>
    <img className="absolute -translate-x-1/2 left-[calc(50%+-200px)] top-[100px]" width="960" height="600" src={img7}></img>
    <div className="absolute -translate-x-1/2 left-[calc(50%+426px)] top-[379px] w-[508px] h-[321px] flex flex-col items-start justify-start p-[50px] bg-[linear-gradient(-111.52deg,#825ca7_0%,#332441_100%)] rounded-t-0 rounded-b">
      <div className="w-[408px] flex flex-col items-start justify-start gap-[24px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
          <div className="text-[16px] leading-[20px] font-['Montserrat'] text-[#efefef] whitespace-nowrap">DIAGNOSTIC</div>
          <div className="w-[352px] text-[54px] leading-[64px] font-['Pretendard'] font-bold text-[#fff]">요양 및 진단사업</div>
        </div>
        <div className="self-stretch text-[18px] leading-[24px] font-['Pretendard'] text-[#f8f8f8] text-justify">치료와 예방의 시작은 진단에서부터 시작됩니다. <br/>리퓨어는 신속하고 정확한 진단으로 치료 및 예방 골든타임을 놓치지 않도록 여러 검사로 인류의 건강을 책입집니다.</div>
      </div>
    </div>
  </div>

   {/*bottom */}
   <Bottom />

    {/* top */}
    <Top />

</div>
)
}

export default Dig;