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
        <animated.h2 className="intro-card-excerpt" style={props}>Just another regular Computer Science student....</animated.h2>
    )
}

const IntroAnimation2 = () => {
    const [flip, set] = useState(false)
    const props = useSpring({
      to: { opacity: 1 },
      from: { opacity: 0 },
      reset: false,
      reverse: flip,
      delay: 3000,
      config: config.molasses,
    })
  
    return (
        <animated.h2 className="intro-2" style={props}>For Now</animated.h2>
    )
}

export { IntroAnimation, IntroAnimation2 }
