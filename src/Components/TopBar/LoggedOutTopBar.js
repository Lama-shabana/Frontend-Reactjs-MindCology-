import "../../Containers/Homepage/Homepage.css";
// import "../../Containers/Homepage/Contact/Contact.css";
import MindCology from "../../assets/MindCology.png";
import classes from "./TopBar.module.css"
import React from "react";


const LoggedOutTopBar =() => {
    let user = "";
    return (
        <div className="p-grid">
            <div className="p-col-3">
                <a href="/">
                    <img src={MindCology} className={classes.image}
                         alt="logo"/>
                </a>
            </div>
            <div className="p-col-1">
                <a href="/" className={classes.links}>Home</a>
            </div>
            <div className="p-col-1">
                <a href="/about" className={classes.links}>About</a>

            </div>
            <div className="p-col-1">
                <a href="/registration" className={classes.links}>Registration </a>
            </div>
            <div className="p-col-1">
                <a href="/login" className={classes.links}>Login </a>
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





    );
}
export default LoggedOutTopBar;
