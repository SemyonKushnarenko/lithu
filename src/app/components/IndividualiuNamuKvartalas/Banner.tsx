import Image from "next/image";
import ImageMapPro from "../ImageMapPro";

const Banner = () => {
  return (
    <div className="flex flex-col max-lg:w-[100vw] relative left-1/2 -translate-x-[50%]">
      {/* Banner Image */}
      <div className="relative rounded-t-md">
        <ImageMapPro />

        {/* top left text */}
        <div className="absolute lg:left-[55px] lg:top-[50px] left-2 sm:left-6 top-2 sm:top-5">
          <h3 className="text-[#C5C5C5] font-urbanist md:text-xl font-semibold tracking-[0.2px]">
            Laisvu namų skaičius: <span className="font-bold">7</span>
          </h3>
        </div>

        {/* bottom right text */}
        <div className="absolute lg:right-[77px] right-2 sm:right-6 bottom-2 sm:bottom-5 flex items-center gap-3">
          <div className="w-[16px] h-[22px]">
            <Image
              src="/images/logo2.png"
              alt="girios-namai-logo"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-white font-semibold md:text-lg font-urbanist">
            Girios Namai
          </h3>
        </div>
      </div>

      {/* Banner Bottom */}
      <div className="min-h-[83.812px] bg-black max-lg:flex-col md:flex justify-between xl:items-center py-[34.08px] xl:py-[0px] px-[34.08px] relative z-10 rounded-b-[6px] max-lg:gap-8 max-sm:gap-4">
        <ul className="flex flex-wrap xl:items-center lg:flex-col xl:flex-row gap-6 xl:gap-[46.79px] max-lg:gap-4 max-sm:gap-2 max-lg:justify-between">
          <li className="text-quinary flex items-center gap-[5.73px] max-lg:flex-1/2">
            <span className="uppercase text-[13px] font-medium leading-[31px] tracking-[1.3px]">
              kambariAI
            </span>
            <span>
              <svg
                width="10"
                height="2"
                viewBox="0 0 10 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.186523"
                  y1="0.534607"
                  x2="9.46173"
                  y2="0.534608"
                  stroke="#FAFAFA"
                />
              </svg>
            </span>
            <span className="text-[18px] font-semibold leading-[31px] tracking-[-0.306px]">
              5
            </span>
          </li>

          <li className="text-quinary flex items-center gap-[5.73px]">
            <span className="uppercase text-[13px] font-medium leading-[31px] tracking-[1.3px]">
              KVADRATURA
            </span>
            <span>
              <svg
                width="10"
                height="2"
                viewBox="0 0 10 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.186523"
                  y1="0.534607"
                  x2="9.46173"
                  y2="0.534608"
                  stroke="#FAFAFA"
                />
              </svg>
            </span>
            <span className="text-[18px] font-semibold leading-[31px] tracking-[-0.306px]">
              121 m<sup>2</sup>
            </span>
          </li>

          <li className="text-quinary flex items-center gap-[5.73px]">
            <span className="uppercase text-[13px] font-medium leading-[31px] tracking-[1.3px]">
              KAINA
            </span>
            <span>
              <svg
                width="10"
                height="2"
                viewBox="0 0 10 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.186523"
                  y1="0.534607"
                  x2="9.46173"
                  y2="0.534608"
                  stroke="#FAFAFA"
                />
              </svg>
            </span>
            <span className="text-[18px] font-semibold leading-[31px] tracking-[-0.306px]">
              nuo 1600 Eur/m<sup>2</sup>
            </span>
          </li>

          <li className="text-quinary flex items-center gap-[5.73px]">
            <span className="uppercase text-[13px] font-medium leading-[31px] tracking-[1.3px]">
              STATYBOS METAI
            </span>
            <span>
              <svg
                width="10"
                height="2"
                viewBox="0 0 10 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.186523"
                  y1="0.534607"
                  x2="9.46173"
                  y2="0.534608"
                  stroke="#FAFAFA"
                />
              </svg>
            </span>
            <span className="text-[18px] font-semibold leading-[31px] tracking-[-0.306px]">
              2025/2026 m.
            </span>
          </li>
        </ul>
        <button className="transition-all hover:bg-white hover:text-[#1CBD7D] max-lg:w-full cursor-pointer mt-10 md:mt-0 lg:w-[205.2px] h-[41.414px] rounded-[8px] bg-septenary flex items-center justify-center gap-[7px] text-quinary">
          <span className="text-sm sm:text-[14px] tracking-[1.4px] uppercase">
            projekto planas
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="10"
            viewBox="0 0 11 16"
            fill="none"
          >
            <path
              d="M6.48106 15.5803L10.7311 10.8303C10.81 10.7421 10.8726 10.6374 10.9153 10.5222C10.958 10.4069 10.98 10.2834 10.98 10.1587C10.98 9.90677 10.8904 9.66518 10.7311 9.48704C10.6521 9.39884 10.5585 9.32887 10.4553 9.28114C10.3522 9.2334 10.2417 9.20884 10.1301 9.20884C9.90471 9.20884 9.68854 9.30891 9.52916 9.48704L6.73011 12.6154L6.73011 1.60869C6.73011 1.35674 6.64055 1.1151 6.48115 0.93694C6.32174 0.75878 6.10554 0.658691 5.88011 0.658691C5.65468 0.658691 5.43847 0.75878 5.27907 0.93694C5.11966 1.1151 5.03011 1.35674 5.03011 1.60869L5.03011 12.6154L2.23106 9.48704C2.07168 9.30891 1.85551 9.20884 1.63011 9.20884C1.40471 9.20884 1.18854 9.30891 1.02916 9.48704C0.869777 9.66517 0.780236 9.90677 0.780236 10.1587C0.780236 10.4106 0.869777 10.6522 1.02916 10.8303L5.27916 15.5803C5.35803 15.6686 5.4517 15.7387 5.55482 15.7865C5.65794 15.8343 5.76847 15.8589 5.88011 15.8589C5.99174 15.8589 6.10228 15.8343 6.2054 15.7865C6.30851 15.7387 6.40219 15.6686 6.48106 15.5803Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Banner;
