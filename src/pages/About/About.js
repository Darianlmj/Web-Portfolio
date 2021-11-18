import React, { useEffect } from "react";
import { AboutContainer, AboutImage, AboutTitle, AboutExcerpt } from './AboutElements'
import './index.css'

import ProfilePic from "../../images/ProfilePic.png"

const About = () => {
    useEffect(() => {
        document.title = "About Me | Darianlmj";  
    }, []);

    return (
        <>  
            <AboutContainer>
                <AboutImage>
                    <div className="shape shape1"></div>
                    <div className="shape shape2"></div>
                    <div className="shape shape3"></div>
                </AboutImage>
                    <div className="AboutInfo">
                        <AboutTitle>
                            About Me
                        </AboutTitle>
                        <AboutExcerpt>
                            I'm a second year Computer Science student at the University of New South Wales.
                        </AboutExcerpt>
                    </div>
            </AboutContainer>
            <img className="profileImage" src={ProfilePic} alt="Image"></img>
            
        </>
    )
}

export default About
