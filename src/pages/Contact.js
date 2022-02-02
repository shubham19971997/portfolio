import React from 'react'
import TypeEffect from './typeEffect'
import './Contact.css'
import { GrFacebookOption, GrInstagram, GrLinkedinOption,GrGithub,GrTwitter } from 'react-icons/gr'

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
          <div className='social-media-box'>
            <GrFacebookOption className='social-media-logo' size={35} />
          </div>
          <div className='social-media-box-ig'>
            <GrInstagram className='social-media-logo' size={35} />
          </div>
          <div className='social-media-box'>
            <GrLinkedinOption className='social-media-logo' size={35} />
          </div>
        </div>
        <div className='contact-social-media-fr'>
          <div className='social-media-box-gh'>
            <GrGithub className='social-media-logo' size={35} />
          </div>
          <div className='social-media-box'>
            <GrTwitter className='social-media-logo' size={35} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
