import React from "react";
import Banner from "./Banner";

export default function IndividualiuNamuKvartalas() {
  return (
    <section className="md:pt-[86px]">
      <div className="wrapper">
        <div className="md:flex hidden flex-col sm:flex-row sm:items-center gap-3 sm:gap-[27.01px] mb-5.5">
          <div className="w-[80px] sm:w-[96.415px] h-[39px] sm:h-[49.317px] flex items-center justify-center  text-[26px] font-semibold text-black bg-white rounded-full border border-senary">
            A++
          </div>

          <h1 className="text-[35px] md:text-[45px] lg:text-[57px] font-semibold">
            Individualių namų kvartalas
          </h1>
        </div>

        <Banner />
      </div>
    </section>
  );
}
