import styled from 'styled-components';

export const Nav = styled.nav`
    background: rgb(232, 240, 252);
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    padding: 0.5rem calc((100vw - 1000px) / 8);
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const MobileIcon = styled.div`
    display: none;
    color: #000;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 40%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;
