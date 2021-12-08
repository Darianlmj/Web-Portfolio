import { display, flexbox } from '@mui/system';
import React from 'react'

const Anchor = () => {
    // Clicking on an anchor does not record history.
    const handleClick = (e, link) => {
        e.preventDefault();
        console.log(link);
    };

    const anchorStyle = {
        display: 'flex',
        justifyContent: 'space-between',
    };

    const anchorLink = {
        color: 'black',
        textDecoration: 'none',
    };

    return (
        <div style={anchorStyle} onClick={handleClick}>
            <a style={anchorLink} href='#education'>Education</a>
            <div>Experience</div>
            <div>Certificates</div>
            <div>Projects</div>
            <div>Skills</div>
        </div>
    )
}

export default Anchor
