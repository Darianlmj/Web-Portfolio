import React from 'react'
import { FaCentercode } from 'react-icons/fa';
import Emoji from "../../components/Emoji/Emoji";
import './index.css'
import { ConstructionTitle } from "./UnderConstructionElements"

const UnderConstruction = () => {
    const emojiContainer = {
        textAlign: 'center',
        fontSize: 100, 
    }
    const emojiStyle = {
        maxWidth: 'calc(1200px - (50px * 2))',
        margin: '0 auto',
        position: 'absolute',
    }

    return (
        <div className='underConstructionPage'>
            <div style={emojiContainer}>
                <Emoji style={emojiStyle} symbol="🚧"></Emoji>
            </div>
            <ConstructionTitle>Page is Currently under Construction</ConstructionTitle>
            <div className='ConstructionInfo'>Thanks for Visiting. Please check back soon</div>
        </div>
    )
}

export default UnderConstruction
