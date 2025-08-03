"use client";

import { skills } from "@/contents/skills";

const SkillsCarousel = () => {
  return (
    <div className="overflow-hidden my-14">
      <div className="relative w-full">
        <div className="flex animate-scroll gap-8 w-max">
          {[...skills, ...skills].map((skill, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center min-w-[100px]"
            >
              <div className="text-3xl dark:text-primary">{skill.icon}</div>
              <span className="mt-2 text-sm text-gray-800 dark:text-white">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsCarousel;
