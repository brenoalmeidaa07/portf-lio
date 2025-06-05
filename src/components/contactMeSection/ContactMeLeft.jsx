import React from 'react'
import ContactForm from './ContactForm'

const ContactMeLeft = () => {
  return (
    <div className='flex flex-col gap-8 w-full'>
    <div>
      <h2 className='text-orange text-3xl mb-4'>Entre em Contato</h2>
      <p className='text-white'>Fique à vontade para entrar em contato caso tenha interesse em colaborar. <br />
        Você está a apenas alguns cliques de distância. 
      </p>
      <ContactForm/>
    </div>
    </div>
    
  )
}

export default ContactMeLeft
