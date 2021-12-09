import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const SideBarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #fffdfa;
    display: grid;
    padding: 20px;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #595757;
    text-align: left;
`;
export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SideBarWrapper = styled.div`
    color: #000;
    text-transform: uppercase;
    font-weight: bold;
`;

export const SideBarMenu = styled.ul`
    display: grid;
    grid-template-rows: repeat(4, 120px);
    grid-template-columns: 1fr;
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(4, 60px);
    }
`;

export const SideBarLink = styled(Link)`
    display: grid;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #000;
    cursor: pointer;

    &:after {
        content: '';
        width: 0%;
        height: 2px;
        background: rgb(0, 0, 0);
        margin: auto;
        transition: 0.3s;
        transform: translateY(-40px);
    }

    &:hover:after {
        width: 100%;
    }
`;