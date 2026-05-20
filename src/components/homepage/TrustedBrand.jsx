import React from "react";
import LogoChip from "../Ui/LogoChip";
import Marquee from "react-fast-marquee";
import { FaMeta } from "react-icons/fa6";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaAmazon, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const TrustedBrand = () => {
  const brands = [
    { name: "Google", icon: <TiSocialGooglePlus /> },
    { name: "Meta", icon: <FaMeta /> },
    { name: "Trello" },
    { name: "amazon", icon: <FaAmazon /> },
    { name: "Instagram", icon: <FaInstagramSquare /> },
    { name: "Facebook", icon: <FaFacebookSquare /> },
  ];

  return (
    <div className="my-20 flex items-center flex-col justify-center gap-3">
      <LogoChip>Brand</LogoChip>
      <h1 className="text-xl md:text-4xl font-bold">
        Trusted Exceptional Brand
      </h1>
      <Marquee className="mt-5">
        {brands.map((brand, ind) => (
          <div
            key={ind}
            className="mx-20 text-gray-400 text-5xl py-2 font-bold"
          >
            <h1 className="flex items-center gap-1">
              {brand?.icon || ""}
              {brand.name}
            </h1>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TrustedBrand;
