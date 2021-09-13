import React, { useEffect } from "react";
import { AboutContainer, AboutImage, AboutTitle } from './AboutElements'
import './index.css'

import Asset4 from '../../images/Asset4.PNG'

const About = () => {
    useEffect(() => {
        document.title = "About Me | Darianlmj";  
    }, []);

    return (
        <>  
            <AboutContainer>
                <AboutImage>
                    <div className="shape shape1">sadasdasdsadasd</div>
                    <div className="shape shape2">sdsadsadasdsdaasd</div>
                    <div className="shape shape3">asdsadsdasdasdasd</div>
                    <AboutTitle>
                        About Me
                    </AboutTitle>
                </AboutImage>
            </AboutContainer>
            <img className="profileImage" src={Asset4} alt="Image"></img>
            
        </>
    )
}

export default About
