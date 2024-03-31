import React from "react";
import {
  SiDart,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGithub,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export default function Project() {
  const projects = [
    {
      title: "Food and Nutrition",
      tech: [SiFlutter, SiDart, SiFirebase, SiFigma, SiGithub],
      link: "./foodandnutrition.apk",
      cover: "./foodandnutrition.jpg",
      background: "bg-violet-700",
    },
    {
      title: "myFarm",
      tech: [SiFlutter, SiDart, SiFirebase, SiFigma, SiGithub],
      link: "./myFarm.apk",
      cover: "./myfarm.jpg",
      background: "bg-green-600",
    },
    {
      title: "Myagde Gaubikash",
      tech: [SiFlutter, SiDart, SiFirebase, SiFigma, SiGithub],
      link: "./rural.apk",
      cover: "./rural1.jpg",
      background: "bg-green-600",
    },
    {
      title: "Room Rental",
      tech: [SiReact, SiNodedotjs, SiFirebase, SiFigma, SiGithub],
      link: "https://roomrentalnpr.web.app/",
      cover: "./roomrental.jpg",
      background: "bg-violet-600",
    },
  ];
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects 🗂️"
        className="flex flex-col items-center justify-center rotate-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <Link href={project.link} key={index} target="_blank" download>
              <div className={cn("p-3 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <div className="space-y-5 bg-black p-3 rounded-md">
                    <h1 className=" text-sm lg:text-2xl font-normal lg:font-bold">
                      {project.title}
                    </h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return (
                          <Icon className="size-4 lg:size-8" key={index} />
                        );
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
