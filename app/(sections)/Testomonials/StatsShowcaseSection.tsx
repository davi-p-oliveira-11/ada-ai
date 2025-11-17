import LargeStatCard from "@/app/components/LargeStatCard";
import SmallStatCard from "@/app/components/SmallStatCard";

export type StatItem = {
  number: string;
  label: string;
}

const statsData = [
  { number: "24%", label: "Increase in retention" },
  { number: "12M+", label: "Conversations automated" },
  { number: "87%", label: "Faster response time" },
];

export default function StatsShowcaseSection() {
  return (
    <section className="bg-[#1B1E23] py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left column (30%) */}
          <div className="md:col-span-1">
            <SmallStatCard />
          </div>

          {/* Right column (70%) */}
          <div className="md:col-span-2">
            <LargeStatCard stats={statsData} />
          </div>

        </div>

      </div>
    </section>
  );
}
