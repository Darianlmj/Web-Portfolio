import TypeWriterEffect from 'react-typewriter-effect';

const BrandAnimation = () => {
    const myRef = document.querySelector('.flashing-cursor')
    return (
        <div>
            <TypeWriterEffect
                startDelay={100}
                cursorColor="black"
                text="Darianlmj"
                typeSpeed={250}
                scrollArea={myRef}
                hideCursorAfterText={true}
            />
        </div>
    )
}

export default BrandAnimation
