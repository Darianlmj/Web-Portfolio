import React, { useEffect } from "react";

import { ResContainer, ResSummary, ResName, ResIntro, ResNavBar, ResContent } from "./ResumeElements";
import Asset3 from "../../images/Asset3.jpeg"
import './index.css'
import { Divider } from '@mui/material';
import Anchor from '../../components/Anchor/Anchor.js'
import Emoji from "../../components/Emoji/Emoji";
import { position } from "dom-helpers";

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
        <div style={{backgroundColor:'#fffdfa'}}>
            <ResContainer style={{justifyContent: 'space-around'}}>
                <ResIntro>
                    <div className="res-greeting">
                        Hello, I'm
                    </div>
                    <ResName>
                        Darian Lee Ming Jian
                    </ResName>
                    <ResSummary>
                        Second year computer science student, <br></br>
                        aspiring web developer and security enthusiast.
                    </ResSummary>
                </ResIntro> 
                <div style={emojiContainer}>
                    <Emoji style={emojiStyle} symbol="👋🏼" className="waving-hand"></Emoji>
                </div>
            </ResContainer>
            <Divider className="divider" sx={{ border: 1, my: 0, mx: 'auto'}}/>
            <ResNavBar>
                <Anchor/>
            </ResNavBar>
            <ResContainer>
                <div></div>
                <div id='education' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', textAlign: 'center', fontFamily: 'lyon-display-web', fontWeight: 'bold', fontSize:35}}>
                <div style={{fontSize: 50}}><Emoji style={emojiStyle} symbol="🏫" className="waving-hand"></Emoji></div>Education
                </div>
                <ResContent>
                    <div style={{paddingBottom: 25}}>
                        <div style={{fontSize: 23, color: 'black'}}>
                            University of New South Wales 
                        </div>
                        <div style={{fontSize: 18, color: '#4285F4'}}>June 2021 - Present</div>
                        Bachelor of Computer Science   <br></br>
                        Weighted Average Mark: 73.2%
                    </div>
                    <div>
                        <div style={{fontSize: 23, color: 'black'}}>University of New South Wales Global</div>
                        <div style={{fontSize: 18, color: '#4285F4'}}>May 2020 - May 2021</div>
                        Diploma in Computer Science <br></br>
                        Weighted Average Mark: 74.7% <br></br>
                        Awarded the UNSW Global Diploma Scholarship in 2020 and 2021
                    </div>
                </ResContent>
            </ResContainer>
            <ResContainer>
                <ResContent>
                    <div style={{fontSize: 23, color: 'black'}}>
                        UNSW ASEAN Society IT Associate<br></br>
                    </div>
                    <div style={{fontSize: 18, color: '#4285F4'}}>June 2021 - Present</div>
                    <div style={{fontSize: 20, paddingTop: 20, fontWeight: 500}}>UNSW ASEAN Conference 2021 (UAC)</div>
                    <div style={{paddingTop: 20, paddingBottom: 20}}>
                        Redesigned and implemented the frontend for the "Partners" and <br></br>"Our Team" page in the society's 2021 flagship event website <br></br> for which I was awarded  the President’s Choice Award in September 2021. <br></br>
                    </div>
                    <div style={{paddingTop: 20, paddingBottom: 20}}>
                        Collaborated virtually with a team of ~50 members to organise the <br></br> UNSW ASEAN Conference, a large scale 2-day online conference which <br></br> attracted over 1700+ participants from multiple countries. <br></br>
                    </div>
                    <div style={{paddingTop: 20, paddingBottom: 20}}>
                        Moderated and managed the livestream of the conference using OBS on <br></br> Youtube and Vimeo.
                    </div>
                    <div style={{fontSize: 20, paddingTop: 20, fontWeight: 500}}>ASEAN Society Website</div>
                    <div style={{paddingTop: 20, paddingBottom: 40}}>
                        Collaborated with a team of 3 members to design the frontend of the society's <br></br> official website.<br></br>
                    </div>

                    {/*  */}
                    <div style={{fontSize: 23, color: 'black'}}>
                        Privasec Hackcelerator Mentorship 2021<br></br>
                    </div>
                    <div style={{fontSize: 18, color: '#4285F4'}}>September 2021 - Present</div>
                    <div style={{paddingTop: 20, paddingBottom: 20}}>
                        A cybersecurity mentorship with Privasec (now known as Sekuro) which included <br></br> weekly technical meetings discussing the following topics: 
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
                    <div style={{paddingTop: 20, paddingBottom: 20}}>Completed a minor and major cybersecurity project (more details below) which <br></br> revolved around the theme of Governance and IOCs.</div>
                </ResContent>
                
                <div id='experience' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', textAlign: 'center', fontFamily: 'lyon-display-web', fontWeight: 'bold', fontSize:35}}>
                    <div style={{fontSize: 50}}><Emoji style={emojiStyle} symbol="💼" className="waving-hand"></Emoji> </div>Experience
                </div>
            </ResContainer>
            {/* <ResContainer>
                <div>Certificates</div>
                <div>
                    <div>
                        ANZ CyberSecurity Virtual Experience <br></br>
                    </div>
                    <div>
                        Genius Armoury Introduction to Cybersecurity Virtual Experience Program<br></br>
                    </div>
                    <div>
                        JPMorgan Chase & Co. Software Engineering Virtual Experience<br></br>
                    </div>
                </div>
            </ResContainer> */}
            {/* <ResContainer>
                <div>Projects</div>
                <div>
                    <div>
                        UNSW Streams <br></br>
                        A collaborative communications platform intended to facilitate teaching and studies during the COVID-19 pandemic.
                        Built using python, the application features the ability to create channels/dms, get notifications, tag other users, summon a multipurpose bot in channels and perform administrative privileges such as removing messages and users. The application's data is also able to persist and can handle concurrent sessions.
                        Collaborated with 5 members following Agile practices such as version control, standups and issue tracking using Jira.
                    </div>
                    <div>
                        Portfolio Website<br></br>
                        A static website featuring multiple pages and the ability to resize responsively depending on the aspect ratio of the current screen. 
                        Built using React.js and deployed using Heroku.
                    </div>
                    <div>
                        Privasec Minor Project<br></br>
                        Managed, defended and hardened access to an Ubuntu server by restricting server access, configuring DNS records, SSL patching.
                        Configured and deployed a Wordpress LAMP stack website while focusing on maintaining security.
                        Employed penetration testing methods to discover vulnerabilities and compromise similar servers of other mentees using NESSUS and Nikto.
                    </div>
                    <div>
                        Privasec Major Project<br></br>
                        Deployed a malware/lab testing environment using Kali Linux and Windows 11 system.
                        Simulated an attack on a Windows machine using Mimikatz and a Metasploit Meterpreter reverse shell while analysing indicators of compromise using Sysmon when Windows Defender is turned off.
                    </div>
                </div>
            </ResContainer> */}
            {/* <ResContainer>
                <div>Skills</div>
                <div>
                    <div>
                        Programming Languages <br></br>
                        Python, C, HTML, CSS, Javascript, React.js
                    </div>
                    <div>
                        Technical Skills<br></br>
                        Git, Github, Figma, Nessus, Wordpress, VirtualBox
                    </div>
                    <div>
                        Languages<br></br>
                        Proficient English and Conversational Malay
                    </div>
                </div>
            </ResContainer> */}
        </div>
        
    )
}

export default Resume
