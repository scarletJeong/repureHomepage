
import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import Bottom from '../../components/Bottom';
import Top from '../../components/Top';

import MedicalDiscussionImage1 from '../../assets/medical_discussion1.png';
import MedicalDiscussionImage2 from '../../assets/medical_discussion2.png';

// footer partners 이미지
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

import arrow_right from '../../assets/arrow_right.png'

import './Home.css'

import ic_arrow from '../../assets/ic_arrow.png'

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
  const [opacity, setOpacity] = useState(1);

  const imagePaths = [
    logo01148_372, image8149_431, image8149_433, image8149_435, image8149_437,
    image15149_461, image149_449, image149_451, image149_445, image156_466,
    image156_475, image158_584, image16158_586, logo1158_588, image158_590,
    image158_592, image158_594, image158_596, image158_598, image20158_600,
    image158_602, image158_609, image16158_611, logo1158_613, logo1161_860,
    image158_615, image158_617, image158_619, image158_621, image20158_625,
    image158_623, image161_853, image161_835, image161_837, logo1161_839,
    image161_856, image161_849, image161_841, logo161_861, image161_851,
    image161_843, image161_847, image161_845
  ]

  

  const slides = [
    {
      image: MedicalDiscussionImage2,
      title: (
        <>
          Repure Healthcare<br />
          leads the change to<br />
          realize a healthy life
        </>
      ),
      subtitle: '건강한 삶을 실현하기 위하여 변화를 선도하는 리퓨어헬스케어',
    },
    {
      image: MedicalDiscussionImage1,
      title: (
        <>
          Making Life Pure Again, REPURE<br />
          we aims to restore the innocence<br />
          of a disease-free beginning
        </>
      ),
      subtitle: '모든 생명이 질병으로부터 자유로웠던 태초의 순수함을 추구합니다.',
    },
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // 자동 전환 구현
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % slides.length);
  //   }, 7000); // 7초마다 슬라이드 변경
  //   return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 정리
  // }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0);
      setTimeout(()=>{
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setOpacity(1);
      },1000)
    }, 3500); // 7초마다 슬라이드 변경
    return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 정리
  }, [slides.length]);

  
  const handleSetSlide = (index) => {
    console.log("Clicked on slide index:", index); // 디버깅용 로그
    setCurrentSlide(index); // 클릭 이벤트로 슬라이드 변경
  };


  const panels = [
    {
      image: panel1,
      smallImage: panel11,
      title1: "평등한 치료의 기회를 향한",
      title2: "의약사업",
      description: "수많은 사람들이 난치병과 희귀질환으로 고통 받고 있지만 희귀질환을 진단하는 것은쉽지 않을 뿐더러 치료제를 구하는 것은 더더욱 어렵습니다.\n리퓨어는 환자의 아픔과 고통을 이해하고 해결하기 위해 최선을 다할 것입니다.",
      keyword : ["의약품 수입ㆍ유통", "위탁 개발 생산","신약개발"],
      objectPosition : '5%',
      link:'/business-medicine'
    },
    {
      image: panel2,
      smallImage: panel21,
      title1: "반려동물의 건강하고 행복한 삶을 위한",
      title2: "동물사업",
      description: "반려동물을 키우는 가구가 급속도로 늘어나는 추세지만 여전히 반려동물을 제대로 케어해주지 못하고 있습니다.\n반려동물이 건강하게 우리 곁에 머물 수 있도록 정확한 진단을 바탕으로 동물의약품과 식품, 서비스를 제공합니다.",
      keyword : ["의약품 수입ㆍ유통", "의약부외품 수입ㆍ유통", "동물 식물 수입ㆍ유통", "동물 의료기기 수입ㆍ유통"],
      objectPosition : '43%',
      link:'/business-animal'
    },
    {
      image: panel3,
      smallImage: panel31,
      title1: "삶의 질을 높이는 스마트한 건강관리",
      title2: "헬스케어사업",
      description: "의료인과 만성 질환자를 온라인으로 연결해주는 헬스케어 플랫폼으로 고령화와 잘못된 생활습관으로 인해 급속하게 늘고있는\n만성질환자에게 리퓨어는 의료 네트워크를 활용하여 복약, 운동, 식이, 생활 습관 전반에 대한 통합 멘토링을 제공합니다.",
      keyword : ["질환관리 플랫폼", "원격진료 플랫폼","디지털치료제"],
      objectPosition : '40%',
      link:'/business-healthcare'
    },
    {
      image: panel4,
      smallImage: panel41,
      title1: "인류 건강을 책임지기 위한 신속정확한",
      title2: "진단사업",
      description: "정확한 진단은 오진을 줄이고 병증에 올바르게 대처할 수 있게 합니다.\n리퓨어의 신속하고 정확한 진단은 치료 및 골든타임을 놓치지 않도록 유전자, 오믹스, IT기반 등의 검사로 인류를 책임집니다.",
      keyword : ["유전자 검사", "다중오믹스 플랫폼","진단시약ㆍ기기"],
      objectPosition : '5%',
      link:'/business-dig'
    },
  ];
  

  
  const [selectedPanel, setSelectedPanel] = useState(0);

  const handlePanelClick = (index) => {
    setSelectedPanel(index);
  };




	return (<div className="relative max-w-[1920px] min-w-[1440px] mx-auto flex flex-col items-center" style={{width: "100%"}}>
  <div className="absolute left-0 top-0 max-w-[1920px] min-w-[1440px] flex flex-col items-start justify-start" style={{width: "100%"}}>
    
    
    {/*first */}
    <div className="relative self-stretch h-[960px] shrink-0 overflow-hidden">
         {/* 슬라이드 영역 */}
         <div className="relative h-[960px] w-full">
          {/* 현재 슬라이드 이미지 */}
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={slides[currentSlide].image}
          alt={`Slide ${currentSlide + 1}`}
        />
         {currentSlide % 2 === 0 ? (
            <div className="absolute left-[280px] top-[280px] text-white transition-opacity duration-1000" style={{opacity}}>
              <h1 className="text-5xl font-bold">{slides[0].title}</h1>
              <p className="text-lg mt-2">{slides[0].subtitle}</p>
            </div> 
         ) : (
          <>
          <div className="absolute right-[280px] bottom-[200px] gap-[30px] flex flex-col items-end text-white transition-opacity duration-1000" style={{opacity}}>
            <div className=' flex flex-col items-end'>
              <h1 className="text-5xl font-bold text-right">{slides[1].title}</h1>
              <p className="text-lg mt-2 text-right">{slides[1].subtitle}</p>
            </div>
            <Link to = "/aboutus-ceo">
              <div className="inline-flex justify-end flex-row items-center gap-[10px] py-[12px] px-[24px] bg-[#ffffff33] border-[1px] border-solid border-[#fff] rounded-[33px] whitespace-nowrap">
                  <p className="text-[16px] leading-[100%] font-['Montserrat'] font-semibold text-[#fff] whitespace-nowrap">About us</p>
                  <img width="16" height="16" src={arrow_right}></img>
              </div>
            </Link>  
          </div>
          </>
         )}
        
        {/* 슬라이드 텍스트 */}
        {/* <div className="absolute left-[280px] top-[180px] text-white">
          <h1 className="text-4xl font-bold">{slides[currentSlide].title}</h1>
          <p className="text-lg mt-2">{slides[currentSlide].subtitle}</p>
        </div> */}

        {/* 네비게이션 점 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => handleSetSlide(index)}
              className={`w-4 h-4 rounded-full cursor-pointer ${
                index === currentSlide ? 'bg-[#476AB2]' : 'bg-white'
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
<div className="absolute -translate-x-1/2 left-1/2 top-[354px] max-w-[1920px] min-w-[1920px] flex flex-row items-center justify-center gap-[18px] overflow-hidden whitespace-pre-wrap" style={{width: "100%"}}>
  {/* 큰 패널 */}
  {panels.map((panel, index) => {
    const isSelected = selectedPanel === index;
    const isLeft = index < selectedPanel;
    const isRight = index > selectedPanel;

    return (
      
      <div
        key={index}
        className={`relative h-[600px] ${
          isSelected
            ? "w-[1360px]"
            : "w-[185px]"
        } transition-all duration-1000 overflow-hidden`}
        onClick={() => handlePanelClick(index)}
      >
        
        {/* 패널 이미지 */}
        {/* <img
          className="absolute w-full h-full object-cover"
          src={isSelected ? panel.image : panel.smallImage}
          alt={`Panel ${index + 1}`}
        /> */}


        {isSelected && (
          <Link to = {panel.link} >
          <img
            className="absolute w-full h-full object-cover"
            src={panel.image}
            alt={`Panel ${index + 1}`}
            style={{
              opacity: isSelected ? 1 : 0,
              transition: 'opacity 1s ease, transform 1s ease', // opacity와 transform에 대한 전환 추가
              transform: isSelected ? 'scale(1)' : 'scale(1)', // 확대 효과 추가
            }}
          />
          </Link>
        )}
        {/* 작은 이미지 */}
        {!isSelected && (
            <img
              className="absolute h-full w-[1360px] overflow-hidden"
              //src={panel.smallImage}
              src={panel.image}
              alt={`Panel ${index + 1}`}
              style={{
                opacity: isSelected ? 0 : 1,
                objectFit: 'cover', // 이미지가 요소를 완전히 채우도록 설정
                objectPosition: panel.objectPosition, // 보이도록 할 이미지의 위치 조정 (필요에 따라 수정)
                transform: 'scale(1)', // 기본 크기 유지
              }}
            />
        )}

         {/* 설명 - 오른쪽 상단 */}
         {isSelected && (
          
          <div className="absolute right-[60px] top-[60px] w-[1240px] flex flex-row items-center justify-end">
          <div className="flex flex-row items-center justify-start gap-[10px]">
            {panel.keyword.map((keyword,index) => (
              <div key = {index} className="flex flex-row items-center justify-center py-[6px] px-[15px] border-[2px] border-solid border-[#fff] rounded-[50px]">
                <div className="text-[14px] leading-[20px] font-['Pretendard'] font-bold text-[#fff] whitespace-nowrap">{keyword}</div>
              </div>
            ))}
          </div>
          
          <div className="absolute -translate-x-1/2 left-[calc(50%+220px)] top-[52px] w-[800px] text-[15px] font-['Pretendard'] text-[#fff] text-right">
            <p className="text-sm leading-[1.5] whitespace-pre-wrap">{panel.description}</p>
          </div>
          </div>
        )}

        {/* 제목 - 하단 */}
        {isSelected && (
          // <div className="absolute left-[60px] bottom-[60px] text-white px-4 py-2">
          //   <h2 className="text-[54px] font-bold leading-[1.15] whitespace-pre-wrap">{panel.title}</h2>
          //   <img src={ic_arrow} />
          // </div>
            <div className="absolute left-[60px] bottom-[60px] text-white flex flex-col items-start justify-center">
                <div className="text-[50px] font-['Pretendard'] font-extrabold text-[#fff] h-[64px] text-nowrap">{panel.title1}</div>
                <div className="flex flex-row items-center justify-start gap-[24px] h-[64px]">
                    <div className="text-[50px] font-['Pretendard'] font-extrabold text-[#fff] ">{panel.title2}</div>
                    <img width="54" height="54" src={ic_arrow}></img>
                </div>
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
      <div className="flex-1 flex flex-row items-center justify-start py-[10px] px-[160px] bg-[#fff] overflow-hidden">
        <div className="flex-1 flex flex-row items-center justify-center animate-scroll">
          {imagePaths.map((src, index)=> (
            <div key={index} className="w-[184px] h-[72px] shrink-0 flex flex-row items-center justify-center">
              <img src={src}></img>
            </div>
          ))}
        </div>
        <div className="flex-1 flex flex-row items-center justify-center animate-scroll">
          {imagePaths.map((src, index)=> (
            <div key={`repeat-${index}`} className="w-[184px] h-[72px] shrink-0 flex flex-row items-center justify-center">
              <img src={src}></img>
            </div>
          ))}
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