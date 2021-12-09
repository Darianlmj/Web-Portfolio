import styled from "styled-components";

export const ResContainer = styled.div`
    display: flex;
    max-width: calc(1250px - (50px * 2));
    padding-left: 3%;
    padding-right: 3%;
    margin: 0 auto;
    justify-content: space-between;
`

export const ResIntro = styled.div`
    padding-top: 10%;
    padding-bottom: 10%;
`

export const ResName = styled.div`
    font-family: lyon-display-web;
    font-weight: 800;
    font-size: 55px;
`

export const ResSummary = styled.div`
    font-weight: 500;
    font-size: 20px;
    color: #777777;
`

export const ResNavBar = styled.div`
    font-size: 1rem;
    font-weight: 500;
    padding-top: 15px;
    padding-bottom: 15px;
    max-width: calc(1200px - (50px * 2));
    margin: 0 auto;
    justify-content: space-between;
`

export const ResContent = styled.div`
    padding-top: 70px;
    padding-bottom: 70px;
    font-size: 18px;
    color: #777777;
`

export const ResContentHorizontal = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: calc(1200px - (50px * 2));
    text-align: center;
    margin: 0 auto;
    padding-top: 70px;
    padding-bottom: 70px;
    font-size: 18px;
    color: #777777;
`

export const HeaderEmoji = styled.div`
    font-size: 50px;
`

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: lyon-display-web;
    font-weight: bold;
    font-size: 35px
`