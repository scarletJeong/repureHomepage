import React, { useState } from 'react';
import MedicalDiscussionImage1 from './assets/medical_discussion1.png';
import MedicalDiscussionImage2 from './assets/medical_discussion2.png';

const Main = () => {
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

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
  <div className="relative w-[1920px] h-[3660px] overflow-hidden">

    {/* body */}
    <div className="relative w-full h-screen bg-gray-100">

      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {/* 슬라이드 이미지 */}
        <img
          src={slides[currentSlide].image}
          alt="Slide"
          className="w-full h-full object-cover transition-transform duration-500"
        />

        {/* 슬라이드 텍스트 */}
        <div className="absolute text-center text-white p-4">
          <h1 className="text-4xl font-['Montserrat'] font-bold">{slides[currentSlide].title}</h1>
          <p className="text-xl font-['Pretendard'] font-regular mt-4">{slides[currentSlide].subtitle}</p>
        </div>

        {/* 이전 버튼 */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded"
          onClick={handlePrevSlide}
        >
          Prev
        </button>

        {/* 다음 버튼 */}
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded"
          onClick={handleNextSlide}
        >
          Next
        </button>

        {/* 네비게이션 점 */}
        <div className="absolute bottom-4 flex gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            ></div>
          ))}
        </div>
      </div>

      

      {/*first*/}
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
                  <img width="185" height="56" src="image 8161_1768.png"></img>
                </div>
                <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center py-[31px] px-[81px]">
                  <img width="156" height="82" src="image 8161_1774.png"></img>
                </div>
                <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center py-[31px] px-[81px]">
                  <img width="136" height="72" src="image 8161_1776.png"></img>
                </div>
                <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center py-[31px] px-[81px]">
                  <img width="204" height="62" src="image 8161_1770.png"></img>
                </div>
                <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center py-[31px] px-[81px]">
                  <img width="204" height="62" src="image 8161_1853.png"></img>
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

      {/*second*/}
      <div className="relative self-stretch h-[1080px] shrink-0 bg-[#fff]">
      <div className="absolute -translate-x-1/2 left-1/2 top-[180px] flex flex-col items-center justify-start gap-[4px]">
        <div className="text-[16px] leading-[20px] font-[Pretendard] font-medium text-[#2d4198] whitespace-nowrap">리퓨어 헬스케어 사업소개</div>
        <div className="text-[40px] leading-[50px] font-[Montserrat] font-bold text-[#000] whitespace-nowrap">OUR BUSINESS</div>
      </div>
      <div className="absolute -translate-x-1/2 left-1/2 top-[354px] w-[1920px] flex flex-row items-center justify-center gap-[18px] overflow-hidden">
        <div className="w-[180px] h-[600px] shrink-0 opacity-0"></div>
        <div className="w-[180px] h-[600px] shrink-0 opacity-0"></div>
        <div className="w-[180px] h-[600px] shrink-0 opacity-0"></div>
        <div className="relative w-[1360px] h-[600px] shrink-0">
          <img className="absolute left-0 top-0" width="1360" height="600" src="bgI9_5285;9_5154;5_1317.png"></img>
          <div className="absolute -translate-y-1/2 left-[60px] top-[calc(50%+174px)] flex flex-col items-start justify-center gap-[4px]">
            <div className="text-[54px] font-['Pretendard'] font-extrabold text-[#fff] whitespace-nowrap">평등한 치료의 기회를 향한</div>
            <div className="flex flex-row items-center justify-start gap-[24px]">
              <div className="text-[54px] font-['Pretendard'] font-extrabold text-[#fff] whitespace-nowrap">의약사업</div>
              <img width="54" height="54" src="gg:arrow-up-oI9_5285;9_5154;6_1388.png"></img>
            </div>
          </div>
          <div className="absolute -translate-x-1/2 left-[calc(50%+220px)] top-[112px] w-[800px] text-[15px] font-['Pretendard'] text-[#fff] text-right">수많은 사람들이 난치병과 희귀질환으로 고통 받고 있지만 희귀질환을 진단하는 것은 쉽지 않을 뿐더러 치료제를 구하는 것은 더더욱 어렵습니다. 리퓨어는 환자의 아픔과 고통을 이해하고 해결하기 위해 최선을 다할 것입니다.</div>
          <div className="absolute left-[36px] top-[60px] w-[1264px] flex flex-row items-center justify-end">
            <div className="flex flex-row items-center justify-start gap-[10px]">
              <div className="flex flex-row items-center justify-center py-[6px] px-[15px] border-[2px] border-solid border-[#fff] rounded-[50px]">
                <div className="text-[14px] leading-[20px] font-['Pretendard'] font-bold text-[#fff] whitespace-nowrap">의약품 수입 유통</div>
              </div>
              <div className="flex flex-row items-center justify-center py-[6px] px-[15px] border-[2px] border-solid border-[#fff] rounded-[50px]">
                <div className="text-[14px] leading-[20px] font-['Pretendard'] font-bold text-[#fff] whitespace-nowrap">위탁 개발 생산</div>
              </div>
              <div className="flex flex-row items-center justify-center py-[6px] px-[15px] border-[2px] border-solid border-[#fff] rounded-[50px]">
                <div className="text-[14px] leading-[20px] font-['Pretendard'] font-bold text-[#fff] whitespace-nowrap">신약개발</div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[180px] h-[600px] shrink-0">
          <img className="absolute left-0 top-0" width="180" height="600" src="Rectangle 59I9_5285;9_5156.png"></img>
        </div>
        <div className="relative w-[180px] h-[600px] shrink-0">
          <img className="absolute left-0 top-0" width="180" height="600" src="Rectangle 59I9_5285;9_5158.png"></img>
        </div>
        <div className="relative w-[180px] h-[600px] shrink-0">
          <img className="absolute left-0 top-0" width="180" height="600" src="Rectangle 59I9_5285;9_5160.png"></img>
        </div>
      </div>
    </div>

    {/*third*/}
    <img width="1920" height="960" src="04_notice166_360.png"></img>
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
                <img width="185" height="56" src="image 8161_1768.png"></img>
              </div>
              <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center py-[31px] px-[81px]">
                <img width="156" height="82" src="image 8161_1774.png"></img>
              </div>
              <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center py-[31px] px-[81px]">
                <img width="136" height="72" src="image 8161_1776.png"></img>
              </div>
              <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center py-[31px] px-[81px]">
                <img width="204" height="62" src="image 8161_1770.png"></img>
              </div>
              <div className="w-[256px] h-[100px] shrink-0 flex flex-row items-center justify-center py-[31px] px-[81px]">
                <img width="204" height="62" src="image 8161_1853.png"></img>
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

   {/*forth*/}
    <div className="relative self-stretch h-[480px] shrink-0 bg-[#f8f8f8]">
      <div className="absolute left-[554px] top-[105px] w-[600px] flex flex-col items-start justify-start gap-[24px]">
        <div className="self-stretch text-[14px] leading-[20px] font-['Pretendard'] font-semibold text-[#5f6368]">리퓨어 헬스케어 Co. <br/>서울특별시 금천구 가산디지털 1로 25, 1806호</div>
        <div className="flex flex-col items-start justify-start gap-[2px]">
          <div className="flex flex-row items-center justify-start gap-[4px]">
            <div className="w-[24px] h-[20px] text-[12px] leading-[20px] font-['Pretendard'] font-medium text-[#5f6368]">대표</div>
            <div className="text-[12px] leading-[20px] font-['Montserrat'] font-medium text-[#5f6368] whitespace-nowrap">:</div>
            <div className="text-[12px] leading-[20px] font-['Pretendard'] font-medium text-[#5f6368] whitespace-nowrap">김용상, 이재휘</div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[4px]">
            <div className="w-[24px] h-[20px] text-[12px] leading-[20px] font-['Montserrat'] font-medium text-[#5f6368]">TEL</div>
            <div className="text-[12px] leading-[20px] font-['Montserrat'] font-medium text-[#5f6368] whitespace-nowrap">:</div>
            <div className="text-[12px] leading-[20px] font-['Montserrat'] font-medium text-[#5f6368] whitespace-nowrap">02-3473-3001</div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[4px]">
            <div className="w-[24px] h-[20px] text-[12px] leading-[20px] font-['Montserrat'] font-medium text-[#5f6368]">FAX</div>
            <div className="text-[12px] leading-[20px] font-['Montserrat'] font-medium text-[#5f6368] whitespace-nowrap">:</div>
            <div className="text-[12px] leading-[20px] font-['Montserrat'] font-medium text-[#5f6368] whitespace-nowrap">02-3472-3007</div>
          </div>
          <div className="text-[12px] leading-[20px] font-['Montserrat'] font-medium text-[#5f6368] whitespace-nowrap">public@repurels.com</div>
        </div>
        <div className="self-stretch text-[10px] leading-[20px] font-['Montserrat'] font-medium text-[#a5a5a5]">© 2024 REPUREHEALTHCARE. All Rights Reserved.</div>
      </div>
      <img className="absolute left-[280px] top-[100px]" width="167" height="44" src="logo7_5054.png"></img>
      <div className="absolute left-[1434px] top-[279px] flex flex-row items-center justify-start gap-[24px]">
        <div className="relative w-[104px] h-[18px] shrink-0">
          <div className="absolute left-0 top-0 text-[15px] font-['Pretendard'] font-bold text-[#777] whitespace-nowrap">개인정보처리방침</div>
        </div>
        <img width="0" height="12" src="line7_5123.png"></img>
        <div className="relative w-[52px] h-[18px] shrink-0">
          <div className="absolute left-0 top-0 text-[15px] font-['Pretendard'] font-bold text-[#777] whitespace-nowrap">오시는길</div>
        </div>
      </div>
      <div className="absolute left-[1434px] top-[105px] flex flex-row items-center justify-start gap-[20px]">
        <div className="relative w-[36px] h-[36px] shrink-0 bg-[#fff] rounded-[32px] overflow-hidden">
          <img className="absolute left-[3px] top-[6px]" width="30" height="28" src="image7_5136.png"></img>
        </div>
        <div className="relative w-[36px] h-[36px] shrink-0">
          <img className="absolute left-0 top-0" width="36" height="36" src="linkedin_icon.jpeg7_5135.png"></img>
        </div>
        <div className="relative w-[94px] h-[36px] shrink-0">
          <img className="absolute left-[7.45%] right-[6.38%] top-[16.67%] bottom-[16.67%]" width="81" height="24" src="opentarget 27_4974.png"></img>
        </div>
      </div>
      <div className="absolute left-0 top-[-110px] w-[1920px] h-[590px] flex flex-row items-end justify-end pt-0 pr-[180px] pb-[413px] pl-[200px]">
        <img width="60" height="60" src="btn_forTheTop7_4978.png"></img>
      </div>
    </div>


      {/* footer */}
      <div className="relative self-stretch h-[480px] shrink-0 bg-[#f8f8f8]">
        <div className="absolute left-[554px] top-[105px] w-[600px] flex flex-col items-start justify-start gap-[24px]">
          <div className="self-stretch text-[14px] leading-[20px] font-['Pretendard'] font-semibold text-[#5f6368]">리퓨어 헬스케어 Co. <br/>서울특별시 금천구 가산디지털 1로 25, 1806호</div>
          <div className="flex flex-col items-start justify-start gap-[2px]">
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <div className="w-[24px] h-[20px] text-[12px] leading-[20px] font-['Pretendard'] font-medium text-[#5f6368]">대표</div>
              <div className="text-[12px] leading-[20px] font-['Montserrat'] font-medium text-[#5f6368] whitespace-nowrap">:</div>
              <div className="text-[12px] leading-[20px] font-['Pretendard'] font-medium text-[#5f6368] whitespace-nowrap">김용상, 이재휘</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <div className="w-[24px] h-[20px] text-[12px] leading-[20px] font-['Montserrat'] font-medium text-[#5f6368]">TEL</div>
              <div className="text-[12px] leading-[20px] font-['Montserrat'] font-medium text-[#5f6368] whitespace-nowrap">:</div>
              <div className="text-[12px] leading-[20px] font-['Montserrat'] font-medium text-[#5f6368] whitespace-nowrap">02-3473-3001</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <div className="w-[24px] h-[20px] text-[12px] leading-[20px] font-['Montserrat'] font-medium text-[#5f6368]">FAX</div>
              <div className="text-[12px] leading-[20px] font-['Montserrat'] font-medium text-[#5f6368] whitespace-nowrap">:</div>
              <div className="text-[12px] leading-[20px] font-['Montserrat'] font-medium text-[#5f6368] whitespace-nowrap">02-3472-3007</div>
            </div>
            <div className="text-[12px] leading-[20px] font-['Montserrat'] font-medium text-[#5f6368] whitespace-nowrap">public@repurels.com</div>
          </div>
          <div className="self-stretch text-[10px] leading-[20px] font-['Montserrat'] font-medium text-[#a5a5a5]">© 2024 REPUREHEALTHCARE. All Rights Reserved.</div>
        </div>
        <img className="absolute left-[280px] top-[100px]" width="167" height="44" src="logo7_5054.png"></img>
        <div className="absolute left-[1434px] top-[279px] flex flex-row items-center justify-start gap-[24px]">
          <div className="relative w-[104px] h-[18px] shrink-0">
            <div className="absolute left-0 top-0 text-[15px] font-['Pretendard'] font-bold text-[#777] whitespace-nowrap">개인정보처리방침</div>
          </div>
          <img width="0" height="12" src="line7_5123.png"></img>
          <div className="relative w-[52px] h-[18px] shrink-0">
            <div className="absolute left-0 top-0 text-[15px] font-['Pretendard'] font-bold text-[#777] whitespace-nowrap">오시는길</div>
          </div>
        </div>
        <div className="absolute left-[1434px] top-[105px] flex flex-row items-center justify-start gap-[20px]">
          <div className="relative w-[36px] h-[36px] shrink-0 bg-[#fff] rounded-[32px] overflow-hidden">
            <img className="absolute left-[3px] top-[6px]" width="30" height="28" src="image7_5136.png"></img>
          </div>
          <div className="relative w-[36px] h-[36px] shrink-0">
            <img className="absolute left-0 top-0" width="36" height="36" src="linkedin_icon.jpeg7_5135.png"></img>
          </div>
          <div className="relative w-[94px] h-[36px] shrink-0">
            <img className="absolute left-[7.45%] right-[6.38%] top-[16.67%] bottom-[16.67%]" width="81" height="24" src="opentarget 27_4974.png"></img>
          </div>
        </div>
        <div className="absolute left-0 top-[-110px] w-[1920px] h-[590px] flex flex-row items-end justify-end pt-0 pr-[180px] pb-[413px] pl-[200px]">
          <img width="60" height="60" src="btn_forTheTop7_4978.png"></img>
        </div>
      </div>

    </div>

      {/* top */}
      <div className="absolute left-0 top-0 w-[1920px] min-w-[1600px] flex flex-row items-center justify-between py-[25px] px-[60px] bg-[#fff] filter-[backdrop-blur(1px)]">
        <div className="relative w-[192px] h-[50px] shrink-0 overflow-hidden">
          <div className="absolute left-0 top-0 w-[192px] h-[48px] overflow-hidden">
            <img className="absolute left-0 top-0" width="192" height="48" src="Clip path groupI4_219;2_60.png"></img>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-[80px]">
          <div className="flex flex-col items-center justify-start">
            <div className="text-[16px] leading-[24px] font-['Montserrat'] font-medium text-transform-[uppercase] text-[#363636] text-center whitespace-nowrap">About Us</div>
          </div>
          <div className="flex flex-col items-center justify-start">
            <div className="text-[16px] leading-[24px] font-['Montserrat'] font-medium text-transform-[uppercase] text-[#363636] text-center whitespace-nowrap">Business</div>
          </div>
          <div className="flex flex-col items-center justify-start">
            <div className="text-[16px] leading-[24px] font-['Montserrat'] font-medium text-transform-[uppercase] text-[#363636] text-center whitespace-nowrap">R&D</div>
          </div>
          <div className="flex flex-col items-center justify-start">
            <div className="text-[16px] leading-[24px] font-['Montserrat'] font-medium text-transform-[uppercase] text-[#363636] text-center whitespace-nowrap">Support</div>
          </div>
        </div>
      </div>

</div>
  );
};

export default Main;
