import { useState } from 'react'
import { useSpring, animated, config } from 'react-spring'

const IntroAnimation = () => {
    const [flip, set] = useState(false)
    const props = useSpring({
      to: { opacity: 1 },
      from: { opacity: 0 },
      reset: false,
      reverse: flip,
      delay: 1000,
      config: config.molasses,
    })

    return (
        <animated.h2 className="intro-card-excerpt" style={props}> # <span style={{color: '#34A824'}}>Computer Science</span> Student</animated.h2>
    )
}

const IntroAnimation2 = () => {
    const [flip, set] = useState(false)
    const props = useSpring({
      to: { opacity: 1 },
      from: { opacity: 0 },
      reset: false,
      reverse: flip,
      delay: 2750,
      config: config.molasses,
    })
  
    return (
        <animated.h2 className="intro-2" style={props}> # <span style={{color: '#EA4325'}}>Security</span>  Junkie and <span style={{color: '#4285F4'}}>Web-Dev</span> Enthusiast</animated.h2>
    )
}

export { IntroAnimation, IntroAnimation2 }
