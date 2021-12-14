import { Container, Card, Typography, Divider } from "@mui/material";
import Emoji from "../../components/Emoji/Emoji";
import React, { useEffect } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { AboutHeader, AboutTitle, AboutBody } from './AboutElements'
import './index.css'

import ProfilePic from "../../images/ProfilePic.png"

const About = () => {
    useEffect(() => {
        document.title = "About Me | Darianlmj";  
    }, []);

    const emojiStyle = {

    }

    return (
        <div style={{backgroundColor: '#fffdfa'}}>
            <Container maxWidth="xl" sx={{paddingTop: 10, paddingBottom: 10}}>
                <AboutHeader>
                    <img className="profileImage" src={ProfilePic} alt="Hey! It's Me"></img>
                    <div style={{display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center'}}>
                        <AboutTitle>
                            Hey There! <Emoji style={emojiStyle} symbol="🚀"/> 
                        </AboutTitle>
                        <Typography sx={{fontWeight: 500, fontSize: 20, color: '#777777', paddingBottom: 5}}>
                            Really nice to meet you. If you are interested in knowing a little more about me, scroll down to
                            check out some of my interests. <br/>
                        </Typography>
                        <div className='backToTop'>
                            <Link style={{color: '#777777'}} to='#about'>
                                <i class="fas fa-arrow-circle-down fa-2x"></i>
                            </Link>
                        </div>
                    </div>
                </AboutHeader>
                <AboutBody>
                    <Card sx={{minWidth: 275, padding: 3, borderRadius: 3}} raised="true">
                        <Typography id="about" variant='h4' sx={{fontFamily: 'lyon-display-web', fontWeight: 800, paddingBottom: 1}}>Fluffy Doge</Typography>
                        <Divider sx={{marginBottom: 2}} />
                        <Typography variant='body1' sx={{color: '#777777'}}>
                            That little ball of fluff in the picture above is Max. <br/> 
                            He's a sand-coloured Cavoodle who we've adopted back in 2020 and <br/>
                            the reason 80% of my phone's camera storage is used up. <br/>
                            He's a waskly wittle pupper who loves belly rubs, hiding his <br/>
                            bone-shaped food and sleeps like a human. His favourite things to <br/>
                            play with are ping-pong balls, tennis balls, and weirdly enough &#8212; <br/>
                            empty toilet rolls. You know the little  brown cylinders when a toilet roll <br/>
                            has been used up... that. <br/>
                            <br/>
                            If you would like to follow Max's adventures, check out his 
                            <a href="https://www.instagram.com/maxisacavoodle/"> Instagram</a>. <br/>
                        </Typography>
                    </Card>
                    <Card sx={{minWidth: 275, padding: 3, borderRadius: 3}} raised="true">
                        <Typography variant='h4' sx={{fontFamily: 'lyon-display-web', fontWeight: 800, paddingBottom: 1}}>Space</Typography>
                        <Divider sx={{marginBottom: 2}} />
                        <Typography variant='body1' sx={{color: '#777777'}}>
                            You might be wondering what's with the weird looking planet <br/>
                            in the Home page, well, that's mainly because I'm bad at graphic design. <br/>
                            But the other reason is because I love space and all things astronomy. <br/>
                            I'm not talking about liking stars and planets and all that just because <br/>
                            they look cool, I'm talking about actual astrophysics. Fun fact, before <br/>
                            I started on my Computer Science journey, I actually applied to study <br/> 
                            Astrophysics in the UK. But one thing led to  another and I ended up not<br/>
                            being able to pursue it. <br/>
                            <br/>
                            Now I just resign myself to watching old Richard Feynman lectures on <br/>
                            Youtube and reading about dark matter and quasars in books.
                        </Typography>
                    </Card>
                </AboutBody>
                <AboutBody>
                    <Card sx={{minWidth: 275, padding: 3, borderRadius: 3}} raised="true">
                        <Typography variant='h4' sx={{fontFamily: 'lyon-display-web', fontWeight: 800, paddingBottom: 1}}>TV Shows</Typography>
                        <Divider sx={{marginBottom: 2}} />
                        <Typography variant='body1' sx={{color: '#777777'}}>
                            Anyone who knows me knows that I love watching US sitcoms. <br/>
                            Name any show, I will bet you I have
                            watched it. From Modern Family, <br/>
                            Two and a Half Men, 2 Broke Girls, Brooklyn Nine-Nine; to lesser <br/>
                            known ones like 8 Simple Rules and Everybody Hates Chris just to <br/>
                            name a few. I have watched them all to a point where I can actually <br/>
                            recite lines from any given episode. <br/>
                            <br/>
                            Controversial Opinion: <br/>
                            How I Met Your Mother &#62; Friends 
                        </Typography>
                    </Card>
                    <Card sx={{minWidth: 275, padding: 3, borderRadius: 3}} raised="true">
                        <Typography variant='h4' sx={{fontFamily: 'lyon-display-web', fontWeight: 800, paddingBottom: 1}}>Music</Typography>
                        <Divider sx={{marginBottom: 2}} />
                        <Typography variant='body1' sx={{color: '#777777'}}>
                            This is where my taste in music varies a lot compared to others. <br/>
                            While some prefer EDM, Metal or Pop Rock &#8212; I prefer musicals. <br/>
                            And no, I'm not just talking about only liking the songs, I actually <br/> 
                            love watching it for the plot. Some say that musical theater is boring <br/> 
                            or  that it makes no sense, but to me, I think that it's a really underrated<br/> 
                            art form. It literally takes a triple threat to be able to pull off a convincing<br/> 
                            show. <br/> 
                            <br/> 
                            If you are familiar with musicals like Hairspray, DEH (not the movie) and<br/> 
                            Funny Girl, we have much to talk about.
                        </Typography>
                    </Card>
                </AboutBody>
            </Container>
        </div>
    )
}

export default About
