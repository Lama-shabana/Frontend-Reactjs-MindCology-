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

function App(props) {
    let divStyleObject = {
        marginLeft: "10px",
        marginTop: '5em'
    };

    if (props.menuVisible)
        divStyleObject.marginLeft = "350px";


    let userType = JSON.parse(localStorage.getItem("auth"))?.userType;

    const content = () => {
        switch (userType) {
            case "patient":
                return <div>
                    <LoggedInPatientTopbar/>
                    <div style={divStyleObject} className={classes.Content}>
                        <PatientContent/>
                    </div>
                </div>
                break;
            case "admin":
                // code block
                break;

            case "therapist":
                // code block
                break;
            default:
                return <Content/>
        }
    }
    return (
        <React.Fragment>
            <ToastProvider>
                {{
                    "patient":
                        <div>
                            <LoggedInPatientTopbar/>
                            <div style={divStyleObject} className={classes.Content}>
                                <PatientContent/>
                            </div>
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
