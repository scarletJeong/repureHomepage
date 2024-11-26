
import { useState, useEffect } from 'react';

import Bottom from '../../components/Bottom';
import Top from '../../components/Top';

import MedicalDiscussionImage1 from '../../assets/medical_discussion1.png';
import MedicalDiscussionImage2 from '../../assets/medical_discussion2.png';
import footer1 from '../../assets/footer1.png';
import footer2 from '../../assets/footer2.png';
import footer3 from '../../assets/footer3.png';
import footer4 from '../../assets/footer4.png';
import footer5 from '../../assets/footer5.png';
import notice from '../../assets/04_notice166_360.png';

import panel1 from '../../assets/panel1.png';
import panel2 from '../../assets/panel2.png';
import panel3 from '../../assets/panel3.png';
import panel4 from '../../assets/panel4.png';

import panel11 from '../../assets/panel1-1.png';
import panel21 from '../../assets/panel2-1.png';
import panel31 from '../../assets/panel3-1.png';
import panel41 from '../../assets/panel4-1.png';


const Test = () => {


  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: MedicalDiscussionImage1,
      title: 'Repure Healthcare leads the change to realize a healthy life',
      subtitle: '건강한 삶을 실현하기 위하여 변화를 선도하는 리퓨어헬스케어',
    },
    {
      image: MedicalDiscussionImage2,
      title: 'Making Life Pure Again, REPURE',
      subtitle: '모든 생명이 질병으로부터 자유로웠던 태초의 순수함을 추구합니다.',
    },
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // 자동 전환 구현
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000); // 7초마다 슬라이드 변경
    return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 정리
  }, []);

  
  const handleSetSlide = (index) => {
    console.log("Clicked on slide index:", index); // 디버깅용 로그
    setCurrentSlide(index); // 클릭 이벤트로 슬라이드 변경
  };


  const panels = [
    {
      image: panel1,
      smallImage: panel11,
      title: "평등한 치료의 기회를 향한\n의약사업",
      description: "수많은 사람들이 난치병과 희귀질환으로 고통 받고 있지만 희귀질환을 진단하는 것은쉽지 않을 뿐더러 치료제를 구하는 것은 더더욱 어렵습니다.\n리퓨어는 환자의 아픔과 고통을 이해하고 해결하기 위해 최선을 다할 것입니다.",
    },
    {
      image: panel2,
      smallImage: panel21,
      title: "반려동물의 건강하고 행복한 삶을 위한\n동물사업",
      description: "반려동물을 키우는 가구가 급속도로 늘어나는 추세지만 여전히 반려동물을 제대로 케어해주지 못하고 있습니다.\n반려동물이 건강하게 우리 곁에 머물 수 있도록 정확한 진단을 바탕으로 동물의약품과 식품, 서비스를 제공합니다.",
    },
    {
      image: panel3,
      smallImage: panel31,
      title: "삶의 질을 높이는 스마트한 건강관리\n헬스케어사업",
      description: "의료인과 만성 질환자를 온라인으로 연결해주는 헬스케어 플랫폼으로 고령화와 잘못된 생활습관으로 인해 급속하게 늘고있는\n만성질환자에게 리퓨어는 의료 네트워크를 활용하여 복약, 운동, 식이, 생활 습관 전반에 대한 통합 멘토링을 제공합니다.",
    },
    {
      image: panel4,
      smallImage: panel41,
      title: "인류 건강을 책임지기 위한 신속정확한\n진단 진단사업",
      description: "정확한 진단은 오진을 줄이고 병증에 올바르게 대처할 수 있게 합니다.\n리퓨어의 신속하고 정확한 진단은 치료 및 골든타임을 놓치지 않도록 유전자, 오믹스, IT기반 등의 검사로 인류를 책임집니다.",
    },
  ];
  

  
  const [selectedPanel, setSelectedPanel] = useState(0);

  const handlePanelClick = (index) => {
    setSelectedPanel(index);
  };




	return (<div className="relative w-[1920px] h-[3660px] overflow-hidden">
  <div className="absolute left-0 top-0 w-[1920px] h-[4620px] flex flex-col items-start justify-start">
    
    
    {/*first */}
    <div className="relative self-stretch h-[960px] shrink-0 overflow-hidden">
         {/* 슬라이드 영역 */}
         <div className="relative h-[960px] w-full">
          {/* 현재 슬라이드 이미지 */}
          <img
            className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500"
            src={slides[currentSlide].image}
          alt={`Slide ${currentSlide + 1}`}
        />

        {/* 슬라이드 텍스트 */}
        <div className="absolute left-[280px] top-[180px] w-[614px] text-white">
          <h1 className="text-4xl font-bold">{slides[currentSlide].title}</h1>
          <p className="text-lg mt-2">{slides[currentSlide].subtitle}</p>
        </div>

        {/* 네비게이션 점 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => handleSetSlide(index)}
              className={`w-4 h-4 rounded-full cursor-pointer ${
                index === currentSlide ? 'bg-blue-500' : 'bg-gray-400'
              }`}
            ></div>
          ))}
        </div>
      </div>

    </div>


    {/*second */}
    <div className="relative self-stretch h-[1080px] shrink-0 bg-[#fff]">
      <div className="absolute -translate-x-1/2 left-1/2 top-[180px] flex flex-col items-center justify-start gap-[4px]">
        <div className="text-[16px] leading-[20px] font-['Pretendard'] font-medium text-[#2d4198] whitespace-nowrap">리퓨어 헬스케어 사업소개</div>
        <div className="text-[40px] leading-[50px] font-['Montserrat'] font-bold text-[#000] whitespace-nowrap">OUR BUSINESS</div>
      </div>

{/*패널 */}
<div className="absolute -translate-x-1/2 left-1/2 top-[354px] w-[1920px] flex flex-row items-center justify-center gap-[18px] overflow-hidden  whitespace-pre-wrap">
  {/* 큰 패널 */}
  {panels.map((panel, index) => {
    const isSelected = selectedPanel === index;
    const isLeft = index < selectedPanel;
    const isRight = index > selectedPanel;

    return (
      <div
        key={index}
        className={`relative ${
          isSelected
            ? "w-[1360px] h-[600px]"
            : "w-[180px] h-[600px]"
        } transition-all duration-500 transform ${
          isLeft
            ? `-translate-x-[${(selectedPanel - index) * 220}px]`
            : isRight
            ? `translate-x-[${(index - selectedPanel) * 220}px]`
            : "translate-x-0"
        }`}
        onClick={() => handlePanelClick(index)}
      >
        {/* 패널 이미지 */}
        <img
          className="absolute w-full h-full object-cover"
          src={isSelected ? panel.image : panel.smallImage}
          alt={`Panel ${index + 1}`}
        />
         {/* 설명 - 오른쪽 상단 */}
         {isSelected && (
          <div className="absolute top-4 right-4 text-right text-white bg-opacity-50 px-4 py-2 rounded-lg ">
            <p className="text-sm leading-[1.5] whitespace-pre-wrap">{panel.description}</p>
          </div>
        )}

        {/* 제목 - 하단 */}
        {isSelected && (
          <div className="absolute bottom-4 left-4 text-white ">
            <h2 className="text-6xl font-bold leading-[1.15] whitespace-pre-wrap">{panel.title}</h2>
          </div>
        )}
      </div>
    );
  })}
</div>



    </div>

    {/* notice */}
    <img width="1920" height="960" src={notice}></img>



     {/* footer */}
    <div className="w-[1920px] flex flex-row items-start justify-center overflow-hidden">
      <div className="flex-1 flex flex-row items-start justify-center py-[40px] px-[200px] bg-[#fff] overflow-hidden">
        <div className="flex-1 flex flex-row items-center justify-center">
          <div className="h-[100px] flex flex-row items-center justify-center pt-0 pr-0 pb-0 pl-[100px]">
            <div className="flex flex-col items-center justify-center">
              <div className="w-[48px] h-[48px] shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-[#122e70] rounded-[28px]">
                <div className="relative w-[24px] h-[24px] shrink-0 overflow-hidden">
                  <div className="absolute left-0 top-0 w-[24px] h-[24px] text-[20px] leading-[140%] font-['Inter'] font-bold text-[#122e70] text-center flex flex-col justify-center">←</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-row items-start justify-start">
            <div className="flex-1 self-stretch flex flex-row items-start justify-start overflow-hidden">
              <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center py-[31px] px-[81px]">
                <img width="185" height="56" src={footer1}></img>
              </div>
              <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center py-[31px] px-[81px]">
                <img width="156" height="82" src={footer2}></img>
              </div>
              <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center py-[31px] px-[81px]">
                <img width="136" height="72" src={footer3}></img>
              </div>
              <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center py-[31px] px-[81px]">
                <img width="204" height="62" src={footer4}></img>
              </div>
              <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center py-[31px] px-[81px]">
                <img width="204" height="62" src={footer5}></img>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center pt-0 pr-[100px] pb-0 pl-0">
            <div className="flex flex-col items-center justify-center">
              <div className="w-[48px] h-[48px] shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-[#122e70] rounded-[28px]">
                <div className="relative w-[24px] h-[24px] shrink-0 overflow-hidden">
                  <div className="absolute left-0 top-0 w-[24px] h-[24px] text-[20px] leading-[140%] font-['Inter'] font-bold text-[#122e70] text-center flex flex-col justify-center">→</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


   
    
    {/*bottom */}
    <Bottom />     

  </div>


   {/* top */}
    <Top />

</div>
 );
};

export default Test;