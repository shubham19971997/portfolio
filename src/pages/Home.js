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
          I'm a aspiring React Developer who have a prior knowledge
          in node.js and mongodb and little about knowledge of typescript. I am a self motivated person who is 
          very inclined towards learning new technologies and implementing them efficiently.
        </p>
        <div>
          <h4 className='left-part-content-heading-skills'>My Resume</h4>
          <a
            href='https://drive.google.com/file/d/1RGdJYohlCRA6j1OANX482OXoJHgv3q8y/view?usp=sharing'
            target='_blank'
          >
            <div className='resume-home'>
              <p className='resume-home-text'>Click here</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default home
