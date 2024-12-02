import React from 'react';
import { useState, useEffect } from 'react';

import Bottom from '../../components/Bottom'
import Top from '../../components/Top'

import AboutUsTitle from '../../components/AboutUsTitle';

import historyLine from '../../assets/historyLine.png'



const History = () => {
  return (
    <div className="relative w-[1920px] min-w-[1440px] flex flex-col justify-start bg-[#fff] mx-auto  items-center" >
    <AboutUsTitle activeTab="연혁" />


  <div className="w-[2262px] h-[2462px] relative bg-white">
    <img className="left-[460px] top-[100px] absolute" src = {historyLine} />
        <div className="left-[500px] top-[120px] absolute justify-start items-start gap-20 inline-flex">
          <div className="w-[120px] text-black text-4xl font-semibold font-['Montserrat'] leading-10">2022</div>
          <div className="flex-col justify-start items-start inline-flex">
            <div className="w-[88px] h-10 relative" />
            <div className="self-stretch h-[50px] flex-col justify-start items-start gap-2.5 flex">
              <div className="text-neutral-700 text-base font-medium font-['Pretendard'] leading-tight">
                리퓨어생명과학, BL&H 합병
              </div>
              <div className="text-neutral-700 text-base font-medium font-['Pretendard'] leading-tight">
                리퓨어헬스케어로 사명 변경
              </div>
            </div>
          </div>
        </div>
    <div className="left-[500px] top-[270px] absolute justify-start items-start gap-20 inline-flex">
    <div className="w-[120px] text-black text-4xl font-semibold font-['Montserrat'] leading-10">2021</div>
    <div className="flex-col justify-start items-start inline-flex">
      <div className="w-[88px] h-10 relative" />
      <div className="flex-col justify-start items-start gap-2.5 flex">
        <div className="text-neutral-700 text-base font-medium font-['Pretendard'] leading-tight">KAIST 파브리병 특허 전용실시권 기술이전계약 체결</div>
        <div className="text-neutral-700 text-base font-medium font-['Pretendard'] leading-tight">KBIOHealth-충북대 YKL-40 표적 인간 단일클론항체 기술이전계약 체결</div>
        <div className="text-neutral-700 text-base font-medium font-['Pretendard'] leading-tight">리퓨어 계열사 헤이븐케어 설립</div>
        <div className="text-neutral-700 text-base font-medium font-['Pretendard'] leading-tight">항주고전생물의약유한공사, 복단대생물의학연구원 MOU 체결</div>
      </div>
    </div>
  </div>
  <div className="left-[500px] top-[480px] absolute justify-start items-start gap-20 inline-flex">
    <div className="w-[120px] text-black text-4xl font-semibold font-['Montserrat'] leading-10">2020</div>
    <div className="flex-col justify-start items-start inline-flex">
      <div className="w-[88px] h-10 relative" />
      <div className="flex-col justify-start items-start gap-2.5 flex">
        <div className="text-neutral-700 text-base font-medium font-['Pretendard'] leading-tight">충청북도 청주시 오송바이오폴리스지구 투자협약</div>
        <div className="text-neutral-700 text-base font-medium font-['Pretendard'] leading-tight">충북대학교 아스타잔틴 특허 양도 및 기술이전계약 체결</div>
        <div className="text-neutral-700 text-base font-medium font-['Pretendard'] leading-tight">‘연세의료원-리퓨어생명과학-경남바이오파마’ 공동연구 MOU 체결</div>
      </div>
    </div>
  </div>
  <div className="left-[500px] top-[660px] absolute justify-start items-start gap-20 inline-flex">
    <div className="w-[120px] text-black text-4xl font-semibold font-['Montserrat'] leading-10">2019</div>
    <div className="flex-col justify-start items-start inline-flex">
      <div className="w-[88px] h-10 relative" />
      <div className="flex-col justify-start items-start gap-2.5 flex">
        <div className="text-neutral-700 text-base font-medium font-['Pretendard'] leading-tight">리퓨어 계열사 슈팹 설립</div>
        <div className="text-neutral-700 text-base font-medium font-['Pretendard'] leading-tight">면역항암제 개발 시작(3,4세대)</div>
        <div className="text-neutral-700 text-base font-medium font-['Pretendard'] leading-tight">캠브리지 밀너연구소 AI 신약개발 공동연구 MOU 체결</div>
      </div>
    </div>
  </div>
  <div className="left-[500px] top-[840px] absolute justify-start items-start gap-20 inline-flex">
    <div className="w-[120px] text-black text-4xl font-semibold font-['Montserrat'] leading-10">2018</div>
    <div className="flex-col justify-start items-start inline-flex">
      <div className="w-[88px] h-10 relative" />
      <div className="flex-col justify-start items-start gap-2.5 flex">
        <div className="text-neutral-700 text-base font-medium font-['Pretendard'] leading-tight">리퓨어생명과학 설립</div>
        <div className="text-neutral-700 text-base font-medium font-['Pretendard'] leading-tight">덕성혁신신약센터, 숙명여대 산학협력단 MOU 체결</div>
      </div>
    </div>
  </div>
  <div className="left-[500px] top-[990px] absolute justify-start items-start gap-20 inline-flex">
    <div className="w-[120px] text-black text-4xl font-semibold font-['Montserrat'] leading-10">2017</div>
    <div className="flex-col justify-start items-start inline-flex">
      <div className="w-[88px] h-10 relative" />
      <div className="flex-col justify-start items-start gap-2.5 flex">
        <div className="text-neutral-700 text-base font-medium font-['Pretendard'] leading-tight">BTG International Ltd., InnoPharmax Inc., BTG International Ltd., Sanosil AG, MDNA Life Science Inc. 공급계약 체결</div>
      </div>
    </div>
  </div>
  <div className="left-[500px] top-[1110px] absolute justify-start items-start gap-20 inline-flex">
    <div className="w-[120px] text-black text-4xl font-semibold font-['Montserrat'] leading-10">2016</div>
    <div className="flex-col justify-start items-start inline-flex">
      <div className="w-[88px] h-10 relative" />
      <div className="flex-col justify-start items-start gap-2.5 flex">
        <div className="text-neutral-700 text-base font-medium font-['Pretendard'] leading-tight">벳코비에이씨, BL&H 합병</div>
        <div className="text-neutral-700 text-base font-medium font-['Pretendard'] leading-tight">Medical Developments International Orgentec Diagnostika GmbH 공급계약 체결</div>
      </div>
    </div>
  </div>
  <div className="left-[500px] top-[1260px] absolute justify-start items-start gap-20 inline-flex">
    <div className="w-[120px] text-black text-4xl font-semibold font-['Montserrat'] leading-10">2015</div>
    <div className="flex-col justify-start items-start inline-flex">
      <div className="w-[88px] h-10 relative" />
      <div className="flex-col justify-start items-start gap-2.5 flex">
        <div className="text-neutral-700 text-base font-medium font-['Pretendard'] leading-tight">Theratechnologies Inc., Telesta Therapeutics Inc., Lophius Biosciences GmbH, <br/>MediWound Ltd., Riemser Pharma GmbH, Vigilant Biosciences, Inc. 공급계약 체결</div>
      </div>
    </div>
  </div>
  <div className="left-[500px] top-[1400px] absolute justify-start items-start gap-20 inline-flex">
    <div className="w-[120px] text-black text-4xl font-semibold font-['Montserrat'] leading-10">2014</div>
    <div className="flex-col justify-start items-start inline-flex">
      <div className="w-[88px] h-10 relative" />
      <div className="flex-col justify-start items-start gap-2.5 flex">
        <div className="text-neutral-700 text-base font-medium font-['Pretendard'] leading-tight">Welding GmbH & CO. KG, ALK Abello A/S 공급계약 체결</div>
      </div>
    </div>
  </div>
  <div className="left-[500px] top-[1520px] absolute justify-start items-start gap-20 inline-flex">
    <div className="w-[120px] text-black text-4xl font-semibold font-['Montserrat'] leading-10">2013</div>
    <div className="flex-col justify-start items-start inline-flex">
      <div className="w-[88px] h-10 relative" />
      <div className="flex-col justify-start items-start gap-2.5 flex">
        <div className="text-neutral-700 text-base font-medium font-['Pretendard'] leading-tight">BTG International Ltd. 공급계약 체결</div>
      </div>
    </div>
  </div>
  <div className="left-[500px] top-[1640px] absolute justify-start items-start gap-20 inline-flex">
    <div className="w-[120px] text-black text-4xl font-semibold font-['Montserrat'] leading-10">2012</div>
    <div className="flex-col justify-start items-start inline-flex">
      <div className="w-[88px] h-10 relative" />
      <div className="flex-col justify-start items-start gap-2.5 flex">
        <div className="text-neutral-700 text-base font-medium font-['Pretendard'] leading-tight">Schulke & Mayr 공급계약 체결</div>
        <div className="text-neutral-700 text-base font-medium font-['Pretendard'] leading-tight">Dechra 동물약품 공급계약 체결</div>
      </div>
    </div>
  </div>
  <div className="left-[500px] top-[1790px] absolute justify-start items-start gap-20 inline-flex">
    <div className="w-[120px] text-black text-4xl font-semibold font-['Montserrat'] leading-10">2011</div>
    <div className="flex-col justify-start items-start inline-flex">
      <div className="w-[88px] h-10 relative" />
      <div className="flex-col justify-start items-start gap-2.5 flex">
        <div className="text-neutral-700 text-base font-medium font-['Pretendard'] leading-tight">벳코비에이씨 자회사 편입</div>
        <div className="text-neutral-700 text-base font-medium font-['Pretendard'] leading-tight">Kibow Biotech, Swedish Orphan</div>
        <div className="text-neutral-700 text-base font-medium font-['Pretendard'] leading-tight">Biovitrum 공급계약 체결</div>
      </div>
    </div>
  </div>
  <div className="left-[500px] top-[1970px] absolute justify-start items-start gap-20 inline-flex">
    <div className="w-[120px] text-black text-4xl font-semibold font-['Montserrat'] leading-10">2010</div>
    <div className="flex-col justify-start items-start inline-flex">
      <div className="w-[88px] h-10 relative" />
      <div className="flex-col justify-start items-start gap-2.5 flex">
        <div className="text-neutral-700 text-base font-medium font-['Pretendard'] leading-tight">Gentium SPA. 공급계약 체결</div>
        <div className="text-neutral-700 text-base font-medium font-['Pretendard'] leading-tight">SPECIFIC™ diet 공급계약 체결</div>
      </div>
    </div>
  </div>
  <div className="left-[500px] top-[2120px] absolute justify-start items-start gap-20 inline-flex">
    <div className="w-[120px] text-black text-4xl font-semibold font-['Montserrat'] leading-10">2004<br/>-2009</div>
    <div className="flex-col justify-start items-start inline-flex">
      <div className="w-[88px] h-10 relative" />
      <div className="flex-col justify-start items-start gap-2.5 flex">
        <div className="text-neutral-700 text-base font-medium font-['Pretendard'] leading-tight">Photonamic GmbH., Biocompatibles와 공급계약 체결</div>
        <div className="text-neutral-700 text-base font-medium font-['Pretendard'] leading-tight">Nippon Shinyaku Co., Ltd., Orthovita Inc., Pharma-Zentrale GmbH. 공급계약 체결</div>
        <div className="text-neutral-700 text-base font-medium font-['Pretendard'] leading-tight">Pharmaxis Ltd., Cangenr Corporation 공급계약 체결</div>
        <div className="text-neutral-700 text-base font-medium font-['Pretendard'] leading-tight">EUSA Pharma 공급계약 체결</div>
        <div className="text-neutral-700 text-base font-medium font-['Pretendard'] leading-tight">KLOSTERFRAU Berlin GmbH., Medac GmbH. 공급계약 체결</div>
        <div className="text-neutral-700 text-base font-medium font-['Pretendard'] leading-tight">Pharmion Ltd., Laboratorios SALVAT S.A, Apopharma Inc. 공급계약 체결</div>
      </div>
    </div>
  </div>
  

      </div>

        {/*bottom */}
  <Bottom />

{/* top */}
<Top />
    // </div>
  );
};

export default History;
