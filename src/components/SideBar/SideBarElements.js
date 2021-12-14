import { FaTimes } from 'react-icons/fa'
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
