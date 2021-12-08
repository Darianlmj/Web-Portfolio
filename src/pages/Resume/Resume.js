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
                <div id='education' style={{fontFamily: 'lyon-display-web', fontWeight: 'bold', fontSize:35, paddingTop: 180, paddingBottom: 180}}>
                    Education
                </div>
                <ResContent>
                    <div style={{paddingBottom: 25}}>
                        <div style={{fontSize: 23, color: 'black'}}>
                            University of New South Wales 
                        </div>
                        <div style={{fontSize: 18}}>June 2021 - Present</div>
                        Bachelor of Computer Science   <br></br>
                        Weighted Average Mark: 73.2%
                    </div>
                    <div>
                        <div style={{fontSize: 23, color: 'black'}}>University of New South Wales Global</div>
                        <div style={{fontSize: 18}}>May 2020 - May 2021</div>
                        Diploma in Computer Science <br></br>
                        Weighted Average Mark: 74.7% <br></br>
                        Awarded the UNSW Global Diploma Scholarship in 2020 and 2021
                    </div>
                </ResContent>
            </ResContainer>
            {/* <ResContainer>
                <div>
                    <div>
                        UNSW ASEAN Society IT Associate<br></br>
                        Redesigned and implemented the frontend for the "Partners" and "Our Team" page in the society's 2021 flagship event website for which I was awarded the President’s Choice Award in September 2021 <br></br>
                        Collaborated virtually with a team of ~50 members to organise the UNSW ASEAN Conference, a large scale 2-day online conference which attracted over 1700+ participants from multiple countries. <br></br>
                        Moderated and managed the livestream of the conference using OBS on Youtube and Vimeo.
                    </div>
                    <div>
                        Privasec Hackcelerator Mentorship 2021<br></br>
                        A cybersecurity mentorship which included technical meetings discussing the latest methods used in penetration testing.<br></br>
                        Gained insight and experience into the daily workflow of a cybersecurity consultant.
                    </div>
                </div>
                <div>Experience</div>
            </ResContainer>
            <ResContainer>
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
            </ResContainer>
            <ResContainer>
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
            </ResContainer>
            <ResContainer>
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
