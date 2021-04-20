import React from 'react';

import { Route, Switch } from "react-router-dom";
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
import PatientDashboard from "../../Containers/Patient/PatientDashboard/PatientDashboard";
import PatientAccountProfile from "../../Containers/Patient/PatientDashboard/PatientAccountProfile";
import TakeAppointment from "../../Containers/Patient/PatientDashboard/TakeAppointment";
import EditProfile from "../../Containers/Patient/PatientDashboard/EditProfile";
import DeleteAccount from "../../Containers/Patient/PatientDashboard/DeleteAccount";

import MedicalHistoryForm from "../../Containers/Patient/MedicalHistoryForm/MedicalHistoryForm"
import ArabicMedicalHistoryForm from "../../Containers/Patient/MedicalHistoryForm/ArabicMedicalHistoryForm";
const PatientContent = (props) => {
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
                <Route path="/patientDashboard" exact component={PatientDashboard}/>
                <Route path="/patientDashboard/patientInfo" exact component={PatientAccountProfile}/>
                <Route path="/patientDashboard/takeAppointment" exact component={TakeAppointment}/>
                <Route path="/patientDashboard/patientInfo/editProfile" exact component={EditProfile}/>
                <Route path="/patientDashboard/patientInfo/deleteAccount" exact component={DeleteAccount}/>
                <Route path="/medicalHistoryForm" exact component={MedicalHistoryForm}/>
                <Route path="/arabicMedicalHistoryForm" exact component={ArabicMedicalHistoryForm}/>

            </Switch>
        </div>
    );
}
export default PatientContent;