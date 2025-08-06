import Image from "next/image";

export default function TimeLine() {
  return (
    <div>
      {/* // ==== desktop view =======> */}

      <div className="hidden lg:flex section-padding">
        <div className="w-full max-w-[800px] xl:max-w-[1098.03px] mx-auto mt-[40px] md:mt-[62.09px]">
          <div className="flex justify-between mb-4 md:mb-6">
            <div className="w-[45%] text-left ml-[17%]">
              <p className="text-[18px] font-medium leading-[17px] tracking-[0.18px]">
                Sklypo formavimo darbai
              </p>
            </div>
            <div className="w-[45%] text-right mr-[22.5%]">
              <p className="text-[18px] font-medium leading-[17px] tracking-[0.18px]">
                Fasado darbai
              </p>
            </div>
          </div>

          <div className="relative w-full h-[120px] md:h-[140px]">
            {/* ======== timeline background line ==========> */}
            <div className="absolute h-[1px] bg-black top-[9px] left-0 right-0"></div>

            <div className="absolute h-[1px] bg-emerald-500 top-[9px] left-[0%] w-[25%]"></div>

            <div className="relative flex w-full">
              <div className="absolute left-[0%] transform -translate-x-1/2">
                <div className="flex flex-col items-center">
                  <div className="w-[14px] h-[14px] md:w-[18px] md:h-[18px] rounded-full bg-emerald-500 mb-4 md:mb-[21.17px] z-10"></div>
                  <h2 className="text-[25px] md:text-[40px] font-medium leading-[47px] tracking-[0.4px] ml-[100px]">
                    2024 Q1
                  </h2>
                  <p className="text-[18px] font-medium leading-[17px] tracking-[0.18px] mt-[9.54px] ml-[90px]">
                    Statybų pradžia
                  </p>
                </div>
              </div>

              <div className="absolute left-[25%] transform -translate-x-1/2">
                <div className="flex flex-col items-center">
                  <div className="w-[14px] h-[14px] md:w-[18px] md:h-[18px] rounded-full bg-emerald-500 mb-4 md:mb-[21.17px] z-10"></div>
                </div>
              </div>

              <div className="absolute left-[50%] transform -translate-x-1/2">
                <div className="flex flex-col items-center">
                  <div className="w-[14px] h-[14px] md:w-[18px] md:h-[18px] rounded-full bg-gray-300 mb-4 md:mb-[21.17px] z-10"></div>
                  <h2 className="text-[25px] md:text-[40px] font-medium leading-[47px] tracking-[0.4px] ">
                    2025 Q4
                  </h2>
                  <p className="text-[18px] font-medium leading-[17px] tracking-[0.18px] mt-[9.54px]">
                    5 Individualus namai
                  </p>
                </div>
              </div>

              <div className="absolute left-[75%] transform -translate-x-1/2">
                <div className="flex flex-col items-center">
                  <div className="w-[14px] h-[14px] md:w-[18px] md:h-[18px] rounded-full bg-gray-300 mb-4 md:mb-[21.17px] z-10"></div>
                </div>
              </div>

              <div className="absolute left-[100%] transform -translate-x-1/2">
                <div className="flex flex-col items-center">
                  <div className="w-[14px] h-[14px] md:w-[18px] md:h-[18px] rounded-full bg-gray-300 mb-4 md:mb-[21.17px] z-10"></div>
                  <h2 className="text-[25px] md:text-[40px] font-medium leading-[47px] tracking-[0.4px] text-nowrap mr-[125px]">
                    2026 Q4
                  </h2>
                  <p className="text-[18px] font-medium leading-[17px] tracking-[0.18px] mt-[9.54px] mr-[145px]">
                    Statybų pradžia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* // ==== mobile view =======> */}
      <div className="flex lg:hidden section-padding justify-center">
        <div className="w-full max-w-[1120.03px] mx-auto mt-[72px] md:mt-[62.09px]">
          <div className="relative ml-[30%] translate-x-[-25px]">
            <div className="absolute -left-4 top-0 h-[80%] w-[3px] bg-gray-200 rounded-full"></div>
            <div className="absolute -left-4 top-0 h-[45%] w-[3px] bg-emerald-400 rounded-full"></div>

            <div className="space-y-8 pl-[17px]">
              <div className="relative">
                <div className="absolute -left-[42px] top-0 h-5 w-5 rounded-full bg-emerald-400"></div>
                <h3 className="text-xl font-bold text-gray-800">2024 Q1</h3>
                <div className="flex items-center gap-2">
                  <p className="text-lg font-medium text-gray-700">
                    Statybų pradžia
                  </p>
                  <Image
                    src="/images/icons/polygon.svg"
                    alt="Polygon icon"
                    width={23.808}
                    height={23.808}
                    className="flex-shrink-0 w-[23.808] h-[23.808]"
                  />
                </div>
              </div>

              <div className="relative pt-2">
                <div className="absolute -left-[42px] top-3 h-5 w-5 rounded-full bg-gray-300"></div>
                <h3 className="text-xl font-bold text-gray-800">2025 Q4</h3>
                <div className="flex items-center gap-2">
                  <p className="text-lg font-medium text-gray-700">
                    5 Individualus namai
                  </p>
                  <Image
                    src="/images/icons/home.png"
                    alt="home"
                    width={16.757}
                    height={17.204}
                    className="flex-shrink-0 w-[16.757px] h-[17.204px]"
                  />
                </div>
              </div>

              <div className="relative pt-2">
                <div className="absolute -left-[42px] top-3 h-5 w-5 rounded-full bg-gray-300"></div>
                <h3 className="text-xl font-bold text-gray-800">2026 Q4</h3>
                <div className="flex items-center gap-2">
                  <p className="text-lg font-medium text-gray-700">
                    Statybų pradžia
                  </p>
                  <Image
                    src="/images/icons/right.svg"
                    alt="home"
                    width={15.609}
                    height={15.562}
                    className="flex-shrink-0 w-[15.609px] h-[15.562px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
