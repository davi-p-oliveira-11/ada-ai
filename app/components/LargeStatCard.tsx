import Image from "next/image";
import Link from "next/link";
import { StatItem } from "../(sections)/Testomonials/StatsShowcaseSection";

export default function LargeStatCard({ stats }: { stats: StatItem[] }) {
  return (
    <div className="bg-[#121212] w-full h-auto rounded-xl p-8 md:p-10">
      {/* Logo + Link */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Image
            src="/images/airasia.svg"
            alt="Company Logo"
            width={160}
            height={35}
          />
        </div>

        <Link
          href="#"
          className="text-[#9977D4] underline text-[16px] font-semibold"
        >
          Read The Air Asia Case Study
        </Link>
      </div>

      {/* Middle area: stats column + description text */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Stats Column */}
        <div className="flex flex-col gap-6">
          {stats.map((item, index) => (
            <div key={index}>
              <h2 className="text-white text-[32px] font-bold">
                {item.number}
              </h2>
              <p className="text-white opacity-75 text-[16px]">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Right-side text */}
        <div className="flex-1">
          <p className="text-white text-[18px] opacity-80 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed
            mattis dui duis feugiat viverra lectus tincidunt pretium.
          </p>

          {/* Person info */}
          <div className="flex items-center gap-4 mt-6">
            <Image
              src="/images/person.png"
              alt="Person Photo"
              width={56}
              height={56}
              className="rounded-full"
            />

            <div>
              <h4 className="text-white font-semibold text-[18px]">
                Bayley Clark
              </h4>
              <p className="text-white opacity-60 text-[14px]">
                Director of Operations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
