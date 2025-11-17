import Image from "next/image";
import { Key } from "react";

type FeatureCard = {
  type: Key | null | undefined;
  icon: string;
  title: string;
  description: string;
};

export default function FeatureCard({ icon, title, description }: FeatureCard) {
  return (
    <div className="bg-[#121212] w-full max-w-[277px] h-[192px] rounded-xl flex flex-col items-center justify-center text-center px-6">
      {/* Icon */}
      <div className="mb-4">
        <Image
          src={"./icons/trophy.svg"}
          alt={title}
          width={40}
          height={40}
          className="w-10 h-10"
        />
      </div>

      {/* Title */}
      <h4 className="text-white text-[18px] font-semibold">{title}</h4>

      {/* Description */}
      <p className="text-white/70 text-[14px] mt-2 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
