export default function SmallStatCard() {
  return (
    <div className="bg-[#121212] w-full md:w-[390px] h-[434px] rounded-xl p-8 flex flex-col justify-between">
      
      <h2 className="text-white text-[32px] font-semibold leading-tight">
        Your Small Card Title
      </h2>

      <button className="px-6 py-3 bg-gradient-to-r from-[#9977D4] to-[#6337AE] text-white font-semibold rounded-lg mt-6">
        Call To Action
      </button>

    </div>
  );
}
