import InfoCard1 from "@/app/components/InfoCard1";
import React from "react";

const Statistics = () => {
  const statsCards = [
    {
      type: "metric",
      number: "77%",
      text: "of customer service interactions resolved through automation.",
    },
    {
      type: "metric",
      number: "12M+",
      text: "Automated conversations handled monthly.",
    },
    {
      type: "metric",
      number: "3.5x",
      text: "Average increase in agents’ productivity.",
    },
    {
      type: "logo",
      logo: "/images/tango.svg",
      text: "6.7x ROI in year 1",
    },
    {
      type: "logo",
      logo: "/images/digicel.svg",
      text: "$750k savings / year.",
    },
    {
      type: "logo",
      logo: "/images/moka.svg",
      text: "95% recognition rate",
    },
  ];

  const metricCards = statsCards.filter((c) => c.type === "metric");
  const logoCards = statsCards.filter((c) => c.type === "logo");

  return (
    <section className="bg-[#1B1E23] py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Top Number + Text */}
        <div className="text-center mb-16">
          <h2 className="text-white text-[40px] md:text-[56px] font-regular">
            4,323,112,309
          </h2>
          <p className="text-white text-[16px] opacity-80">
            Customer satisfaction across all AI automations
          </p>
        </div>

        {/* 2 Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column (Metrics) */}
          <div className="flex flex-col gap-6">
            {metricCards.map((card, index) => (
              <InfoCard1 key={index} {...card} />
            ))}
          </div>

          {/* Right Column (Logo Cards) */}
          <div className="flex flex-col gap-6">
            {logoCards.map((card, index) => (
              <InfoCard1 key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
