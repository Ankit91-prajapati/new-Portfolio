import React from 'react'
import ReasumeCard from './resume-card'
import { Badge, BadgeCheck, FanIcon, PenBox, Redo2Icon } from 'lucide-react'

const Resume = () => {
  return (
    <div className='pt-20 pb-16'>
      
      <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10'>

        {/* Work Experience */}
        <div>
          <h1 className='text-3xl sm:text-4xl font-bold text-black dark:text-white'>
            My Work <span className='text-cyan-400'>Experience</span>
          </h1>

          <div className='mt-6 space-y-4'>
            <ReasumeCard Icon={PenBox} role="Web Developer" company ="Xpertstim IT Services Pvt. Ltd." description="




Developed the front-end of a classes-website using React and Tailwind and also Cars repair and services website using HTML ,CSS ,javacsript , jQuery. Recreated added routing, and deployed the project on Vercel." date ="13 june 2025 - 23 july 2025"/>
            
          </div>
        </div>

        {/* Education */}
        <div>
          <h1 className='text-3xl sm:text-4xl font-bold text-black dark:text-white'>
            My <span className='text-cyan-400'>Education</span>
          </h1>

          <div className='mt-6 space-y-4'>
            <ReasumeCard Icon={Badge} role="Bachelor of Computer Application" date="2023 - Present" college="Deen Dayal Upadhyaya Gorakhpur University ,Gorakhpur"/>
            <ReasumeCard Icon={FanIcon} role="Intermediate(XII)" date="2023" college ="National I C Barhaganj Gorakhpur "/>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Resume