import React from 'react'
import Typerwriter from 'typewriter-effect'
import './typewriter.css'

function typingEffect() {
  return (
    <div className='typewriter'>
      <Typerwriter
        onInit={(typewriter) => {
          typewriter
            .typeString('Hello!')
            .pause(2000)
            .deleteAll()
            .typeString(`I'm Shubham`)
            .start()
        }}
      />
    </div>
  )
}

export default typingEffect
