import { useState, EventHandler, ReactNode } from 'react'

import Bottom from '../../components/Bottom'
import Top from '../../components/Top'
import RDTitle from '../../components/RDTitle'

import img1 from '../../assets/Frame 81198_10221.png'
import img2 from '../../assets/Frame 82198_10223.png'
import img3 from '../../assets/Rectangle 74213_625.png'
import img4 from '../../assets/Frame 78213_653.png'
import img5 from '../../assets/Frame 78213_764.png'
import img6 from '../../assets/Frame 103213_863.png'
import img7 from '../../assets/Frame 104213_872.png'
import img8 from '../../assets/Frame 104213_892.png'
import img9 from '../../assets/Frame 104213_902.png'
import img10 from '../../assets/Frame 79213_881.png'
import img11 from '../../assets/Frame 78213_887.png'
import img12 from '../../assets/Rectangle 74.png'


const Pipe = () => {
	return (<div className=" relative w-[1920px] min-w-[1440px] flex flex-col justify-start bg-[#fff] mx-auto  items-center" >

  {/*RD title */}
  <RDTitle activeTab="파이프라인"  />

  <div className="relative self-stretch h-[2844px] shrink-0 bg-[#6b6677] overflow-hidden">

  <div className="absolute -translate-x-1/2 left-1/2 top-[100px] flex flex-col items-center justify-start gap-[4px]">
      <div className="text-[54px] font-['Pretendard'] font-extrabold text-[#fff] text-center whitespace-nowrap">리퓨어 파이프라인</div>
      <div className="text-[16px] leading-[24px] font-['Pretendard'] text-[#cecece] text-center whitespace-nowrap">리퓨어 헬스케어는 다양한 사업분야에 파이프라인을 보유하고 있습니다</div>
    </div>



    {/*의약품 및 의료기기 도입 */}
    <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-[calc(50%+-942px)] w-[1360px] h-[336px] flex flex-wrap items-start justify-start">
      
      
      <div className="w-[1360px] h-[48px] shrink-0 flex flex-wrap items-center justify-center bg-[#ffffff4d] ">
        <div className="text-[24px] leading-[24px] font-['Pretendard'] font-extrabold text-[#fff] text-center whitespace-nowrap">의약품 및 의료기기 도입</div>
      </div>
      
      <div className="w-[272px] h-[48px] shrink-0 border-[solid] border-#fff border-r border-t border-b"></div>
      <div className="w-[272px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-r border-t border-b">
        <div className="text-[20px] leading-[24px] font-['Pretendard'] text-[#fff] text-center whitespace-nowrap">품목검토</div>
      </div>
      <div className="w-[272px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-r border-t border-b">
        <div className="text-[20px] leading-[24px] font-['Pretendard'] text-[#fff] text-center whitespace-nowrap">계약</div>
      </div>
      <div className="w-[272px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-r border-t border-b ">
        <div className="text-[20px] leading-[24px]  text-[#fff] text-center whitespace-nowrap">인허가</div>
      </div>
      <div className="w-[272px] h-[48px] shrink-0 flex flex-wrap items-center justify-center  border-t border-b">
        <div className="text-[20px] leading-[24px] font-['Pretendard'] text-[#fff] text-center whitespace-nowrap">출시</div>
      </div>

      <div className="w-[272px] h-[48px] shrink-0 flex flex-wrap items-center justify-center  border-b border-r">
        <div className="text-[20px] leading-[24px] font-['Montserrat']  text-[#fff] text-justify whitespace-nowrap">INFUGEM</div>
      </div>
      <div className="absolute left-[272px] top-[111px] w-[682px] h-[18px] shrink-0">
        <div className="absolute left-0 top-0 w-[682px] h-[18px] bg-[#ffffff4d] rounded-r-full"></div>
      </div>
      <div className="w-[272px] h-[48px] shrink-0"></div>
      <div className="w-[272px] h-[48px] shrink-0"></div>
      <div className="w-[272px] h-[48px] shrink-0"></div>
      <div className="w-[272px] h-[48px] shrink-0"></div>


      <div className="w-[272px] h-[48px] shrink-0 flex flex-wrap items-center justify-center  border-b border-r">
        <div className="text-[20px] leading-[24px] font-['Montserrat']  text-[#fff] text-justify whitespace-nowrap">TRISENOX VIAL</div>
      </div>
      <div className="relative w-[272px] h-[48px] shrink-0 flex flex-wrap items-center justify-center">
        <div className="absolute left-0 top-[15px] w-[682px] h-[18px] shrink-0">
          <div className="absolute left-0 top-0 w-[682px] h-[18px] bg-[#ffffff4d] rounded-r-full"></div>
        </div>
      </div>
      <div className="w-[272px] h-[48px] shrink-0"></div>
      <div className="w-[272px] h-[48px] shrink-0"></div>
      <div className="w-[272px] h-[48px] shrink-0"></div>

      <div className="w-[272px] h-[48px] shrink-0 flex flex-wrap items-center justify-center  border-b border-r">
        <div className="text-[20px] leading-[24px] font-['Montserrat']  text-[#fff] text-justify whitespace-nowrap">FLAMIGEL</div>
      </div>
      <div className="relative w-[272px] h-[48px] shrink-0 flex flex-wrap items-center justify-center">
        <div className="absolute left-0 top-[15px] w-[682px] h-[18px] shrink-0">
          <div className="absolute left-0 top-0 w-[682px] h-[18px] bg-[#ffffff4d] rounded-r-full"></div>
        </div>
      </div>
      <div className="w-[272px] h-[48px] shrink-0"></div>
      <div className="w-[272px] h-[48px] shrink-0"></div>
      <div className="w-[272px] h-[48px] shrink-0"></div>
      
      <div className="w-[272px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-b border-r">
        <div className="text-[20px] leading-[24px] font-['Montserrat']  text-[#fff] text-justify whitespace-nowrap">비마약성 진통제</div>
      </div>
      <div className="relative w-[272px] h-[48px] shrink-0 flex flex-wrap items-center justify-center">
        <img className="absolute left-0 top-[15px]" width="137" height="18" src={img1}></img>
      </div>
      <div className="w-[272px] h-[48px] shrink-0"></div>
      <div className="w-[272px] h-[48px] shrink-0"></div>
      <div className="w-[272px] h-[48px] shrink-0"></div>

      <div className="w-[272px] h-[48px] shrink-0 flex flex-wrap items-center justify-center  border-b border-r">
        <div className="text-[20px] leading-[24px] font-['Montserrat']  text-[#fff] text-justify whitespace-nowrap">aGVHD 치료제</div>
      </div>
      <div className="relative w-[1080px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-b border-[#fff]"> 
        <img className="absolute left-0 top-[15px]" width="137" height="18" src={img2}></img>
      </div>
      <div className="w-[272px] h-[48px] shrink-0"></div>
      <div className="w-[272px] h-[48px] shrink-0"></div>
      <div className="w-[272px] h-[48px] shrink-0"></div>
      
     
    </div>


    {/*의약품 개발*/}
    <div className="absolute -translate-x-1/2 left-1/2 top-[768px] w-[1360px] flex flex-wrap items-start justify-start">
      
      <div className="w-[1360px] h-[48px] shrink-0 flex flex-wrap items-center justify-center bg-[#ffffff4d]  ">
        <div className="text-[24px] leading-[24px] font-['Pretendard'] font-extrabold text-[#fff] text-center whitespace-nowrap">의약품 개발</div>
      </div>
      
      <div className="w-[226.6px] h-[48px] shrink-0  border-t border-r"></div>
      <div className="w-[226.6px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-b border-t border-r ">
        <div className="text-[20px] leading-[24px] font-['Pretendard'] text-[#fff] text-center whitespace-nowrap">품목검토</div>
      </div>
      <div className="w-[226.6px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-b border-t border-r">
        <div className="text-[20px] leading-[24px] font-['Pretendard'] text-[#fff] text-center whitespace-nowrap">연구개발</div>
      </div>
      <div className="w-[226.6px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-b border-t border-r ">
        <div className="text-[20px] leading-[24px] font-['Pretendard'] text-[#fff] text-center whitespace-nowrap">임상</div>
      </div>
      <div className="w-[226.6px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-b border-t border-r ">
        <div className="text-[20px] leading-[24px] font-['Pretendard'] text-[#fff] text-center whitespace-nowrap">인허가</div>
      </div>
      <div className="w-[226.6px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-b border-t ">
        <div className="text-[20px] leading-[24px] font-['Pretendard'] text-[#fff] text-center whitespace-nowrap">출시</div>
      </div>



      <div className="w-[227px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-[solid] border-#fff border-t  border-b border-r border-[0_1px_1px_0]">
        <div className="text-[20px] leading-[24px] font-['Montserrat']  text-[#fff] text-justify whitespace-nowrap">자가주사 응급의약품</div>
      </div>
      <div className="relative w-[272px] h-[48px] shrink-0 flex flex-wrap items-center justify-center">
        <img className="absolute left-0 top-[15px]" width="137" height="18" src={img1}></img>
      </div>
      <div className="w-[272px] h-[48px] shrink-0"></div>
      <div className="w-[272px] h-[48px] shrink-0"></div>
      <div className="w-[272px] h-[48px] shrink-0"></div>


      <div className="w-[227px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-b border-r border-[#fff]">
        <div className="text-[20px] leading-[24px] font-['Montserrat']  text-[#fff] text-justify whitespace-nowrap">ODF 개 심장약</div>
      </div>
      <div className="relative w-[1120px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-b">
        <img className="absolute left-0 top-[15px]" width="137" height="18" src={img1}></img>
      </div>
      <div className="w-[272px] h-[48px] shrink-0"></div>
      <div className="w-[272px] h-[48px] shrink-0"></div>
      <div className="w-[272px] h-[48px] shrink-0"></div>

    </div>




    {/*의약외품 개발 */}
    <div className="absolute -translate-x-1/2 left-1/2 top-[1080px] w-[1360px] flex flex-wrap items-start justify-start">


      <div className="w-[1360px] h-[48px] shrink-0 flex flex-wrap items-center justify-center bg-[#ffffff4d] ">
        <div className="text-[24px] leading-[24px] font-['Pretendard'] font-extrabold text-[#fff] text-center whitespace-nowrap">의약외품 개발</div>
      </div>


      <div className="w-[227px] h-[48px] shrink-0 border-[solid] border-#fff  border-b border-r border-t"></div>
      <div className="w-[226.6px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-r border-t border-b ">
        <div className="text-[20px] leading-[24px] font-['Pretendard'] text-[#fff] text-center whitespace-nowrap">품목검토</div>
      </div>
      <div className="w-[226.6px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-r border-t border-b">
        <div className="text-[20px] leading-[24px] font-['Pretendard'] text-[#fff] text-center whitespace-nowrap">제품디자인</div>
      </div>
      <div className="w-[226.6px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-r border-t border-b ">
        <div className="text-[20px] leading-[24px] font-['Pretendard'] text-[#fff] text-center whitespace-nowrap">시제품</div>
      </div>
      <div className="w-[226.6px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-r border-t border-b ">
        <div className="text-[20px] leading-[24px] font-['Pretendard'] text-[#fff] text-center whitespace-nowrap">인허가</div>
      </div>
      <div className="w-[226.6px] h-[48px] shrink-0 flex flex-wrap items-center justify-center  border-t border-b">
        <div className="text-[20px] leading-[24px] font-['Pretendard'] text-[#fff] text-center whitespace-nowrap">출시</div>
      </div>


      <div className="w-[227px] h-[48px] shrink-0 flex flex-wrap items-center justify-center  border-b border-r">
        <div className="text-[20px] leading-[24px] font-['Montserrat']  text-[#fff] text-justify whitespace-nowrap">반려동물 스프레이</div>
      </div>
      <div className="relative w-[227px] h-[48px] shrink-0 flex flex-wrap items-center justify-center">
        <div className="absolute left-[1px] top-[15px] w-[452px] h-[18px] shrink-0">
          <div className="absolute left-0 top-0 w-[230px] h-[18px] bg-[#ffffff4d] rounded-r-full"></div>
        </div>
      </div>
      <div className="w-[227px] h-[48px] shrink-0"></div>
      <div className="w-[227px] h-[48px] shrink-0"></div>
      <div className="w-[227px] h-[48px] shrink-0"></div>



      <div className="w-[227px] h-[48px] shrink-0 flex flex-wrap items-center justify-center  border-b border-r">
        <div className="text-[20px] leading-[24px] font-['Montserrat']  text-[#fff] text-justify whitespace-nowrap">반려동물 샴푸</div>
      </div>
      <div className="relative w-[227px] h-[48px] shrink-0 flex flex-wrap items-center justify-center">
        <div className="absolute left-[1px] top-[15px] w-[452px] h-[18px] shrink-0">
          <div className="absolute left-0 top-0 w-[452px] h-[18px] bg-[#ffffff4d] rounded-r-full"></div>
        </div>
      </div>
      <div className="w-[227px] h-[48px] shrink-0"></div>
      <div className="w-[227px] h-[48px] shrink-0"></div>
      <div className="w-[227px] h-[48px] shrink-0"></div>


      <div className="w-[227px] h-[48px] shrink-0 flex flex-wrap items-center justify-center  border-b border-r">
        <div className="text-[20px] leading-[24px] font-['Montserrat']  text-[#fff] text-justify whitespace-nowrap">반려동물 이어클리너</div>
      </div>
      <div className="relative w-[227px] h-[48px] shrink-0 flex flex-wrap items-center justify-center">
        <div className="absolute left-[1px] top-[15px] w-[452px] h-[18px] shrink-0">
          <div className="absolute left-0 top-0 w-[452px] h-[18px] bg-[#ffffff4d] rounded-r-full"></div>
        </div>
      </div>
      <div className="w-[227px] h-[48px] shrink-0"></div>
      <div className="w-[227px] h-[48px] shrink-0"></div>
      <div className="w-[227px] h-[48px] shrink-0"></div>


      <div className="w-[227px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-b border-r">
        <div className="text-[20px] leading-[24px] font-['Montserrat']  text-[#fff] text-justify whitespace-nowrap">ODF 개 심장보조제</div>
      </div>
      <div className="relative w-[1100px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-b">
        <div className="absolute left-[1px] top-[15px] w-[452px] h-[18px] shrink-0">
          <div className="absolute left-0 top-0 w-[452px] h-[18px] bg-[#ffffff4d] rounded-r-full"></div>
        </div>
      </div>
    </div>



        {/*신약개발 */}
    <div className="absolute -translate-x-1/2 left-1/2 top-[1488px] w-[1360px] flex flex-wrap items-start justify-start">

      <div className="w-[1360px] h-[48px] shrink-0 flex flex-wrap items-center justify-center bg-[#ffffff4d] ">
        <div className="text-[24px] leading-[24px] font-['Pretendard'] font-extrabold text-[#fff] text-center whitespace-nowrap">신약 개발</div>
      </div>

      <div className="w-[227px] h-[48px] shrink-0 border-[solid] border-#fff border-b border-r border-t"></div>
      <div className="w-[226.6px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-r border-t border-b">
        <div className="text-[20px] leading-[24px] font-['Pretendard'] text-[#fff] text-center whitespace-nowrap">발굴</div>
      </div>
      <div className="w-[226.6px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-r border-t border-b">
        <div className="text-[20px] leading-[24px] font-['Pretendard'] text-[#fff] text-center whitespace-nowrap">전임상</div>
      </div>
      <div className="w-[226.6px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-r border-t border-b ">
        <div className="text-[20px] leading-[24px] font-['Pretendard'] text-[#fff] text-center whitespace-nowrap">임상</div>
      </div>
      <div className="w-[226.6px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-r border-t border-b ">
        <div className="text-[20px] leading-[24px] font-['Pretendard'] text-[#fff] text-center whitespace-nowrap">인허가</div>
      </div>
      <div className="w-[226.6px] h-[48px] shrink-0 flex flex-wrap items-center justify-center  border-t border-b">
        <div className="text-[20px] leading-[24px] font-['Pretendard'] text-[#fff] text-center whitespace-nowrap">출시</div>
      </div>


     
      <div className="w-[227px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-b border-r">
        <div className="text-[20px] leading-[24px] font-['Montserrat']  text-[#fff] text-justify whitespace-nowrap">YRYP</div>
      </div>
      <img className="absolute left-[227px] top-[111px]" width="226" height="18" src={img11}></img>
      <div className="w-[227px] h-[48px] shrink-0"></div>
      <div className="w-[227px] h-[48px] shrink-0"></div>
      <div className="w-[227px] h-[48px] shrink-0"></div>
      <div className="w-[227px] h-[48px] shrink-0"></div>


      <div className="w-[227px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-b border-r">
        <div className="text-[20px] leading-[24px] font-['Montserrat']  text-[#fff] text-justify whitespace-nowrap">YRP</div>
      </div>
      <div className="relative w-[227px] h-[48px] shrink-0 flex flex-wrap items-center justify-center">
        <img className="absolute left-[1px] top-[15px]" width="226" height="18" src={img6}></img>
      </div>
      <div className="w-[227px] h-[48px] shrink-0"></div>
      <div className="w-[227px] h-[48px] shrink-0"></div>
      <div className="w-[227px] h-[48px] shrink-0"></div>


      <div className="w-[227px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-b border-r">
        <div className="text-[20px] leading-[24px] font-['Montserrat']  text-[#fff] text-justify whitespace-nowrap">YRYA</div>
      </div>
      <div className="relative w-[227px] h-[48px] shrink-0 flex flex-wrap items-center justify-center">
        <img className="absolute left-[1px] top-[15px]" width="226" height="18" src={img7}></img>
      </div>
      <div className="w-[227px] h-[48px] shrink-0"></div>
      <div className="w-[227px] h-[48px] shrink-0"></div>
      <div className="w-[227px] h-[48px] shrink-0"></div>


      <div className="w-[227px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-b border-r">
        <div className="text-[20px] leading-[24px] font-['Montserrat']  text-[#fff] text-justify whitespace-nowrap">YRA</div>
      </div>
      <div className="relative w-[227px] h-[48px] shrink-0 flex flex-wrap items-center justify-center">
        <img className="absolute left-[1px] top-[15px]" width="226" height="18" src={img8}></img>
      </div>
      <div className="w-[227px] h-[48px] shrink-0"></div>
      <div className="w-[227px] h-[48px] shrink-0"></div>
      <div className="w-[227px] h-[48px] shrink-0"></div>


      <div className="w-[227px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-b border-r">
        <div className="text-[20px] leading-[24px] font-['Montserrat']  text-[#fff] text-justify whitespace-nowrap">YRJP</div>
      </div>
      <div className="relative w-[227px] h-[48px] shrink-0 flex flex-wrap items-center justify-center">
        <img className="absolute left-[1px] top-[15px]" width="226" height="18" src={img9}></img>
      </div>
      <div className="w-[227px] h-[48px] shrink-0"></div>
      <div className="w-[227px] h-[48px] shrink-0"></div>
      <div className="w-[227px] h-[48px] shrink-0"></div>


      <div className="w-[227px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-b border-r">
        <div className="text-[20px] leading-[24px] font-['Montserrat']  text-[#fff] text-justify whitespace-nowrap">YRJA</div>
      </div>
      <div className="relative w-[1100px] h-[48px] shrink-0 flex flex-wrap items-center justify-center  border-b ">
        <img className="absolute left-[1px] top-[15px]" width="226" height="18" src={img10}></img>
      </div>

      

    </div>

    
    {/*식품 개발 */}
    <div className="absolute -translate-x-1/2 left-1/2 top-[1992px] w-[1360px] flex flex-wrap items-start justify-start">

      <div className="w-[1360px] h-[48px] shrink-0 flex flex-wrap items-center justify-center bg-[#ffffff4d] ">
        <div className="text-[24px] leading-[24px] font-['Pretendard'] font-extrabold text-[#fff] text-center whitespace-nowrap">식품 개발</div>
      </div>


      <div className="w-[227px] h-[48px] shrink-0 border-[solid] border-#fff border-t border-b border-r"></div>
      <div className="w-[226.6px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-b border-t border-r ">
        <div className="text-[20px] leading-[24px] font-['Pretendard'] text-[#fff] text-center whitespace-nowrap">품목검토</div>
      </div>
      <div className="w-[226.6px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-b border-t border-r">
        <div className="text-[20px] leading-[24px] font-['Pretendard'] text-[#fff] text-center whitespace-nowrap">제품디자인</div>
      </div>
      <div className="w-[226.6px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-b border-t border-r ">
        <div className="text-[20px] leading-[24px] font-['Pretendard'] text-[#fff] text-center whitespace-nowrap">시제품</div>
      </div>
      <div className="w-[226.6px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-b border-t border-r ">
        <div className="text-[20px] leading-[24px] font-['Pretendard'] text-[#fff] text-center whitespace-nowrap">인허가</div>
      </div>
      <div className="w-[226.6px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-b border-t ">
        <div className="text-[20px] leading-[24px] font-['Pretendard'] text-[#fff] text-center whitespace-nowrap">출시</div>
      </div>

      
      <div className="w-[227px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-r">
        <div className="text-[20px] leading-[24px] font-['Montserrat']  text-[#fff] text-justify ">반려동물 음료수</div>
      </div>
      <div className="absolute left-[227px] top-[111px] w-[454px] h-[18px] shrink-0">
        <div className="absolute left-0 top-0 w-[454px] h-[18px] bg-[#ffffff4d] rounded-r-full"></div>
      </div>
      <div className="w-[227px] h-[48px] shrink-0"></div>
      <div className="w-[227px] h-[48px] shrink-0"></div>
      <div className="w-[227px] h-[48px] shrink-0"></div>
      <div className="w-[227px] h-[48px] shrink-0"></div>


      <div className="w-[227px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-r border-t border-b">
        <div className="text-[20px] leading-[24px] font-['Montserrat']  text-[#fff] text-justify whitespace-nowrap">액상사료</div>
      </div>
      <div className="relative w-[1100px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-b">
        <div className="absolute left-[1px] top-[15px] w-[454px] h-[18px] shrink-0">
          <div className="absolute left-0 top-0 w-[454px] h-[18px] bg-[#ffffff4d] rounded-r-full"></div>
        </div>
      </div>
      <div className="w-[227px] h-[48px] shrink-0"></div>
      <div className="w-[227px] h-[48px] shrink-0"></div>
      <div className="w-[227px] h-[48px] shrink-0"></div>
      <div className="w-[227px] h-[48px] shrink-0"></div>
      


    </div>


    {/*헬스케어 플랫폼 */}
    <div className="absolute -translate-x-1/2 left-1/2 top-[2304px] w-[1360px] flex flex-wrap items-start justify-start">
    
      <div className="w-[1360px] h-[48px] shrink-0 flex flex-wrap items-center justify-center bg-[#ffffff4d] ">
        <div className="text-[24px] leading-[24px] font-['Pretendard'] font-extrabold text-[#fff] text-center whitespace-nowrap">헬스케어 플랫폼</div>
      </div>


      <div className="w-[226.6px] h-[48px] shrink-0 border-[solid] border-#fff border-b border-t"></div>
      <div className="w-[226.6px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-[solid] border-#fff border ">
        <div className="text-[20px] leading-[24px] font-['Pretendard'] text-[#fff] text-center whitespace-nowrap">품목검토</div>
      </div>
      <div className="w-[226.6px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-r border-t border-b">
        <div className="text-[20px] leading-[24px] font-['Pretendard'] text-[#fff] text-center whitespace-nowrap">개발</div>
      </div>
      <div className="w-[226.6px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-r border-t border-b ">
        <div className="text-[20px] leading-[24px] font-['Pretendard'] text-[#fff] text-center whitespace-nowrap">시제품</div>
      </div>
      <div className="w-[226.6px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-r border-t border-b ">
        <div className="text-[20px] leading-[24px] font-['Pretendard'] text-[#fff] text-center whitespace-nowrap">인허가</div>
      </div>
      <div className="w-[226.6px] h-[48px] shrink-0 flex flex-wrap items-center justify-center  border-t border-b">
        <div className="text-[20px] leading-[24px] font-['Pretendard'] text-[#fff] text-center whitespace-nowrap">출시</div>
      </div>


      <div className="w-[227px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-r border-b">
        <div className="text-[20px] leading-[24px] font-['Montserrat']  text-[#fff] text-justify whitespace-nowrap">만성질환관리</div>
      </div>
      <div className="absolute left-[227px] top-[111px] w-[454px] h-[18px] shrink-0">
        <div className="absolute left-0 top-0 w-[454px] h-[18px] bg-[#ffffff4d] rounded-r-full"></div>
      </div>
      <div className="w-[227px] h-[48px] shrink-0"></div>
      <div className="w-[227px] h-[48px] shrink-0"></div>
      <div className="w-[227px] h-[48px] shrink-0"></div>
      <div className="w-[227px] h-[48px] shrink-0"></div>


      <div className="w-[227px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-r border-b">
        <div className="text-[20px] leading-[24px] font-['Montserrat']  text-[#fff] text-justify whitespace-nowrap">운동처방</div>
      </div>
      <div className="relative w-[227px] h-[48px] shrink-0 flex flex-wrap items-center justify-center">
        <div className="absolute left-[1px] top-[15px] w-[454px] h-[18px] shrink-0">
          <div className="absolute left-0 top-0 w-[454px] h-[18px] bg-[#ffffff4d] rounded-r-full"></div>
        </div>
      </div>
      <div className="w-[227px] h-[48px] shrink-0"></div>
      <div className="w-[227px] h-[48px] shrink-0"></div>
      <div className="w-[227px] h-[48px] shrink-0"></div>


      <div className="w-[227px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-r border-b">
        <div className="text-[20px] leading-[24px] font-['Montserrat']  text-[#fff] text-justify whitespace-nowrap">반려동물 플랫폼</div>
      </div>
      <div className="relative w-[1100px] h-[48px] shrink-0 flex flex-wrap items-center justify-center border-b">
        <div className="absolute left-[1px] top-[15px] w-[454px] h-[18px] shrink-0">
          <div className="absolute left-0 top-0 w-[300px] h-[18px] bg-[#ffffff4d] rounded-r-full"></div>
        </div>
      </div>
      <div className="w-[227px] h-[48px] shrink-0"></div>
      <div className="w-[227px] h-[48px] shrink-0"></div>
      <div className="w-[227px] h-[48px] shrink-0"></div>


      
    </div>

    
 
  </div>
    {/*bottom */}
    <Bottom />

    {/* top */}
    <Top />


</div>)
}

export default Pipe;