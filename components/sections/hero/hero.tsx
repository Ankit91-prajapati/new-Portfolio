"use client";

import Typewriter from "typewriter-effect";
import  AnimateComponent from "./glow-animation"; // renamed for clarity

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden text-gray-400 dark:text-white px-4"
    >
      {/* Content */}
      <div className=" z-10 flex flex-col items-center text-center">
        
        {/* Animation */}
        <div className=" absolute flex justify-center mb-6 -z-10 inset-0">
          <AnimateComponent/>
        </div>

        {/* Name */}
        <h2 className="text-4xl md:text-5xl font-semibold font-sans ">
          Ankit Prajapati
        </h2>

        {/* Heading */}
        <h1 className="text-2xl md:text-5xl font-bold mt-4">
          Creating web products & experiences
        </h1>

        {/* Typewriter */}
        <p className="text-lg md:text-2xl mt-3">
          I am passionate{" "}
          <span className="text-cyan-400 inline-block min-w-[220px]">
            <Typewriter
              options={{
                strings: ["Web Developer", "Full Stack Developer"],
                autoStart: true,
                loop: true,
                deleteSpeed: 40,
                delay: 70,
              }}
            />
          </span>
        </p>
      </div>
    </section>
  );
};

export default Hero;