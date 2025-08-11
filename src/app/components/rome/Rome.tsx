import Image from "next/image";
import React from "react";

const Rome = () => {
  return (
    <div className="max-w-[1175px] mx-auto">
      <div className="mt-[71px] mb-[120px]">
        <div className="flex flex-col xl:flex-row justify-between gap-6 xl:gap-0 max-xl:max-w-[480px] max-xl:mx-auto">
          {/* Left Section */}
          <div className="flex flex-row items-center xl:items-end">
            <div className="w-[306px] h-[453px] rounded-xl overflow-hidden shadow-md max-w-sm sm:max-w-md">
              <Image
                src="/images/rome/rome01.png"
                alt="Contact Image"
                width={305}
                height={453}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="flex items-end w-full sm:w-[145px] sm:h-[148.34px] mt-4 sm:mt-0 sm:ml-[23px] text-[rgba(98,98,98,1)] font-semibold text-[15px] leading-[21px] text-center sm:text-left tracking[0.3px]">
              Pro atvirus langus namus pasieks gaivus pušyno aromatas bei kartu
              bus gera klausytis raminančio paukštelių čiulbėjimo.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col xl:justify-between items-center xl:items-start">
            <Image
              src="/images/rome/rome02.png"
              alt="Contact Image"
              width={612}
              height={389}
              className="w-full max-w-[612px]"
            />
            <p className="text-[rgba(98,98,98,1)] ml-[10px] text-[15px] leading-[21px] font-[600] text-center xl:text-left">
              Atraskite savo pojūčių gamą – leiskite gamtai <br />
              Jūs įkvėpti.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rome;
