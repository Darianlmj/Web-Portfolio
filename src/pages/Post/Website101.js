import React, { useEffect } from "react";
import { Container, Typography, Divider } from "@mui/material";
import Emoji from "../../components/Emoji/Emoji";
import "../../index"
import { HashLink as Link } from 'react-router-hash-link';

const Post = () => {
    useEffect(() => {
        document.title = "How I Made This Website";  
    }, []);

    return (
        <div style={{backgroundColor:'#fffdfa', paddingBottom: 1}}>
            <Container maxWidth="md" sx={{paddingTop: 5, marginBottom: 10}}>
                <Typography align="center" sx={{fontSize: 75, fontFamily: 'lyon-display-web', fontWeight: 800}}>How I Made This Website</Typography>
                <Divider sx={{marginBottom: 3}}/>
                
                <Typography sx={{fontSize: '1.1rem', color: '#777777'}}>
                    Hello there! 
                    <Emoji  symbol="&#09;👋🏼"/><br/>
                    <br/>
                    By the fact that you are here, I take it that you are interested 
                    in web-development and in particular &#8212; how this website was made. 
                    No worries, because hopefully, after you finish reading this short 
                    lil' article, you will have some ideas on where to start building 
                    your own. Also, please feel free to check out my website. If you are 
                    familiar with CTF challenges, there are a few flags just lying around 
                    the place &#8212; 3 to be precise, but I'll add more when I have the time. 
                    You don't need any sort of security knowledge to find them, just having 
                    an adventerous spirit would do. <br/>
                    <br/>
                </Typography>
                <Typography align="center" sx={{fontSize: '1.1rem', color: '#777777', marginBottom: 4, border: 2, borderRadius: 5, padding: 2, background: '#F6F6F6'}}>
                    <em>
                        Disclaimer: I am by no means an expert at this, everything that 
                        is written here is based on my own personal experiences. I am 
                        still learning more about frontend web development. You may also 
                        notice similarities in the styling for certains elements in the website. 
                        These are all a result of me having bad UI skills and just needing 
                        practice on designing. As such, please do not sue me. Thanks  
                        <Emoji  symbol=" 😊"/>
                    </em>
                </Typography>

                <Typography sx={{fontSize: '1.7rem', fontWeight: 600, marginBottom: 1.5}}>
                    <Emoji  symbol="🚀&#09;"/>
                    Brief Overview
                </Typography>
                <Typography sx={{fontSize: '1.1rem', color: '#777777'}}>
                    <ul>
                        <li><Link className="post-link" to="#languages-used">Languages Used</Link></li>
                        <li><Link className="post-link" to="#websites-used">Websites Used</Link></li>
                        <li><Link className="post-link" to="#design-and-format-inspiration">Design and Format Inspiration</Link></li>
                        <li><Link className="post-link" to="#syntactical-queries">Syntactical Queries</Link></li>
                        <li><Link className="post-link" to="#styles-illustrations-images-and-fonts">Styles, Illustrations, Images and Fonts</Link></li>
                        <li><Link className="post-link" to="#miscellaneous">Miscellaneous</Link></li>
                    </ul>
                </Typography>
                <Typography sx={{fontSize: '1.1rem', color: '#777777', marginBottom: 2}}>
                    Just before we get into the rest of this article, I wanted to give you a 
                    brief overview about this website. Before the whole website built commenced, 
                    I had no prior experience. The only things I did know was some basic HTML and 
                    CSS syntax but that was pretty much it. Naturally, I opted to start out with 
                    an old school way of building websites, which were by using HTML, CSS and 
                    Vanilla JavaScript. <br/>
                    <br/>
                    However, as I started to get more experience and discovering new and better ways 
                    of making this project easier, I decided to completely start over by switching to 
                    a JavaScript library called Reactjs to make this website cause I heard that it makes 
                    life easier in the long run. But don't worry, there's actually plenty of similarities 
                    in the syntax if you take a look at the 
                    <a className="post-link" href="https://github.com/Darianlmj/Web-Portfolio"> source code</a>. <br/>
                    <br/>
                </Typography>

                <Typography id="languages-used" sx={{fontSize: '1.7rem', fontWeight: 600, marginBottom: 1.5}}>
                    <Emoji  symbol="📚 &#09;"/>
                    Languages Used
                </Typography>
                <Typography sx={{fontSize: '1.1rem', color: '#777777', marginBottom: 3}}>
                    <ul>
                        <li>Reactjs</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </Typography>


                <Typography id="websites-used" sx={{fontSize: '1.7rem', fontWeight: 600, marginBottom: 1.5}}>
                    <Emoji  symbol="🌐 &#09;"/>
                    Websites Used
                </Typography>
                <Typography sx={{fontSize: '1.1rem', color: '#777777', marginBottom: 1}}>
                    For those of you who are keen on starting your web development journey, 
                    here's a list of the various websites I drew inspiration from. Whether 
                    it's "how to format things a certain way" or "how to change the colour of 
                    this"; there are always tons of help out there and this is just represents 
                    a small subset of that. Just keep in mind that a large majority of building 
                    this website was just Google-ing things that I didn't know how to do 
                    (like literally 80% of it) so if I can do it — you can too! <br/>
                    <br/>
                </Typography>

                <Typography id="design-and-format-inspiration" sx={{fontSize: '1.3rem', fontWeight: 600, marginBottom: 1.5}}>
                    Design and Format Inspiration
                </Typography>
                <Typography>
                    <ul>
                        <li><a className="post-link"  href='https://media.csesoc.org.au/tag/csesoc/'>CSESoc website for card inspiration</a></li> 
                        <li><a className="post-link" href='https://www.web-eau.net/blog/10-best-footer-html-css-snippets'>Footer design inspiration</a></li> 
                        <li><a className="post-link" href='https://dev.to/devggaurav/let-s-build-a-responsive-navbar-and-hamburger-menu-using-html-css-and-javascript-4gci'>Converting Navbar to hamburger menu</a></li> 
                        <li><a className="post-link" href='https://bennettfeely.com/clippy/'>Clip Path generator</a></li> 
                        <li><a className="post-link" href='https://www.youtube.com/watch?v=Nl54MJDR2p8'>React responsive Hamburger Menu</a></li> 
                        <li><a className="post-link" href='https://mui.com/'>Material UI for Cards and Typography</a></li> 

                    </ul>
                </Typography>

                <Typography id="styles-illustrations-images-and-fonts" sx={{fontSize: '1.3rem', fontWeight: 600}}>
                    Styles, Illustrations, Images and Fonts
                </Typography>
                <Typography>
                    <ul>
                        <li><a className="post-link" href='https://graygrids.com/sites-to-download-web-graphic-design-elements/'>List of Free Websites for illustrations and images</a></li> 
                        <li><a className="post-link" href='https://undraw.co/'>Free Graphic Design Images for Postcards</a></li> 
                        <li><a className="post-link" href='https://tobiasahlin.com/moving-letters/'>Animation for intro text</a></li> 
                        <li><a className="post-link" href='https://fossheim.io/writing/posts/css-text-gradient/'>Adding gradient overlay to text using css</a></li> 
                        <li><a className="post-link" href='https://uigradients.com/'>Selecting gradient colours</a></li> 
                        <li><a className="post-link" href='https://www.npmjs.com/package/react-typewriter-effect'>Typewriter Effect in React</a></li> 
                        <li><a className="post-link" href='https://medium.com/@jess_28346/upgrade-your-css-styling-with-clip-path-ddf6d4a3df5f'>Fancy backdrop</a></li> 
                        <li><a className="post-link" href='https://icon-icons.com/'>Manifest </a></li> 
                    </ul>
                </Typography>

                <Typography id="syntactical-queries" sx={{fontSize: '1.3rem', fontWeight: 600}}>
                    Syntactical Queries
                </Typography>
                <Typography>
                    <ul>
                        <li><a className="post-link" href='https://css-tricks.com/snippets/css/media-queries-for-standard-devices/'>Media Query</a></li> 
                        <li><a className="post-link" href='https://kirtikau.medium.com/react-converting-static-html-website-to-react-application-1a877a8e9948'>Converting HTML, CSS to React</a></li> 
                        <li><a className="post-link" href='https://www.youtube.com/watch?v=Law7wfdg_ls'>Linking Pages using React Router</a></li> 
                        <li><a className="post-link" href='https://devdojo.com/krissanawat101/3-ways-to-set-a-document-title-in-react'>React Hook to change page's title</a></li> 
                        <li><a className="post-link" href='https://stackoverflow.com/questions/41772411/react-routing-works-in-local-machine-but-not-heroku'>Using BrowserRouter for Heroku</a></li> 
                        <li><a className="post-link" href='https://dev.to/gedalyakrycer/5-remarkable-react-router-features-anchor-links-query-params-more-2aeg#anchorLinks'>Anchor Tags</a></li> 
                        <li><a className="post-link" href='https://www.rapidtables.com/web/html/html-codes.html'>Rendering special characters </a></li> 
                    </ul>
                </Typography>

                <Typography id="miscellaneous" sx={{fontSize: '1.3rem', fontWeight: 600}}>
                    Miscellaneous
                </Typography>
                <Typography>
                    <ul>
                        <li><a className="post-link" href='https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/licensing-a-repository'>License</a></li> 
                        <li><a className="post-link" href='https://www.youtube.com/watch?v=1wDzEjXbblM'>Deploy React.js app to Github pages</a></li> 
                        <li><a className="post-link" href='https://medium.com/@benarondavis/monitor-your-heroku-app-to-ensure-speed-f5b36f5b0229'>Cron Job for keeping Heroku uptime</a></li> 
                    </ul>
                </Typography>

                <Typography sx={{fontSize: '1.1rem', color: '#777777'}}>
                    If you have made it this far, I really appreciate the time you have taken 
                    to read through this and feel free to contact me anytime if you have any 
                    other questions or if you are curious about how I made a specific part of the website.
                </Typography>

                <div className='backToTop' style={{marginTop: 50}}>
                    <Link style={{color: '#777777'}} to='#top'>
                        <i class="fas fa-arrow-circle-up fa-2x"></i>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default Post
