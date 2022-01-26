import React from 'react'
import './skills.css'
import TypeEffect from './typeEffect'
import { GrReactjs } from 'react-icons/gr'
import { DiJavascript1 } from 'react-icons/di'
import { SiRedux, SiHtml5, SiCss3, SiNodedotjs } from 'react-icons/si'

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
      </div>
      
    </div>
  )
}

export default skills
