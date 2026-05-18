import Banner from "@/components/homepage/Banner";
import FeaturedPage from "@/components/homepage/Featured";
import { getFeaturedData } from "@/lib/getData/data";
import Image from "next/image";

export default async function Home() {
  const featuredData = await getFeaturedData();
  return (
    <div>
      <Banner />
      <FeaturedPage featuredData={featuredData} />
    </div>
  );
}
