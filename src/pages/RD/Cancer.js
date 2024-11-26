import { useState, EventHandler, ReactNode } from 'react'


import Bottom from '../../components/Bottom'
import Top from '../../components/Top'

import img1 from '../../assets/Group 31213_1588.png'
import img2 from '../../assets/Group 31213_1589.png'
import img3 from '../../assets/Group 31213_1602.png'
import img4 from '../../assets/image 23213_1680.png'
import img5 from '../../assets/image 24213_1683.png'
import img6 from '../../assets/image 25213_1686.png'
import img7 from '../../assets/image 26213_1713.png'
import img8 from '../../assets/image 27213_1717.png'


const Cancer = () => {
	return (<div className="w-[1920px] flex flex-col items-start justify-start bg-[#fff] overflow-hidden">

  {/*title */}
  <div className="relative self-stretch h-[294px] shrink-0 bg-[#fff] overflow-hidden">
    <div className="absolute -translate-x-1/2 left-1/2 top-[160px] flex flex-col items-center justify-start gap-[20px]">
      <div className="text-[40px] leading-[50px] font-['Montserrat'] font-bold text-[#000] whitespace-nowrap">R&D</div>
      <div className="flex flex-row items-center justify-start gap-[40px]">
        <div className="flex flex-col items-center justify-start">
          <div className="text-[18px] leading-[24px] font-['Pretendard'] text-transform-[uppercase] text-[#363636b2] text-center whitespace-nowrap">파이프라인</div>
        </div>
        <div className="flex flex-col items-center justify-start border-[solid] border-#2d4198 border border-[0_0_1px]">
          <div className="text-[18px] leading-[24px] font-['Pretendard'] font-bold text-transform-[uppercase] text-[#2d4198] text-center whitespace-nowrap">항암치료</div>
        </div>
      </div>
    </div>
  </div>

  <div className="relative self-stretch h-[2145px] shrink-0 bg-[#fff8f3] overflow-hidden">
    <div className="absolute -translate-x-1/2 left-1/2 top-[100px] flex flex-col items-center justify-start gap-[4px]">
      <div className="text-[54px] font-['Pretendard'] font-extrabold text-[#000] text-center whitespace-nowrap">리퓨어 항암치료</div>
      <div className="text-[16px] leading-[24px] font-['Pretendard'] text-[#888] text-center whitespace-nowrap">리퓨어 헬스케어는 혁신 신약 항암제를 연구하고 있으며, <br/>3세대 면역항암제부터 4세대 대사항암제까지 다양한 신약 후보물질을 보유하고 있습니다.</div>
    </div>
    <div className="absolute -translate-x-1/2 left-[calc(50%+277px)] top-[390px] flex flex-row items-center justify-start gap-[20px]">
      <div className="relative w-[256px] h-[256px] shrink-0 bg-[#f5c4a766]">
        <div className="absolute -translate-x-1/2 left-1/2 top-[178px] text-[18px] leading-[24px] font-['Pretendard'] font-bold text-[#3d3d3d] text-center whitespace-nowrap">에너지원의 차단<br/>(결핍유도)</div>
        <img className="absolute left-[66px] top-[40px]" width="124" height="124" src={img1}></img>
      </div>
      <div className="relative w-[256px] h-[256px] shrink-0 bg-[#f5c4a766]">
        <div className="absolute -translate-x-1/2 left-1/2 top-[178px] text-[18px] leading-[24px] font-['Pretendard'] font-bold text-[#3d3d3d] text-center whitespace-nowrap">에너지를 생산하는<br/>대사과정을 차단</div>
        <img className="absolute left-[66px] top-[40px]" width="124" height="124" src={img2}></img>
      </div>
      <div className="relative w-[256px] h-[256px] shrink-0 bg-[#f5c4a766]">
        <div className="absolute -translate-x-1/2 left-1/2 top-[178px] text-[18px] leading-[24px] font-['Pretendard'] font-bold text-[#3d3d3d] text-center whitespace-nowrap">증식에 필요한<br/>효소 억제</div>
        <img className="absolute left-[66px] top-[40px]" width="124" height="124" src={img3}></img>
      </div>
    </div>
    <div className="absolute -translate-x-1/2 left-[calc(50%+-479px)] top-[366px] flex flex-col items-start justify-start gap-[24px]">
      <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
        <div className="text-[16px] leading-[20px] font-['Pretendard'] font-medium text-[#424242] whitespace-nowrap">YRP-1 의 특징</div>
        <div className="text-[40px] leading-[50px] font-['Pretendard'] font-bold text-[#424242] whitespace-nowrap">YRP-1, 기존 항암 전략과 <br/>차별화되는 신규물질</div>
      </div>
      <div className="w-[383px] text-[16px] leading-[24px] font-['Pretendard'] text-[#888] text-justify">에너지 결핍을 유도하여 암세포의 성장과 증식 차단, 괴사를 통해 암을 치료하고 장기적으로 재발을 예방할 수 있는 새로운 개념의 항암제 입니다.</div>
    </div>
    <div className="absolute left-[1425px] top-[412px] w-[24px] h-[24px]"></div>
    <div className="absolute -translate-x-1/2 left-1/2 top-[826px] w-[1361px] flex flex-col items-start justify-start gap-[24px]">
      <div className="flex flex-row items-center justify-start">
        <div className="text-[20px] leading-[24px] font-['Montserrat'] font-bold text-[#000] text-justify whitespace-nowrap">YRP-1 작용기전</div>
      </div>
      <div className="relative w-[1361px] h-[550px] shrink-0 flex">
        <img className="absolute -translate-x-1/2 left-[calc(50%+-456px)] top-0" width="449" height="510" src={img4}></img>
        <div className="absolute -translate-x-1/2 left-[calc(50%+-596px)] top-[20px] text-[16px] leading-[24px] font-['Pretendard'] text-[#000] text-justify whitespace-nowrap">에너지원</div>
        <div className="absolute -translate-x-1/2 left-[calc(50%+-481px)] top-[20px] text-[16px] leading-[24px] font-['Pretendard'] text-[#000] text-justify whitespace-nowrap">YRP-1</div>
        <img className="absolute -translate-x-1/2 left-[calc(50%+558px)] top-0" width="246" height="510" src={img5}></img>
        <img className="absolute -translate-x-1/2 left-[calc(50%+109px)] top-0" width="681" height="510" src={img6}></img>
        <div className="absolute -translate-x-1/2 left-[calc(50%+-648px)] top-[20px] w-[24px] h-[24px] bg-[#94d5fb] border-[1px] border-solid border-[#fff] rounded-full"></div>
        <div className="absolute -translate-x-1/2 left-[calc(50%+-526px)] top-[20px] w-[24px] h-[24px] bg-[#ffba71] border-[1px] border-solid border-[#fff] rounded-full"></div>
        <div className="absolute -translate-x-1/2 left-[calc(50%+-456px)] top-[510px] w-[449px] h-[40px] flex flex-row items-center justify-center py-[10px] px-[55px] bg-[#6f6185]">
          <div className="text-[14px] leading-[20px] font-['Pretendard'] text-[#fff] text-justify whitespace-nowrap">그림1.암세포는 일반세포에 비해 에너지원 흡수가 많다</div>
        </div>
        <div className="absolute -translate-x-1/2 left-[calc(50%+109px)] top-[510px] w-[681px] h-[40px] flex flex-row items-center justify-center py-[10px] px-[55px] bg-[#6f6185]">
          <div className="text-[14px] leading-[20px] font-['Pretendard'] text-[#fff] text-justify whitespace-nowrap">그림2.암세포의 에너지원을 고갈 시키는 YRP-1</div>
        </div>
        <div className="absolute -translate-x-1/2 left-[calc(50%+565px)] top-[510px] w-[231px] h-[40px] flex flex-row items-center justify-center py-[10px] px-[55px] bg-[#6f6185]">
          <div className="text-[14px] leading-[20px] font-['Pretendard'] text-[#fff] text-justify whitespace-nowrap">그림3.암세포 사멸</div>
        </div>
      </div>
    </div>
    <div className="absolute -translate-x-1/2 left-1/2 top-[1526px] flex flex-row items-center justify-start gap-[22px]">
      <div className="w-[748px] shrink-0 flex flex-col items-start justify-start gap-[24px]">
        <div className="flex flex-row items-center justify-start">
          <div className="text-[20px] leading-[24px] font-['Montserrat'] font-bold text-[#000] text-justify whitespace-nowrap">에너지 대사 경로 차단</div>
        </div>
        <img width="748" height="337" src={img7}></img>
      </div>
      <div className="w-[591px] shrink-0 flex flex-col items-start justify-start gap-[24px]">
        <div className="flex flex-row items-center justify-start">
          <div className="text-[20px] leading-[24px] font-['Montserrat'] font-bold text-[#000] text-justify whitespace-nowrap">YRP-1 모식도</div>
        </div>
        <img width="591" height="337" src={img8}></img>
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

export default Cancer;