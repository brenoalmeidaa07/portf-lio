import React from 'react'
import ExperienceInfo from './ExperienceInfo'

const ExperienceTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-[300px]'>
      <p className='text-orange font-bold uppercase text-3xl font-special text-center'>Since 2024</p>
      <div className='flex justify-center items-center gap-4'>
        <ExperienceInfo number='1' text='Years'/>
        <p className='font-bold text-lightBrown'>-</p>
        <ExperienceInfo number='20' text='Web-Sites'/>
      </div>
      <p className='text-center text-white' >I worked on developing and improving a platform using React, Next.js, Tailwind CSS, Hooks, Git/GitHub and Material UI. I participated in the refactoring of the website to improve performance and implemented new features to enhance the user experience. In the Agile environment, I was able to learn a lot, improve my technical skills and contribute to the project in a collaborative way..</p>
      <ExperienceInfo number='' text=''/>
    </div>
  )
}

export default ExperienceTopLeft
