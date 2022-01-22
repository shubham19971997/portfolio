import React from 'react'
import './LandingPage.css'
import lowerImg from './images/yoga-coder.png'
import topImg from './images/yoga-coder-otherstuff.png'
import TypingEffect from './TypingEffect'

function LandingPage() {
  return (
    <div className='LandingPage'>
      <div className='LandingPage-body'>
        <div className='LandingPage-body-left'>
          <div className='LandingPage-body-left-content'>
            <TypingEffect />
            <p className="LBLC-description">
              hello there I'm a aspiring React Developer who have a prior
              knowledge in node.js
              and mongodb and little about knowledge of
              typescript
            </p>

          </div>
        </div>
        <div className='LandingPage-body-right'>
          <div className='LPBR-body'>
            <img src={topImg} className='top-img' />
            <img src={lowerImg} className='lower-img' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
