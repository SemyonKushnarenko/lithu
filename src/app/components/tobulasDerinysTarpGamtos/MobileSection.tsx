import Image from "next/image";

const MobileSection = () => {
  return (
    <div className="block md:hidden mt-[39px] mb-[91px]">
      {/* First Image */}
      <div className="w-full ">
        <Image
          src="/images/house.png"
          alt="House"
          width={380.257}
          height={267.095}
          className="flex-shrink-0 object-cover w-full"
        />
      </div>

      {/* First Text */}
      <p className="text-[#626262] text-[15px] font-semibold leading-[21px] tracking-[0.3px] mt-[17px] pl-[19px] max-w-[341.55px]">
        Jūsų namuose atsivers visų pojūčių gama, pro atvirus langus namus
        pasieks
      </p>

      {/* Second Section with Text + Image */}
      <div className="flex items-end gap-[18px] pt-[71px] pl-[17px] relative">
        {/* Text */}
        <p className="text-[#626262] text-[15px] font-semibold leading-[21px] tracking-[0.3px] flex-1 max-w-[149.88px]">
          Pro atvirus langus namus pasieks gaivus pušyno aromatas bei kartu bus
          gera klausytis raminančio paukštelių čiulbėjimo.
        </p>

        {/* Image */}
        <div className="flex-shrink-0 ml-auto">
          <Image
            src="/images/house2.png"
            alt="House view"
            width={194.262}
            height={288.452}
            className="object-cover"
            style={{
              width: "194.262px",
              height: "288.452px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileSection;
