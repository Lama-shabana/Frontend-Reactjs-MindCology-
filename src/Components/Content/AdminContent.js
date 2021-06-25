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
import BothAddtherapists from "../../Containers/Admin/AdminDashboard/CreateAccountFortherapist/BothAddtherapists";
import BothAdminDashboards from "../../Containers/Admin/AdminDashboard/BothAdminDashboards";
import BothViewPatients from "../../Containers/Admin/AdminDashboard/BothViewPatients";
import BothViewTherapists from "../../Containers/Admin/AdminDashboard/BothViewTherapists";
import {AuthProvider} from "../../Containers/Chatting/contexts/AuthContext";
import Chats from "../../Containers/Chatting/components/Chats";
import ChatLogin from "../../Containers/Chatting/components/ChatLogin";
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
                <Route path="/adminDashboard" exact component={BothAdminDashboards}/>
                {/*<Route path="/arabicAdminDashboard" exact component={ArabicAdminDashboard}/>*/}
                {/*<Route path="/arabicAdminDashboard/arabicViewAllPatients" exact component={ArabicViewPatients}/>*/}
                {/*<Route path="/arabicAdminDashboard/arabicViewAllTherapists" exact component={ArabicViewTherapists}/>*/}
                {/*<Route path ="/arabicAdminDashboard/arabicAddTherapist" exit component={ArabicAddTherapist}/>*/}
                <Route path="/adminDashboard/viewAllPatients" exact component={BothViewPatients}/>
                <Route path="/adminDashboard/viewAllTherapists" exact component={BothViewTherapists}/>
                <Route path ="/adminDashboard/addTherapist" exit component={BothAddtherapists}/>



            </Switch>
        </div>
    );
}
export default AdminContent;