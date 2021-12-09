import React from "react";
import { IntroAnimation, IntroAnimation2 } from "../components/Animation/IntroAnimation"
import ProfilePic from "../images/ProfilePic.png"

const Home = () => {
    return (        
        <main id="site-main" className="site-main-outer">
            <div className="inner">
                    <img className="profile-pic responsive" 
                    src={ProfilePic}
                    alt="flag{C0nGRaT5! y0U F0uNd M3 =)}"></img>
                <div className="intro-card">
                    {/* Brief Introduction */}
                    <article>                        
                        <div className="intro-post">
                            <h1 className="intro-card-title">
                                 Hey There! I'm Darian
                            </h1>
                            <section className="intro-card-excerpt">
                                <IntroAnimation></IntroAnimation>
                            </section>
                            <h2 className="intro-2">
                                <IntroAnimation2></IntroAnimation2>
                            </h2>        
                        </div> 
                    </article>
                </div>
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
            <script src="IntroAnimation.js"></script>
        </main>
    )
}

export default Home
