import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { HashLink as Link } from 'react-router-hash-link';

const HorizontalTimeline = () => {
    function changeColor(e) {
        e.target.style.color = 'rgb(66, 133, 244)';
    }
    function changeBackColor(e) {
        e.target.style.color = '#6C6C6C';
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={-1} alternativeLabel>
                
                <Step >
                    <StepLabel sx={{".MuiStepIcon-text": {
                                        visibility: 'hidden'
                                    },'.MuiStepLabel-label': {
                                        fontSize: 17
                                    }}}><Link to='#education' style={{ textDecoration: 'none', color: '#6C6C6C' }} 
                                              onMouseOver={changeColor} onMouseLeave={changeBackColor}>Education</Link></StepLabel>
                </Step>
                <Step >
                    <StepLabel  sx={{".MuiStepIcon-text": {
                                        visibility: 'hidden'
                                    },'.MuiStepLabel-label': {
                                        fontSize: 17
                                    }}}><Link to='#experience' style={{ textDecoration: 'none', color: '#6C6C6C' }} 
                                              onMouseOver={changeColor} onMouseLeave={changeBackColor}>Experience</Link></StepLabel>
                </Step>
                <Step >
                    <StepLabel  sx={{".MuiStepIcon-text": {
                                        visibility: 'hidden'
                                    },'.MuiStepLabel-label': {
                                        fontSize: 17
                                    }}}><Link to='#certifications' style={{ textDecoration: 'none', color: '#6C6C6C' }} 
                                              onMouseOver={changeColor} onMouseLeave={changeBackColor}>Certifications</Link></StepLabel>
                </Step>
                <Step >
                    <StepLabel  sx={{".MuiStepIcon-text": {
                                        visibility: 'hidden'
                                    },'.MuiStepLabel-label': {
                                        fontSize: 17
                                    }}}><Link to='#projects' style={{ textDecoration: 'none', color: '#6C6C6C' }} 
                                              onMouseOver={changeColor} onMouseLeave={changeBackColor}>Projects</Link></StepLabel>
                </Step>
                <Step >
                    <StepLabel  sx={{".MuiStepIcon-text": {
                                        visibility: 'hidden'
                                    },'.MuiStepLabel-label': {
                                        fontSize: 17
                                    }}}><Link to='#skills' style={{ textDecoration: 'none', color: '#6C6C6C' }} 
                                              onMouseOver={changeColor} onMouseLeave={changeBackColor}>Skills</Link></StepLabel>
                </Step>
                
            </Stepper>
        </Box>
    );
}

export default HorizontalTimeline
