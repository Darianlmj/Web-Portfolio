import React, { useEffect } from "react";
import './index.css'
import { Button } from '@mui/material';
import Emoji from "../../components/Emoji/Emoji";
import { HashLink as Link } from 'react-router-hash-link';
import HorizontalTimeline from "../../components/Timeline/Timeline";
import { ResContainer, ResSummary, ResName, ResIntro, ResContent, 
         ResContentHorizontal, HeaderEmoji, HeaderContainer } from "./ResumeElements";

const Resume = () => {
    useEffect(() => {
        document.title = "Resume | Darianlmj";  
    }, []);

    const emojiContainer = {
        position: 'relative',    
        fontSize: 100,
        top: 110,
    }

    const emojiStyle = {
        position: 'absolute',
    }
    
    return (
        <div style={{backgroundColor:'#fffdfa', paddingBottom: 10}}>
            <ResContainer style={{justifyContent: 'space-around'}}>
                <ResIntro>
                    <div id='top' className="res-greeting">
                        Hello, I'm
                    </div>
                    <ResName>
                        Darian Lee Ming Jian
                    </ResName>
                    <ResSummary>
                        Second year computer science student, <br/>
                        aspiring frontend web developer and security enthusiast.
                    </ResSummary>
                </ResIntro> 
                <div className="responsive-res-emoji" style={emojiContainer}>
                    <Emoji style={emojiStyle} symbol="👋🏼"/>
                </div>
            </ResContainer>
            <HorizontalTimeline/>
            <ResContainer className="responsive-section">
                <div></div>
                <HeaderContainer id="education">
                    <HeaderEmoji>
                        <Emoji style={emojiStyle} symbol="🏫"/>
                    </HeaderEmoji>
                    Education
                </HeaderContainer>
                <ResContent>
                    <div style={{paddingBottom: 25}}>
                        <div style={{fontSize: 23, color: 'black'}}>
                            University of New South Wales 
                        </div>
                        <div style={{fontSize: 18, color: '#4285F4'}}>June 2021 - Present</div>
                        Bachelor of Computer Science   <br/>
                    </div>
                    <div>
                        <div style={{fontSize: 23, color: 'black'}}>University of New South Wales Global</div>
                        <div style={{fontSize: 18, color: '#4285F4'}}>May 2020 - May 2021</div>
                        Diploma in Computer Science <br/>
                        Awarded the UNSW Global Diploma Scholarship in 2020 and 2021
                    </div>
                </ResContent>
            </ResContainer>
            <ResContainer>
                <ResContent>
                    <div style={{fontSize: 23, color: 'black'}}>
                        UNSW ASEAN Society IT Associate<br/>
                    </div>
                    <div style={{fontSize: 18, color: '#4285F4'}}>June 2021 - Present</div>
                    <div style={{fontSize: 20, paddingTop: 20, fontWeight: 500}}>UNSW ASEAN Conference 2021 (UAC)</div>
                    <div style={{paddingTop: 20, paddingBottom: 20}}>
                        Redesigned and implemented the frontend for the "Partners" and <br/>
                        "Our Team" page in the society's 2021 flagship event website <br/> 
                        for which I was awarded  the President’s Choice Award in September 2021. <br/>
                    </div>
                    <div style={{paddingTop: 20, paddingBottom: 20}}>
                        Collaborated virtually with a team of ~50 members to organise the <br/> 
                        UNSW ASEAN Conference, a large scale 2-day online conference which <br/> 
                        attracted over 1700+ participants from multiple countries. <br/>
                    </div>
                    <div style={{paddingTop: 20, paddingBottom: 20}}>
                        Moderated and managed the livestream of the conference using OBS on <br/> 
                        Youtube and Vimeo.
                    </div>
                    <div style={{fontSize: 20, paddingTop: 20, fontWeight: 500}}>ASEAN Society Website</div>
                    <div style={{paddingTop: 20, paddingBottom: 40}}>
                        Collaborated with a team of 3 members to design the frontend of the society's <br/> 
                        official website using React.<br/>
                    </div>

                    <div style={{fontSize: 23, color: 'black'}}>
                        Sekuro Hackcelerator Mentorship<br/>
                    </div>
                    <div style={{fontSize: 18, color: '#4285F4'}}>September 2021 - Present</div>
                    <div style={{paddingTop: 20, paddingBottom: 20}}>
                        A cybersecurity mentorship with Sekuro which included weekly <br/>
                        technical meetings  discussing the following topics: 
                        <ul style={{paddingLeft: 40}}>
                            <li>Setting up a Ubuntu server</li>
                            <li>Securing a server and web application</li>
                            <li>Hardening and defending a server</li>
                            <li>Penetration testing methods</li>
                            <li>Indicators of Compromise (IOCs)</li>
                            <li>Drone Security</li>
                            <li>Virtual Machines and Hacking Labs</li>
                            <li>Analysing and collating IOCs</li>
                            <li>Documenting findings from a successful penetration test</li>
                        </ul>
                    </div>
                    <div style={{paddingTop: 20, paddingBottom: 20}}>
                        Completed a minor and major cybersecurity project (more details below) which <br/>
                        revolved around the theme of Governance and IOCs.
                    </div>
                </ResContent>
                <HeaderContainer id="experience">
                    <HeaderEmoji>
                        <Emoji style={emojiStyle} symbol="💼"/> 
                    </HeaderEmoji>
                    Experience
                </HeaderContainer>
            </ResContainer>
            <div className="responsive-section">
                <HeaderContainer id="certifications">
                    <HeaderEmoji>
                        <Emoji style={emojiStyle} symbol="📜"/>
                    </HeaderEmoji>
                    Certifications
                </HeaderContainer>
                <ResContentHorizontal className="responsive-certification">
                        <div className="certificate" style={{fontSize: 23, color: 'black'}}>
                            ANZ <br/> CyberSecurity <br/> Virtual Experience <br/>
                            <div style={{fontSize: 18, color: '#4285F4', paddingBottom: 30}}>May 2021</div>
                            <Button sx={{background:"#4285F4", 
                                        "&.MuiButtonBase-root:hover": {
                                            color: "white"
                                        }}} 
                                    href='https://insidesherpa.s3.amazonaws.com/completion-certificates/ANZ/Hf4QMESoFeQwXPsiH_ANZ_n5asg4o9GxcagEW86_completion_certificate.pdf' 
                                    variant="contained">More Info</Button>
                        </div>
                        <div className="certificate" style={{fontSize: 23, color: 'black'}}>
                            Genius Armoury <br/> Introduction to Cybersecurity <br/>Virtual Experience Program<br/>
                            <div style={{fontSize: 18, color: '#4285F4', paddingBottom: 30}}>May 2021</div>
                            <Button sx={{background:"#4285F4", 
                                        "&.MuiButtonBase-root:hover": {
                                            color: "white"
                                        }}} 
                                        href='https://insidesherpa.s3.amazonaws.com/completion-certificates/Genius%20Armoury%20%28GA%29/avbGLNY7iDcHLDeJk_Genius%20Armoury%20%28GA%29_n5asg4o9GxcagEW86_completion_certificate.pdf' 
                                        variant="contained">More Info</Button>
                        </div>
                        <div className="certificate" style={{fontSize: 23, color: 'black'}}>
                            JPMorgan Chase & Co. <br/> Software Engineering <br/> Virtual Experience<br/>
                            <div style={{fontSize: 18, color: '#4285F4', paddingBottom: 30}}>May 2021</div>
                            <Button sx={{background:"#4285F4", 
                                        "&.MuiButtonBase-root:hover": {
                                            color: "white"
                                        }}} 
                                        href='https://insidesherpa.s3.amazonaws.com/completion-certificates/JP%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan%20Chase_n5asg4o9GxcagEW86_completion_certificate.pdf' 
                                        variant="contained">More Info</Button>
                        </div>
                        <div className="certificate" style={{fontSize: 23, color: 'black'}}>
                            Google <br/>Kick Start <br/> Competition
                            <div style={{fontSize: 18, color: '#4285F4', paddingBottom: 30}}>November 2021</div>
                            <Button sx={{background:"#4285F4", 
                                        "&.MuiButtonBase-root:hover": {
                                            color: "white"
                                        }}} 
                                        href='https://codingcompetitions.withgoogle.com/kickstart/certificate/summary/0000000000435bad' 
                                        variant="contained">More Info</Button>
                        </div>
                </ResContentHorizontal>
            </div>
            <ResContainer className="responsive-section">
                <HeaderContainer>
                    <HeaderEmoji id="projects">
                        <Emoji style={emojiStyle} symbol="🔧"/>
                    </HeaderEmoji>
                    Projects
                </HeaderContainer>
                <div>
                    <ResContent>
                        <div style={{fontSize: 23, color: 'black'}}>
                            UNSW Streams<br/>
                        </div>
                        <div style={{fontSize: 18, color: '#4285F4'}}>September 2021 - Present</div>
                        <div style={{paddingTop: 20, paddingBottom: 20}}>
                            A collaborative communications platform intended to facilitate teaching <br/>
                            and studies during the COVID-19 pandemic.<br/>
                        </div>
                        <div style={{paddingTop: 10, paddingBottom: 10}}>
                            Built with Python and uses a RESTful API, the application contains the following features:
                            <ul style={{paddingLeft: 40}}>
                                <li>Create channels or dms</li> 
                                <li>Get notifications</li>  
                                <li>Tag other users</li>  
                                <li>Summon a multipurpose bot in channels</li>  
                                <li>Administrative privileges removing messages and users</li> 
                                <li>Persistant data storage</li>
                                <li>Encrypted session tokens</li> 
                                <li>Can handle concurrent sessions</li> 
                                <li>Statistical analysis and tracking</li> 
                            </ul> 
                        </div>
                        <div style={{paddingTop: 10, paddingBottom: 40}}>
                            Collaborated with 5 members following Agile practices such as version control,<br/> 
                            standups and issue tracking using Jira.
                        </div>
                    
                        <div>
                            <div style={{fontSize: 23, color: 'black'}}>
                                Portfolio Website<br/>
                            </div>
                            <div style={{fontSize: 18, color: '#4285F4'}}>August 2021 - Present</div>
                            <div style={{paddingTop: 10, paddingBottom: 10}}>
                                A static "portfolio" style website which you are currently viewing this on.
                            </div>
                            <div style={{paddingTop: 10, paddingBottom: 10}}>
                                Built using React.js and deployed using Heroku, this website contains the <br/>
                                following features:
                                <ul style={{paddingLeft: 40}}>
                                    <li>Multiple pages (some are currently under construction)</li> 
                                    <li>Responsive content that resizes based on changing aspect-ratio</li>  
                                </ul> 
                            </div>
                            <div style={{textAlign: 'center', paddingBottom: 60}}>
                                <Button sx={{background:"#4285F4", "&.MuiButtonBase-root:hover": {
                                                color: "white"
                                            }}} 
                                        href='https://github.com/Darianlmj/Web-Portfolio' 
                                        variant="contained">More Info</Button>
                            </div>
                        </div>
                    <div>
                        <div style={{fontSize: 23, color: 'black'}}>
                                Sekuro Minor Project<br/>
                        </div>
                        <div style={{fontSize: 18, color: '#4285F4'}}>September 2021 - November 2021</div>
                        <div style={{paddingTop: 10, paddingBottom: 10}}>
                            Managed, defended and hardened access to an Ubuntu server by restricting <br/> 
                            server access, configuring DNS records, SSL patching.
                        </div>
                        <div style={{paddingTop: 10, paddingBottom: 10}}>
                            Configured and deployed a Wordpress LAMP stack website while focusing on <br/> 
                            maintaining security.
                        </div>
                        <div style={{paddingTop: 10, paddingBottom: 40}}>
                            Employed penetration testing methods to discover vulnerabilities and compromise <br/> 
                            similar servers of other mentees using NESSUS and Nikto.
                        </div>
                    </div>
                    <div>
                        <div style={{fontSize: 23, color: 'black'}}>
                            Sekuro Major Project<br/>
                        </div>
                        <div style={{fontSize: 18, color: '#4285F4'}}>October 2021 - December 2021</div>
                        <div style={{paddingTop: 10, paddingBottom: 10}}>
                            Deployed a malware/lab testing environment using Kali Linux and Windows 11 system.
                        </div>
                        <div style={{paddingTop: 10, paddingBottom: 20}}>
                            Simulated an attack on a Windows machine using Mimikatz and a Metasploit <br/> 
                            Meterpreter reverse shell while analysing indicators of compromise using Sysmon <br/> 
                            when Windows Defender is turned off.
                        </div>
                    </div>
                    </ResContent>
                </div>
            </ResContainer>
            <ResContainer>
                <div></div>
                <ResContent>
                    <div>
                        <div style={{fontSize: 23, color: 'black'}}>
                            Programming Languages <br/>
                        </div>
                        <div style={{paddingTop: 10, paddingBottom: 20}}>
                            Python, C, HTML, CSS, Javascript, React.js
                        </div>
                    </div>
                    <div>
                        <div style={{fontSize: 23, color: 'black'}}>
                            Technical Skills<br/>
                        </div>
                        <div style={{paddingTop: 10, paddingBottom: 20}}>
                            Git, Github, Figma, Nessus, Wordpress, VirtualBox
                        </div>
                    </div>
                    <div>
                        <div style={{fontSize: 23, color: 'black'}}>
                            Languages<br/>
                        </div>
                        <div style={{paddingTop: 10, paddingBottom: 20}}>
                            Proficient English and Conversational Malay
                        </div>   
                    </div>
                </ResContent>
                <HeaderContainer>
                    <HeaderEmoji id="skills">
                        <Emoji style={emojiStyle} symbol="🧑🏻‍💻"/>
                    </HeaderEmoji>
                    Skills
                </HeaderContainer>
                <div></div>
            </ResContainer>
            <div className='backToTop'>
                <Link style={{color: '#777777'}} to='#top'>
                    <i class="fas fa-arrow-circle-up fa-2x"></i>
                </Link>
            </div>
        </div>  
    )
}

export default Resume
