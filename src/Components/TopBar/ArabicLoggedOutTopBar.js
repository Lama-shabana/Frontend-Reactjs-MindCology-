import "../../Containers/Homepage/Homepage.css";
import "../../Containers/Homepage/Contact/Contact.css";
import MindCology from "../../images/MindCology.png";

const ArabicLoggedOutTopBar = (props) => {
    let user = "";
    return (
        <div>
            {/*<body className="u-body">*/}
            <header className="u-clearfix u-header u-white u-header" id="sec-c387">
                <nav>
                    <ul>
                        <li className="u-logo-image-1">
                            <a href="/arabicHomepage" className="u-image u-logo u-image-1">
                                <img src={MindCology}
                                     className="u-logo-image u-logo-image-1" alt="logo"/>
                            </a></li>
                        <li><a href="/arabicHomepage">الصفحة الرئيسية</a></li>
                        <li><a href="">معلومات عنا</a></li>
                        <li><a href="">للتواصل معنا</a></li>



                        <div className="dropdown">
                            <button className="dropbtn">العربية</button>
                            <div className="dropdown-content">
                                <a href="/">English</a>
                                <a href="/arabicHomepage"> Arabic-العربية </a>
                            </div>
                        </div>
                    </ul>
                </nav>


            </header>
        </div>

    );
}
export default ArabicLoggedOutTopBar;
