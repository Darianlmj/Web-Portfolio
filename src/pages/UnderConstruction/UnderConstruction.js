import React, { useEffect } from "react";
import Emoji from "../../components/Emoji/Emoji";
import './index.css'
import { ConstructionTitle } from "./UnderConstructionElements"

const UnderConstruction = () => {
    useEffect(() => {
        document.title = "503 | Darianlmj";  
    }, []);

    const emojiContainer = {
        textAlign: 'center',
        fontSize: 110, 
        paddingTop: 60,
    }

    const emojiStyle = {
        maxWidth: 'calc(1200px - (50px * 2))',
        margin: '0 auto',
        position: 'absolute',
    }

    return (
        <div className='underConstructionPage'>
            <div className='constructionContainer'>
                <div style={emojiContainer}>
                    <Emoji style={emojiStyle} symbol="🚧"></Emoji>
                </div>
                <ConstructionTitle>Page is Currently under Construction</ConstructionTitle>
                <div className='ConstructionInfo'>Thanks for visiting. Please check back soon.</div>
            </div>
            
        </div>
    )
}

export default UnderConstruction
