import "../../Containers/Homepage/Homepage.css";
import "../../Containers/Homepage/Contact/Contact.css";
import MindCology from "../../assets/MindCology.png";
import classes from "./TopBar.module.css";
import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";


const ArabicLoggedOutTopBar=() => {
    let user = "";
    let history = useHistory();

    const [location,setLocation]=useState(null)
    useEffect(()=>{
        console.log(history.location,"loc")
        if(history.location?.pathname){
            setLocation(history.location.pathname.toLowerCase())
        }
    },[history.location.pathname])
    return (
        <div>
            {!localStorage.getItem("auth")?
                <div className="p-grid">
                    <div className="p-col-2">
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
                        <a href="/arabiccontact" className={classes.links}>للتواصل معنا</a>

                    </div>



                    {window.location.pathname !== "/arabiclogin" ?
                        <div className="p-col-1">
                            <a href="/arabiclogin" className={classes.links}>تسجيل الدخول  </a>
                        </div>
                        : null}

                    {window.location.pathname !== "/arabicregistration" ?
                        <div className="p-col-1">
                            <a href="/arabicregistration" className={classes.links}>إبدأ الآن </a>
                        </div>
                        : <div className="p-col-1"/>}




                    {window.location.pathname === "/arabicregistration" ?
                        <div className="p-col-2"/>

                        : <div className="p-col-2"/>}


                    <div className="p-col-2">
                        {location=="/arabichomepage"?
                            <div className="dropdown" style={{marginTop: "2em"}}>
                                {console.log("1")}
                                <button className="dropbtn">العربي</button>

                                <div className="dropdown-content">
                                    <a href="/">الانجليزية</a>
                                    <a href="/ArabicHomepage"> العربي </a>
                                </div>
                            </div>
                            :null}

                        {location==="/arabicregistration"?
                            <div className="dropdown" style={{marginTop: "2em"}}>
                                {console.log("2")}

                                <button className="dropbtn">العربي</button>
                                <div className="dropdown-content">
                                    <a href="/registration">الانجليزية</a>
                                    <a href="/arabicregistration"> العربي </a>
                                </div>
                            </div>
                            :null}
                        {/*<div className="dropdown" style={{marginTop: "2em"}}>*/}
                        {/*    <button className="dropbtn">العربية</button>*/}
                        {/*    <div className="dropdown-content">*/}
                        {/*        <a href="/">English</a>*/}
                        {/*        <a href="/ArabicHomepage"> Arabic </a>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                    <div className="p-col-1"/>
                </div>

                :
                <div className="p-grid">
                    <div className="p-col-2">
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
                        <a href="/arabiccontact" className={classes.links}>للتواصل معنا</a>

                    </div>

                    <div className="p-col-1">
                        <a href="/arabicPatientDashboard" className={classes.links}>صفحتي</a>
                    </div>


                    <div className="p-col-1" onClick={()=>localStorage.clear()}>

                        <a href="/arabicHomepage" className={classes.links}>تسجيل خروج</a>
                    </div>

                    <div className="p-col-2"/>

                    <div className="p-col-2">
                        <div className="dropdown" style={{marginTop: "2em"}}>
                            <button className="dropbtn">العربية</button>
                            <div className="dropdown-content">
                                <a href="/">English</a>
                                <a href="/ArabicHomepage"> Arabic </a>
                            </div>
                        </div>
                    </div>
                    <div className="p-col-1"/>
                </div>

            }





            {/*<body className="u-body">*/}

        </div>

    );
}
export default ArabicLoggedOutTopBar;
