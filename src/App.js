import './App.css';
import React from 'react';
import {ToastProvider} from 'react-toast-notifications'
import Content from "./Components/Content/Content";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import TherapistContent from "./Components/Content/TherapistContent";
import PatientContent from "./Components/Content/PatientContent";
import AdminContent from "./Components/Content/AdminContent";
import LoggedInPatientTopbar from "./Components/LoggedInTopBar/LoggedInPatientTopbar";
import classes from "./App.css"
import {connect} from "react-redux";

function App(props) {
    let divStyleObject = {
        marginLeft: "10px",
        marginTop:'5em'
    };

    if (props.menuVisible)
        divStyleObject.marginLeft = "350px";


    return (
      <React.Fragment>

          {console.log(divStyleObject,"style")}
          {/*<InterfaceUtility/>*/}
        <ToastProvider>
          {/*<Layout {...props}>*/}

            {/*{localStorage.getItem("auth")?.userType==="admin"?<AdminContent/>:<Content/>}*/}
            {/*{localStorage.getItem("auth")?.userType==="admin"?<PatientContent/>:<Content/>}*/}
            {/*{localStorage.getItem("auth")?.userType==="admin"?<TherapistContent/>:<Content/>}*/}
            <AdminContent/>

            <LoggedInPatientTopbar/>
            <div style={divStyleObject} className={classes.Content}>
                <PatientContent/>
            </div>

            <TherapistContent/>
            <Content/>
          {/*</Layout>*/}
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
