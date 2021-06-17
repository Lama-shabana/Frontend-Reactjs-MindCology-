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
import BothHistoryPatientRecords from "../../Containers/Therapist/HistoryPatient'sRecord/BothHistoryPatientRecords";
import BothViewAllPatients from "../../Containers/Therapist/ViewAllPatients/BothViewAllPatients";
import BothTherapistDashboards from "../../Containers/Therapist/TherapistDashboard/BothTherapistDashboards";
import ArabicViewAllPatients from "../../Containers/Therapist/ViewAllPatients/ArabicViewAllPatients";
import ArabicTherapistDashboard from "../../Containers/Therapist/TherapistDashboard/ArabicTherapistDashboard";
import ArabicTherapistProfile from "../../Containers/Therapist/TherapistDashboard/ArabicTherapistProfile";
import ArabicHistoryPatientsRecord from "../../Containers/Therapist/HistoryPatient'sRecord/ArabicHistoryPatientsRecord";
import VideoCalls from "../../Containers/VideoCalls/VideoCalls";
import TherapistProfile from "../../Containers/Therapist/TherapistDashboard/TherapistProfile";
import BothTherapistProfiles from "../../Containers/Therapist/TherapistDashboard/BothTherapistProfiles";
import HistoryPatientsRecord from "../../Containers/Therapist/HistoryPatient'sRecord/HistoryPatientsRecord";


const TherapistContent = (props) => {
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

                <Route path="/therapistDashboard" exact component={BothTherapistDashboards}/>
                 <Route path="/therapistDashboard/therapistProfileInfo" exact component={BothTherapistProfiles}/>
                <Route path="/therapistDashboard/viewAllPatients" exit component={BothViewAllPatients}/>
                <Route path="historyPatient/:id" exact component ={BothHistoryPatientRecords}/>
               <Route path="/arabicTherapistDashboard" exact component={ArabicTherapistDashboard}/>
                <Route path="/arabicTherapistDashboard/arabicTherapistProfileInfo" exact component={ArabicTherapistProfile}/>
                <Route path="/arabicTherapistDashboard/arabicViewAllPatients" exit component={ArabicViewAllPatients}/>
                <Route path="/arabicHistoryPatient/:id" exact component ={ArabicHistoryPatientsRecord}/>
                <Route path="/historyPatient/:id" exact component ={HistoryPatientsRecord}/>
                <Route path="/video/:room/:password" exact component={VideoCalls}/>

            </Switch>
        </div>
    );
}
export default TherapistContent;