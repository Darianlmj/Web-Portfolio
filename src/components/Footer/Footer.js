import Emoji from "../Emoji/Emoji"

const Footer = () => {
    return (
    <div className="footer">
        <footer>
            <div className="container">
                <div className="row">                    
                    <div className="col-md-6 item text">
                        <h3>Thanks For Visiting</h3>
                        <p>
                           This website is a product of my love for front-end web development and has taken me a lot of
                           time to create so you being here in my little corner of the internet means a lot to me. 
                        </p>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Find Out More</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/#/about">About Me</a></li>
                            <li><a href="/#/resume">Resume</a></li>
                            <li><a href="/">Posts</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col item social">
                    <h3>Get In Touch</h3>
                    <a href="mailto: darianlmj@gmail.com"><i className="icon ion-email"></i></a>
                    <a href="https://github.com/Darianlmj/"><i className="icon ion-social-github"></i></a>
                    <a href="https://www.linkedin.com/in/darianlmj/"><i className="icon ion-social-linkedin"></i></a>
                    <a href="https://www.instagram.com/_darianlmj_/"><i className="icon ion-social-instagram"></i></a>
                </div>
                <p className="statement">
                    Made with <Emoji symbol="♡"></Emoji> by Darian in 2021
                </p>
            </div>
        </footer>
    </div>
    )
}

export default Footer
