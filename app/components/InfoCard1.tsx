import React from 'react'
import Image from 'next/image';

export type InfoCardType = {
  type: "metric" | "logo";
  number?: string;       
  text: string;
  logo?: string;        
};

export default function InfoCard1({ type, number, text, logo }: InfoCardType) {
  return (
    <div
      className="bg-[#121212] w-full md:w-[596px] h-[157px] rounded-xl p-6 
                 flex items-center"
    >
      {/* Type A: Number + Text */}
      {type === "metric" && (
        <div className="flex flex-col text-left">
          <h3 className="text-white text-[32px] font-semibold leading-tight">
            {number}
          </h3>
          <p className="text-white text-[18px] opacity-80 mt-2 max-w-[420px]">
            {text}
          </p>
        </div>
      )}

      {/* Type B: Logo + Text */}
      {type === "logo" && (
        <div className="flex items-center gap-4">
          <div className="shrink-0">
            <Image  
              src={logo || ""}      
              alt="Company Logo"
              width={152}            
              height={52}         
              className="object-contain" />
          </div>
          <p className="text-white text-[18px] opacity-80 max-w-[420px]">
            {text}
          </p>
        </div>
      )}
    </div>
  );
}
