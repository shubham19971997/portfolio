import React from 'react'
import './skills.css'
import TypeEffect from './typeEffect'
import { GrReactjs } from 'react-icons/gr'
import { DiJavascript1 } from 'react-icons/di'
import { SiRedux, SiHtml5, SiCss3, SiNodedotjs } from 'react-icons/si'
import { FaDownload } from 'react-icons/fa'
import resume from '../images/resume-img.jpg'

function skills() {
  return (
    <div className='skills'>
      <div className='skills-typeEffect'>
        <TypeEffect name='Skills' />
      </div>
      <div className='skills-body'>
        <div className='skills-body-row'>
          <div className='skills-body-skill skills-logo-html'>
            <SiHtml5 size={40} className='skills-logo ' />
            <p>HTML</p>
          </div>
          <div className='skills-body-skill skills-logo-css'>
            <SiCss3 size={40} className='skills-logo ' />
            <p>CSS</p>
          </div>
          <div className='skills-body-skill skills-logo-js'>
            <DiJavascript1 size={40} className='skills-logo ' />
            <p>JavaScript</p>
          </div>
          <div className='skills-body-skill skills-logo-react'>
            <GrReactjs size={40} className='skills-logo ' />
            <p>React.js</p>
          </div>
        </div>
        <div className='skills-body-row'>
          <div className='skills-body-skill skills-logo-redux'>
            <SiRedux size={40} className='skills-logo ' />
            <p>Redux</p>
          </div>
          <div className='skills-body-skill skills-logo-node'>
            <SiNodedotjs size={40} className='skills-logo ' />
            <p>Node.JS</p>
          </div>
          <div className='skills-body-skill skills-logo-api'>
            <h1>API</h1>
          </div>
        </div>
        <div className='skills-body-resume'>
          <h2>Resume</h2>
          <div className='skills-body-resume-body'>
            <div>
              <a href="https://drive.google.com/file/d/1RGdJYohlCRA6j1OANX482OXoJHgv3q8y/view?usp=sharing" target='_blank'>
              <img
                src={resume}
                alt='resume'
                className='skills-body-resume-body-img'
                href="https://www.googleapis.com/"
              />
              </a>
            </div>
            <FaDownload color={'white'} size={20} className="skills-body-resume-download" />
            <p className='skills-body-resume-body-text'>
              Click here For Resume
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default skills
