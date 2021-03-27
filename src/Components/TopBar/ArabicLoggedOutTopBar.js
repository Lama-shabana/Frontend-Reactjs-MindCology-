import "../../Containers/Homepage/Homepage.css";
import "../../Containers/Homepage/Contact/Contact.css";
import MindCology from "../../assets/MindCology.png";
import classes from "./TopBar.module.css";
import React from "react";


const ArabicLoggedOutTopBar=() => {
    let user = "";
    return (
        <div>
            <div className="p-grid">
                <div className="p-col-3">
                    <a href="/">
                        <img src={MindCology} className={classes.image}
                             alt="logo"/>
                    </a>
                </div>
                <div className="p-col-1">
                    <a href="/arabicHomepage" className={classes.links}>الصفحة الرئيسية</a>
                </div>
                <div className="p-col-1">
                    <a href="/arabicabout" className={classes.links}>معلومات عنا</a>

                </div>
                <div className="p-col-1">
                    <a href="/arabicregistration" className={classes.links}>تسجيل الدخول </a>
                </div>
                <div className="p-col-1">
                    <a href="/arabiclogin" className={classes.links}>تسجيل الدخول </a>
                </div>
                <div className="p-col-2"/>

                <div className="p-col-2">
                    <div className="dropdown" style={{marginTop: "2em"}}>
                        <button className="dropbtn">English</button>
                        <div className="dropdown-content">
                            <a href="/">English</a>
                            <a href="/ArabicHomepage"> Arabic </a>
                        </div>
                    </div>
                </div>
                <div className="p-col-1"/>
            </div>





            {/*<body className="u-body">*/}

        </div>

    );
}
export default ArabicLoggedOutTopBar;
