export default function SmallStatCard() {
  return (
    <div className="bg-[#121212] w-full md:w-[390px] h-[415px] rounded-xl p-8 flex flex-col justify-center">
      <h2 className="text-white text-[32px] font-normal leading-tight text-left mb-10">
        AI-powered automation built for CX teams
      </h2>

      <button className="px-6 py-3 bg-linear-to-r from-[#9977D4] to-[#6337AE] text-white font-semibold rounded-lg">
        View all Case Studies
      </button>
    </div>
  );
}
