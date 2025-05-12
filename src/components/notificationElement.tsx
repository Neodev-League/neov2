"use client";

import { cn } from "../lib/utils";
import { AnimatedList } from "./animatedList";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "shawarma is here",
    description: "serving dinner",
    time: "1m ago",

    icon: "🌯",
    color: "#00C9A7",
  },
  {
    name: "geoguessr event",
    description: "come to the foyer",
    time: "10m ago",
    icon: "📌",
    color: "#8d5fe8",
  },
  {
    name: "neo bank open",
    description: "spend your points",
    time: "3s ago",
    icon: "🏦",
    color: "#6ce69a",
  },
  {
    name: "time's running out",
    description: "2h left of development",
    time: "5m ago",
    icon: "⏳",
    color: "#FF3D71",
  },
  {
    name: "special guest",
    description: "matthew singer has arrived",
    time: "2m ago",
    icon: "👤",
    color: "#1E86FF",
  },
  {
    name: "neo points ++",
    description: "pouches hidden around venue",
    time: "21m ago",
    icon: "💸",
    color: "#FFB800",
  },
];

notifications = Array.from({ length: 35 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg text-neo-green-6 font-bold">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-neo-green-3/70">{time}</span>
          </figcaption>
          <p className="text-sm font-normal text-neo-green-6">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col overflow-hidden p-2",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}
