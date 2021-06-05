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
import AdminDashboard from "../../Containers/Admin/AdminDashboard/AdminDashboard";
import ViewPatients from "../../Containers/Admin/AdminDashboard/ViewPatients";
import ViewTherapists from "../../Containers/Admin/AdminDashboard/ViewTherapists";
import AddTherapist from "../../Containers/Admin/AdminDashboard/CreateAccountFortherapist/AddTherapist";
import ArabicAdminDashboard from "../../Containers/Admin/AdminDashboard/ArabicAdminDashboard";
import ArabicViewPatients from "../../Containers/Admin/AdminDashboard/ArabicViewPatients";
import ArabicViewTherapists from "../../Containers/Admin/AdminDashboard/ArabicViewTherapists";
import ArabicAddTherapist from "../../Containers/Admin/AdminDashboard/CreateAccountFortherapist/ArabicAddTherapist";
const AdminContent = (props) => {
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
                <Route path="/adminDashboard" exact component={AdminDashboard}/>
                <Route path="/arabicAdminDashboard" exact component={ArabicAdminDashboard}/>
                <Route path="/arabicAdminDashboard/arabicViewAllPatients" exact component={ArabicViewPatients}/>
                <Route path="/arabicAdminDashboard/arabicViewAllTherapists" exact component={ArabicViewTherapists}/>
                <Route path ="/arabicAdminDashboard/arabicAddTherapist" exit component={ArabicAddTherapist}/>
                <Route path="/adminDashboard/viewAllPatients" exact component={ViewPatients}/>
                <Route path="/adminDashboard/viewAllTherapists" exact component={ViewTherapists}/>
                <Route path ="/adminDashboard/addTherapist" exit component={AddTherapist}/>



            </Switch>
        </div>
    );
}
export default AdminContent;