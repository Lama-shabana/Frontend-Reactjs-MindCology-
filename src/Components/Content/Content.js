import React from 'react';

import {Route, Switch} from "react-router-dom";
import EnglishHomepage from "../../Containers/Homepage/EnglishHomepage";
import Registration from "../../Containers/Registration/Registration";
import ArabicRegistration from "../../Containers/Registration/ArabicRegistration";
import ArabicHomepage from "../../Containers/Homepage/ArabicHomepage";
import ArabicAbout from "../../Containers/Homepage/About/ArabicAbout";
import About from "../../Containers/Homepage/About/About";
import Contact from "../../Containers/Homepage/Contact/Contact";
import ArabicContact from "../../Containers/Homepage/Contact/ArabicContact";
import Login from "../../Containers/Login/Login";
import ArabicLogin from "../../Containers/Login/ArabicLogin";
import VideoCalls from "../../Containers/VideoCalls/VideoCalls";
import TakeAppointment from "../../Containers/Patient/TakeAppointment/TakeAppointment";
import MedicalHistoryForm from "../../Containers/Patient/MedicalHistoryForm/MedicalHistoryForm";
import ArabicMedicalHistoryForm from "../../Containers/Patient/MedicalHistoryForm/ArabicMedicalHistoryForm";
// import ChatBox from "../../Containers/Chat";
const Content = (props) => {
    return (
        <div>

            <Switch>

                <Route path="/" exact component={EnglishHomepage}/>
                <Route path="/arabicHomepage" exact component={ArabicHomepage}/>
                <Route path="/about" exact component={About}/>
                <Route path="/arabicabout" exact component={ArabicAbout}/>
                <Route path="/contact" exact component={Contact}/>
                <Route path="/arabiccontact" exact component={ArabicContact}/>
                <Route path="/arabicregistration" exact component={ArabicRegistration}/>
                <Route path="/registration" exact component={Registration}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/arabiclogin" exact component={ArabicLogin}/>
                {/*<Route path="/chat" exact component={ChatBox}/>*/}

                {/*<Route path="/medicalHistoryForm" exact component={MedicalHistoryForm}/>*/}
                {/*<Route path="/arabicMedicalHistoryForm" exact component={ArabicMedicalHistoryForm}/>*/}



            </Switch>
        </div>
    );
}
export default Content;