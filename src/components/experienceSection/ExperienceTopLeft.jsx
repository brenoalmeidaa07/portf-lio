import React from 'react'
import ExperienceInfo from './ExperienceInfo'

const ExperienceTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-[300px]'>
      <p className='text-orange font-bold uppercase text-3xl font-special text-center'>Ano 2024</p>
      <div className='flex justify-center items-center gap-4'>
        <ExperienceInfo number='1' text='Years'/>
        <p className='font-bold text-lightBrown'>-</p>
        <ExperienceInfo number='20' text='Web-Sites'/>
      </div>
      <p className='text-center text-white' >Trabalhei no desenvolvimento e melhoria de uma plataforma usando React, Next.js, Tailwind CSS, Hooks, Git/GitHub e Material UI. Participei da refatoração do site para melhorar o desempenho e implementei novos recursos para aprimorar a experiência do usuário. No ambiente Ágil, pude aprender bastante, aprimorar minhas habilidades técnicas e contribuir para o projeto de forma colaborativa.</p>
      <ExperienceInfo number='' text=''/>
    </div>
  )
}

export default ExperienceTopLeft
