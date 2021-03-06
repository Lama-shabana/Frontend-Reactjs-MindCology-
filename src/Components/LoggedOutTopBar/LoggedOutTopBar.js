import "../../Containers/Homepage/Homepage.css";
import MindCology from "../../assets/MindCology.png";
import classes from "./TopBar.module.css"
import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";



const LoggedOutTopBar = (props) => {
    let history = useHistory();
    let user = "";

    const [location,setLocation]=useState(null)
    useEffect(()=>{
        if(history.location.pathname){
            setLocation(history.location.pathname.toLowerCase())
        }
    },[history.location.pathname])
    return (
        // <Sticky className={classes.stickyBackground}>
        <div>
            {console.log(history.location.pathname,"historyy")}

            {!localStorage.getItem("auth")?
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

                    {window.location.pathname !== "/registration"?
                        <div className="p-col-1">
                            <a href="/registration" className={classes.links}>Sign Up </a>
                        </div>
                        : null}


                    {window.location.pathname !== "/login"?
                        <div className="p-col-1">
                            <a href="/login" className={classes.links}>Login </a>
                        </div>
                        : <div className="p-col-1"/>}

                    {window.location.pathname === "/registration"?
                        <div className="p-col-3"/>

                        : <div className="p-col-2"/>}




                    <div className="p-col-2">
                        {location==="/"?
                            <div className="dropdown" style={{marginTop: "2em"}}>
                                {console.log("1")}
                                <button className="dropbtn">English</button>

                                <div className="dropdown-content">
                                    <a href="/">English</a>
                                    <a href="/ArabicHomepage"> Arabic </a>
                                </div>
                            </div>
                            :null}

                        {location==="/registration"?
                            <div className="dropdown" style={{marginTop: "2em"}}>
                                {console.log("2")}

                                <button className="dropbtn">English</button>
                                <div className="dropdown-content">
                                    <a href="/registration">English</a>
                                    <a href="/arabicregistration"> Arabic </a>
                                </div>
                            </div>
                            :null}

                    </div>

                    <div className="p-col-1"/>
                </div>
                :

                <div className="p-grid">
                    {console.log(user.length,"here")}

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


                    <div className="p-col-1">
                        <a href="/patientDashboard" className={classes.links}>Dashboard</a>
                    </div>


                    <div className="p-col-1" onClick={()=>localStorage.clear()}>

                        <a href="/" className={classes.links}>Sign Out</a>
                    </div>
                    <div className="p-col-2"/>



                    <div className="p-col-1"/>
                </div>


            }
        </div>

        // </Sticky>


    );
}
export default LoggedOutTopBar;
