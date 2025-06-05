import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className=''>
      <div className='flex flex-col gap-4 text-white'>
        <SingleInfo text='albeidabreno15@gmail.com' Image={HiOutlineMail}/>
        <SingleInfo text='+55 87996352053' Image={FiPhone}/>
        <SingleInfo text='Recife-PE' Image={IoLocationOutline}/>

      </div>
    </div>
  )
}

export default ContactInfo
