import React from 'react'
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu} from './SideBarElements'

const SideBar = ({ isOpen, toggle }) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu className="SideBarMenu">
                    <a href="/" onClick={toggle}>Home</a>
                    <a href="/about" onClick={toggle}>About Me</a>
                    <a href="/resume" onClick={toggle}>Resume</a>
                    <a href="/posts" onClick={toggle}>Posts</a>
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar
