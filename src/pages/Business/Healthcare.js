import { useState, EventHandler, ReactNode } from 'react'

import Bottom from '../../components/Bottom'
import Top from '../../components/Top'

import img1 from '../../assets/Rectangle 70190_1218.png'
import img2 from '../../assets/Rectangle 71190_1221.png'
import img3 from '../../assets/Rectangle 72190_1224.png'
import img4 from '../../assets/panel3.png'
import img5 from '../../assets/bg190_1292.png'
import img6 from '../../assets/Group 27198_9720.png'
import img7 from '../../assets/Group 27198_9760.png'
import img8 from '../../assets/Group 27198_9772.png'
import img9 from '../../assets/Group 28198_9929.png'
import img10 from '../../assets/Group 29198_9930.png'



const Healthcare = () => {
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
        <div className="flex flex-col items-center justify-start border-[solid] border-#2d4198 border border-[0_0_1px]">
          <div className="text-[18px] leading-[24px] font-['Pretendard'] font-semibold text-transform-[uppercase] text-[#2d4198] text-center whitespace-nowrap">헬스케어사업</div>
        </div>
        <div className="flex flex-col items-center justify-start">
          <div className="text-[18px] leading-[24px] font-['Pretendard'] text-transform-[uppercase] text-[#363636b2] text-center whitespace-nowrap">식품사업</div>
        </div>
        <div className="flex flex-col items-center justify-start">
          <div className="text-[18px] leading-[24px] font-['Pretendard'] text-transform-[uppercase] text-[#363636b2] text-center whitespace-nowrap">요양 및 진단사업</div>
        </div>
      </div>
    </div>
  </div>


  <div className="relative self-stretch h-[1500px] shrink-0 bg-[#fff] overflow-hidden">
    <div className="absolute left-[828px] top-[1010px] flex flex-row items-center justify-start gap-[21px]">
      <div className="flex flex-col items-center justify-start gap-[6px]">
        <img width="256" height="256" src={img1}></img>
        <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#000] text-center whitespace-nowrap">질환관리 플랫폼</div>
      </div>
      <div className="w-[256px] shrink-0 flex flex-col items-center justify-start gap-[6px]">
        <img width="256" height="256" src={img2}></img>
        <div className="self-stretch text-[18px] leading-[24px] font-['Pretendard'] text-[#000] text-center">원격진료 플랫폼</div>
      </div>
      <div className="flex flex-col items-center justify-start gap-[6px]">
        <img width="256" height="256" src={img3}></img>
        <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#000] text-center whitespace-nowrap">디지털치료제</div>
      </div>
    </div>
    <div className="absolute -translate-x-1/2 left-[calc(50%+276px)] top-[909px] w-[810px] h-[1px] bg-[#d9d9d9]"></div>
    <div className="absolute -translate-x-1/2 left-[calc(50%+-457px)] top-[860px] w-[445px] flex flex-col items-start justify-start gap-[20px]">
      <div className="self-stretch text-[40px] leading-[50px] font-['Pretendard'] font-bold text-transform-[uppercase] text-[#000]">스마트한 건강관리로<br/>삶의 질을 높입니다</div>
      <div className="self-stretch text-[16px] leading-[24px] font-['Pretendard'] text-[#888] text-justify">리퓨어는 의료 네트워크를 활용하여 복약, 운동, 식이, 생활 습관 전반에 대한 통합 멘토링을 제공합니다.</div>
    </div>
    <img className="absolute -translate-x-1/2 left-[calc(50%+-200px)] top-[100px]" width="960" height="600" src={img4}></img>
    <div className="absolute -translate-x-1/2 left-[calc(50%+426px)] top-[379px] w-[508px] h-[321px] flex flex-col items-start justify-start p-[50px] bg-[linear-gradient(68.23deg,#555057_0%,#826a8e_100%)] rounded-t-0 rounded-b">
      <div className="w-[408px] flex flex-col items-start justify-start gap-[24px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
          <div className="text-[16px] leading-[20px] font-['Montserrat'] text-[#efefef] whitespace-nowrap">HEALTHCARE</div>
          <div className="text-[54px] leading-[64px] font-['Pretendard'] font-bold text-[#fff] whitespace-nowrap">헬스케어사업</div>
        </div>
        <div className="self-stretch text-[18px] leading-[24px] font-['Pretendard'] text-[#bfbfbf] text-justify">고령화와 잘못된 생활습관으로 인해 매해 만성질환자의 수와 의료비용이 증가하고 있습니다. 이에 리퓨어는 ICT기술과 의료 네트워크를 활용하여 지속가능한 헬스케어 서비스를 제공합니다.</div>
      </div>
    </div>
  </div>
  <div className="relative self-stretch h-[927px] shrink-0 bg-[#f2f2f2]">
    <img className="absolute left-0 top-0" width="1920" height="927" src={img5}></img>
    <div className="absolute -translate-x-1/2 left-1/2 top-[437px] w-[502px] h-[2px] bg-[#fff]"></div>
    <div className="absolute -translate-x-1/2 left-1/2 top-[100px] flex flex-col items-center justify-start gap-[4px]">
      <div className="text-[16px] leading-[20px] font-['Pretendard'] font-medium text-[#000] whitespace-nowrap">리퓨어가 준비중인 헬스케어플랫폼</div>
      <div className="text-[54px] font-['Pretendard'] font-extrabold text-[#000] text-center whitespace-nowrap">순수한 건강을 위해 Pure, WithMe</div>
      <div className="text-[16px] leading-[24px] font-['Pretendard'] text-[#5f5f5f] text-center whitespace-nowrap">의료인과 만성질환자를 온라인으로 연결해주는 플랫폼으로 만성질환자에게 필요한 <br/>복약, 건강기능식품, 운동, 식이 등에 대한 종합적인 관리 서비스 제공</div>
    </div>
    <div className="absolute left-[570px] top-[340px] w-[780px] h-[200px] flex">
      <div className="absolute -translate-x-1/2 left-1/2 top-0 w-[200px] h-[200px] flex flex-col items-center justify-start">
        <img width="200" height="200" src={img6}></img>
      </div>
      <div className="absolute -translate-x-1/2 left-[calc(50%+-320px)] top-[30px] flex flex-col items-center justify-start">
        <img width="140" height="140" src={img7}></img>
      </div>
      <div className="absolute -translate-x-1/2 left-[calc(50%+320px)] top-[30px] flex flex-col items-center justify-start">
        <img width="140" height="140" src={img8}></img>
      </div>
      <div className="absolute -translate-x-1/2 left-[calc(50%+174px)] top-[119px] text-[14px] leading-[20px] font-['Pretendard'] font-semibold text-[#3994ff] text-center whitespace-nowrap">의료인 멘토링</div>
      <div className="absolute -translate-x-1/2 left-[calc(50%+-175px)] top-[119px] text-[14px] leading-[20px] font-['Pretendard'] font-semibold text-[#3994ff] text-center whitespace-nowrap">환자 모니터링</div>
    </div>
    <div className="absolute -translate-x-1/2 left-[calc(50%+-518px)] top-[620px] w-[340px] flex flex-col items-start justify-start gap-[20px] py-0 px-[80px]">
      <div className="flex flex-row items-center justify-center py-[6px] px-[15px] bg-[#ffffff66] border-[2px] border-solid border-[#3994ff] rounded-[50px]">
        <div className="text-[14px] leading-[20px] font-['Pretendard'] font-medium text-[#3994ff] whitespace-nowrap">복약 관리</div>
      </div>
      <div className="flex flex-col items-start justify-center gap-[10px]">
        <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#414141] text-justify whitespace-nowrap">약물 - 약물 상호작용 관리</div>
        <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#414141] text-justify whitespace-nowrap">약물 - 음식 상호작용 관리</div>
        <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#414141] text-justify whitespace-nowrap">약물 지속 복용 관리</div>
      </div>
    </div>
    <div className="absolute -translate-x-1/2 left-[calc(50%+-178px)] top-[620px] w-[340px] flex flex-col items-start justify-start gap-[20px] py-0 px-[80px]">
      <div className="flex flex-row items-center justify-center py-[6px] px-[15px] bg-[#ffffff66] border-[2px] border-solid border-[#3994ff] rounded-[50px]">
        <div className="text-[14px] leading-[20px] font-['Pretendard'] font-medium text-[#3994ff] whitespace-nowrap">운동 관리</div>
      </div>
      <div className="flex flex-col items-start justify-center gap-[10px]">
        <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#414141] text-justify whitespace-nowrap">생활 습관 문진 및 결과 제공</div>
        <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#414141] text-justify whitespace-nowrap">신체 능력 평가</div>
        <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#414141] text-justify whitespace-nowrap">질환별 운동 가이드 제공</div>
      </div>
    </div>
    <div className="absolute -translate-x-1/2 left-[calc(50%+162px)] top-[620px] w-[340px] flex flex-col items-start justify-start gap-[20px] py-0 px-[80px]">
      <div className="flex flex-row items-center justify-center py-[6px] px-[15px] bg-[#ffffff66] border-[2px] border-solid border-[#3994ff] rounded-[50px]">
        <div className="text-[14px] leading-[20px] font-['Pretendard'] font-medium text-[#3994ff] whitespace-nowrap">식이 관리</div>
      </div>
      <div className="flex flex-col items-start justify-center gap-[10px]">
        <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#414141] text-justify whitespace-nowrap">질환별 필요 영양소 관리</div>
        <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#414141] text-justify whitespace-nowrap">관련 레시피 제공</div>
      </div>
    </div>
    <div className="absolute -translate-x-1/2 left-[calc(50%+502px)] top-[620px] w-[340px] flex flex-col items-start justify-start gap-[20px] py-0 px-[80px]">
      <div className="flex flex-row items-center justify-center py-[6px] px-[15px] bg-[#ffffff66] border-[2px] border-solid border-[#3994ff] rounded-[50px]">
        <div className="text-[14px] leading-[20px] font-['Pretendard'] font-medium text-[#3994ff] whitespace-nowrap">생활습관 관리</div>
      </div>
      <div className="flex flex-col items-start justify-center gap-[10px]">
        <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#414141] text-justify whitespace-nowrap">음주, 흡연 관리</div>
        <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#414141] text-justify whitespace-nowrap">취침시간 및 수면 습관 관리</div>
      </div>
    </div>
    <img className="absolute left-[764px] top-[422px]" width="43" height="32" src={img9}></img>
    <img className="absolute left-[1113px] top-[422px]" width="43" height="32" src={img10}></img>
  </div>
    {/*bottom */}
    <Bottom />

    {/* top */}
    <Top />
  
</div>
    )
}

export default Healthcare;