import React from 'react'

const AboutMeText = () => {
  return (
   
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
      <h2 className='text-6xl text-cyan mb-10'>Sobre mim </h2>
      <p className='text-white'>Sou Breno Almeida, aluno do 7º semestre de Ciência da Computação. Gosto de trabalhar em equipe e me esforço para entregar soluções eficientes que atendam às necessidades do cliente. Estou sempre aprendendo e aprimorando minhas habilidades em novas tecnologias.
.</p>

    
    <button className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan'>
      Meus Projetos
      </button>
      </div>

  )
}

export default AboutMeText;
