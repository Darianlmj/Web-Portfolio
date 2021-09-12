import React, { useEffect } from "react";

import { ResContainer, ResCol1, ResCol2, SectionHeader, Bars, ResImage } from "./ResumeElements";
import Asset3 from "../../images/Asset3.jpeg"
import './index.css'

const Resume = () => {
    useEffect(() => {
        document.title = "Resume | Darianlmj";  
    }, []);

    return (
        <div>
            <ResContainer>
                {/* --------------------------------------------------------

                                            Column 1
                
                ------------------------------------------------------------- */}
                <ResCol1>
                    <ResImage src={Asset3} alt="Profile Pic"></ResImage>
                    <div>
                        <SectionHeader>
                            <div className="HeaderName">Contact</div>
                            <Bars></Bars>
                        </SectionHeader>
                        <div className="Excerpt">
                            <div>Email: darianlmj@gmail.com</div>
                            <div>LinkedIn: linkedin.com/in/darianlmj/</div>
                            <div>GitHub: github.com/Darianlmj</div>
                            <div>Website: darianlmj.github.io</div>
                        </div>

                        <SectionHeader>
                            <div className="HeaderName">Skills</div>
                            <Bars></Bars>
                        </SectionHeader>
                        <div className="Excerpt">
                            <div>Programming Languages: C, HTML, CSS, JavaScript, React.js</div>
                            <div>Technical Skills: Git, GitHub, Figma, Squarespace</div>
                            <div>Language: Proficient English and conversational Malay</div>
                        </div>
                    </div>
                </ResCol1>

                {/* --------------------------------------------------------

                                            Column 2
                
                ------------------------------------------------------------- */}
                <ResCol2>
                    <div className="ResHeader">
                        <h1 className="ResTitle">Darian Lee Ming Jian</h1>
                        <h3 className="ResDesc">Computer Science Student</h3>
                    </div>
                    <div className="ResInfo">
                        <SectionHeader>
                            <div className="HeaderName">Objective</div>
                            <Bars>  
                            </Bars>
                        </SectionHeader>
                        <div className="Excerpt">
                        A 2nd year Computer Science student with a passion for cyber security and front-end web development. Being a responsible and independent team player who is familiar with fundamental security concepts, I am seeking a mentorship that will give a unique perspective into the inner workings of a cyber security firm and help launch a future career in this industry.
                        </div>

                        <SectionHeader>
                        <div className="HeaderName">Education</div>
                        <Bars>  
                        </Bars>
                        </SectionHeader>
                        <div className="Excerpt">
                            <div className="EdTitle">
                                <div>University of New South Wales</div>					        
                                <div>2021 - Present</div>
                            </div>
                            <div>
                                Bachelor of Computer Science | Weighted Average Mark: 73.2%
                            </div>

                            <div className="EdTitle">
                                <div>University of New South Wales Global</div>					        
                                <div>2020 - 2021</div>
                            </div>
                            <div>
                            Diploma in Computer Science | Weighted Average Mark: 74.7%
                            </div>
                            <li>	Awarded the UNSW Global Diploma Scholarship in 2020 and 2021.</li>
                        </div>

                        <SectionHeader>
                            <div className="HeaderName">Experience</div>
                            <Bars>  
                            </Bars>
                        </SectionHeader>
                        <div className="Excerpt">
                            <div className="ExpTitle">
                                <div>UNSW ASEAN Society IT Associate</div>					        
                                <div>June 2021 - Present</div>
                            </div>
                            <li>Redesigned and implemented the front-end for the “Partners” and “Our Team” page in the society's 2021 flagship event website (UNSW ASEAN Conference).</li>
                            <li>Facilitated the front-end development of the society’s website with a team of 6 people.</li>
                            <li>Managed the transition of 108 members to a new social networking platform (Discord).</li>
                            <li>Awarded the President’s Choice Award in September 2021 for contributions to the society.</li> 

                            <div className="ExpTitle">
                                <div>ANZ Cyber Security Virtual Experience</div>					        
                                <div>May 2021</div>
                            </div>
                            <li>Inspected and analysed emails to detect the presence of malicious content. </li>
                            <li>Investigated packet capture files using Wireshark to analyse network traffic.</li>

                            <div className="ExpTitle">
                                <div>Genius Armoury Introduction to Cyber Security Virtual Experience</div>					        
                                <div>May 2021</div>
                            </div>
                            <li>Familiarity with concepts such as cyber threats, malwares, network, hashing and digital forensic techniques.</li>                       
                        </div>

                        <SectionHeader>
                            <div className="HeaderName">Projects</div>
                            <Bars>  
                            </Bars>
                        </SectionHeader>
                        <div className="Excerpt">
                            <div className="EdTitle">
                                <div>Portfolio website</div>					        
                                <div>June 2021 - Present</div>
                            </div>
                            <li>A “blog/portfolio” style static website.</li>                       
                            <li>Made using React.js, CSS and hosted on GitHub Pages.</li>                       

                            <div className="EdTitle">
                                <div>Text Analyser</div>					        
                                <div>2020 - 2021</div>
                            </div>
                            <li>Designed a command-line program using C to produce the top ‘n’ most frequently occurring words in a given text file by utilising a binary search tree. Processes up to 500,000 words in less than 3 seconds.</li>
                        </div>
                    </div>
                </ResCol2>
            </ResContainer>
        </div>
    )
}

export default Resume
