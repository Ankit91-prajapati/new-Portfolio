"use client";

import React from "react";
import Tilt from "react-parallax-tilt";

const skills = [
  {
    name: "HTML",
    percentage: "95%",
    icon: "🌐",
  },
  {
    name: "CSS",
    percentage: "90%",
    icon: "🎨",
  },
  {
    name: "JavaScript",
    percentage: "85%",
    icon: "🟨",
  },
  {
    name: "React",
    percentage: "80%",
    icon: "⚛️",
  },
  {
    name: "Next.js",
    percentage: "75%",
    icon: "▲",
  },
  {
    name: "Node.js",
    percentage: "85%",
    icon: "🟢",
  },
];

const Skills = () => {
  return (
    <div id="skill" className="pt-16 pb-16">
      {/* Title */}

      <h1 className="text-center text-white text-3xl md:text-4xl xl:text-5xl font-bold">
        My
        <span className="text-purple-400"> Skills</span>
      </h1>

      {/* Skills Container */}

      <div className="flex flex-wrap justify-center gap-6 mt-16">
        {skills.map((skill) => {
          return (
            <Tilt key={skill.name} scale={1.05} transitionSpeed={400}>
              <div className="bg-[#141414] w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg hover:shadow-purple-500/40 transition">
                <div className="text-5xl mb-4 text-gray-300">{skill.icon}</div>

                <p className="text-2xl font-bold text-white">
                  {skill.percentage}
                </p>

                <p className="text-purple-400 mt-1">{skill.name}</p>
              </div>
            </Tilt>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
