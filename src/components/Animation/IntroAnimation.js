    import { useState } from 'react'
    import { useSpring, animated, config } from 'react-spring'

    const IntroAnimation = () => {
    const [flip] = useState(false)
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: false,
        reverse: flip,
        delay: 1000,
        config: config.molasses,
    })

    return (
        <animated.h2 className="intro-excerpt" style={props}> 
        <span style={{color: '#ff4d5a'}}>&#47;&#47;</span> Computer Science Student
        </animated.h2>
    )
    }

    const IntroAnimation2 = () => {
    const [flip] = useState(false)
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: false,
        reverse: flip,
        delay: 2750,
        config: config.molasses,
    })

    return (
        <animated.h2 className="intro-2"style={props}> 
        <span style={{color: '#ff4d5a'}}>&#47;&#47;</span> Security Junkie and Web-Dev Enthusiast
        </animated.h2>
    )
    }

    export { IntroAnimation, IntroAnimation2 }
