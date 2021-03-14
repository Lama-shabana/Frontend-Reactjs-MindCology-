import "../../Containers/Homepage/Homepage.css";
import MindCology from "../../images/MindCology.png"
const LoggedOutTopBar = (props) => {
    let user = "";
    return (
        <div>
            {/*<body className="u-body">*/}
            <header
                className="u-clearfix u-header u-white u-header" id="sec-c387">
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

        </div>
    );
}
export default LoggedOutTopBar;
