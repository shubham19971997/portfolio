import React from 'react'
import './LandingPage.css'
import lowerImg from './images/yoga-coder.png'
import topImg from './images/yoga-coder-otherstuff.png'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Navbar from './Navbar'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

function LandingPage() {
  return (
    <Router>
      <div className='LandingPage'>
        <div className='LandingPage-body'>
          <Navbar />
          <div className='LandingPage-content-body'>
            <div className='LandingPage-body-left'>
              <Switch>
                <Route path='/project/1' component={Projects} />
                <Route path='/skills/2' component={Skills} />
                <Route path='/contact/3' component={Contact} />
                <Route path='/' component={Home} />
              </Switch>
            </div>
            <div className='LandingPage-body-right'>
              <div className='LPBR-body'>
                <img src={topImg} className='top-img' alt='img' />
                <img src={lowerImg} className='lower-img' alt='img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default LandingPage
