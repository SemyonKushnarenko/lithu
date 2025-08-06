import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-quinary section-padding">
      <div className="wrapper md:pb-10 pt-[33px] md:pt-[70px]">
        <div className="py-5  md:pt-[30px] md:pb-[20px] md:pl-[29.87px] md:pr-[48px] flex flex-col md:flex-row justify-center md:justify-between items-center md:border-y border-[#D8D8D8] w-full">
          <div className="md:flex hidden items-center gap-3">
            <Image
              src="/logo.png"
              alt="Logo"
              height={200}
              width={200}
              className="w-[27.864px] h-[36.566px] aspect-[27.86/36.57]"
            />
            <p className="text-[21px] text-black font-semibold">Girios Namai</p>
          </div>
          <a
            href="tel:+37064855005"
            className="text-[33px] md:text-[37px] text-black font-medium md:tracking-[1.74px] tracking-[0.99px]"
          >
            +370 619 12 200
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 md:pt-11 pt-[25px] md:mb-[87.92px] mb-[60px]">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-[10px]">
            <p className="text-black font-urbanist md:tracking-[1.6px] tracking-[1.2px] text-[12px] font-normal uppercase text-center md:text-left">
              © {new Date().getFullYear()} GIRIOS NAMAI. Visos teisės saugomos
            </p>
            <a
              href="/privacy-policy"
              className="text-black font-urbanist text-xs font-normal uppercase tracking-[1.2px] border-b-[#D8D8D8] border-b md:border-b-0 transition-colors duration-300"
            >
              PRIVATUMO POLITIKA
            </a>
          </div>

          <p className="text-black font-urbanist text-[12px] font-normal uppercase tracking-[1.2px] mt-4 md:mt-0 md:flex hidden">
            Projektą vysto: GIRIOS NAMAI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
