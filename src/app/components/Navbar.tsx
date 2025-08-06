import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white px-3 lg:px-0">
      <div className="wrapper xl:!max-w-[1113px]">
        <nav className="md:h-[95.352px] md:py-0 py-[15px]">
          <div className="h-full flex justify-between items-center">
            <div>
              <Image
                src="/logo.png"
                alt="Logo"
                height={200}
                width={200}
                className="w-[39.329px] h-[51.619] aspect-[39.33/51.62]"
              />
            </div>
            <div className="flex items-center gap-2 sm:gap-[41.81px]">
              <a
                href="tel:+370 619 12 200"
                className="md:flex hidden text-black sm:text-[27px] tracking-[0.42px] font-medium"
              >
                +370 619 12 200
              </a>
              <button
                type="button"
                className="bg-white w-[140px] sm:w-[198.408px] h-[45px] sm:h-[70.404px] text-black border border-primary rounded-[10px] sm:rounded-[14px] flex justify-center items-center gap-[9.26px]"
              >
                <span className="text-sm sm:text-[17px] font-semibold tracking-[0.68px]">
                  Rinktis namą
                </span>
                <div>
                  <Image
                    src="/icons/home-outlined.png"
                    alt="Logo"
                    height={21.658}
                    width={21.061}
                    className="w-[15px] h-[15px] sm:w-[21.061px] sm:h-[21.658px] aspect-[21.06/21.66]"
                  />
                </div>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
