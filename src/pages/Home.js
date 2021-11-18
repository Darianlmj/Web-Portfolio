import React from "react";
import { IntroAnimation, IntroAnimation2 } from "../components/Animation/IntroAnimation"

import ProfilePic from "../images/ProfilePic.png"

const Home = () => {
    return (        
        <main id="site-main" className="site-main-outer">
            <div className="inner">
                {/* <div className="profile-pic"> */}
                    <img className="profile-pic responsive" 
                    src={ProfilePic}
                    alt="flag{C0nGRaT5! y0U F0uNd M3 =)}"></img>
                {/* </div> */}
                <div className="intro-card">
                    {/* Brief Introduction */}
                    <article>                        
                        <div className="intro-post">
                            <h1 className="intro-card-title">Hey There! I'm Darian</h1>
                            <section className="intro-card-excerpt">
                                <IntroAnimation></IntroAnimation>
                            </section>
                            <h2 className="intro-2">
                                <IntroAnimation2></IntroAnimation2>
                            </h2>        
                        </div> 
                    </article>
                </div>

                {/* <div className="post-feed"> */}
                    {/* Git GitHub Cheatsheet */}
                    {/* <article className="post-card">
                        <a className="post-card-image-link" href="https://gist.github.com/Darianlmj/db83504856b58bb91fb5ce2ae31ca471">
                            <img className="post-card-image" 
                                sizes="(max-width: 1000px) 400px, 700px" 
                                src={Asset1}
                                alt="Git-GitHub Cheatsheet (Personal Use Case)"></img>
                        </a>
                        <div className="post-card-content">
                            <a className="post-card-content-link" href="https://gist.github.com/Darianlmj/db83504856b58bb91fb5ce2ae31ca471">
                                <header className="post-card-header">
                                    <span className="post-card-tags">Computer Science</span>
                                    <h2 className="post-card-title">Git-GitHub Cheatsheet <br></br> (Personal Use Case)</h2>
                                    <section className="post-card-excerpt">
                                        <p>
                                            <br></br>
                                            A small but handy collection of what I found useful 
                                            when learning Git and GitHub during my 1st year in University.
                                            <br></br>
                                        </p>
                                    </section>
                                </header>
                            </a>
                        </div>
                    </article> */}
                    
                    {/* How I Made This Website */}
                    {/* <article className="post-card">
                        <a className="post-card-image-link" href="#">
                            <img className="post-card-image" 
                                sizes="(max-width: 1000px) 400px, 700px" 
                                src={Asset2}
                                alt="How I Made This Website"></img>
                        </a>
                        <div className="post-card-content">
                            <a className="post-card-content-link" href="#">
                                <header className="post-card-header">
                                    <span className="post-card-tags">Personal Project</span>
                                    <h2 className="post-card-title">How I Made This Website<br></br><br></br></h2>
                                    <section className="post-card-excerpt">
                                        <p>
                                            <br></br>
                                            A journal of sorts detailing how this website was created.
                                        </p>
                                    </section>
                                </header>
                            </a>
                        </div>
                    </article>                */}
                {/* </div> */}
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
            <script src="IntroAnimation.js"></script>
        </main>
    )
}

export default Home
