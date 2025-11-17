import React from "react";

const CTA = () => {
  return (
    <section className="bg-[#1B1E23] py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
        {/* H2 */}
        <h2 className="text-white text-[32px] md:text-[40px] lg:text-[48px] font-regular leading-tight">
          Automate your customer<br/> service with Ada
        </h2>

        {/* Button */}
        <button className="mt-8 px-8 py-4 bg-linear-to-r from-[#9977D4] to-[#6337AE] text-white font-semibold rounded-lg cursor-pointer">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default CTA;
