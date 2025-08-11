"use client";
import Image from "next/image";
import React from "react";

export default function GiriosNamaiForm() {
  const [result, setResult] = React.useState("Siųsti");

  /*
  name
  email
  phone
  question
  policyAccepted
  */
  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    setResult("Siuntimas...");

    const formData = new FormData(form);

    formData.append("access_key", "d6e544e4-265b-406b-99af-b47e5615bcdb");

    // Check if checkbox is checked
    const policyAccepted = formData.has("policyAccepted") ? "yes" : "no";

    // If you want to send this explicitly as "yes" or "no", overwrite:
    formData.set("policyAccepted", policyAccepted);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Pateikta");
      setTimeout(() => {
        setResult("Siųsti");
      }, 3000);
      form.reset(); // no error now
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="mt-[40px] md:mt-[45px] section-padding">
      <div className="max-w-[1351px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:bg-[#232323] bg-[#141414] px-6 md:py-6 py-0 w-full md:h-[621.845px] h-[680.297px] rounded-l-[7px]">
            <form
              onSubmit={onSubmit}
              className="pl-0 pr-0 md:pl-10 lg:pr-20 md:pr-[50px] py-13"
            >
              <p className=" text-[16px] font-medium tracking-[0.16px] text-octonary md:hidden mb-[56px]">
                05
                <span className="text-[#C5C5C5] text-[15px] font-medium leading-[17px] tracking-[0.15px] ml-2">
                  Susisiekime
                </span>
              </p>
              <div className="relative mb-5">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-transparent border-b border-[#9A9A9A] py-3 px-2 text-lg text-white focus:outline-none focus:border-[#9A9A9A] peer"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute left-2 bottom-3 text-[17px] text-white transition-all peer-placeholder-shown:bottom-3 peer-placeholder-shown:text-lg peer-focus:bottom-10 peer-focus:text-sm peer-valid:bottom-10 peer-valid:text-sm font-semibold tracking-[-0.289px]"
                >
                  Vardas *
                </label>
              </div>

              <div className="relative mb-[25px]">
                <input
                  type="text"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-transparent border-b border-[#9A9A9A] py-3 px-2 text-lg text-white focus:outline-none focus:border-[#9A9A9A] peer"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute left-2 bottom-3 text-[17px] text-white transition-all peer-placeholder-shown:bottom-3 peer-placeholder-shown:text-lg peer-focus:bottom-10 peer-focus:text-sm peer-valid:bottom-10 peer-valid:text-sm font-semibold tracking-[-0.289px]"
                >
                  El. paštas *
                </label>
              </div>

              <div className="relative mb-[22px]">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full bg-transparent border-b border-[#9A9A9A] py-3 px-2 text-lg text-white focus:outline-none focus:border-[#9A9A9A] peer"
                  placeholder=" "
                />
                <label
                  htmlFor="phone"
                  className="absolute left-2 bottom-3 text-[17px] text-white transition-all peer-placeholder-shown:bottom-3 peer-placeholder-shown:text-lg peer-focus:bottom-10 peer-focus:text-sm peer-valid:bottom-10 peer-valid:text-sm font-semibold tracking-[-0.289px]"
                >
                  Telefono nr. *
                </label>
              </div>

              <div className="relative mb-[50px]">
                <input
                  type="text"
                  id="question"
                  name="question"
                  required
                  className="w-full bg-transparent border-b border-gray-400 py-3 px-2 text-lg text-white focus:outline-none focus:border-[#9A9A9A] peer"
                  placeholder=" "
                />
                <label
                  htmlFor="question"
                  className="absolute left-2 bottom-3 text-[17px] text-white transition-all peer-placeholder-shown:bottom-3 peer-placeholder-shown:text-lg peer-focus:bottom-10 peer-focus:text-sm peer-valid:bottom-10 peer-valid:text-sm font-semibold tracking-[-0.289px]"
                >
                  Jus dominantis klausimas
                </label>
              </div>

              <div className="flex items-center gap-4 lg:gap-[22.97px] mb-[53px]">
                <input
                  type="checkbox"
                  id="privacy"
                  name="policyAccepted"
                  required
                  className="w-[27.032px] h-[24.738px] accent-black bg-black checked:bg-white border border-[rgba(255,255,255,0.34)] cursor-pointer"
                />
                <label
                  htmlFor="privacy"
                  className="text-white text-[17px] font-medium"
                >
                  Susipažinau su Privatumo politika *
                </label>
              </div>

              <button
                type="submit"
                disabled={result === "Siuntimas..."}
                className="transition-all hover:bg-[#1CBD7D] hover:text-white w-full md:w-[251.4px] h-[51.693px] text-black bg-white text-[17px] font-medium uppercase tracking-[1px] rounded-[5px] flex items-center justify-center gap-[15px] cursor-pointer"
              >
                {result}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="12"
                  viewBox="0 0 16 12"
                  fill="none"
                >
                  <path
                    d="M15.2491 5.42231L10.534 1.13361C10.4465 1.05397 10.3423 0.990514 10.2274 0.946863C10.1125 0.903212 9.98916 0.88022 9.86443 0.8792C9.61252 0.87714 9.3702 0.964702 9.19077 1.12262C9.10192 1.20082 9.03119 1.29393 8.98261 1.39665C8.93404 1.49936 8.90857 1.60967 8.90765 1.72128C8.90581 1.94667 9.00411 2.16365 9.18094 2.32448L12.2863 5.14902L1.27996 5.05901C1.02801 5.05695 0.785653 5.14453 0.606196 5.30247C0.426739 5.46041 0.324885 5.67579 0.323042 5.90121C0.321198 6.12664 0.419516 6.34365 0.596366 6.50451C0.773216 6.66537 1.01411 6.75689 1.26606 6.75895L12.2724 6.84896L9.12126 9.62234C8.94183 9.78026 8.83999 9.9956 8.83814 10.221C8.8363 10.4464 8.9346 10.6634 9.11143 10.8242C9.28825 10.985 9.52911 11.0765 9.78102 11.0786C10.0329 11.0807 10.2753 10.9931 10.4547 10.8352L15.2393 6.62417C15.3282 6.54602 15.399 6.45293 15.4477 6.3502C15.4963 6.24748 15.5218 6.13714 15.5227 6.02552C15.5236 5.91389 15.4999 5.80315 15.453 5.69964C15.406 5.59614 15.3368 5.5019 15.2491 5.42231Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </form>
          </div>
          {/* <div className="w-full md:max-w-[497.95px] h-full">
            <Image
              src="/images/home/form-forest.jpeg"
              alt="Contact Image"
              width={400}
              height={621.845}
              className="min-w-full object-center h-auto md:min-h-[621.845px]"
            />
          </div> */}
          <div className="w-full md:max-w-[497.95px] h-[105.606px] md:h-[621.845px] relative">
            <Image
              src="/images/home/form-forest.jpeg"
              alt="Contact Image"
              width={400}
              height={621.845}
              className="w-full h-full object-cover rounded-r-[7px]"
            />
            <Image
              src="/images/logo2.png"
              alt="Logo"
              width={38.641}
              height={50.191}
              className="absolute md:bottom-[54.18] bottom-9 left-1/2 transform -translate-x-1/2 md:w-[38.641px] md:h-[50.191px] w-[21.627px] h-[28.091px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
