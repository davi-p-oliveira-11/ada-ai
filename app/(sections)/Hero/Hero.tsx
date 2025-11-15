import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-white pt-20 pb-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

        {/* H1 */}
        <h1
          className="
            font-normal
            text-[36px]
            md:text-[48px]
            lg:text-[58px]
            leading-tight
            text-gray-900
          "
        >
          Your Hero Title Exactly From the Design
        </h1>

        {/* Paragraph */}
        <p
          className="
            mt-6
            text-[16px]
            md:text-[18px]
            text-gray-600
            max-w-[620px]
          "
        >
          Your hero description or subtitle goes here. It should be centered,
          readable, and scale properly on mobile and desktop.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          {/* Primary Gradient Button */}
          <button
            className="
              bg-gradient-to-r
              from-[#9977D4]
              to-[#6337AE]
              text-white
              font-semibold
              px-6
              py-3
              rounded-md
              hover:opacity-90
              transition
            "
          >
            Get Started
          </button>

          {/* Secondary Button */}
          <button
            className="
              border
              border-gray-300
              text-gray-800
              font-semibold
              px-6
              py-3
              rounded-md
              hover:bg-gray-100
              transition
            "
          >
            Learn More
          </button>
        </div>

        {/* Hero Image */}
        <Image
          src="/hero-image.png"  // replace with your asset
          alt="Hero section illustration"
          width={680}
          height={520}
          className="mt-12 w-full max-w-[680px] h-auto"
        />
      </div>
    </section>
  );
}
