import {InputText} from "primereact/inputtext";
import "./Homepage.module.css";
import MindCology from "../../images/MindCology.png";
import img2 from "../../images/3485230f.jpg";
import img3 from "../../images/AdobeStock_331776137-960x640.jpeg";
const Homepage = (props) => {
    let user = "";
    return (
        <div>
            <body className="u-body">
            <header className="u-clearfix u-header u-white u-header" id="sec-c387">
                <div className="u-clearfix u-sheet u-sheet-1">
                    <a href="Homepage.html" className="u-image u-logo u-image-1">
                        <img src={MindCology}
                            className="u-logo-image u-logo-image-1"
                             data-image-width="282.6667" alt="logo"/>
                    </a>
                    <nav className="u-menu u-menu-dropdown u-offcanvas u-menu-1">
                        <div className="menu-collapse" style={{fontSize: "1rem", letterSpacing: "0px"}}>
                            <a className="u-button-style u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                               href="#">

                            </a>
                        </div>
                        <div className="u-custom-menu u-nav-container">
                            <ul className="u-nav u-unstyled u-nav-1">
                                <li className="u-nav-item"><a
                                    className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                                    href="Homepage.html" style={{padding: "10px 20px"}}>Home</a>
                                </li>
                                <li className="u-nav-item"><a
                                    className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                                    href="About/About.html" style={{padding: "10px 20px"}}>About</a>
                                </li>
                                <li className="u-nav-item"><a
                                    className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                                    href="Contact/Contact.html" style={{padding: "10px 20px"}}>Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <button className="dropbtn">English</button>
                            <div className="dropdown-content">
                                <a href="Homepage.html">English</a>
                                <a href="Homepage-Arabic.html"> Arabic </a>
                            </div>

                        </div>
                    </nav>
                </div>
            </header>
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
            <section className="u-clearfix u-white u-section-3" id="carousel_d12b">
                <div
                    className="u-clearfix u-sheet u-valign-bottom-md u-valign-bottom-sm u-valign-bottom-xs u-valign-middle-lg u-valign-middle-xl u-sheet-1">
                    <div className="u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-1">
                        <div className="u-layout">
                            <div className="u-layout-row">
                                <div
                                    className="u-container-style u-expand-resize u-layout-cell u-left-cell u-size-36 u-layout-cell-1">
                                    <div className="u-container-layout">
                                        <img className="u-image u-image-1" src={img2}/>
                                    </div>
                                </div>
                                <div
                                    className="u-align-left u-container-style u-layout-cell u-right-cell u-size-24 u-layout-cell-2">
                                    <div className="u-container-layout u-container-layout-2">
                                        <h1 className="u-text u-text-body-color u-text-1">Mental Health</h1>
                                        <h3 className="u-custom-font u-font-pt-sans u-text u-text-grey-50 u-text-2">During
                                            COVID-19</h3>
                                        <p className="u-large-text u-text u-text-variant u-text-3">The COVID-19 pandemic
                                            and the resulting economic recession have negatively affected many people’s
                                            mental health As the pandemic wears on, ongoing and necessary public health
                                            measures expose many people to experiencing situations linked to poor mental
                                            health outcomes, such as isolation and job loss.
                                            Throughout the pandemic, anxiety, depression, sleep disruptions, and
                                            thoughts of suicide have increased for many young adults. They have also
                                            experienced a number of pandemic-related consequences – such as closures of
                                            universities, transitioning to remote work, and loss of income or employment
                                            – that may contribute to poor mental health. </p>
                                        <a href="#"
                                           className="u-btn u-btn-rectangle u-button-style u-palette-1-base u-btn-1"
                                           title="learn more" target="_blank">learn more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="u-align-center u-clearfix u-section-5" id="carousel_6782">
                <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
                        <div className="u-layout">
                            <div className="u-layout-row">
                                <div className="u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-1">
                                    <div className="u-container-layout u-container-layout-1">
                                        <img className="u-expand-resize u-image u-image-1"
                                             src={img3}/>
                                    </div>
                                </div>
                                <div
                                    className="u-align-left u-container-style u-layout-cell u-right-cell u-size-30 u-layout-cell-2">
                                    <div className="u-container-layout u-valign-middle u-container-layout-2">
                                        <h2 className="u-text u-text-1"><b>Best </b> Online Counseling
                                        </h2>
                                        <p className="u-text u-text-2">During
                                            Sessions using video calls, audio and chatting with professional therapist.
                                        </p>
                                        <a href="About/About.html"
                                           className="u-border-2 u-border-grey-dark-1 u-btn u-btn-rectangle u-button-style u-none u-btn-1">learn
                                            more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="u-clearfix u-section-7" id="carousel_4f0e">
                <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
                    <div className="u-layout">
                        <div className="u-layout-col">
                            <div className="u-size-30">
                                <div className="u-layout-row">
                                    <div
                                        className="u-container-style u-image u-layout-cell u-left-cell u-size-20 u-image-1"
                                        data-image-width="626" data-image-height="417">
                                        {/*<div className="u-container-layout u-container-layout-1"></div>*/}
                                    </div>
                                    <div className="u-container-style u-image u-layout-cell u-size-20 u-image-2"
                                         data-image-width="626" data-image-height="416">
                                        {/*<div className="u-container-layout u-container-layout-2"></div>*/}
                                    </div>
                                    <div
                                        className="u-container-style u-image u-layout-cell u-right-cell u-size-20 u-image-3"
                                        data-image-width="626" data-image-height="417">
                                        {/*<div className="u-container-layout u-container-layout-3"></div>*/}
                                    </div>
                                </div>
                            </div>
                            <div className="u-size-30">
                                <div className="u-layout-row">
                                    <div
                                        className="u-container-style u-image u-layout-cell u-left-cell u-size-20 u-image-4">
                                        {/*<div className="u-container-layout u-container-layout-4"></div>*/}
                                    </div>
                                    <div className="u-container-style u-image u-layout-cell u-size-20 u-image-5">
                                        {/*<div className="u-container-layout u-container-layout-5"></div>*/}
                                    </div>
                                    <div
                                        className="u-container-style u-image u-layout-cell u-right-cell u-size-20 u-image-6">
                                        {/*<div className="u-container-layout u-container-layout-6"></div>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="u-clearfix u-section-8" id="carousel_c21a">
                <div className="u-clearfix u-sheet u-sheet-1">
                    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
                        <div className="u-layout">
                            <div className="u-layout-row">
                                <div className="u-container-style u-layout-cell u-left-cell u-size-20 u-layout-cell-1">
                                    <div className="u-container-layout u-container-layout-1">
                                        <h2 className="u-custom-font u-font-georgia u-text u-text-1">Why our website is
                                            special?</h2>
                                    </div>
                                </div>
                                <div className="u-container-style u-layout-cell u-size-20 u-layout-cell-2">
                                    <div className="u-container-layout u-valign-top u-container-layout-2">
                                        <p className="u-text u-text-2">We will create a mood analysis form which will be
                                            filled by the user. Based on the answered questions in the form our
                                            website/app will analyze the answers and suggest podcasts, music, movies,
                                            and books based on the user’s mood and situation.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="u-clearfix u-custom-color-1 u-section-9" id="carousel_c0f4">
                <div className="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-xl u-sheet-1">
                    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
                        <div className="u-layout">
                            <div className="u-layout-row">
                                <div className="u-size-26">
                                    <div className="u-layout-col">
                                        <div
                                            className="u-align-center-sm u-align-center-xs u-container-style u-layout-cell u-left-cell u-size-60 u-layout-cell-1">
                                            <div
                                                className="u-container-layout u-valign-bottom-md u-valign-bottom-sm u-valign-bottom-xs u-container-layout-1">
                                                <h3>Contact Information</h3>
                                                <p className="u-text u-text-1">info@mindcology.com<br/>mindCology@gmail.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="u-size-34">
                                    <div className="u-layout-col">
                                        <div
                                            className="u-align-center-sm u-align-center-xs u-container-style u-layout-cell u-right-cell u-size-30 u-layout-cell-2">
                                            <div className="u-container-layout u-valign-middle u-container-layout-2">
                                                <h1 className="u-text u-text-2">contact us</h1>

                                            </div>
                                        </div>
                                        <div
                                            className="u-align-center-sm u-align-center-xs u-container-style u-layout-cell u-right-cell u-size-30 u-layout-cell-3">
                                            <div className="u-container-layout u-valign-top u-container-layout-3">
                                                <h6 className="u-text u-text-3">1 (234) 567-891&nbsp;<br/>1 (234)
                                                    987-654
                                                </h6>
                                            </div>
                                        </div>
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
export default Homepage;
