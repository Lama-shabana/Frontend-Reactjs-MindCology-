import React, {useState} from 'react';
import {connect} from 'react-redux';
import AdminDashboard from "./AdminDashboard";
import ArabicAdminDashboard from "./ArabicAdminDashboard";



const BothAdminDashboards = (props) => {

    const lang = JSON.parse(localStorage.getItem("lang"))

    return (
        <div>

            {console.log(lang,"LANG")}
            {lang&&lang === "english" ?
                <AdminDashboard/> :
                null
            }

            {lang&&lang === "arabic" ?
                <ArabicAdminDashboard/> :
                null
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BothAdminDashboards);
