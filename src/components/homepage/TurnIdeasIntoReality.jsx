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
      bg: "bg-blue-50 dark:bg-slate-800/70",
      iconBg: "bg-blue-100 dark:bg-blue-500/20",
    },

    {
      id: 2,
      icon: <FiUsers />,
      title: "Fast Collaboration",
      description:
        "Share ideas instantly with teammates, collect feedback, and move from concept to execution without delays.",
      bg: "bg-green-50 dark:bg-slate-800/70",
      iconBg: "bg-green-100 dark:bg-green-500/20",
    },

    {
      id: 3,
      icon: <FiGrid />,
      title: "Smart Organization",
      description:
        "Organize projects, notes, and inspirations with a clean system that helps you stay focused and productive.",
      bg: "bg-purple-50 dark:bg-slate-800/70",
      iconBg: "bg-purple-100 dark:bg-purple-500/20",
    },

    {
      id: 4,
      icon: <FiTrendingUp />,
      title: "Built for Scaling",
      description:
        "Whether you're building your first startup or growing a large platform, IdeaVault grows with your workflow.",
      bg: "bg-orange-50 dark:bg-slate-800/70",
      iconBg: "bg-orange-100 dark:bg-orange-500/20",
    },

    {
      id: 5,
      icon: <FiZap />,
      title: "Creative Productivity",
      description:
        "Designed to help creators brainstorm faster, manage ideas efficiently, and turn inspiration into action.",
      bg: "bg-pink-50 dark:bg-slate-800/70",
      iconBg: "bg-pink-100 dark:bg-pink-500/20",
    },

    {
      id: 6,
      icon: <FiCheckCircle />,
      title: "Reliable Experience",
      description:
        "Enjoy a smooth, modern, and distraction-free experience crafted for developers, founders, and digital creators.",
      bg: "bg-cyan-50 dark:bg-slate-800/70",
      iconBg: "bg-cyan-100 dark:bg-cyan-500/20",
    },
  ];

  return (
    <div className="mt-40 mb-25 ">
      <div className="flex items-center flex-col justify-center gap-3">
        <LogoChip>WHY CHOOSE IDEAVAULT</LogoChip>
        <h1 className="text-xl text-center md:text-4xl font-bold">
          Built for Creators Who Turn Ideas Into Reality
        </h1>
        <p className="md:text-lg text-gray-400">
          Built for Creators Who Turn Ideas Into Reality
        </p>
      </div>
      <div className="grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {datas.map((data) => (
          <Card
            key={data.id}
            className={`rounded-2xl hover:shadow-2xl duration-300 hover:-translate-y-1 p-6 border border-default-200  dark:border-slate-700 transition-all hover:-translate-y-2hover:shadow-xl ${data.bg}`}
          >
            <div
              className={` W-14  h-14  rounded-xl   flex  items-center justify-center  text-2xl mb-4 ${data.iconBg}`}
            >
              {data.icon}
            </div>

            <h1 className="text-xl font-bold mb-2">{data.title}</h1>

            <p className="text-default-500">{data.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TurnIdeasIntoReality;
