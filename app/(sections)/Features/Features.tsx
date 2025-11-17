import React from "react";
import Image from "next/image";

const Features = () => {
  type featureContent = {
    paragraph: string;
  };

  const featureContent: featureContent = {
    paragraph: `Ditch code-heavy, old school scripted chatbots. Integrate Ada with
                your existing business systems to resolve complex customer
               inquiries in record time.`,
  };

  return (
    <section className="bg-[#1B1E23] py-12 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* H2 */}
        <h2 className="text-white font-regular text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-tight">
          Basic chatbots have no
          <span className="text-[#9CEAEC]"> business </span>
          {/* On mobile we avoid forced line break */}
          <span className="hidden sm:inline">
            <br />
          </span>
          representing <span className="text-[#B69EE0]"> your business</span>
        </h2>

        {/* Paragraph */}
        <p className="mt-4 text-white text-[16px] sm:text-[18px] md:text-[20px] max-w-[620px] leading-relaxed">
          {featureContent.paragraph}
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="px-6 py-3 text-sm sm:text-base bg-gradient-to-r from-[#9977D4] to-[#6337AE] text-white font-semibold rounded-lg cursor-pointer">
            See Ada in Action
          </button>

          <button className="px-6 py-3 text-sm sm:text-base border border-[#9977D4] text-white font-semibold rounded-lg hover:opacity-90 transition cursor-pointer">
            Learn More
          </button>
        </div>

        {/* Image */}
        <div className="mt-12">
          <Image
            src="/images/feature-img.svg"
            alt="Features Image"
            width={1240}
            height={560}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
