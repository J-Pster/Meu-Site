import React from 'react'
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/J-Pster" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/joaopster/" target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/joaopster/" target="_blank" rel="noreferrer">
          <BsInstagram />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia