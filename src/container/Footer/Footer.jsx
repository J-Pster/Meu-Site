import React, { useState } from 'react'

import {images} from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'
import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({name: '', email: '', message: ''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({...formData, [name]: value});
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.name,
      email,
      message,
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
  }

  return (
    <>
      <h2 className="head-text">Pegue um Café & converse comigo</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:joaopsterdev@gmail.com" className="p-text">joaopsterdev@gmail</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+5562992765354" className="p-text">+55 62 9.9276-5354</a>
        </div>
      </div>

      {!isFormSubmitted ? (<div className="app__footer-form app__flex">
        <div className="app__flex">
          <input className="p-text" type="text" placeholder="Seu Nome" name="name" value={name} onChange={handleChangeInput} />
        </div>
        <div className="app__flex">
          <input className="p-text" type="text" placeholder="Seu Email" name="email" value={email} onChange={handleChangeInput} />
        </div>
        <div>
          <textarea
            className="p-text"
            placeholder='Sua Mensagem'
            value={message}
            name="message"
            onChange={handleChangeInput}
          />
        </div>
        <button type="button" className='p-text' onClick={handleSubmit}>{loading ? 'Enviando...' : 'Enviar Mensagem'}</button>
      </div>
      ) : (
        <div>
            <h3 className="head-text">Obrigado por entrar em contato!</h3>
        </div>
      )}

    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'), 
  'contato',
  "app__whitebg"
);