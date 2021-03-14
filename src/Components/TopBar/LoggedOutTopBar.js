import "../../Containers/Homepage/Homepage.css";
import "../../Containers/Homepage/Contact/Contact.css";
import MindCology from "../../images/MindCology.png";

const LoggedOutTopBar = (props) => {
    let user = "";
    return (
        <div>
            {/*<body className="u-body">*/}
            <header className="u-clearfix u-header u-white u-header" id="sec-c387">
                <nav>
                            <ul>
                              <li className="u-logo-image-1">
                                  <a href="/" className="u-image u-logo u-image-1">
                                    <img src={MindCology}
                                         className="u-logo-image u-logo-image-1" alt="logo"/>
                              </a></li>
                                <li><a href="/">Home</a></li>
                                <li><a href="">About</a></li>
                                <li><a href="">Contact</a></li>



                        <div className="dropdown">
                            <button className="dropbtn">English</button>
                            <div className="dropdown-content">
                                <a href="/">English</a>
                                <a href="/ArabicHomepage"> Arabic </a>
                            </div>
                            </div>
                            </ul>
                    </nav>


            </header>
        </div>

    );
}
export default LoggedOutTopBar;
