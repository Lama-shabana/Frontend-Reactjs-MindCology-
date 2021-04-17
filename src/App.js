import './App.css';
import React from 'react';
import {ToastProvider} from 'react-toast-notifications'
import Content from "./Components/Content/Content";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import PatientContent from "./Components/Content/PatientContent";
import LoggedInPatientTopbar from "./Components/LoggedInTopBar/LoggedInPatientTopbar";
import classes from "./App.css"
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import LoggedInTherapistTopbar from "./Components/LoggedInTopBar/LoggedInTherapistTopbar";
import TherapistContent from "./Components/Content/TherapistContent";

function App(props) {
    let divStyleObject = {
        marginLeft: "10px",
    };

    if (props.menuVisible)
        divStyleObject.marginLeft = "350px";


    let userType = JSON.parse(localStorage.getItem("auth"))?.userType;


    const generalContent=["/","/login",'/arabicHomepage','/about','/arabicabout','/contact','/arabiccontact','/arabicregistration','/registration','/login','/arabiclogin']
    return (
        <React.Fragment>
            {console.log(localStorage.getItem("auth"),"before")}
            <ToastProvider>
                {props.history.location.pathname==="/login"&&localStorage.getItem("auth")?<Redirect to="/"/>:null}
                {{
                    "patient":
                        <div>
                            {!generalContent.find(x=>x===props.history.location.pathname)?
                                <div>
                                    <LoggedInPatientTopbar/>
                                    <div style={divStyleObject} className={classes.Content}>
                                        <PatientContent/>
                                    </div>
                                </div>:
                                <div>
                                    <div style={divStyleObject} className={classes.Content}>
                                        <PatientContent/>
                                    </div>
                                </div>
                            }

                        </div>,
                    "therapist":
                        <div>
                            {!generalContent.find(x=>x===props.history.location.pathname)?
                                <div>
                                    <LoggedInTherapistTopbar/>
                                    <div style={divStyleObject} className={classes.Content}>
                                        <TherapistContent/>
                                    </div>
                                </div>:
                                <div>
                                    <div style={divStyleObject} className={classes.Content}>
                                        <TherapistContent/>
                                    </div>
                                </div>
                            }


                        </div>,
                    undefined: <Content/>
                }[userType]}

            </ToastProvider>

        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.login.isLoggedIn,
        menuVisible: state.ui.menuVisible
    };
};
export default connect(mapStateToProps)(App);
