import React, {useState} from 'react';
import {connect} from 'react-redux';
import PatientDashboard from "./PatientDashboard";
import ArabicPatientDashboard from "./ArabicPatientDashboard";


const BothpatientDashboards = (props) => {

    const lang = JSON.parse(localStorage.getItem("lang"))

    return (
        <div>

            {console.log(lang,"LANG")}
            {lang&&lang === "english" ?
                <PatientDashboard/> :
                null
            }

            {lang&&lang === "arabic" ?
                <ArabicPatientDashboard/> :
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

export default connect(mapStateToProps, mapDispatchToProps)(BothpatientDashboards);
