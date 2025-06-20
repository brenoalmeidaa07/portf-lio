import React from 'react'
import ContactForm from './ContactForm'

const ContactMeLeft = () => {
  return (
    <div className='flex flex-col gap-8 w-full'>
    <div>
      <h2 className='text-orange text-3xl mb-4'>Get in touch</h2>
      <p className='text-white'>Feel free to get in touch if you are interested in collaborating. <br />
        You are just a few clicks away. 
      </p>
      <ContactForm/>
    </div>
    </div>
    
  )
}

export default ContactMeLeft
