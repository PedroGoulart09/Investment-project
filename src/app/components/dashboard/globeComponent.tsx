"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { globeConfig, sampleArcs } from "@/app/utils/constants";

const World = dynamic(() => import("../ui/globe").then((m) => m.World), {
  ssr: false,
});

export function GlobeDemo() {
  return (
    <div className="flex flex-row items-start md:items-center justify-center py-10 md:py-20 mt-[-50px] md:mt-0 h-screen md:h-auto dark:bg-black bg-white relative w-full">
    <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="div"
      >
        <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
        Conexões Globais com a PG BANK
        </h2>
        <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
        Descubra onde nossos clientes estão pelo mundo
        </p>
      </motion.div>
     <div className="w-full h-[60vh] md:h-full z-10 max-sm:w-[98vw]">
        <World data={sampleArcs} globeConfig={globeConfig} />
      </div>
    </div>
  </div>
  );
}
