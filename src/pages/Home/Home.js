import React from "react";
import './index.css'
import { IntroAnimation, IntroAnimation2 } from "../../components/Animation/IntroAnimation"
import Planet2 from "../../images/Planet2.png"

const TestHome = () => {
    return (        
        <main id="site-main" className="site-main-outer">
            <div className="inner">
                <img className="planet responsive" 
                src={Planet2}
                alt="flag{C0nGRaT5! y0U F0uNd M3 =)}"/>
                <div className="intro">
                    <h1 className="intro-title">
                                    DARIAN <br></br> LEE
                    </h1>
                    <section className="intro-excerpt">
                        <IntroAnimation></IntroAnimation>
                    </section>
                    <h2 className="intro-2">
                        <IntroAnimation2></IntroAnimation2>
                    </h2>
                </div>


            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
            <script src="IntroAnimation.js"></script>
        </main>
    )
}

export default TestHome