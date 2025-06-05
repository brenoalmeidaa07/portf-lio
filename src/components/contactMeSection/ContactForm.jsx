import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');
  const form = useRef(null);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm('service_xmxqqxs', 'template_kltk1dn', form.current, {
        publicKey: 'lXpUbstk0kOSIrHy1',
      })
      .then(
        () => {
        setName('');
        setEmail('');
        setMessage('');
        setSuccess('Message Sent');
        },
        (error) => {
          console.log('Erro ao enviar mensagem:', error.text);
          setSuccess('Erro ao enviar mensagem.');
        }
      );
  };

  return (
    <div>
    <p className='text-cyan'>{success}</p>
      <form className="flex flex-col gap-4" ref={form} onSubmit={sendEmail}>
        <input
          name="from_name"
          type="text"
          placeholder="Seu nome"
          text-yan
          required
          className="h-12 rounded-lg bg-lightBrown px-2 text-white"
          value={name}
          onChange={handleName}
        />
        <input
          name="from_email"
          type="email"
          placeholder="Seu e-mail"
          required
          className="h-12 rounded-lg bg-lightBrown px-2 text-white"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          placeholder="Mensagem"
          rows="9"
          required
          className="rounded-lg bg-lightBrown p-2 text-white"
          value={message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
        >
          Enviar
        </button>
        {success && <p className="text-green-500 mt-2">{success}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
