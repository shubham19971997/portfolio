import React from 'react'
import TypeEffect from './typeEffect'
import './projects.css'
import { FaGithub } from 'react-icons/fa'
import card from '../images/card-img.png'
import whatsapp from '../images/whatsApp.jpg'
import netflix from '../images/netflix.png'
import linkedin from '../images/linkedin.png'
import tgfc from '../images/tfgc.jpg'

function Projects() {
  return (
    <div className='projects'>
      <div className='projects-heading'>
        <TypeEffect name='Projects' />
      </div>
      <div className='projects-body-row'>
        <div className='projects-body-box'>
          <a
            href='https://github.com/shubham19971997/developer-card'
            target='_blank'
          >
            <img
              src={card}
              className='projects-body-box-img'
              alt='Developer-Card'
            />
          </a>
          <div>
            <div className='projects-body-text-logo'>
              <p className='projects-body-box-text'>Developer-Card</p>
              <FaGithub color={'white'} size={20} className='github-logo' />
            </div>
            <p className='projects-body-box-text-tech'>
              React.JS | Node.JS | Redux
            </p>
          </div>
        </div>
        <div className='projects-body-box'>
          <a
            href='https://github.com/shubham19971997/netflix-build'
            target='_blank'
          >
            <img
              src={netflix}
              className='projects-body-box-img'
              alt='Netflix-Clone'
            />
          </a>
          <div>
            <div className='projects-body-text-logo'>
              <p className='projects-body-box-text'>Netflix-Clone</p>
              <FaGithub color={'white'} size={20} className='github-logo' />
            </div>
            <p className='projects-body-box-text-tech'>React.JS | Redux</p>
          </div>
        </div>
        <div className='projects-body-box'>
          <a
            href='https://github.com/shubham19971997/whatsapp-build'
            target='_blank'
          >
            <img
              src={whatsapp}
              className='projects-body-box-img'
              alt='Whatsapp-Clone'
            />
          </a>
          <div>
            <div className='projects-body-text-logo'>
              <p className='projects-body-box-text'>Whatsapp-Clone</p>
              <FaGithub color={'white'} size={20} className='github-logo' />
            </div>
            <p className='projects-body-box-text-tech'>
              React.JS | Redux | CSS
            </p>
          </div>
        </div>
      </div>
      <div className='projects-body-row2'>
        <div className='projects-body-box'>
          <a
            href='https://github.com/shubham19971997/Linkdein-Clone'
            target='_blank'
          >
            <img
              src={linkedin}
              className='projects-body-box-img'
              alt='Linkdein-Clone'
            />
          </a>
          <div>
            <div className='projects-body-text-logo'>
              <p className='projects-body-box-text'>LinkedIn-Clone</p>
              <FaGithub color={'white'} size={20} className='github-logo' />
            </div>
            <p className='projects-body-box-text-tech'>React.JS | Redux</p>
          </div>
        </div>
        <div className='projects-body-box projects-srb'>
          <a
            href='https://github.com/shubham19971997/TGFC.github.io'
            target='_blank'
          >
            <img
              src={tgfc}
              className='projects-body-box-img'
              alt='tgfc-website'
            />
          </a>

          <div>
            <div className='projects-body-text-logo'>
              <p className='projects-body-box-text'>TGFC</p>
              <FaGithub color={'white'} size={20} className='github-logo' />
            </div>
            <p className='projects-body-box-text-tech'>HTML | SASS</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
