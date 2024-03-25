"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import TextShimmer from "@/components/magicui/text-shimmer";
import { ArrowRightIcon } from "lucide-react";
import { BorderBeam } from "./magicui/border-beam";
import { useTheme } from "next-themes";

export default function HeroSection() {
  const [isClient, setIsClient] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [hasMounted, setHasMounted] = useState(false); // New state to track if component has mounted
  const { theme } = useTheme();

  useEffect(() => {
    setIsClient(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    // Set hasMounted to true after component mounts
    setHasMounted(true);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="flex flex-col items-center justify-end lg:justify-between p-7 md:p-10 lg:p-24">
      <div className="max-w-2xl mx-auto flex flex-col gap-y-5">
        <div className="z-10 flex items-center justify-center">
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
            )}
          >
            <TextShimmer className="inline-flex items-center justify-center px-4 py-1">
              <span>✨ Introducing Magic UI</span>
              <ArrowRightIcon className="size-3 ml-1 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </TextShimmer>
          </div>
        </div>
        <motion.h2
          initial={{
            opacity: 0,
            translateY: 10,
          }}
          animate={{
            opacity: 1,
            translateY: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: "easeInOut",
          }}
          className="font-extrabold dark:font-bold tracking-tighter text-transparent bg-gradient-to-br from-neutral-500 via-neutral-700 to-neutral-800 dark:from-neutral-600 dark:via-neutral-100 dark:to-white bg-clip-text text-4xl lg:text-[50px] leading-[1.1] text-center text-balance"
        >
          Not having a good landing page can suck
        </motion.h2>
        <motion.p
          initial={{
            opacity: 0,
            translateY: 10,
          }}
          animate={{
            opacity: 1,
            translateY: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: "easeInOut",
          }}
          className=" text-neutral-700/80 dark:text-neutral-400/60 font-[450] text-center text-lg md:text-xl max-w-md mx-auto text-balance leading-[1.5]"
        >
          So get our landing page template and make your conversion rate go
          brrrr
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
            translateY: 10,
          }}
          animate={{
            opacity: 1,
            translateY: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: "easeInOut",
          }}
          className="flex flex-col md:flex-row gap-y-2.5 items-center justify-center gap-x-5 max-w-md mx-auto w-full"
        >
          <button className="w-full px-5 cursor-pointer font-[420] h-10 rounded-md text-white bg-indigo-500 hover:bg-indigo-600 shadow-black/25 ring-1 ring-indigo-500/50 shadow-[inset_0px_-2px_4px_rgba(0,0,0,0.6)] inline-flex items-center justify-center transition-colors duration-100 ease-linear">
            Get Started
          </button>
          <button className="w-full px-5 cursor-pointer font-[420] h-10 rounded-md bg-gradient-to-b bg-neutral-800 hover:bg-neutral-700 border border-neutral-700/50  flex items-center justify-center relative transition-colors ease-linear duration-100 text-white">
            <div className="rounded-md absolute inset-0 shadow border-t border-neutral-500/30" />
            Pricing
          </button>
        </motion.div>
      </div>
      <motion.div
        initial={{
          opacity: 0,
          translate: "0 4rem",
          transform: "perspective(500px) rotateX(10deg)",
        }}
        animate={{
          opacity: 1,
          translate: 0,
          transform: "perspective(500px) rotateX(2deg)",
        }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: "easeInOut",
          easings: "cubic-bezier(.8,0,.2,1)",
        }}
        className="dashboard-img-container relative overflow-hidden rounded-xl md:rounded-2xl max-w-7xl mt-16 md:mt-24 mx-auto z-10 shadow-[0_0_6rem_#6040ff60,0_0_2rem_#8585ff40]"
      >
        <motion.div
          initial={{
            opacity: 0,
            translateX: "-40%",
            translateY: "90%",
            rotate: "125deg",
          }}
          animate={{
            opacity: 1,
            translateX: "-30%",
            translateY: "100%",
            rotate: "135deg",
          }}
          transition={{
            duration: 0.5,
            delay: 1,
            ease: "easeInOut",
            damping: 30,
            stiffness: 500,
          }}
          className="hidden md:block absolute inset-0 rounded-xl md:rounded-2xl bg-[linear-gradient(transparent,#ffffff08);] w-[150%] h-[20rem] "
        ></motion.div>
        <motion.img
          className="dashboard-image w-full h-full object-cover rounded-xl md:rounded-2xl hidden dark:block"
          src="/dashboard-mockup-dark.png"
          alt="Dashboard Mockup"
        ></motion.img>
        <motion.img
          className="dashboard-image w-full h-full object-cover rounded-xl md:rounded-2xl dark:hidden block"
          src="/dashboard-mockup-light.jpg"
          alt="Dashboard Mockup"
        ></motion.img>
        {hasMounted && (
          <BorderBeam
            size={windowWidth < 768 ? 120 : 250}
            duration={12}
            delay={9}
            colorFrom={theme === "dark" ? "#ffffff" : "#000000"}
            colorTo={theme === "dark" ? "#ffffff80" : "#00000020"}
          />
        )}
      </motion.div>
    </main>
  );
}
