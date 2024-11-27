import { useState, EventHandler, ReactNode, useEffect } from 'react'

import Bottom from '../../components/Bottom'
import Top from '../../components/Top'

import img1 from '../../assets/ic169_1211.png'
import img2 from '../../assets/ic169_1246.png'
import img3 from '../../assets/ic169_1244.png'
import img4 from '../../assets/Map169_1203.png'
import img5 from '../../assets/cdc-y--8fqaK1kY-unsplash 1169_1366.png'

const { kakao } = window;


const Map = () => {

   // State for input fields
   const [formData, setFormData] = useState({
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(()=>{
    const container = document.getElementById('map');
    const options = {
        center : new kakao.maps.LatLng(37.468364, 126.886199),
        level : 2
    }
    const map = new kakao.maps.Map(container,options);
    const markerPosition = new kakao.maps.LatLng(37.468364, 126.886199);

    const marker = new kakao.maps.Marker({
      position:markerPosition
    });

    marker.setMap(map);

  },[])

  
	return (<div className="w-[1920px] flex justify-start bg-[#fff] mx-auto  flex-col items-center">

    {/*title */}
  <div className="relative self-stretch h-[294px] shrink-0 bg-[#fff] overflow-hidden">
    <div className="absolute -translate-x-1/2 left-1/2 top-[160px] flex flex-col items-center justify-start">
      <div className="text-[40px] leading-[50px] font-['Montserrat'] font-bold text-[#000] whitespace-nowrap">CONTACT</div>
    </div>
  </div>

  <div className="relative self-stretch h-[1006px] shrink-0 bg-[#fcfcfc] overflow-hidden">
    <div className="absolute left-[-208px] top-[119px] w-[2370px] h-[693px] flex">
      <div className="absolute left-0 top-[57px] w-[552px] h-[552px] border-[1px] border-solid border-[#e8e8e8] rounded-full"></div>
      <div className="absolute left-[292px] top-[536px] w-[139px] h-[139px] border-[1px] border-solid border-[#2f3474] rounded-full"></div>
      <div className="absolute left-[1906px] top-0 w-[464px] h-[464px] border-[1px] border-solid border-[#c0192d80] rounded-full"></div>
      <div className="absolute left-[1783px] top-[290px] w-[285px] h-[285px]"></div>
    </div>
    {/* <div className="absolute -translate-x-1/2 left-[calc(50%+192px)] top-[100px] flex flex-row items-center justify-start gap-[10px]">
      <img width="32" height="32" src={img1}></img>
      <div className="flex flex-col items-start justify-center gap-[4px]">
        <div className="text-[20px] leading-[24px] font-['Pretendard'] font-semibold text-[#414141] text-justify whitespace-nowrap">(08594) 서울특별시 금천구 가산디지털1로 25, 18층 1806~1809호</div>
        <div className="text-[18px] leading-[24px] font-['Montserrat'] text-[#414141] text-justify whitespace-nowrap">18F, 25, Gasan digital 1-ro, Geumcheon-gu, Seoul, Republic of Korea</div>
      </div>
    </div> */}
    <div className="absolute -translate-x-1/2 left-[calc(50%+-546px)] top-[618px] w-[267px] flex flex-col items-start justify-start gap-[10px]">
      <div className="flex flex-row items-center justify-start gap-[10px]">
        <img width="32" height="32" src={img2}></img>
        <div className="w-[48px] shrink-0 flex flex-row items-center justify-center py-[6px] px-[10px] bg-[#4a972e] rounded-[4px]">
          <div className="text-[14px] leading-[16px] font-['Pretendard'] font-extrabold text-[#fff] whitespace-nowrap">마을</div>
        </div>
        <div className="flex flex-col items-start justify-center">
          <div className="flex flex-row items-start justify-start">
            <div className="text-[16px] leading-[24px] font-['Pretendard'] text-[#414141] text-justify whitespace-nowrap">27, 75, 102, 금천05</div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
        <img width="32" height="32" src={img3}></img>
        <div className="w-[48px] shrink-0 flex flex-row items-center justify-center py-[6px] px-[10px] bg-[#0d347f] rounded-[4px]">
          <div className="text-[14px] leading-[16px] font-['Pretendard'] font-extrabold text-[#fff] whitespace-nowrap">1호선</div>
        </div>
        <div className="flex flex-col items-start justify-center">
          <div className="text-[16px] leading-[24px] font-['Pretendard'] text-[#414141] text-justify whitespace-nowrap">독산역 2번 출구 도보 10분</div>
        </div>
      </div>
    </div>
    <div className="absolute -translate-x-1/2 left-[calc(50%+-519px)] top-[100px] flex flex-col items-start justify-start gap-[24px]">
      <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
        <div className="text-[16px] leading-[20px] font-['Pretendard'] font-medium text-[#2d4198] whitespace-nowrap">오시는길</div>
        <div className="text-[36px] leading-[40px] font-['Montserrat'] font-semibold text-[#000] whitespace-nowrap">LOCATION</div>
      </div>
      <div className="text-[16px] leading-[24px] font-['Pretendard'] text-[#888] text-justify whitespace-nowrap">리퓨어헬스케어를 찾아오시는 길을 안내해드립니다.</div>
    </div>
    <div id="map" style={{width: '809px', height: '500px', position: 'absolute', left: 'calc(50% + 276px)', transform: 'translateX(-50%)', top: '192px'}}></div>
  </div>



    {/*bottom */}
    <Bottom />

    {/* top */}
    <Top /> 


</div>)
}

export default Map;