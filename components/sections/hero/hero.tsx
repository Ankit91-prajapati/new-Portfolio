"use client";

import ParticlesHero from "./particles-hero";
import Image from "next/image";
import Typewriter from "typewriter-effect";

// add your image

const Hero = () => {
  return (
    <div
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-black dark:text-white"
    >
      <div className="hidden dark:block">
        <ParticlesHero />
      </div>

      <div className="relative  flex flex-col items-center justify-center z-10">
        <div className="w-[250px] h-[250px] rounded-full overflow-hidden border-2 border-white flex items-center justify-center">
          <Image
            src="/images/ankitprajapati.jpeg"
            height={200}
            width={200}
            alt="Profile"
            className="object-cover"
          />
        </div>

        <h1 className="text-3xl md:text-5xl font-bold mt-4 text-center">
          Creating web products & experiences
        </h1>

        <h2 className="text-xl md:text-2xl mt-2 text-center">
          I am passionate{" "}
          <span className="text-cyan-400">
            <Typewriter
              options={{
                strings: ["Web Developer", "FullStack Developer"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 75,
              }}
            />
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Hero;
