import { MovingBorderBtn } from "@/components/ui/moving-border";
import Link from "next/link";
import React from "react";
import { PiBriefcaseDuotone } from "react-icons/pi";
import Title from "./Title";
export default function HeroSection() {
  return (
    <div className="min-h-[60vh] mt-5 flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row justify-between items-center animate-move-up">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Nice to meet you! 👋
          <br />
          <span className="underline underline-offset-8 decoration-violet-800">
            {" I'm Suman."}
          </span>
        </h1>
        <p className="md:w-96 tex-lg text-gray-300">
          {
            " Based in Nepal, I'm a Flutter developer passionate about building innovative mobile applications."
          }
        </p>
        <Link
          className="inline-block group"
          href={"mailto:sumansthahope@gmail.com"}
        >
          <Title text="Contact me 📬" />
        </Link>
      </div>
      <div className="relative">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-violet-800"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-violet-800"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
          <a download href="./CV_Suman.pdf">
            <MovingBorderBtn
              borderRadius="0.5rem"
              className="p-3 font-semibold "
            >
              <p className="flex gap-1 items-center">
                <PiBriefcaseDuotone className="text-lg" /> Available for work
              </p>
            </MovingBorderBtn>
          </a>
        </div>
      </div>
    </div>
  );
}
