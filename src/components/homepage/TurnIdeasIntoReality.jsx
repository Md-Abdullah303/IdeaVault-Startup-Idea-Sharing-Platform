import React from "react";
import LogoChip from "../Ui/LogoChip";
import { Card } from "@heroui/react";
import {
  FiCheckCircle,
  FiGrid,
  FiShield,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from "react-icons/fi";

const TurnIdeasIntoReality = () => {
  const datas = [
    {
      id: 1,
      icon: <FiShield />,
      title: "Secure Idea Storage",
      description:
        "Keep your concepts, plans, and creative thoughts protected in one secure workspace built for modern creators.",
    },

    {
      id: 2,
      icon: <FiUsers />,
      title: "Fast Collaboration",
      description:
        "Share ideas instantly with teammates, collect feedback, and move from concept to execution without delays.",
    },

    {
      id: 3,
      icon: <FiGrid />,
      title: "Smart Organization",
      description:
        "Organize projects, notes, and inspirations with a clean system that helps you stay focused and productive.",
    },

    {
      id: 4,
      icon: <FiTrendingUp />,
      title: "Built for Scaling",
      description:
        "Whether you're building your first startup or growing a large platform, IdeaVault grows with your workflow.",
    },

    {
      id: 5,
      icon: <FiZap />,
      title: "Creative Productivity",
      description:
        "Designed to help creators brainstorm faster, manage ideas efficiently, and turn inspiration into action.",
    },

    {
      id: 6,
      icon: <FiCheckCircle />,
      title: "Reliable Experience",
      description:
        "Enjoy a smooth, modern, and distraction-free experience crafted for developers, founders, and digital creators.",
    },
  ];

  return (
    <div className="mt-40 mb-25 ">
      <div className="flex items-center flex-col justify-center gap-3">
        <LogoChip>WHY CHOOSE IDEAVAULT</LogoChip>
        <h1 className="text-xl md:text-4xl font-bold">
          Built for Creators Who Turn Ideas Into Reality
        </h1>
        <p className="md:text-lg text-gray-400">
          Built for Creators Who Turn Ideas Into Reality
        </p>
      </div>
      <div className="grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {datas.map((data) => (
          <Card key={data.id} className="rounded-lg py-3 space-y-1 px-5">
            <div className="text-xl">{data.icon}</div>
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <p className=" text-gray-400">{data.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TurnIdeasIntoReality;
