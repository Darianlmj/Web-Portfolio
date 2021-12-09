import React from 'react'
import { FaBars } from 'react-icons/fa';
import { Nav, MobileIcon, NavMenu } from './NavBarElements';
import TypeWriterEffect from 'react-typewriter-effect';

const NavBar = ({ toggle }) => {
    return (
        <div>
            <Nav>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>             
                <NavMenu className="NavBarMenu">
                    <a href="/">Home</a>
                    <a href="/about">About Me</a>
                    <a href="/resume">Resume</a>
                    <a href="/posts">Posts</a>
                </NavMenu>                             
                <a className="NavBarBrand" href="/">
                    <TypeWriterEffect
                        startDelay={100}
                        cursorColor="#fff"
                        text="Darianlmj"
                        typeSpeed={250}
                        scrollArea={document.querySelector('.flashing-cursor')}
                        hideCursorAfterText={true}
                    />
                </a>
            </Nav>
        </div>
    )
}

export default NavBar
