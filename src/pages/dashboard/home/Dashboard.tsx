import { useEffect, useState } from "react";
import { fetchNameFromProfiles } from "../../../supabase/supabaseFetch";
import { cn } from "../../../lib/utils";
import { BentoGrid, BentoGridItem } from "../../../components/bento";
import { AnimatedListDemo } from "../../../components/notificationElement";
import { Marquee3D } from "../../../components/mediaMarquee";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Crown,
  Calendar,
  UserRound,
  BadgeInfo,
  CheckCheck,
  House,
} from "lucide-react";
import neologo from "@/src/assets/Neo-logo.png";
import neocity from "@/src/assets/n4.png";
import neocity2 from "@/src/assets/n8.png";
// import examplePDF from "@/src/assets/pdf/sponsor.pdf";
import DashNavbar from "@/src/components/dashNav";

export default function Dashboard() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchNameFromProfiles().then((fullName) =>
      setName(fullName.split(" ")[0].toLowerCase())
    );
  }, []);

  return (
    <div className="relative lg:h-screen w-screen bg-linear-to-b from-neo-green-2/90 via-neo-green-4/50 to-neo-green-1/90 font-manrope lg:overflow-hidden">
      <div className="flex font-extrabold md:font-bold text-xl sm:text-2xl md:text-2xl text-[#065f46] leading-tight text-center md:text-left p-5">
        <button className="relative p-7.5 bg-neo-green-1/50 rounded-lg shadow-black/15 shadow-md cursor-pointer hover:bg-neo-green-1/35 transition ease-in-out delay-50 duration-200" onClick={()=>navigate('/')}>
          <House className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-2/5 h-6 w-6 text-neo-green-3"/>
        </button>
        <span className="w-full text-transparent bg-clip-text bg-linear-to-r from-neo-green-4 via-neo-green-1 to-neo-green-5 bg-size-200 animate-gradient-x-slow flex justify-center shadow-black/80 drop-shadow-sm">
          hello <span className="mx-1">{name}</span> welcome to your personal
          dashboard.
        </span>
      </div>

      <BentoGrid className="max-w-[80%] max-h-screen mx-auto md:auto-rows-[20rem] mt-10 p-5">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn(
              "shadow-black/15 shadow-md cursor-pointer",
              item.className,
              "[&>p]:text-lg",
              // all of the above until further changes lol
              item.title === "submission" && "cursor-not-allowed",
              item.title === "developer package" && "cursor-not-allowed",
              item.title === "application" && "cursor-not-allowed",
              item.title === "profile" && "cursor-not-allowed",
              item.title === "schedule" && "cursor-not-allowed"
            )}
            icon={item.icon}
            // onClick={() => {
            //   if(item.title == "developer package"){
            //     window.open(examplePDF, "_blank", "noopener,noreferrer");
            //     return;
            //   }
            //   if(item.title == "submission"){
            //     // placeholder...
            //     window.open("https://www.youtube.com/watch?v=IMnJ1tvQV2c", "_blank", "noopener,noreferrer");
            //     return;
            //   }
            //   if (
            //     item.title !== "submission" && item.title !== "developer package"
            //   ) {
            //     navigate(`${item.title}`);
            //   }
            // }}
          />
        ))}
      </BentoGrid>

      <DashNavbar />
    </div>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-transparent p-2  items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-neo-green-1 to-neo-green-6 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-transparent p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-neo-green-1 to-neo-green-6 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-transparent p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-neo-green-1 to-neo-green-6 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <Marquee3D />
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center shadow-black/30 shadow-lg"
      >
        <img
          src={neocity}
          alt="neobuilding"
          height="150"
          width="150"
          className="h-10 w-10 "
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neo-green-2/90 mt-4">
          information
        </p>
        <p className="border border-neo-green-6 bg-neo-green-2/10  text-neo-green-2 text-xs rounded-full px-2 py-0.5 mt-4">
          i.e venue
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center shadow-black/30 shadow-lg">
        <img
          src={neologo}
          alt="avatar"
          height="150"
          width="150"
          className="rounded-full h-15 w-15"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neo-green-2/90 mt-4">
          to developers 💚
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          infomation
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center shadow-black/30 shadow-lg"
      >
        <img
          src={neocity2}
          alt="avatar"
          height="10"
          width="10"
          className="h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neo-green-2/90 mt-4">
          expectation
        </p>
        <p className="border border-neo-green-2 bg-neo-green-6/10 text-neo-green-6 text-xs rounded-full px-2 py-0.5 mt-4">
          i.e rules
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 5,
      rotate: 3,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full min-h-[6rem] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-transparent p-2 items-start space-x-2"
      >
        <AnimatedListDemo />
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "application",
    description: <span className="text-sm">apply to the 6ix summit.</span>,
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <Crown className="h-4 w-4 text-neo-green-2" />,
  },
  {
    title: "profile",
    description: <span className="text-sm">update your profile.</span>,
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <UserRound className="h-4 w-4 text-neo-green-2" />,
  },
  {
    title: "schedule",
    description: <span className="text-sm">official schedule.</span>,
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <Calendar className="h-4 w-4 text-neo-green-2" />,
  },
  {
    title: "developer package",
    description: (
      <span className="text-sm">
        everything you need to know as a developer.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <BadgeInfo className="h-4 w-4 text-neo-green-2" />,
  },

  {
    title: "submission",
    description: (
      <span className="text-sm">
        submit your project to the neo developer league.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <CheckCheck className="h-4 w-4 text-neo-green-2" />,
  },
];
