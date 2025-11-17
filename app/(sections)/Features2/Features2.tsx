import React from "react";
import Image from "next/image";

const Features2 = () => {
  type features2Content = {
    title: string;
    text: string;
  };

  const features2Content: features2Content = {
    title: `Resolve more phone calls with voice AI`,
    text: `our customers are waiting — and they have been for some time — for
           the seamless experience only Ada’s platform can provide. Add
           intelligent phone automation using the same knowledge content in
           Ada’s easy-to-use platform.`,
  };

  return (
    <section className="bg-[#1B1E23] py-16">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* RIGHT: Image */}
          <div className="flex-1">
            <Image
              src="/images/geature2.svg"
              alt="Section Visual"
              width={608}
              height={608}
              className="w-full h-auto"
            />
          </div>

          {/* LEFT: Text Content */}
          <div className="flex-1 text-white">
            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-regular leading-tight">
              {features2Content.title}
            </h2>

            <p className="mt-4 text-[16px] md:text-[18px] max-w-[500px]">
              {features2Content.text}
            </p>

            <button className="mt-8 px-6 py-3 bg-linear-to-r from-[#9977D4] to-[#6337AE] text-white font-semibold rounded-lg cursor-pointer">
              Learn more about Ada Voice
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features2;
