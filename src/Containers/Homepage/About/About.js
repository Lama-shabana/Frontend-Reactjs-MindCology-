import "./Homepage.css";
// import img2 from "../../images/3485230f.jpg";
// import img3 from "../../images/AdobeStock_331776137-960x640.jpeg";
import LoggedOutTopBar from "../../../Components/TopBar/LoggedOutTopBar"
        // "../../../Components/TopBar/LoggedOutTopBar";
const About = (props) => {
    return (
        <div>


            <body className="u-body">
            <LoggedOutTopBar/>
            <section className="u-clearfix u-section-1" id="carousel_74b7">
                <div className="u-clearfix u-sheet u-sheet-1">
                    <div className="u-clearfix u-gutter-12 u-layout-wrap u-layout-wrap-1">
                        <div className="u-layout">
                            <div className="u-layout-row">
                                <div
                                    className="u-align-left u-container-style u-custom-color-1 u-layout-cell u-left-cell u-size-26 u-layout-cell-1">
                                    <div className="u-container-layout u-container-layout-1">
                                        <h1 className="u-text u-text-1">About Us</h1>
                                        <h2>Online Counseling</h2>
                                        <p>
                                            Its main goal is providing mental health services online. It can happen
                                            through texts, voice or video calls. Its is provided by licensed therapists
                                            or Psychiatrists.

                                        </p>
                                        <a href="Homepage.html"
                                           className="u-active-white u-btn u-btn-rectangle u-button-style u-custom-font u-font-oswald u-hover-palette-1-light-2 u-radius-0 u-text-palette-1-base u-white u-btn-1"
                                           target="_blank">learn more</a>
                                    </div>
                                </div>
                                <div
                                    className="u-align-left u-container-style u-image u-layout-cell u-right-cell u-size-34 u-image-1"
                                    data-image-width="800" data-image-height="800">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="u-clearfix u-section-2" id="carousel_8bf1">
                <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                    <div className="u-clearfix u-expanded-width u-gutter-12 u-layout-wrap u-layout-wrap-1">
                        <div className="u-layout">
                            <div className="u-layout-row">
                                <div
                                    className="u-align-left u-container-style u-layout-cell u-left-cell u-size-15 u-size-30-md u-layout-cell-1">
                                    <div className="u-container-layout u-valign-top u-container-layout-1">
                                        <div
                                            className="u-border-4 u-border-palette-2-base u-line u-line-horizontal u-line-1"></div>
                                        <h4 className="u-text u-text-1">Stay connected</h4>
                                        <p className="u-text u-text-grey-50 u-text-2">
                                            For those who wish to enjoy a healthy life. This option is built around
                                            improving your personal and solving your problems.
                                            Since mental health is this vital, we want everyone to have access to it no
                                            matter what their environment is, or where are you lived.</p>
                                    </div>
                                </div>
                                <div
                                    className="u-align-left u-container-style u-layout-cell u-size-15 u-size-30-md u-layout-cell-2">
                                    <div className="u-container-layout u-valign-top u-container-layout-2">
                                        <div
                                            className="u-border-4 u-border-palette-2-base u-line u-line-horizontal u-line-2"></div>
                                        <h4 className="u-text u-text-3">Talk about</h4>
                                        <p className="u-text u-text-grey-50 u-text-4">You can get all options of mental
                                            healthcare that offer this website, like take an appointment after sign up
                                            in it, you can meet a professional therapist that suggested by the
                                            secretary.</p>
                                    </div>
                                </div>
                                <div
                                    className="u-align-left u-container-style u-layout-cell u-size-15 u-size-30-md u-layout-cell-3">
                                    <div className="u-container-layout u-valign-top u-container-layout-3">
                                        <h4 className="u-text u-text-5">Fill a form</h4>
                                        <p className="u-text u-text-grey-50 u-text-6">The form contains a few questions
                                            that help you to find the perfect therapist for your problems. Also, It
                                            helps your therapist to access your history health information.</p>
                                    </div>
                                </div>
                                <div
                                    className="u-align-left u-container-style u-layout-cell u-right-cell u-size-15 u-size-30-md u-layout-cell-4">
                                    <div className="u-container-layout u-valign-top u-container-layout-4">
                                        <h4 className="u-text u-text-7">Keep going</h4>
                                        <p className="u-text u-text-grey-50 u-text-8">There's no need to stop your life
                                            or worry, you can contact us according to your spare time.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="u-align-center u-clearfix u-footer u-grey-80 u-footer" id="sec-1d2c">
                <div className="u-clearfix u-sheet u-sheet-1">
                    <p className="u-small-text u-text u-text-variant u-text-1">Get Started</p></div>
            </footer>
            <section className="u-backlink u-clearfix u-grey-80">
                <a className="u-link" href="Contact/Contact.html" target="_blank">
                    <span>Contact </span>
                </a>
                <p className="u-text">
                    <span>with</span>
                </p>
                <a className="u-link" href="Contact/Contact.html" target="_blank">
                    <span>us</span>
                </a>.
            </section>
            </body>


        </div>
    );
}
export default About;
