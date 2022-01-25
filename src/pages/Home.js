import React from 'react'
import '../LandingPage.css'
import TypingEffect from '../TypingEffect'
import { BsFacebook, BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'

function home() {
  return (
    <div className='LandingPage-body-left'>
      <div className='LandingPage-body-left-content'>
        <TypingEffect />
        <p className='LBLC-description'>
          hello there I'm a aspiring React Developer who have a prior knowledge
          in node.js and mongodb and little about knowledge of typescript.
        </p>
        <h4 className='left-part-content-heading-skills'>Skills</h4>
        <p className='left-part-content-description'>
          React.JS,Node.JS,Redux,Mongoose,Node.JS
        </p>
        <h4 className='left-part-content-heading'>Contact Me</h4>
        <div className='left-part-logo'>
          <a
            href='https://www.facebook.com/shubham.sikarwar.560'
            className='left-part-link'
          >
            <BsFacebook className='socialMedia-logo' size={25} />
          </a>
          <a
            href='https://www.linkedin.com/in/shubham-sikarwar-6085b3163/'
            className='left-part-link margin'
          >
            <BsLinkedin className='socialMedia-logo' size={25} />
          </a>
          <a
            href='https://github.com/shubham19971997'
            className='left-part-link margin'
          >
            <BsGithub className='socialMedia-logo' size={25} />
          </a>
          <a
            href='https://www.instagram.com/shubham_raahi/'
            className='left-part-link margin'
          >
            <BsInstagram className='socialMedia-logo' size={25} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default home
