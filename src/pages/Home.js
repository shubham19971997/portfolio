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
        <div>
          <a href="https://github.com/" target='_blank'>
          <h4 className='left-part-content-heading-skills'>For My Resume</h4>
          <div className='resume-home'>
            <p className="resume-home-text">Click here</p>
          </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default home
