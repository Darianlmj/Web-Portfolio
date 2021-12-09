import React, { useEffect } from "react";
import './index.css';
import Emoji from "../../components/Emoji/Emoji";
import { NotFoundTitle } from "./PageNotFoundElements";

const PageNotFound = () => {
    useEffect(() => {
        document.title = "404 | Darianlmj";  
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
        <div className='notFoundPage'>
            <div className='notFoundContainer'>
                <div style={emojiContainer}>
                    <Emoji style={emojiStyle} symbol="🚫"></Emoji>
                </div>
                <NotFoundTitle>404 Not Found</NotFoundTitle>
                <div className='notFoundInfo'>Sorry, there doesn't seem to be a page here. <br></br> Please recheck that the URL entered is correct.</div>
            </div>
            
        </div>
    )
}

export default PageNotFound
