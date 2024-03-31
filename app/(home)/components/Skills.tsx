"use client";
import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiFirebase,
  SiFlutter,
  SiGit,
  SiFigma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiHtml5,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiDart,
  SiKotlin,
  SiBlender,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      text: "Flutter",
      Icon: SiFlutter,
    },
    {
      text: "Dart",
      Icon: SiDart,
    },
    {
      text: "Kotlin",
      Icon: SiKotlin,
    },

    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "Tailwind",
      Icon: SiTailwindcss,
    },
    {
      text: "Nodejs",
      Icon: SiNodedotjs,
    },

    {
      text: "Firebase",
      Icon: SiFirebase,
    },
    {
      text: "MongoDB",
      Icon: SiMongodb,
    },
    {
      text: "MySQL",
      Icon: SiMysql,
    },

    {
      text: "Git",
      Icon: SiGit,
    },
    {
      text: "Figma",
      Icon: SiFigma,
    },
    {
      text: "Blender",
      Icon: SiBlender,
    },
  ];
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="Skills 🪄"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <HoverEffect items={skills} />
    </div>
  );
}
