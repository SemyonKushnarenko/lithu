import Image from "next/image";
import TimeLine from "./TimeLine";
import BannerSlider from "./BannerSlider";

const cardInfo = [
  {
    number: 5,
    icon: "/icons/home-white-outlined.png",
    title: "Namai bus įrengti 2025/Q4",
    description:
      "Jau šiais metais isikelkite į naujos kartos, A++ energinės klasės namus, Vakaru gatvėje.",
    _id: "pyadfT*&*&&6&*4674",
  },
  {
    number: 10,
    icon: "/icons/percent.png",
    title: "Rezervacijos mokestis",
    description:
      "Rezervuokite ir atraskite savo ateities namus – kur architektūra susitinka su tvarumu ir funkcionalumu.",
    _id: "f6F9895%63376cv",
  },
];

export default function TobulasDerinysTarpGamtos() {
  return (
    <section className={`mt-[40px] md:mt-[111.81px] `}>
      <div className="max-w-[1351px] mx-auto">
        <div className="flex flex-col w-full bg-white">
          <div className="relative w-full md:flex justify-center items-center md:min-h-[521.462px] min-h-[696.678px] pt-[38px] px-[19px] lg:pt-0 lg:px-0">
            <div className="absolute inset-0 w-full h-[696.678px] lg:h-[521.462px] rounded-t-[7px]">
              <div
                className="absolute inset-0 bg-black/10 z-10 rounded-t-[7px]"
                style={{
                  background:
                    "linear-gradient(270deg, rgba(124, 124, 124, 0.00) 0%, rgba(0, 0, 0, 0.72) 100%)",
                }}
              ></div>
              <Image
                src="/images/home/Tobulas-derinys-tarp-gamtos-bg.jpeg"
                alt="Tobulas derinys tarp gamtos, išmanumo ir patogumo."
                width={1351.354}
                height={521.462}
                className="hidden md:block w-full h-full object-cover rounded-t-[7px]"
              />
              <div className="relative md:hidden block">
                <div className="hidden md:block absolute inset-0 bg-black/10 z-10"></div>
                <Image
                  src="/images/nice_upscaled_2_final_wide.png"
                  alt="Tobulas derinys tarp gamtos, išmanumo ir patogumo."
                  width={380.454}
                  height={380.454}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-[289px] h-[693.83px] pointer-events-none bg-[linear-gradient(270deg,_rgba(124,124,124,0)_0%,_rgba(0,0,0,0.66)_100%)]" />
              </div>
            </div>

            {/* Projekto eiga */}
            <p className="text-[16px] font-medium tracking-[0.16px] text-octonary md:hidden relative z-10">
              04
              <span className="text-[#C5C5C5] text-[15px] font-medium leading-[17px] tracking-[0.15px] ml-2">
                Projekto eiga
              </span>
            </p>
            {/* Terminai ir rezervacija */}
            <p className="text-white text-[30px] font-medium leading-[37px] tracking-[0.3px] md:hidden absolute bottom-[36px] z-10">
              Terminai <br /> ir rezervacija
            </p>
            {/* =========== image top container ==============> */}
            <div className="max-w-[1224px] mx-auto relative z-10 h-full w-full px-4 hidden md:flex flex-col justify-center">
              <div className="flex flex-col lg:flex-row md:items-center justify-between gap-8 lg:gap-0 xl:gap-[90px]">
                <div className="">
                  <p className="text-[16px] font-[500] leading-[17px] text-[#C5C5C5] mb-[35px]">
                    Rezervacija
                  </p>
                  <h1 className="lg:inline-block text-[35px] max-w-[765px] h-[158.268px] md:text-[40px] font-medium md:leading-[40px] lg:leading-[42px] xl:leading-[47px] tracking-[0.4px] text-white">
                    Galvokite apie savo naujus namus jau šiandien.
                  </h1>
                  <div className="lg:mt-[23.56px]">
                    <button className="w-[198.408px] h-[70.404px] flex justify-center rounded-[14px] items-center bg-white text-black gap-[8.94px]">
                      <span className="text-[17px] font-semibold tracking-[0.68px] pr-[2px]">
                        Rinktis namą
                      </span>

                      <div>
                        <Image
                          src="/icons/home-outlined.png"
                          alt="Logo"
                          height={21.061}
                          width={21.658}
                          className="w-[15px] h-[15px] sm:w-[21.061px] sm:h-[21.658px] aspect-[21.06/21.66]"
                        />
                      </div>
                    </button>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-[34.23px]">
                  {/* {cardInfo?.map(
                    ({ number, icon, title, description, _id }) => (
                      <div
                        key={_id}
                        className="px-[26.24px] py-[30.32px] w-full md:w-[310.965px] sm:h-[284.1px] rounded-xl border-[1px] border-[#c6c6c654] bg-[rgba(156,156,156,0.53)] backdrop-blur-[20.7px] "
                      >
                        <div className="flex items-end gap-1 mb-[13px]">
                          <span className="text-[69px] font-semibold leading-[51px] tracking-[0.69px] text-white">
                            {number}
                          </span>

                          <div className="rounded-[5px] flex justify-center items-center">
                            <Image
                              src={icon}
                              alt="Logo"
                              height={29.99}
                              width={29.99}
                            />
                          </div>
                        </div>

                        <p className="text-[19px] font-medium leading-[22px] tracking-[0.19px] text-[#ffffff]">
                          {title}
                        </p>

                        <p className="mt-[73.87px] text-[15px] font-normal tracking-[0.2px] leading-[22px]  text-white">
                          {description}
                        </p>
                      </div>
                    )
                  )} */}
                  <div className="px-[26.24px] py-[30.32px] w-full md:w-[310.965px] sm:h-[284.1px] rounded-xl border-[1px] border-[#c6c6c654] bg-[rgba(156,156,156,0.53)] backdrop-blur-[20.7px] ">
                    <div className="flex items-end gap-1 mb-[13px]">
                      <span className="text-[69px] font-semibold leading-[51px] tracking-[0.69px] text-white">
                        5
                      </span>

                      <div className="rounded-[5px] flex justify-center items-center">
                        <Image
                          src="/icons/home-white-outlined.png"
                          alt="Logo"
                          height={29.99}
                          width={29.99}
                        />
                      </div>
                    </div>

                    <p className="text-[19px] font-medium leading-[22px] tracking-[0.19px] text-[#ffffff]">
                      Namai bus įrengti 2025/Q4
                    </p>

                    <p className="mt-[73.87px] text-[15px] font-normal tracking-[0.2px] leading-[22px]  text-white">
                      Jau šiais metais isikelkite į naujos kartos, A++ energinės
                      klasės namus, Vakaru gatvėje.
                    </p>
                  </div>
                  <div className="px-[26.24px] py-[30.32px] w-full md:w-[310.965px] sm:h-[284.1px] rounded-xl border-[1px] border-[#c6c6c654] bg-[rgba(156,156,156,0.53)] backdrop-blur-[20.7px] ">
                    <div className="flex items-end gap-1 mb-[13px]">
                      <span className="text-[69px] font-semibold leading-[51px] tracking-[0.69px] text-white">
                        10
                      </span>

                      <div className="rounded-[5px] border border-white/65 bg-transparent flex items-center justify-center center w-[29.514px] h-[28.859px] ">
                        <span className="font-semibold text-[15px] tracking-[1%] leading-[51px] text-white">
                          %
                        </span>
                      </div>
                    </div>

                    <p className="text-[19px] font-medium leading-[22px] tracking-[0.19px] text-[#ffffff]">
                      Rezervacijos mokestis
                    </p>

                    <p className="mt-[73.87px] text-[15px] font-normal tracking-[0.2px] leading-[22px]  text-white">
                      Rezervuokite ir atraskite savo ateities namus – kur
                      architektūra susitinka su tvarumu ir funkcionalumu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      {/* <div className="md:hidden flex flex-col md:flex-row md:items-center gap-[45px] pt-[78px] pb-[87px] bg-white section-padding">
        {cardInfo?.map(({ number, icon, title, description, _id }, index) => (
          <div
            key={_id}
            className={`px-[26.24px] py-[30.32px] w-full md:w-[310.965px] h-[284.1px] rounded-xl border-[1px] border-[#c6c6c654] ${
              index === 1 ? "bg-[#757061]" : "bg-[#605D5B]"
            }`}
          >
            <div className="flex items-end gap-1 mb-[13px]">
              <span className="text-[69px] font-semibold leading-[51px] tracking-[0.69px] text-white">
                {number}
              </span>

              <div className="rounded-[5px] flex justify-center items-center">
                <Image src={icon} alt="Logo" height={29.99} width={29.99} />
              </div>
            </div>

            <p className="text-[19px] font-medium leading-[22px] tracking-[0.19px] text-[#ffffff]">
              {title}
            </p>

            <p className={`mt-[52.6px] text-[15px] font-normal tracking-[0.2px] leading-[22px] text-[#DDD] text-whit ${
              index === 1 ? "max-w-[247.726px]" : "max-w-[243.282px]"
            }`}>
              {description}
            </p>
          </div>
        ))}
      </div> */}

      {/* Mobile view */}
      <div className="md:hidden flex flex-col md:flex-row md:items-center gap-[45px] pt-[78px] pb-[87px] bg-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 z-0 w-[380.454px] h-[779.039px] flex-shrink-0 left-1/2 transform -translate-x-1/2 ">
          <Image
            src="/images/bg-namai.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="mix-blend-overlay"
          />
        </div>

        <div className="relative z-10 flex flex-col gap-[45px]">
          {cardInfo?.map(({ number, icon, title, description, _id }, index) => (
            <div
              key={_id}
              className={`px-[26.24px] py-[30.32px] w-full md:w-[310.965px] h-[284.1px] rounded-xl border-[1px] border-[#c6c6c654] ${
                index === 1 ? "bg-[#757061]" : "bg-[#605D5B]"
              }`}
            >
              <div className="flex items-end gap-1 mb-[13px]">
                <span className="text-[69px] font-semibold leading-[51px] tracking-[0.69px] text-white">
                  {number}
                </span>

                <div className="rounded-[5px] flex justify-center items-center">
                  <Image src={icon} alt="Logo" height={29.99} width={29.99} />
                </div>
              </div>

              <p className="text-[19px] font-medium leading-[22px] tracking-[0.19px] text-[#ffffff]">
                {title}
              </p>

              <p
                className={`mt-[52.6px] text-[15px] font-normal tracking-[0.2px] leading-[22px] text-[#DDD] text-whit ${
                  index === 1 ? "max-w-[247.726px]" : "max-w-[243.282px]"
                }`}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Slider */}
      <BannerSlider />

      {/* md:border-r-[7px] md:border-l-[7px] md:border-b-[7px] rounded-b-[25px] */}
      <div className="max-w-[1351px] mx-auto md:bg-white bg-[#FAFAFA] md:mt-0 mt-[59px] rounded-b-[7px]">
        {/* ======= timeline container =============> */}
        <div className="w-full max-w-[1098.03px] mx-auto pt-0 lg:pb-[86.23px] md:pb-[40px] pb-[67px] md:pt-[52.09px]">
          <h2 className="text-[35px] text-center sm:text-[42px] font-semibold">
            Statybų eiga
          </h2>

          <TimeLine />
        </div>
      </div>
    </section>
  );
}
