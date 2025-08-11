import React from "react";
import Banner from "./Banner";

export default function IndividualiuNamuKvartalas() {
  return (
    <section className="md:pt-[86px]">
      <div className="wrapper">
        <div className="flex max-md:flex-col sm:flex-row sm:items-center gap-2 sm:gap-[27.01px] mb-5.5 max-md:mt-[42px]">
          <div className="w-[64px] sm:w-[96.415px] h-[34px] sm:h-[49.317px] flex items-center justify-center text-[18px] md:text-[26px] font-semibold text-black bg-white md:rounded-[12px] rounded-[25px] border border-black">
            A++
          </div>

          <h1 className="text-[35px] leading-[112%] md:text-[45px] lg:text-[57px] font-semibold">
            Individualių namų kvartalas
          </h1>
        </div>
        <Banner />
      </div>
    </section>
  );
}
