import React from "react";
import LogoChip from "../Ui/LogoChip";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const TrustedByGrowing = () => {
  const testimonialsData = [
    {
      id: 1,
      brand: "NovaNest",
      ceo: "Ethan Carter",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",

      sector: "SaaS Startup Founder",

      description:
        "IdeaVault completely changed the way our team manages product concepts and feature planning. Before using it, our ideas were scattered across documents and chats. Now everything is organized in one place, making collaboration faster and more productive for the entire company.",
    },

    {
      id: 2,
      brand: "PixelForge",
      ceo: "Sophia Bennett",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",

      sector: "Creative Agency Director",

      description:
        "Our agency handles multiple creative campaigns every month, and IdeaVault helped us centralize brainstorming, client feedback, and execution planning. The interface feels modern, smooth, and incredibly easy for teams to adopt.",
    },

    {
      id: 3,
      brand: "CodeSphere",
      ceo: "Michael Torres",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",

      sector: "Software Development Company",

      description:
        "We were searching for a platform that could help our developers and designers collaborate more effectively. IdeaVault provided exactly that. The organization tools and workflow system improved our productivity almost immediately.",
    },

    {
      id: 4,
      brand: "LaunchPeak",
      ceo: "Ava Richardson",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",

      sector: "Startup Growth Consultant",

      description:
        "One of the best decisions we made was switching to IdeaVault for managing startup strategies and growth planning. The clean design and fast workflow make it perfect for teams that need efficiency without unnecessary complexity.",
    },

    {
      id: 5,
      brand: "VisionFlow",
      ceo: "Daniel Brooks",
      image: "https://images.unsplash.com/photo-1504593811423-6dd665756598",

      sector: "Product Strategy Team",

      description:
        "IdeaVault helped us transform raw ideas into structured roadmaps. The collaboration experience feels premium, and our team now spends less time searching for information and more time building impactful products.",
    },

    {
      id: 6,
      brand: "BrightLabs",
      ceo: "Isabella Moore",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",

      sector: "Digital Innovation Agency",

      description:
        "From brainstorming sessions to long-term planning, IdeaVault has become an essential part of our workflow. The platform feels reliable, fast, and genuinely built for modern creative teams and innovators.",
    },
  ];

  return (
    <div className="mt-40 mb-25 ">
      <div className="flex items-center  justify-center flex-col gap-3">
        <LogoChip>Trusted by Creators</LogoChip>
        <h1 className="text-xl md:text-4xl font-bold">
          Loved by Creative Founders & Startup Teams
        </h1>
        <p className="text-gray-400">Why Growing Startups Choose IdeaVault</p>
      </div>

      <div className="relative overflow-hidden">
        {/* Right Blue Blur */}
        <div className="absolute right-0 top-0 z-10 h-full w-40 bg-gradient-to-l from-blue-500/20 to-transparent blur-2xl pointer-events-none" />
        {/* Left Blue Blur */}
        <div className="absolute left-0 top-0 z-10 h-full w-40 bg-gradient-to-r from-blue-500/20 to-transparent blur-2xl pointer-events-none" />

        <Marquee className="mt-5">
          {testimonialsData.slice(3).map((data) => (
            <div
              key={data.id}
              className="grid mx-5 w-[750px] grid-cols-2 gap-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="h-[260px] overflow-hidden rounded-2xl">
                <img
                  src={data.image}
                  alt={data.brand}
                  width={600}
                  height={500}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="flex flex-col justify-center space-y-3">
                <p className="text-gray-600">{data.brand}</p>
                <h1 className="text-xl font-semibold">{data.ceo}</h1>
                <h2 className="text-3xl font-bold">{data.sector}</h2>
                <p className="text-gray-400">{data.description}</p>
              </div>
            </div>
          ))}
        </Marquee>
        <Marquee direction="right" className="mt-5">
          {testimonialsData.slice(0, 3).map((data) => (
            <div
              key={data.id}
              className="grid mx-5 w-[750px] grid-cols-2 gap-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="h-[260px] overflow-hidden rounded-2xl">
                <img
                  src={data.image}
                  alt={data.brand}
                  width={600}
                  height={500}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="flex flex-col justify-center space-y-3">
                <p className="text-gray-600">{data.brand}</p>
                <h1 className="text-xl font-semibold">{data.ceo}</h1>
                <h2 className="text-3xl font-bold">{data.sector}</h2>
                <p className="text-gray-400">{data.description}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TrustedByGrowing;
