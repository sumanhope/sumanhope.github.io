import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
export default function Navbar({ className }: { className?: string }) {
  const socials = [
    {
      Link: "https://www.linkedin.com/in/sumanhope/",
      Label: "Linkedin",
      Icon: SiLinkedin,
    },
    {
      Link: "https://github.com/sumanhope",
      Label: "Github",
      Icon: SiGithub,
    },
    {
      Link: "https://www.instagram.com/jeez.suman/",
      Label: "Instagram",
      Icon: SiInstagram,
    },
  ];
  return (
    <nav
      className={cn(
        "py-10 flex justify-between items-center animate-move-down",
        className
      )}
    >
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-violet-900 -rotate-2">
        Suman Shrestha 👨🏻‍💻
      </h1>
      <div className="flex items-center gap-4">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link href={social.Link} key={index} aria-label={social.Label}>
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
