import { useState, useEffect } from 'react';
import Top from '../../components/Top';
import Bottom from '../../components/Bottom';
import bg20_1424 from '../../assets/bg20_1424.png'
import group820_1434 from '../../assets/Group_820_1434.png'
import image166_728 from '../../assets/image166_728.png'
import layer_120_1441 from '../../assets/Layer_120_1441.png'
import layer_120_1445 from '../../assets/Layer_120_1445.png'
import layer_120_1450 from '../../assets/Layer_120_1450.png'
import rectangle63166_754 from '../../assets/Rectangle_63166_754.png'
import rectangle63166_759 from '../../assets/Rectangle_63166_759.png'
import vector243_684 from '../../assets/Vector243_684.png'
import image28243_665 from '../../assets/image28243_665.png'
import img_line from '../../assets/img_line.png'
import ceo_line from '../../assets/ceoLine.png'

import AboutUsTitle from '../../components/AboutUsTitle';




const Ceo = () => {

    return (
        <div className="w-[1920px] flex flex-col items-start justify-start bg-[#fff] mx-auto flex flex-col items-center">
            <AboutUsTitle activeTab="기업소개" />
            <div className="relative self-stretch h-[1647px] shrink-0 bg-[#fff] overflow-hidden">
                <div className="absolute left-[-205px] top-[194px] w-[2294px] h-[1011px] flex">
                <div className="absolute left-[1707px] top-[348px] w-[587px] h-[575px] flex">
                    <div className="absolute right-0 top-0 w-[464px] h-[464px] border-[1px] border-solid border-[#c0192d80] rounded-full"></div>
                    <div className="absolute right-[302px] top-[290px] w-[285px] h-[285px]"></div>
                </div>
                <div className="absolute left-[205px] top-[995px] w-[1920px] h-[16px] flex">
                    <div className="absolute left-0 right-0 top-[7px] h-[1px] bg-[#d9d9d9]"></div>
                    {/* <div className="absolute left-[303px] right-[202px] top-0 h-[16px] border-[1px] border-solid border-[#d9d9d9]"></div> */}
                    <img src={img_line} />
                </div>
                <div className="absolute left-0 top-[40px] w-[552px] h-[552px] border-[1px] border-solid border-[#e8e8e8] rounded-full"></div>
                <div className="absolute left-[233px] top-[0px] w-[139px] h-[139px] border-[1px] border-solid border-[#2f3474] rounded-full"></div>
                <img className="absolute left-[138px] top-[402px]" width="877" height="256" src={image28243_665}></img>
                </div>
                <div className="absolute -translate-x-1/2 left-[calc(50%+-463px)] top-[100px] text-[40px] leading-[50px] font-['Pretendard'] font-bold text-transform-[uppercase] text-[#000] whitespace-nowrap">리퓨어는 모든 생명이 <br/>질병으로부터 자유로웠던<br/>태초의 순수함을 추구합니다</div>
                <div className="absolute -translate-x-1/2 left-[calc(50%+276px)] top-[175px] w-[810px] h-[1px] bg-[#d9d9d9]"></div>
                <div className="absolute left-[831px] top-[256px] w-[810px] h-[474px] flex">
                <div className="absolute left-0 top-0 w-[810px] h-[346px] flex">
                    <div className="absolute -translate-x-1/2 left-1/2 top-[34px] w-[810px] text-[16px] leading-[24px] font-['Pretendard'] text-[#888] text-justify">리퓨어는 모든 생명이 질병으로부터 자유로웠던 태초의 순수함을 추구합니다.<br/><br/>그 때의 모습을 회복하고자 열정적으로 질병과 싸우는 이들이 있습니다. 리퓨어는 그들과 함께하여 순수함을 되찾을 수 있도록 도움을 주고자 합니다.<br/><br/>리퓨어는 히포크라테스 선서로부터 환자의 권리장전까지의 역동적인 역사를 모두 기억하고 그 실현에 앞장 설 것입니다. <br/>도움이 필요한 모든 이들에게 정결한 삶을 돌려주고, 그들이 다시 건강하게 사회에서 삶을 유지하도록 도와주고자 합니다.<br/>저희는 환자의 아픔과 고통을 이해하고 해결하기 위해 최선을 다함으로써 성장할 것입니다.<br/>평등한 치료의 기회는 모두에게 주어져야 하며 어떠한 가치도 이를 앞설 수는 없습니다.<br/>모두의 삶이 순수하게 유지될 수 있도록 리퓨어는 적극적으로 소통하고 케어하며 치료할 것입니다.<br/><br/>삶은 언제나 순수함을 유지하고자 하는 도전의 연속입니다. 이에 리퓨어는 여러분의 삶의 여정이 건강한 방향으로 나아갈 수 있도록 함께 하는 믿음직한 동반자가 될 것을 약속합니다.</div>
                    <div className="absolute -translate-x-1/2 left-[calc(50%+-309px)] top-0 text-[18px] leading-[24px] font-['Pretendard'] font-semibold text-[#414141] text-justify whitespace-nowrap">Making Life Pure Again </div>
                </div>
                <div className="absolute -translate-x-1/2 left-[calc(50%+266px)] top-[426px] flex flex-row items-center justify-start gap-[10px]">
                    <div className="text-[16px] leading-[24px] font-['Pretendard'] font-light text-[#888] whitespace-nowrap">리퓨어헬스케어</div>
                    <div className="text-[16px] leading-[24px] font-['Pretendard'] font-semibold text-[#2e2e2e] whitespace-nowrap">대표이사 김용상</div>
                    <img width="55" height="48" src = { image166_728 }></img>
                </div>
                </div>
                <div className="absolute -translate-x-1/2 left-[calc(50%+491px)] top-[1045px] w-[380px] h-[380px]">
                <img className="absolute left-0 top-0" width="380" height="380" src={rectangle63166_754}></img>
                <div className="absolute left-[40px] top-[244px] w-[300px] text-[18px] leading-[24px] text-[#fff] text-justify"><span className="font-['Pretendard']">리퓨어, 토탈헬스케어로 함께합니다. 희귀질환 의약품뿐만 아니라 포괄적인 의료 서비스를 통해 토탈헬스케어를 달성하고,</span><span className="font-['Pretendard'] font-medium"> </span><span className="font-['Pretendard'] font-extrabold">모두의 건강한 삶을 실현할 수 있게 합니다.</span></div>
                <div className="absolute right-[40px] top-[40px] flex flex-row items-center justify-end py-[6px] px-[15px] border-[2px] border-solid border-[#fff] rounded-[50px]">
                    <div className="text-[14px] leading-[30px] font-['Montserrat'] font-medium text-[#fff] whitespace-nowrap">REPURE VISION</div>
                </div>
                </div>
                <div className="absolute -translate-x-1/2 left-[calc(50%+61px)] top-[1045px] w-[380px] h-[380px]">
                <img className="absolute left-0 top-0" width="380" height="380" src={rectangle63166_759}></img>
                <div className="absolute left-[40px] top-[220px] w-[300px] text-[18px] leading-[24px] text-[#fff] text-justify"><span className="font-['Pretendard']">리퓨어웨이, 건강한 삶을 만듭니다. 사람과 동물의 희귀질병을 비롯해 </span><span className="font-['Pretendard'] font-extrabold">모든 생명의 건강을 위해 매진</span><span className="font-['Pretendard']">합니다. 모든 생명에 주의를 기울이고 이를 통해 누구나 </span><span className="font-['Pretendard'] font-bold">"순수하게 건강한 삶"</span><span className="font-['Pretendard']">을 지속할 수 있는 세상을 만듭니다.</span></div>
                <div className="absolute right-[40px] top-[40px] flex flex-row items-center justify-end py-[6px] px-[15px] border-[2px] border-solid border-[#fff] rounded-[50px]">
                    <div className="text-[14px] leading-[30px] font-['Montserrat'] font-medium text-[#fff] whitespace-nowrap">REPURE MISSION</div>
                </div>
                </div>
                <div className="absolute -translate-x-1/2 left-[calc(50%+-530px)] top-[981px] flex flex-col items-start justify-start gap-[4px]">
                <div className="text-[16px] leading-[20px] font-['Pretendard'] font-medium text-[#2d4198] whitespace-nowrap">리퓨어가 가진 미션과 비젼</div>
                <div className="text-[36px] leading-[40px] font-['Montserrat'] font-semibold text-[#000] whitespace-nowrap">Mission & Vision</div>
                </div>
            </div>
            <div className="relative self-stretch h-[1080px] shrink-0 bg-[#fff]">
                <div className="absolute left-0 top-0 w-[1920px] h-[1080px] flex">
                <img className="absolute left-0 right-0 top-0 bottom-0" width="1920" height="1080" src = { bg20_1424 }></img>
                <div className="absolute left-0 right-0 top-0 bottom-0 bg-[#ffffff03] filter-[backdrop-blur(5px)]"></div>
                </div>
                <div className="absolute -translate-x-1/2 left-1/2 top-[205px] flex flex-col items-center justify-start gap-[4px]">
                <div className="text-[16px] leading-[20px] font-['Pretendard'] font-medium text-[#fff] whitespace-nowrap">리퓨어가 생각하는 핵심 가치</div>
                <div className="text-[54px] font-['Pretendard'] font-extrabold text-[#fff] text-center whitespace-nowrap">Repure Way,<br/>누구나 순수하게 건강한 삶</div>
                </div>
                <div className="absolute -translate-x-1/2 left-1/2 top-[477px] flex flex-row items-center justify-start gap-[20px]">
                <div className="relative w-[340px] h-[398px] shrink-0 bg-[#ffffff1a]">
                    <div className="absolute -translate-x-1/2 left-1/2 top-[290px] w-[260px] text-[18px] leading-[24px] font-['Pretendard'] text-[#fff] text-center">모든 생명체를 고객으로 생각하며<br/>소중히 여깁니다.</div>
                    <div className="absolute -translate-x-1/2 left-1/2 top-[69px] text-[24px] leading-[24px] font-['Pretendard'] font-bold text-[#fff] text-center whitespace-nowrap">존중</div>
                    <div className="absolute left-[120px] top-[149px] w-[100px] h-[100px] flex flex-col items-center justify-center overflow-hidden">
                    <img width="76" height="77" src = { group820_1434 }></img>
                    </div>
                </div>
                <div className="relative w-[340px] h-[398px] shrink-0 bg-[#ffffff1a]">
                    <div className="absolute -translate-x-1/2 left-1/2 top-[290px] w-[260px] text-[18px] leading-[24px] font-['Pretendard'] text-[#fff] text-center">고객과 직원, 커뮤니티의 소통을 통해<br/>모두의 행복과 능력을 확장합니다.</div>
                    <div className="absolute -translate-x-1/2 left-1/2 top-[69px] text-[24px] leading-[24px] font-['Pretendard'] font-bold text-[#fff] text-center whitespace-nowrap">상호소통</div>
                    <div className="absolute -translate-x-1/2 left-1/2 top-[69px] text-[24px] leading-[24px] font-['Pretendard'] font-bold text-[#fff] text-center whitespace-nowrap">상호소통</div>
                    <img className="absolute -translate-x-1/2 left-1/2 top-[149px]" width="100" height="100" src={layer_120_1441}></img>
                </div>
                <div className="relative w-[340px] h-[398px] shrink-0 bg-[#ffffff1a]">
                    <div className="absolute -translate-x-1/2 left-1/2 top-[290px] w-[260px] text-[18px] leading-[24px] font-['Pretendard'] text-[#fff] text-center">모두의 건강하고 개선된 삶을 위해 의<br/>무를 다하는 충실한 자세를 갖습니다.</div>
                    <img className="absolute -translate-x-1/2 left-1/2 top-[35.68%] bottom-[39.2%]" width="100" height="100" src={layer_120_1445}></img>
                    <div className="absolute -translate-x-1/2 left-1/2 top-[69px] text-[24px] leading-[24px] font-['Pretendard'] font-bold text-[#fff] text-center whitespace-nowrap">책임</div>
                </div>
                <div className="relative w-[340px] h-[398px] shrink-0 bg-[#ffffff1a]">
                    <div className="absolute -translate-x-1/2 left-1/2 top-[290px] w-[260px] text-[18px] leading-[24px] font-['Pretendard'] text-[#fff] text-center">끊임없는 도전과 독창성으로 더 건강<br/>한 삶을 위해 노력합니다.</div>
                    <img className="absolute -translate-x-1/2 left-1/2 top-[37.44%] bottom-[37.44%]" width="100" height="100" src={layer_120_1450}></img>
                    <div className="absolute -translate-x-1/2 left-1/2 top-[69px] text-[24px] leading-[24px] font-['Pretendard'] font-bold text-[#fff] text-center whitespace-nowrap">혁신</div>
                </div>
                </div>
            </div>
            <div className="relative self-stretch h-[809px] shrink-0 bg-[#f6f6f6] overflow-hidden">
                <div className="absolute left-[-432px] top-[-60px] w-[2527px] h-[940px] flex">
                <div className="absolute left-0 top-[318px] w-[622px] h-[622px] flex">
                    <div className="absolute left-0 top-[0px] w-[552px] h-[552px] border-[1px] border-solid border-[#d1d1d1] rounded-full"></div>
                    <div className="absolute left-[447px] top-[429px] w-[139px] h-[139px] border-[1px] border-solid border-[#2f3474] rounded-full"></div>
                </div>
                <div className="absolute left-[2027px] top-0 w-[500px] h-[481px] flex">
                    <img className="absolute right-[305px] top-[286px]" width="195" height="195" src={vector243_684}></img>
                    <div className="absolute right-0 top-0 w-[464px] h-[464px] border-[1px] border-solid border-[#c0192d80] rounded-full opacity-[.3]"></div>
                </div>
                </div>
                <div className="absolute -translate-x-1/2 left-[calc(50%+-679px)] top-[336px] w-[230px] h-[1px] bg-[#d9d9d9] rotate-90"></div>
                <div className="absolute left-[831px] top-[246px] w-[809px] flex justify-center">
                    <img className="mt-[32px]" width="663" height="180" src = {ceo_line} />
                {/* <div className="absolute -translate-x-1/2 left-[calc(50%+-4px)] top-[32px] w-[663px] h-[181px] border-[1px] border-solid border-[#dbe2ff]"></div> */}
                <div className="absolute -translate-x-1/2 left-[calc(50%+-332px)] top-[208px] w-[145px] h-[36px] flex flex-row items-center justify-center py-[8px] px-[24px] bg-[#122e70] border-[2px] border-solid border-[#122e70] rounded-[50px]">
                    <div className="text-[14px] leading-[20px] font-['Pretendard'] font-medium text-[#fff] whitespace-nowrap">의약사업본부</div>
                </div>
                <div className="absolute -translate-x-1/2 left-1/2 top-[254px] w-[145px] h-[70px] flex flex-col items-start justify-start gap-[6px]">
                    <div className="self-stretch flex flex-row items-center justify-center py-[6px] px-[15px] bg-[#fff] border-[1px] border-solid border-[#122e70] rounded-[50px]">
                    <div className="text-[14px] leading-[20px] font-['Pretendard'] text-[#122e70] whitespace-nowrap">IT연구소</div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center py-[6px] px-[15px] bg-[#fff] border-[1px] border-solid border-[#122e70] rounded-[50px]">
                    <div className="text-[14px] leading-[20px] font-['Pretendard'] text-[#122e70] whitespace-nowrap">질환케어</div>
                    </div>
                </div>
                <div className="absolute -translate-x-1/2 left-[calc(50%+-90px)] top-[122px] w-[120px] h-[32px] flex flex-row items-center justify-center py-[6px] px-[15px] bg-[#fff] border-[1px] border-solid border-[#122e70] rounded-[50px]">
                    <div className="text-[14px] leading-[20px] font-['Pretendard'] font-medium text-[#122e70] whitespace-nowrap">물류센터</div>
                </div>
                <div className="absolute -translate-x-1/2 left-[calc(50%+-332px)] top-[254px] w-[145px] h-[146px] flex flex-col items-start justify-start gap-[6px]">
                    <div className="self-stretch flex flex-row items-center justify-center py-[6px] px-[15px] bg-[#fff] border-[1px] border-solid border-[#122e70] rounded-[50px]">
                    <div className="text-[14px] leading-[20px] font-['Pretendard'] text-[#122e70] whitespace-nowrap">마케팅</div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center py-[6px] px-[15px] bg-[#fff] border-[1px] border-solid border-[#122e70] rounded-[50px]">
                    <div className="text-[14px] leading-[20px] font-['Pretendard'] text-[#122e70] whitespace-nowrap">R&D</div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center py-[6px] px-[15px] bg-[#fff] border-[1px] border-solid border-[#122e70] rounded-[50px]">
                    <div className="text-[14px] leading-[20px] font-['Pretendard'] text-[#122e70] whitespace-nowrap">생산</div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center py-[6px] px-[15px] bg-[#fff] border-[1px] border-solid border-[#122e70] rounded-[50px]">
                    <div className="text-[14px] leading-[20px] font-['Pretendard'] text-[#122e70] whitespace-nowrap">영업</div>
                    </div>
                </div>
                <div className="absolute -translate-x-1/2 left-[calc(50%+332px)] top-[254px] w-[145px] h-[146px] flex flex-col items-start justify-start gap-[6px]">
                    <div className="self-stretch flex flex-row items-center justify-center py-[6px] px-[15px] bg-[#fff] border-[1px] border-solid border-[#122e70] rounded-[50px]">
                    <div className="text-[14px] leading-[20px] font-['Pretendard'] text-[#122e70] whitespace-nowrap">마케팅</div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center py-[6px] px-[15px] bg-[#fff] border-[1px] border-solid border-[#122e70] rounded-[50px]">
                    <div className="text-[14px] leading-[20px] font-['Pretendard'] text-[#122e70] whitespace-nowrap">R&D</div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center py-[6px] px-[15px] bg-[#fff] border-[1px] border-solid border-[#122e70] rounded-[50px]">
                    <div className="text-[14px] leading-[20px] font-['Pretendard'] text-[#122e70] whitespace-nowrap">생산</div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center py-[6px] px-[15px] bg-[#fff] border-[1px] border-solid border-[#122e70] rounded-[50px]">
                    <div className="text-[14px] leading-[20px] font-['Pretendard'] text-[#122e70] whitespace-nowrap">영업</div>
                    </div>
                </div>
                <div className="absolute -translate-x-1/2 left-1/2 top-[208px] w-[145px] h-[36px] flex flex-row items-center justify-center py-[8px] px-[24px] bg-[#122e70] border-[2px] border-solid border-[#122e70] rounded-[50px]">
                    <div className="text-[14px] leading-[20px] font-['Pretendard'] font-medium text-[#fff] whitespace-nowrap">헬스케어사업본부</div>
                </div>
                <div className="absolute -translate-x-1/2 left-[calc(50%+332px)] top-[208px] w-[145px] h-[36px] flex flex-row items-center justify-center py-[8px] px-[24px] bg-[#122e70] border-[2px] border-solid border-[#122e70] rounded-[50px]">
                    <div className="text-[14px] leading-[20px] font-['Pretendard'] font-medium text-[#fff] whitespace-nowrap">동물사업본부</div>
                </div>
                <div className="absolute -translate-x-1/2 left-[calc(50%+-166px)] top-[208px] w-[145px] h-[36px] flex flex-row items-center justify-center py-[8px] px-[24px] bg-[#122e70] border-[2px] border-solid border-[#122e70] rounded-[50px]">
                    <div className="text-[14px] leading-[20px] font-['Pretendard'] font-medium text-[#fff] whitespace-nowrap">식품계열사</div>
                </div>
                <div className="absolute -translate-x-1/2 left-[calc(50%+166px)] top-[208px] w-[145px] h-[36px] flex flex-row items-center justify-center py-[8px] px-[24px] bg-[#122e70] border-[2px] border-solid border-[#122e70] rounded-[50px]">
                    <div className="text-[14px] leading-[20px] font-['Pretendard'] font-medium text-[#fff] whitespace-nowrap">헬스케어계열사</div>
                </div>
                <div className="absolute -translate-x-1/2 left-1/2 top-0 h-[40px] flex flex-row items-center justify-center gap-[10px] py-[8px] px-[24px] bg-[#122e70] border-[2px] border-solid border-[#122e70] rounded-[50px]">
                    <div className="text-[18px] leading-[20px] font-['Pretendard'] font-black text-[#fff] whitespace-nowrap">CEO</div>
                    <div className="text-[16px] leading-[24px] font-['Pretendard'] font-medium text-[#fff] text-justify whitespace-nowrap">김용상, 이재휘</div>
                </div>
                <div className="absolute -translate-x-1/2 left-[calc(50%+-90px)] top-[76px] w-[120px] h-[36px] flex flex-row items-center justify-center py-[8px] px-[24px] bg-[#122e70] border-[2px] border-solid border-[#122e70] rounded-[50px]">
                    <div className="text-[14px] leading-[20px] font-['Pretendard'] font-medium text-[#fff] whitespace-nowrap">기획경영본부</div>
                </div>
                <div className="absolute -translate-x-1/2 left-[calc(50%+91px)] top-[76px] w-[120px] h-[36px] flex flex-row items-center justify-center py-[8px] px-[24px] bg-[#122e70] border-[2px] border-solid border-[#122e70] rounded-[50px]">
                    <div className="text-[14px] leading-[20px] font-['Pretendard'] font-medium text-[#fff] whitespace-nowrap">R&D 센터</div>
                </div>
                </div>
                <div className="absolute -translate-x-1/2 left-[calc(50%+-496px)] top-[494px] flex flex-row items-center justify-start gap-[51px]">
                <div className="flex flex-col items-start justify-start gap-[20px] rounded-[20px]">
                    <div className="h-[32px] shrink-0 flex flex-row items-center justify-start gap-[10px]">
                    <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#414141] text-justify whitespace-nowrap">대표이사</div>
                    <div className="text-[20px] leading-[24px] font-['Pretendard'] font-bold text-[#000] text-justify whitespace-nowrap">김용상</div>
                    </div>
                    <div className="flex flex-row items-center justify-start">
                    <div className="text-[14px] leading-[20px] font-['Pretendard'] text-[#888] text-justify whitespace-nowrap">리퓨어헬스케어대표이사<br/>헤이븐케어 부사장<br/>리퓨어생명과학 대표이사<br/>플래티넘월 대표이사<br/>소프트뱅크 이사</div>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[20px] rounded-[20px]">
                    <div className="h-[32px] shrink-0 flex flex-row items-center justify-start gap-[10px]">
                    <div className="text-[18px] leading-[24px] font-['Pretendard'] text-[#414141] text-justify whitespace-nowrap">대표이사</div>
                    <div className="text-[20px] leading-[24px] font-['Pretendard'] font-bold text-[#000] text-justify whitespace-nowrap">이재휘</div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start">
                    <div className="text-[14px] leading-[20px] font-['Pretendard'] text-[#888] text-justify whitespace-nowrap">리퓨어헬스케어대표이사<br/>중앙대학교 약학대학 교수<br/>Akina Inc. 수석연구원<br/>Purdue university 박사, 연구원<br/>대웅제약 중앙연구소</div>
                    </div>
                </div>
                </div>
                <div className="absolute -translate-x-1/2 left-[calc(50%+-510px)] top-[120px] flex flex-col items-start justify-start gap-[4px]">
                <div className="text-[16px] leading-[20px] font-['Pretendard'] font-medium text-[#2d4198] whitespace-nowrap">회사 개요</div>
                <div className="text-[36px] leading-[40px] font-['Montserrat'] font-semibold text-[#000] whitespace-nowrap">ABOUT COMPANY</div>
                </div>
            </div>
            <Top />
            <Bottom />
        </div>
       
      );
};

export default Ceo;