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
import VideoCalls from "../../Containers/VideoCalls/VideoCalls";
import ArabicPatientDashboard from "../../Containers/Patient/PatientDashboard/ArabicPatientDashboard";
import ArabicTakeAppointment from "../../Containers/Patient/TakeAppointment/ArabicTakeAppiontment";
import ArabicPatientProfile from "../../Containers/Patient/PatientDashboard/ArabicPatientProfile";
import ArabicViewTherapistProfile from "../../Containers/Patient/ViewTherapistProfile/ArabicViewTherapistProfile";
import BothMedicalHistoryForms from "../../Containers/Patient/MedicalHistoryForm/BothMedicalHistoryForms";
import BothpatientDashboards from "../../Containers/Patient/PatientDashboard/BothpatientDashboards";
import BothTakeAppointments from "../../Containers/Patient/TakeAppointment/BothTakeAppointments";
import BothViewTherapistProfiles from "../../Containers/Patient/ViewTherapistProfile/BothViewTherapistProfiles";
import BothPatientProfiles from "../../Containers/Patient/PatientDashboard/BothPatientProfiles";
import {AuthProvider} from "../../Containers/Chatting/contexts/AuthContext";
import Chats from "../../Containers/Chatting/components/Chats";
import ChatLogin from "../../Containers/Chatting/components/ChatLogin";
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

                <Route path="/patientDashboard" exact component={BothpatientDashboards}/>
                <Route path="/patientDashboard/takeAppointment" exact component={BothTakeAppointments}/>

                <Route path="/medicalHistoryForm" exact component={BothMedicalHistoryForms}/>
                {/*<Route path="/arabicMedicalHistoryForm" exact component={ArabicMedicalHistoryForm}/>*/}

                <Route path="/patientDashboard/patientProfileInfo" exact component={BothPatientProfiles}/>
                <Route path="/patientDashboard/viewTherapistProfile/:id" exact component={BothViewTherapistProfiles}/>
                <Route path="/arabicPatientDashboard" exact component={ArabicPatientDashboard}/>
                <Route path="/arabicPatientDashboard/arabicTakeAppointment" exact component={ArabicTakeAppointment}/>
                <Route path="/arabicPatientDashboard/arabicPatientProfileInfo" exact component={ArabicPatientProfile}/>
                <Route path="/arabicPatientDashboard/arabicViewTherapistProfile/:id" exact component={ArabicViewTherapistProfile}/>
                {/*<Route path="/video" exact component={VideoCalls}/>*/}
                <Route path="/video/:room/:password/:fullName" exact component={VideoCalls}/>

                <AuthProvider>
                    <Route path="/chats" component={Chats} />
                    <Route path="/chatLogin" component={ChatLogin} />
                </AuthProvider>
            </Switch>
        </div>
    );
}
export default PatientContent;