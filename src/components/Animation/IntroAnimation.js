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
        <animated.h2 className="intro-card-excerpt" style={{props, fontFamily: 'futura-medium', color: '#fff', fontSize: '1.8rem'}}> <span style={{color: '#ff4d5a'}}>//</span> Computer Science Student</animated.h2>
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
        <animated.h2 className="intro-2" style={{props, fontFamily: 'futura-medium', color: '#fff', fontSize: '1.8rem'}}> <span style={{color: '#ff4d5a'}}>//</span> Security Junkie and Web-Dev Enthusiast</animated.h2>
    )
}

export { IntroAnimation, IntroAnimation2 }
