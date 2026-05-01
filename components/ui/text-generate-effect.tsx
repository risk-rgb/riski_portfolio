"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");

  useEffect(() => {
    if (scope.current) {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration ? duration : 1,
          delay: stagger(0.15),
        },
      );
    }
  }, [scope.current, animate, duration, filter]);

  const renderWords = () => {
    return (
      // FIX UTAMA: Pakai flex-wrap dan gap untuk memaksa jarak antar kata
      <motion.div
        ref={scope}
        className="flex flex-wrap justify-center gap-x-[0.35rem] gap-y-1 md:gap-x-2"
      >
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              // inline-block diganti biar flexbox bekerja maksimal
              className="text-foreground opacity-0 transition-colors duration-500"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-medium", className)}>
      <div className="mt-4">
        {/* FIX TIPOGRAFI: Ukuran font diperbesar sedikit biar pas di mata */}
        <div className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base lg:text-lg leading-relaxed tracking-wide transition-colors duration-500">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
