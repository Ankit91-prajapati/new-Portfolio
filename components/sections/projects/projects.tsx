import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div id ="project" className="pt-16 pb-16">

      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-black dark:text-white">
        A small selection of recent <br/>
        <span className="text-cyan-300"> projects</span>
      </h1>

      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        <div>
          <Image
            src="/images/stream.png"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-bold text-black/100 dark:text-white/100">Video Streaming</h1>
            <h2>This is a fully functional, modern web platform that enables live streaming and video calling experiences with real-time chat capabilities.</h2>
          <h3 className="pt-2 font-mediumtext-black/100 dark:text-white/100"><Link href="https://live-stream-kzei.vercel.app/" 
          className="hover:text-blue-500 text-2xl text-blue-200">Live</Link></h3>
        </div>

         <div>
          <Image
            src="/images/authentication.png"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-bold text-black/100 dark:text-white/100">Authentication</h1>

           <h2>This is fullStack Authentication site</h2>
          <h3 className="pt-2 font-mediumtext-black/100 dark:text-white/100"><Link href="https://frontend-kappa-seven-35.vercel.app/" className="hover:text-blue-500 text-2xl  text-blue-200">Live</Link></h3>
        </div>


         <div>
          <Image
            src="/images/autocare.png"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-boldtext-black/100 dark:text-white/">Car-Repair-Services site</h1>

         <h2>Car repair company site with service listings, booking form, and contact options.</h2>
          <h3 className="pt-2 font-mediumtext-black/100 dark:text-white/100"><Link href="https://car-repair-services.vercel.app" className="hover:text-blue-500 text-2xl  text-blue-200">Live</Link></h3>
        </div>

         <div>
          <Image
            src="/images/classes.png"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-bold text-black/100 dark:text-white/100">Classes Website</h1>
  <h2>Educational institute landing page. Includes course info, contact form, and modern UI.</h2>
          <h3 className="pt-2 font-mediumtext-black/100 dark:text-white/100"><Link href="https://classes-website.vercel.app" className="hover:text-blue-500 text-2xl  text-blue-200">Live</Link></h3>
        </div>
      </div>

    </div>
  );
};

export default Projects;