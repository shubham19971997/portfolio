import React from 'react'
import TypeEffect from './typeEffect'
import './Contact.css'
import {
  GrFacebookOption,
  GrInstagram,
  GrLinkedinOption,
  GrGithub,
  GrTwitter,
} from 'react-icons/gr'

function Contact() {
  return (
    <div className='contact'>
      <div className='contact-heading'>
        <TypeEffect name='Contact' />
      </div>
      <div className='contact-top-contact'>
        <div className='contact-top-email'>
          <p className='contact-top-heading'>Email</p>
          <p className='contact-top-content'>shubhamsikarwar43@gmail.com</p>
        </div>
        <div className='contact-top-phone'>
          <p className='contact-top-heading'>Phone</p>
          <p className='contact-top-content'>7974706830</p>
        </div>
      </div>
      <div className='contact-social-media'>
        <div className='contact-social-media-fr'>
          <a
            href='https://www.facebook.com/shubham.sikarwar.560'
            target='_blank'
          >
            <div className='social-media-box'>
              <GrFacebookOption className='social-media-logo' size={35} />
            </div>
          </a>
          <a href='https://www.instagram.com/shubham_raahi/' target='_blank'>
            <div className='social-media-box-ig'>
              <GrInstagram className='social-media-logo' size={35} />
            </div>
          </a>
          <a
            href='https://www.linkedin.com/in/shubham-sikarwar-6085b3163/'
            target='_blank'
          >
            <div className='social-media-box'>
              <GrLinkedinOption className='social-media-logo' size={35} />
            </div>
          </a>
        </div>
        <div className='contact-social-media-fr'>
          <a href='https://github.com/shubham19971997' target='_blank'>
            <div className='social-media-box-gh'>
              <GrGithub className='social-media-logo' size={35} />
            </div>
          </a>
          <a href='https://twitter.com/Shubham70679683' target='_blank'>
            <div className='social-media-box'>
              <GrTwitter className='social-media-logo' size={35} />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
