"use client";
import Link from "next/link";
const NotFound = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col px-[15px]">
      <h3 className="text-[100px] font-bold leading-[100%] text-primary">
        404
      </h3>
      <h3 className="text-[55px] font-bold leading-[100%] text-center">
        Oi! Nerastas
      </h3>
      <p className="text-[15px] !mt-[15px] text-center">
        Nepavyko rasti puslapio, kurio ieškote. Puslapio, kurio prašėte, gali
        nebūti arba jis neveikia.
      </p>
      <div className="mt-[20px] flex items-center justify-center gap-[10px] ">
        <Link
          href={"/"}
          className="px-[15px] py-[8px] border-[1px] hover:bg-secondary hover:text-white duration-300"
        >
          Grįžti į namus
        </Link>
        <button className="px-[15px] py-[8px] border-[1px] bg-primary text-white duration-300 cursor-pointer">
          Palaikymas
        </button>
      </div>
    </div>
  );
};

export default NotFound;
