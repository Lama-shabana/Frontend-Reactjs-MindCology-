import "../../Containers/Homepage/Homepage.css";
import MindCology from "../../assets/MindCology.png";
import classes from "./TopBar.module.css"
import React from "react";
// import Sticky from "react-sticky-el";


let user=JSON.parse(localStorage.getItem("auth"));

const LoggedOutTopBar = (props) => {
    let user = "";
    return (
        // <Sticky className={classes.stickyBackground}>
        <div className="p-grid">
            {/*{console.log(props.history.location?.pathname,"path")}*/}

            <div className="p-col-2">
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
                <a href="/contact" className={classes.links}>Contact Us</a>

            </div>

                {window.location.pathname !== "/registration" &&!user ?
                    <div className="p-col-1">
                        <a href="/registration" className={classes.links}>Sign Up </a>
                    </div>
                    : null}


                {window.location.pathname !== "/login" &&!user?
                    <div className="p-col-1">
                        <a href="/login" className={classes.links}>Login </a>
                    </div>
                    : <div className="p-col-1"/>}

                {window.location.pathname === "/registration" &&!user?
                    <div className="p-col-3"/>

                    : <div className="p-col-2"/>}




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
        // </Sticky>


    );
}
export default LoggedOutTopBar;
