import Banner from "@/components/homepage/Banner";
import FeaturedPage from "@/components/homepage/Featured";
import ReadyToUpgrad from "@/components/homepage/ReadyToUpgrad";
import TrustedBrand from "@/components/homepage/TrustedBrand";
import TrustedByGrowing from "@/components/homepage/TrustedByGrowing";
import TurnIdeasIntoReality from "@/components/homepage/TurnIdeasIntoReality";
import { getFeaturedData } from "@/lib/getData/data";
import Image from "next/image";

export default async function Home() {
  const featuredData = await getFeaturedData();
  return (
    <div>
      <Banner />
      <FeaturedPage featuredData={featuredData} />
      <div className="w-[90%] md:w-[70%] mx-auto">
        <TrustedBrand />
        <TurnIdeasIntoReality />
        <TrustedByGrowing />
        <ReadyToUpgrad />
      </div>
    </div>
  );
}
