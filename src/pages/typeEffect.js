import React from 'react'
import Typerwriter from 'typewriter-effect'
import '../typewriter.css'

function typeEffect(props) {
  return (
    <div className='typewriter'>
      <Typerwriter
        onInit={(typewriter) => {
          typewriter
            .typeString(`${props.name}`)
            .start()
        }}
      />
    </div>
  )
}

export default typeEffect
